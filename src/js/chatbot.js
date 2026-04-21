/* ============================================================
   OSCAR CHATBOT — chatbot.js
   Chatbot para oscardenamiel.com
   Knowledge-based — sin dependencias externas
============================================================ */

import { KNOWLEDGE_BASE, FALLBACK } from '../data/chatbot-kb.js';
import '../chatbot.css';

/* ── Text normalization ── */
function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ');
}

/* ── Levenshtein distance ── */
function levenshtein(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i-1] === a[j-1]
        ? matrix[i-1][j-1]
        : Math.min(matrix[i-1][j-1] + 1, matrix[i][j-1] + 1, matrix[i-1][j] + 1);
    }
  }
  return matrix[b.length][a.length];
}

/* ── Fuzzy word match — tolerates typos ── */
function fuzzyWordMatch(inputWords, triggerWords) {
  let matched = 0;
  for (const tw of triggerWords) {
    if (tw.length <= 3) {
      if (inputWords.includes(tw)) matched++;
    } else {
      const maxDist = tw.length <= 5 ? 1 : 2;
      const found = inputWords.some(iw => levenshtein(iw, tw) <= maxDist);
      if (found) matched++;
    }
  }
  return matched;
}

/* ── Language detection — once per session ── */
function detectLanguageOnce(text) {
  // 1. ¿Ya eligió antes?
  const saved = localStorage.getItem('chatbot-lang');
  if (saved) return saved;

  // 2. Primera vez — combinar señales
  const textLang = detectLanguageFromText(text);
  const pageLang = detectLanguageByPage();

  // Si user escribió en ES/CA, respeta eso. Si no, página o default EN
  const lang = (textLang && textLang !== 'en') ? textLang : (pageLang || 'en');

  localStorage.setItem('chatbot-lang', lang);
  return lang;
}

function detectLanguageFromText(text) {
  const t = normalizeText(text);
  const words = t.split(' ');

  const caUnique = [
    'vaig', 'tinc', 'vull', 'pots', 'estic', 'puc', 'soc', 'esta', 'estas', 'estamos', 'veus', 'veia', 'veies', 'veiem',
    'quin', 'quina', 'quins', 'quines', 'com', 'que',
    'projectes', 'feina', 'treballes', 'disseny', 'bon', 'bona', 'doncs', 'perque', 'aixo', 'nomes', 'molta', 'estava', 'podeu', 'teniu', 'voleu',
    'pero', 'tambe', 'molt', 'gracies', 'si', 'no', 'aqui', 'alla', 'dema', 'avui', 'ahir', 'sempre', 'mai', 'alguna', 'quelcom', 'tot', 'tots', 'tothom', 'ningu',
    'dissenyador', 'experiencia', 'portfolio', 'projecte', 'proces', 'habilitats', 'disponible', 'contacte', 'linkedin', 'cv'
  ];

  const esUnique = [
    'tengo', 'estoy', 'estas', 'estamos', 'tenemos', 'quiero', 'puedo', 'puedes', 'podemos', 'soy', 'eres', 'somos', 'veo', 'vemos', 'veia', 'veias',
    'cual', 'cuales', 'como', 'que', 'donde', 'cuando', 'cuanto',
    'tambien', 'gracias', 'estas', 'cuentame', 'diseno', 'habilidades', 'disponible', 'buenos', 'buenas', 'entonces', 'porque', 'muy', 'seria', 'podria', 'tienes', 'trabajas', 'haces',
    'pero', 'sino', 'desde', 'hasta', 'despues', 'antes', 'ahora', 'luego', 'siempre', 'nunca', 'algo', 'nada', 'alguien', 'nadie', 'todo', 'todos', 'cada', 'otro',
    'disenador', 'experiencia', 'portafolio', 'proyecto', 'proceso', 'habilidades', 'disponible', 'contacto', 'linkedin', 'cv'
  ];

  let caScore = 0;
  let esScore = 0;

  for (const w of words) {
    if (caUnique.some(m => levenshtein(w, m) <= 1)) caScore += 2;
    if (esUnique.some(m => levenshtein(w, m) <= 1)) esScore += 2;
  }

  if (/\b(projectes|treballes|disseny|gracies|tambe|nomes|estic|tinc|pero|tambe|gracies|dissenyador)\b/.test(t)) caScore += 3;
  if (/\b(tambien|gracias|diseno|podria|seria|disenador|experiencia)\b/.test(t)) esScore += 3;

  if (caScore > esScore && caScore >= 2) return 'ca';
  if (esScore > caScore && esScore >= 2) return 'es';

  return null;
}

function detectLanguageByPage() {
  // Por ahora: EN por defecto
  // Futuro: cuando se traduzca la web
  // const path = window.location.pathname;
  // if (path.includes('/es/')) return 'es';
  // if (path.includes('/ca/')) return 'ca';
  return null;
}

/* ── Intent matching — fuzzy + word overlap + levenshtein ── */
function findResponse(input, context = []) {
  const normalizedInput = normalizeText(input);
  const inputWords = normalizedInput.split(' ').filter(w => w.length > 0);

  let bestMatch = null;
  let bestScore = 0;

  const recentTopics = new Set(
    context
      .filter(c => c.role === 'assistant' && c.id)
      .map(c => c.id)
  );

  for (const entry of KNOWLEDGE_BASE) {
    let entryScore = 0;

    for (const trigger of entry.triggers) {
      const normalizedTrigger = normalizeText(trigger);
      const triggerWords = normalizedTrigger.split(' ').filter(w => w.length > 0);

      let score = 0;

      if (normalizedInput.includes(normalizedTrigger)) {
        score = trigger.length * 2;
      } else {
        const matched = fuzzyWordMatch(inputWords, triggerWords);
        if (matched > 0) {
          const overlap = matched / triggerWords.length;
          if (overlap >= 0.6) {
            score = overlap * trigger.length;
          }
        }
      }

      if (score > entryScore) entryScore = score;
    }

    if (entryScore > 0 && recentTopics.has(entry.id)) entryScore *= 0.8;
    if (entryScore > bestScore) {
      bestScore = entryScore;
      bestMatch = entry;
    }
  }

  return bestMatch;
}

/* ── Case study URLs — auto-linked wherever mentioned ── */
const CASE_STUDY_LINKS = {
  'oscardenamiel.com/map':                  { url: 'https://oscardenamiel.com/map',                  name: 'Map Redesign' },
  'oscardenamiel.com/mobile-first':         { url: 'https://oscardenamiel.com/mobile-first',         name: 'Mobile First' },
  'oscardenamiel.com/self-service-booking': { url: 'https://oscardenamiel.com/self-service-booking', name: 'Self-Service Bookings' },
  'oscardenamiel.com/smart-suggester':      { url: 'https://oscardenamiel.com/smart-suggester',      name: 'Smart Suggester' },
};

const CASE_STUDY_PATTERNS = [
  { pattern: /oscardenamiel\.com\/map/g,                  key: 'oscardenamiel.com/map' },
  { pattern: /oscardenamiel\.com\/mobile-first/g,         key: 'oscardenamiel.com/mobile-first' },
  { pattern: /oscardenamiel\.com\/self-service-booking/g, key: 'oscardenamiel.com/self-service-booking' },
  { pattern: /oscardenamiel\.com\/smart-suggester/g,      key: 'oscardenamiel.com/smart-suggester' },
];

const CHATBOT_SUGGESTIONS = [
  { label: "What projects have you worked on?", id: 'projects-overview' },
  { label: "Give me the recruiter summary",     id: 'recruiter-summary' },
  { label: "What's your design process?",       id: 'design-process' },
  { label: "How is this portfolio built?",      id: 'portfolio-stack' },
  { label: "Tell me something personal",        id: 'about' },
  { label: "Where do you see yourself in 3 years?", id: 'three-years' },
];

/* ── Inject case study links into response text ── */
function injectCaseStudyLinks(text) {
  let result = text;
  for (const { pattern, key } of CASE_STUDY_PATTERNS) {
    const { url, name } = CASE_STUDY_LINKS[key];
    result = result.replace(pattern, () =>
      `<a href="${url}" class="text-link chatbot-project-link" target="_blank">View project: ${name} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-left:2px"><path d="M7 17L17 7M7 7h10v10"/></svg></a>`
    );
  }
  return result;
}

/* ── Visitor profile — persists across sessions ── */
function getVisitorProfile() {
  try {
    const saved = localStorage.getItem('chatbot-visitor');
    return saved ? JSON.parse(saved) : null;
  } catch(e) { return null; }
}

function updateVisitorProfile(updates) {
  try {
    const current = getVisitorProfile() || {
      lang: 'en',
      visitCount: 0,
      lastVisit: null,
      seenProjects: [],
      isRecruiter: false,
      lastIntent: null
    };
    const updated = { ...current, ...updates };
    localStorage.setItem('chatbot-visitor', JSON.stringify(updated));
    return updated;
  } catch(e) { return null; }
}

/* ── Check if entry was already discussed this session ── */
function wasAlreadyDiscussed(entryId, context) {
  return context.some(c => c.role === 'assistant' && c.id === entryId);
}

/* ── Detect user intent from unmatched input ── */
function detectFallbackIntent(text) {
  const t = normalizeText(text);
  const recruiterSignals = ['hire', 'hiring', 'recruit', 'job', 'role', 'position', 'cv', 'resume', 'salary', 'available', 'opportunity', 'contrat', 'trabajo', 'puesto', 'feina', 'contractar'];
  const techSignals = ['built', 'code', 'stack', 'vite', 'javascript', 'css', 'github', 'deploy', 'framework', 'component', 'construido', 'codigo', 'construït', 'codi'];
  const words = t.split(' ');

  let recruiterScore = words.filter(w => recruiterSignals.some(s => levenshtein(w, s) <= 1)).length;
  let techScore = words.filter(w => techSignals.some(s => levenshtein(w, s) <= 1)).length;

  if (recruiterScore > techScore && recruiterScore > 0) return 'recruiter';
  if (techScore > recruiterScore && techScore > 0) return 'tech';
  return 'curious';
}

/* ── Detect frustration signals ── */
function detectFrustration(text, context) {
  const t = normalizeText(text);
  const frustrationWords = ['no entiendo', 'not working', 'no funciona', 'what', 'que', 'help', 'ayuda', 'ajuda', 'confused', 'confuso'];
  const hasQmarks = (text.match(/\?/g) || []).length >= 2;
  const hasFrustrationWord = frustrationWords.some(w => t.includes(w));

  const recentAssistant = context.filter(c => c.role === 'assistant').slice(-2);
  const consecutiveFallbacks = recentAssistant.filter(c => c.id === null).length;

  return hasQmarks || hasFrustrationWord || consecutiveFallbacks >= 2;
}

function typeText(element, html, speed = 10, animate = true) {
  return new Promise(resolve => {
    if (!animate) {
      element.innerHTML = html;
      resolve();
      return;
    }

    // Renderizar todo de golpe
    element.innerHTML = html;

    // Animar cada párrafo/bloque con fade-in secuencial
    const blocks = element.querySelectorAll('p, br, strong');
    if (blocks.length === 0) {
      // Texto simple — fade in del bubble entero
      element.style.opacity = '0';
      element.style.transition = 'opacity 0.3s ease';
      requestAnimationFrame(() => {
        element.style.opacity = '1';
        setTimeout(resolve, 300);
      });
      return;
    }

    // Múltiples bloques — fade secuencial
    const allP = element.querySelectorAll('p');
    allP.forEach(p => {
      p.style.opacity = '0';
      p.style.transition = 'opacity 0.25s ease';
    });

    let i = 0;
    const revealNext = () => {
      if (i >= allP.length) { resolve(); return; }
      allP[i].style.opacity = '1';
      i++;
      setTimeout(revealNext, 120);
    };
    setTimeout(revealNext, 50);
  });
}

class OscarChatbot {
  constructor() {
    this.isOpen = false;
    this.isLoading = false;
    this.hasShownSuggestions = false;
    this.welcomeShown = false;
    this.conversationContext = [];
    this.init();
  }

  scrollToUserMessage(msgEl) {
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }

  init() {
    this.buildDOM();
    this.attachEvents();
    this.injectTrigger();
    this.startPlaceholderRotation();
  }

  buildDOM() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'chatbot-overlay';
    this.overlay.addEventListener('click', () => this.close());

    this.panel = document.createElement('div');
    this.panel.className = 'chatbot-panel';
    this.panel.setAttribute('role', 'dialog');
    this.panel.setAttribute('aria-label', 'Chat with Oscar');
    this.panel.innerHTML = `
      <div class="chatbot-header">
        <div class="chatbot-header-info">
          <div class="chatbot-avatar">
            <img src="/images/about-1.webp" alt="Oscar Denamiel" onerror="this.parentElement.textContent='OD'">
          </div>
          <div class="chatbot-header-text">
            <h3>Oscar Denamiel</h3>
            <p>Senior Product Designer · AI-powered</p>
          </div>
        </div>
        <button class="chatbot-close" aria-label="Close chat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages"></div>
      <div class="chatbot-input-area">
        <div class="chatbot-input-row">
          <textarea
            class="chatbot-input"
            id="chatbot-input"
            placeholder="Ask me anything..."
            rows="1"
            aria-label="Type your message"
          ></textarea>
          <button class="chatbot-send" id="chatbot-send" aria-label="Send message" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    document.body.appendChild(this.panel);

    this.messagesEl = this.panel.querySelector('#chatbot-messages');
    this.inputEl = this.panel.querySelector('#chatbot-input');
    this.sendBtn = this.panel.querySelector('#chatbot-send');
    this.closeBtn = this.panel.querySelector('.chatbot-close');
  }

  attachEvents() {
    this.closeBtn.addEventListener('click', () => this.close());

    this.inputEl.addEventListener('input', () => {
      this.sendBtn.disabled = !this.inputEl.value.trim() || this.isLoading;
      this.inputEl.style.height = 'auto';
      this.inputEl.style.height = Math.min(this.inputEl.scrollHeight, 120) + 'px';
    });

    this.inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.send();
      }
    });

    this.sendBtn.addEventListener('click', () => this.send());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });
  }

  injectTrigger() {
    this.triggerBtns = document.querySelectorAll('[aria-label="Open chatbot"]');
    this.triggerBtns.forEach(btn => {
      const wrapper = document.createElement('div');
      wrapper.className = 'tooltip-container chatbot-tooltip-wrapper';
      btn.parentNode.insertBefore(wrapper, btn);
      wrapper.appendChild(btn);

      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip tooltip-text chatbot-tooltip';
      tooltip.textContent = 'Chat with Oscar';
      wrapper.appendChild(tooltip);

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.backgroundPosition = `${x}% ${y}%`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.backgroundPosition = '';
      });

      btn.addEventListener('click', () => {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      });
    });
  }

  setTriggerActive(active) {
    if (!this.triggerBtns) return;
    this.triggerBtns.forEach(btn => {
      btn.classList.toggle('chatbot-trigger--active', active);
    });
  }

  open() {
    this.isOpen = true;
    this.panel.classList.add('open');
  
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
  
    if (!this.welcomeShown) {
      this.welcomeShown = true;
      this.showWelcome();
    }
  
    // Esperar a que termine la transición de apertura (450ms) 
    // y luego posicionar sin animación
    setTimeout(() => {
      this.messagesEl.style.scrollBehavior = 'auto';
      this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
      this.messagesEl.style.scrollBehavior = '';
    }, 460);
  
    this.setTriggerActive(true);
    if (window.innerWidth > 1024) {
      setTimeout(() => this.inputEl.focus(), 300);
    }
  }

  close() {
    // Detectar abandono post-fallback
    const lastContext = this.conversationContext[this.conversationContext.length - 1];
    const lastWasFallback = lastContext?.role === 'assistant' && lastContext?.id === null;

    if (lastWasFallback && typeof gtag !== 'undefined') {
      gtag('event', 'chatbot_abandoned', {
        last_search_term: this.conversationContext
          .filter(c => c.role === 'user')
          .slice(-1)[0]?.content?.slice(0, 80) || 'unknown',
        language: localStorage.getItem('chatbot-lang') || 'en'
      });
    }

    this.isOpen = false;
    this.overlay.classList.remove('open');
    this.panel.classList.remove('open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    this.setTriggerActive(false);
  }

  showWelcome() {
    const storedLang = localStorage.getItem('chatbot-lang') || 'en';
  
    const PAGE_CONTEXT = {
      '/map':                  { id: 'project-map',             en: `I see you're checking out the Map Redesign 👀\n\nHappy to go deeper on any part of it — the research process, the results, or the decisions behind it. What are you curious about?`, es: `Veo que estás viendo el Map Redesign 👀\n\nPuedo contarte más sobre el proceso de research, los resultados o las decisiones detrás del proyecto. ¿Qué te interesa?`, ca: `Veig que estàs veient el Map Redesign 👀\n\nPuc explicar-te més sobre el procés de research, els resultats o les decisions darrere del projecte. Què t'interessa?` },
      '/mobile-first':         { id: 'project-mobile-first',    en: `You're looking at Mobile First 👀\n\nThis one's close to my heart — it completely changed how I think about mobile design. Ask me anything about it.`, es: `Estás viendo el Mobile First 👀\n\nEste proyecto cambió mucho cómo pienso sobre el diseño mobile. Pregúntame lo que quieras.`, ca: `Estàs veient el Mobile First 👀\n\nAquest projecte va canviar molt com penso sobre el disseny mòbil. Pregunta'm el que vulguis.` },
      '/self-service-booking': { id: 'project-self-service',    en: `You're on the Self-Service Bookings case study 👀\n\nThis one started from a very real operational problem. Want me to walk you through the thinking behind it?`, es: `Estás en el case study de Self-Service Bookings 👀\n\nEste empezó de un problema operacional muy real. ¿Quieres que te cuente el razonamiento detrás?`, ca: `Estàs al case study de Self-Service Bookings 👀\n\nAquest va començar d'un problema operacional molt real. Vols que t'expliqui el raonament?` },
      '/smart-suggester':      { id: 'project-smart-suggester', en: `You're exploring the Smart Suggester 👀\n\nThis one's more technical than it looks. Happy to explain the UX decisions and the back-end collaboration behind it.`, es: `Estás explorando el Smart Suggester 👀\n\nEste es más técnico de lo que parece. Puedo explicarte las decisiones de UX y la colaboración con back-end.`, ca: `Estàs explorant el Smart Suggester 👀\n\nAquest és més tècnic del que sembla. Puc explicar-te les decisions de UX i la col·laboració amb back-end.` },
      '/about':                { id: 'about',                   en: `You're on the About page 👋\n\nAsk me anything — about my background, what I'm working on, or what I'm looking for next.`, es: `Estás en la página About 👋\n\nPregúntame lo que quieras — sobre mi background, en qué estoy trabajando o qué busco.`, ca: `Estàs a la pàgina About 👋\n\nPregunta'm el que vulguis — sobre el meu background, en què estic treballant o què busco.` },
    };
  
    // Chips contextuales por página
    const PAGE_SUGGESTIONS = {
      'project-map': {
          es: [
            { label: '⚡ Resumen del proyecto', id: 'project-map-summary' },
            { label: '¿Cuáles fueron los resultados?', id: 'project-map-impact' },
            { label: '¿Cómo fue el proceso de research?', id: 'project-map-research' },
            { label: 'Ver todos los proyectos', id: 'projects-overview' }
          ],
          ca: [
            { label: '⚡ Resum del projecte', id: 'project-map-summary' },
            { label: 'Quins van ser els resultats?', id: 'project-map-impact' },
            { label: 'Com va ser el procés de research?', id: 'project-map-research' },
            { label: 'Veure tots els projectes', id: 'projects-overview' }
          ],
          en: [
            { label: '⚡ Quick project summary', id: 'project-map-summary' },
            { label: 'What were the results?', id: 'project-map-impact' },
            { label: 'Walk me through the research', id: 'project-map-research' },
            { label: 'What design decisions did you make?', id: 'project-map-decisions' }
          ]
        },
      'project-mobile-first': {
          es: [
            { label: '⚡ Resumen del proyecto', id: 'project-mobile-first-summary' },
            { label: '¿Cuáles fueron los resultados?', id: 'project-mobile-first-impact' },
            { label: '¿Cómo fue el proceso de research?', id: 'project-mobile-first-research' },
            { label: '¿Cómo validaste el diseño?', id: 'project-mobile-first-validation' }
          ],
          ca: [
            { label: '⚡ Resum del projecte', id: 'project-mobile-first-summary' },
            { label: 'Quins van ser els resultats?', id: 'project-mobile-first-impact' },
            { label: 'Com va ser el procés de research?', id: 'project-mobile-first-research' },
            { label: 'Com vas validar el disseny?', id: 'project-mobile-first-validation' }
          ],
          en: [
            { label: '⚡ Quick project summary', id: 'project-mobile-first-summary' },
            { label: 'What were the results?', id: 'project-mobile-first-impact' },
            { label: 'Walk me through the research', id: 'project-mobile-first-research' },
            { label: 'How did you validate the design?', id: 'project-mobile-first-validation' }
          ]
        },
        'project-self-service': {
          es: [
            { label: '⚡ Resumen del proyecto', id: 'project-self-service-summary' },
            { label: '¿Cuáles fueron los resultados?', id: 'project-self-service-impact' },
            { label: '¿Cómo fue el proceso?', id: 'project-self-service-process' },
            { label: 'Ver todos los proyectos', id: 'projects-overview' }
          ],
          ca: [
            { label: '⚡ Resum del projecte', id: 'project-self-service-summary' },
            { label: 'Quins van ser els resultats?', id: 'project-self-service-impact' },
            { label: 'Com va ser el procés?', id: 'project-self-service-process' },
            { label: 'Veure tots els projectes', id: 'projects-overview' }
          ],
          en: [
            { label: '⚡ Quick project summary', id: 'project-self-service-summary' },
            { label: 'What were the results?', id: 'project-self-service-impact' },
            { label: 'Walk me through the process', id: 'project-self-service-process' },
            { label: 'See all projects', id: 'projects-overview' }
          ]
        },
        'project-smart-suggester': {
          es: [
            { label: '⚡ Resumen del proyecto', id: 'project-smart-suggester-summary' },
            { label: '¿Cuáles fueron los resultados?', id: 'project-smart-suggester-impact' },
            { label: '¿Cómo fue el proceso de research?', id: 'project-smart-suggester-research' },
            { label: '¿Cómo trabajaste con ingeniería?', id: 'project-smart-suggester-engineering' }
          ],
          ca: [
            { label: '⚡ Resum del projecte', id: 'project-smart-suggester-summary' },
            { label: 'Quins van ser els resultats?', id: 'project-smart-suggester-impact' },
            { label: 'Com va ser el procés de research?', id: 'project-smart-suggester-research' },
            { label: 'Com vas treballar amb enginyeria?', id: 'project-smart-suggester-engineering' }
          ],
          en: [
            { label: '⚡ Quick project summary', id: 'project-smart-suggester-summary' },
            { label: 'What were the results?', id: 'project-smart-suggester-impact' },
            { label: 'Walk me through the research', id: 'project-smart-suggester-research' },
            { label: 'How did you work with engineering?', id: 'project-smart-suggester-engineering' }
          ]
        },
      'about': {
        es: [
          { label: '¿Estás buscando trabajo?', id: 'availability' },
          { label: '¿Tienes side projects?', id: 'side-projects' },
          { label: 'Ver proyectos', id: 'projects-overview' }
        ],
        ca: [
          { label: 'Estàs buscant feina?', id: 'availability' },
          { label: 'Tens side projects?', id: 'side-projects' },
          { label: 'Veure projectes', id: 'projects-overview' }
        ],
        en: [
          { label: 'Are you open to new roles?', id: 'availability' },
          { label: 'Do you have side projects?', id: 'side-projects' },
          { label: 'See projects', id: 'projects-overview' }
        ]
      }
    };
  
    const path = window.location.pathname;
    const pageCtx = Object.entries(PAGE_CONTEXT).find(([key]) => path.includes(key));
  
    const saved = sessionStorage.getItem('chatbot-history');
    if (saved) {
      try {
        const history = JSON.parse(saved);
        if (history.length > 0) {
          history.forEach(({ role, content, raw }) => {
            this.appendMessage(role, content, raw || false, null, false); // ← false
          });
          this.conversationContext = history.map(h => ({
            role: h.role,
            content: h.content,
            id: null
          })).slice(-6);
          this.hasShownSuggestions = true;
  
          // Solo añadir mensaje contextual si estamos en una página de proyecto/about
          // NO guardarlo en sessionStorage hasta que el usuario interactúe
          if (pageCtx) {
            const [, ctx] = pageCtx;
            const contextMsg = ctx[storedLang] || ctx.en;
            setTimeout(() => {
              this.appendMessage('assistant', contextMsg, false, null, false);
              const chips = PAGE_SUGGESTIONS[ctx.id]?.[storedLang] || PAGE_SUGGESTIONS[ctx.id]?.en;
              if (chips) this.showQuickReplies(chips);
              this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
            }, 400);
          }
          // Si es homepage, mostrar suggestions genéricas
          if (!pageCtx) {
            this.hasShownSuggestions = false;
            setTimeout(() => this.showSuggestions(), 400);
          }
          return;
        }
      } catch(e) { sessionStorage.removeItem('chatbot-history'); }
    }
  
    // ── Sin historial — primera apertura ──
    const profile = getVisitorProfile();
    const isReturn = profile && profile.visitCount > 0;
    const today = new Date().toISOString().split('T')[0];
    updateVisitorProfile({
      lang: storedLang,
      visitCount: (profile?.visitCount || 0) + 1,
      lastVisit: today
    });
  
    let welcomeText;
    let contextSuggestions = null;
  
    if (pageCtx) {
      const [, ctx] = pageCtx;
      welcomeText = ctx[storedLang] || ctx.en;
      contextSuggestions = PAGE_SUGGESTIONS[ctx.id]?.[storedLang] || PAGE_SUGGESTIONS[ctx.id]?.en;
    } else {
      const welcomeMessages = {
        es: `Hola! Soy Oscar, Senior Product Designer en Barcelona. Puedo responderte en español, catalán o inglés — el que prefieras.\n\nPregúntame sobre mis proyectos, experiencia, proceso de diseño o lo que necesites. Este chat está en mejora constante y aprenderá para darte mejores respuestas con el tiempo.`,
        ca: `Hola! Soc l'Oscar, Senior Product Designer a Barcelona. Puc respondre't en català, castellà o anglès — el que prefereixis.\n\nPregunta'm sobre els meus projectes, experiència, procés de disseny o el que necessitis. Aquest xat està en millora constant i aprendrà per donar-te millors respostes amb el temps.`,
        en: `Hey! 👋 I'm Oscar — Senior Product Designer based in Barcelona. I can reply in English, Spanish or Catalan — just write in whichever you prefer.\n\nAsk me about my projects, experience, design process or anything else. This chat is constantly improving and will keep getting better over time.`
      };
  
      if (isReturn && profile.lastIntent === 'recruiter-summary') {
        welcomeText = {
          es: `Bienvenido de nuevo 👋\n\nLa última vez estabas explorando el perfil de recruiter. ¿Sigues evaluando la oportunidad o tienes alguna pregunta concreta?`,
          ca: `Benvingut de nou 👋\n\nL'última vegada estaves explorant el perfil de recruiter. Continues avaluant l'oportunitat o tens alguna pregunta concreta?`,
          en: `Welcome back 👋\n\nLast time you were checking out the recruiter summary. Still exploring the opportunity, or do you have a specific question?`
        }[storedLang];
      } else if (isReturn && profile.seenProjects?.length > 0) {
        const lastProject = profile.seenProjects[profile.seenProjects.length - 1];
        const projectNames = {
          'project-map': 'Map Redesign',
          'project-mobile-first': 'Mobile First',
          'project-self-service': 'Self-Service Bookings',
          'project-smart-suggester': 'Smart Suggester'
        };
        const name = projectNames[lastProject] || 'one of the projects';
        welcomeText = {
          es: `Bienvenido de nuevo 👋\n\nLa última vez estabas viendo el ${name}. ¿Quieres continuar por ahí o explorar algo diferente?`,
          ca: `Benvingut de nou 👋\n\nL'última vegada estaves veient el ${name}. Vols continuar per allà o explorar alguna cosa diferent?`,
          en: `Welcome back 👋\n\nLast time you were looking at the ${name}. Want to continue from there, or explore something different?`
        }[storedLang];
      } else {
        welcomeText = welcomeMessages[storedLang];
      }
    }
  
    this.appendMessage('assistant', welcomeText, false, null, false);
    this.saveHistory();
  
    if (contextSuggestions) {
      this.hasShownSuggestions = true;
      this.showQuickReplies(contextSuggestions);
    } else {
      this.showSuggestions();
    }
  }

  saveHistory() {
    const msgs = this.messagesEl.querySelectorAll('.chatbot-msg');
    const history = [];
    msgs.forEach(msg => {
      const role = msg.classList.contains('user') ? 'user' : 'assistant';
      const bubble = msg.querySelector('.chatbot-bubble');
      if (bubble) {
        const hasHTML = bubble.querySelector('a') !== null;
        history.push({
          role,
          content: hasHTML ? bubble.innerHTML : bubble.innerText,
          raw: hasHTML
        });
      }
    });
    sessionStorage.setItem('chatbot-history', JSON.stringify(history));
  }

  showSuggestions() {
    if (this.hasShownSuggestions) return;
    this.hasShownSuggestions = true;

    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-suggestions';
    wrapper.id = 'chatbot-suggestions';

    CHATBOT_SUGGESTIONS.forEach(({ label, id }) => {
      const chip = document.createElement('button');
      chip.className = 'chatbot-chip';
      chip.textContent = label;
      chip.addEventListener('click', () => {
        wrapper.remove();
        this.sendById(label, id);
      });
      wrapper.appendChild(chip);
    });

    this.messagesEl.appendChild(wrapper);
    this.scrollToBottom();
  }

  showQuickReplies(suggestions) {
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-suggestions';

    suggestions.forEach(item => {
      const label = typeof item === 'string' ? item : item.label;
      const id = typeof item === 'object' ? item.id : null;

      const chip = document.createElement('button');
      chip.className = 'chatbot-chip';
      chip.textContent = label;
      chip.addEventListener('click', () => {
        wrapper.remove();
        if (id) {
          this.sendById(label, id);
        } else {
          this.inputEl.value = label;
          this.send();
        }
      });
      wrapper.appendChild(chip);
    });

    this.messagesEl.appendChild(wrapper);
    this.scrollToBottom();
  }

  showCTAs(lang) {
    const ctas = {
      es: [
        { label: 'Escribir email', href: 'mailto:oscardenamiel@gmail.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/oscardenamiel' },
        { label: 'Descargar CV', href: 'https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF' },
      ],
      ca: [
        { label: 'Escriure email', href: 'mailto:oscardenamiel@gmail.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/oscardenamiel' },
        { label: 'Descarregar CV', href: 'https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF' },
      ],
      en: [
        { label: 'Send email', href: 'mailto:oscardenamiel@gmail.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/oscardenamiel' },
        { label: 'Download CV', href: 'https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF' },
      ]
    };

    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-suggestions chatbot-ctas';

    (ctas[lang] || ctas.en).forEach(({ label, href }) => {
      const btn = document.createElement('a');
      btn.className = 'chatbot-chip chatbot-cta-btn';
      btn.textContent = label;
      btn.href = href;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      wrapper.appendChild(btn);
    });

    this.messagesEl.appendChild(wrapper);
    this.scrollToBottom();
  }

  appendMessage(role, content, raw = false, intentId = null, animated = true) {
    const msg = document.createElement('div');
    msg.className = `chatbot-msg ${role}`;
  
    const bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble';
  
    msg.appendChild(bubble);
  
    if (role === 'assistant') {
      const feedback = document.createElement('div');
      feedback.className = 'chatbot-feedback';
  
      [
        { svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`, tooltip: 'Helpful', type: 'helpful' },
        { svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/><path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>`, tooltip: 'Not helpful', type: 'not_helpful' },
      ].forEach(({ svg, tooltip, type }) => {
        const btn = document.createElement('button');
        btn.className = 'chatbot-feedback-btn';
        btn.setAttribute('aria-label', tooltip);
        btn.setAttribute('data-tooltip', tooltip);
        btn.innerHTML = svg;
        btn.addEventListener('click', () => {
          if (navigator.vibrate) navigator.vibrate(10);
          const buttons = feedback.querySelectorAll('.chatbot-feedback-btn');
          buttons.forEach(b => b.classList.remove('chatbot-feedback-btn--active'));
          const isActive = btn.classList.contains('chatbot-feedback-btn--active');
          if (!isActive) {
            btn.classList.add('chatbot-feedback-btn--active');
            if (typeof gtag !== 'undefined') {
              gtag('event', 'chatbot_feedback', {
                feedback_type: type,
                response_preview: bubble.innerText.slice(0, 80),
                matched_intent: intentId || 'unknown'
              });
            }
          }
        });
        feedback.appendChild(btn);
      });
  
      const copyBtn = document.createElement('button');
      copyBtn.className = 'chatbot-feedback-btn';
      copyBtn.setAttribute('aria-label', 'Copy response');
      copyBtn.setAttribute('data-tooltip', 'Copy');
      copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(bubble.innerText).then(() => {
          copyBtn.setAttribute('data-tooltip', 'Copied!');
          copyBtn.classList.add('chatbot-feedback-btn--active');
          setTimeout(() => {
            copyBtn.setAttribute('data-tooltip', 'Copy');
            copyBtn.classList.remove('chatbot-feedback-btn--active');
          }, 2000);
        });
      });
      feedback.appendChild(copyBtn);
  
      const speakerBtn = document.createElement('button');
      speakerBtn.className = 'chatbot-feedback-btn';
      speakerBtn.setAttribute('aria-label', 'Listen to response');
      speakerBtn.setAttribute('data-tooltip', 'Listen');
      speakerBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9v6h4l6 5V4L6 9H2z"/><line x1="15" y1="9" x2="15" y2="15"/><line x1="18" y1="7" x2="18" y2="17"/><line x1="21" y1="5" x2="21" y2="19"/></svg>`;
      speakerBtn.addEventListener('click', () => {
        const lang = localStorage.getItem('chatbot-lang') || 'en';
        const langMap = { es: 'es-ES', ca: 'ca-ES', en: 'en-US' };
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
          speakerBtn.classList.remove('chatbot-feedback-btn--active');
          speakerBtn.setAttribute('data-tooltip', 'Listen');
          return;
        }
        const targetLang = langMap[lang] || 'en-US';
        const utterance = new SpeechSynthesisUtterance(bubble.innerText);
        utterance.lang = targetLang;
        utterance.rate = 0.95;
        utterance.pitch = 1;
        const voices = window.speechSynthesis.getVoices();
        const preferred = voices.find(v =>
          v.lang === targetLang && (
            v.name.includes('Neural') || v.name.includes('Natural') ||
            v.name.includes('Premium') || v.name.includes('Enhanced') ||
            v.name.includes('Samantha') || v.name.includes('Monica') || v.name.includes('Montse')
          )
        ) || voices.find(v => v.lang.startsWith(targetLang.split('-')[0]));
        if (preferred) utterance.voice = preferred;
        speakerBtn.classList.add('chatbot-feedback-btn--active');
        speakerBtn.setAttribute('data-tooltip', 'Stop');
        if (navigator.vibrate) navigator.vibrate(10);
        utterance.onend = () => { speakerBtn.classList.remove('chatbot-feedback-btn--active'); speakerBtn.setAttribute('data-tooltip', 'Listen'); };
        utterance.onerror = () => { speakerBtn.classList.remove('chatbot-feedback-btn--active'); speakerBtn.setAttribute('data-tooltip', 'Listen'); };
        window.speechSynthesis.speak(utterance);
      });
      feedback.appendChild(speakerBtn);
  
      msg.appendChild(feedback);
    }
  
    this.messagesEl.appendChild(msg);
  
    if (role === 'assistant') {
      const formattedContent = raw ? this.formatRaw(content) : this.formatText(content);
      bubble.innerHTML = '';
      return typeText(bubble, formattedContent, 10, animated);
    } else {
      bubble.innerHTML = raw ? this.formatRaw(content) : this.formatText(content);
      return Promise.resolve();
    }
  }

  formatRaw(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/(?<![*])\*(?![*])(.*?)(?<![*])\*(?![*])/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p style="margin:8px 0 0">')
      .replace(/\n/g, '<br>')
      .replace(/^(?!<)/, '<p style="margin:0">')
      .replace(/([^>])$/, '$1</p>');
  }

  formatText(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code style="font-size:12px;background:rgba(128,128,128,0.12);padding:2px 5px;border-radius:4px;font-family:monospace">$1</code>')
      .replace(/\n\n/g, '</p><p style="margin:8px 0 0">')
      .replace(/\n/g, '<br>')
      .replace(/^/, '<p style="margin:0">')
      .replace(/$/, '</p>');
  }

  showTyping() {
    const typing = document.createElement('div');
    typing.className = 'chatbot-typing';
    typing.id = 'chatbot-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    this.messagesEl.appendChild(typing);
    this.scrollToBottom();
    return typing;
  }

  scrollToBottom() {
    this.messagesEl.scrollTo({
      top: this.messagesEl.scrollHeight,
      behavior: 'smooth'
    });
  }

  sendById(label, entryId) {
    if (this.isLoading) return;
    this.isLoading = true;

    this.appendMessage('user', label);
    const userMsg = this.messagesEl.lastElementChild;
    setTimeout(() => this.scrollToUserMessage(userMsg), 150);
    this.conversationContext.push({ role: 'user', content: label });
    if (this.conversationContext.length > 6) this.conversationContext.shift();
    const typingEl = this.showTyping();

    setTimeout(() => {
      typingEl.remove();

      const lang = localStorage.getItem('chatbot-lang') || 'en';
      const match = KNOWLEDGE_BASE.find(e => e.id === entryId);

      const alreadyMsg = {
        es: `Ya te conté sobre esto antes 😊 ¿Quieres que profundice en algún aspecto concreto?`,
        ca: `Ja t'ho he explicat abans 😊 Vols que aprofundeixi en algun aspecte concret?`,
        en: `I already covered this one 😊 Want me to go deeper on any specific aspect?`
      };

      let response;
      if (match && wasAlreadyDiscussed(match.id, this.conversationContext)) {
        response = alreadyMsg[lang];
      } else {
        response = match ? match.response[lang] : FALLBACK[lang];
        response = injectCaseStudyLinks(response);
        const followup = match && match.followup && match.followup[lang];
        if (followup) response += `\n\n${followup}`;
      }

      this.appendMessage('assistant', response, true, match?.id || null).then(() => {
        const alreadyShown = wasAlreadyDiscussed(match?.id, this.conversationContext);
        if (!alreadyShown) {
          const suggestions = match && match.suggestions && match.suggestions[lang];
          if (suggestions && suggestions.length > 0) this.showQuickReplies(suggestions);
          const HIGH_INTENT = ['availability', 'contact', 'cv-download', 'recruiter-summary', 'salary', 'why-hire-me'];
          if (match && HIGH_INTENT.includes(match.id)) this.showCTAs(lang);
        }
      });

      this.conversationContext.push({ role: 'assistant', content: response, id: match?.id || null });
      if (this.conversationContext.length > 6) this.conversationContext.shift();

      if (match?.id) {
        const projectIds = ['project-map', 'project-mobile-first', 'project-self-service', 'project-smart-suggester'];
        const p = getVisitorProfile() || {};
        if (projectIds.includes(match.id)) {
          updateVisitorProfile({ seenProjects: [...new Set([...(p.seenProjects || []), match.id])], lastIntent: match.id });
        } else if (match.id === 'recruiter-summary') {
          updateVisitorProfile({ isRecruiter: true, lastIntent: 'recruiter-summary' });
        } else {
          updateVisitorProfile({ lastIntent: match.id });
        }
      }

      this.saveHistory();
      this.isLoading = false;
      this.sendBtn.disabled = !this.inputEl.value.trim();
    }, Math.max(900, Math.min(400 + Math.floor(label.length * 1.5), 1200)));
  }

  send() {
    const text = this.inputEl.value.trim();
    if (!text || this.isLoading) return;

    this.inputEl.value = '';
    this.inputEl.style.height = 'auto';
    this.sendBtn.disabled = true;
    this.isLoading = true;

    this.appendMessage('user', text);
    const userMsg = this.messagesEl.lastElementChild;
    setTimeout(() => this.scrollToUserMessage(userMsg), 150);

    this.conversationContext.push({ role: 'user', content: text });
    if (this.conversationContext.length > 6) this.conversationContext.shift();

    const typingEl = this.showTyping();

    setTimeout(() => {
      typingEl.remove();

      const lang = detectLanguageOnce(text);
      const match = findResponse(text, this.conversationContext);

      if (typeof gtag !== 'undefined') {
        gtag('event', 'chatbot_message', {
          search_term: text,
          matched_intent: match?.id || 'no_match',
          language: lang
        });
      }

      const alreadyMsg = {
        es: `Ya te conté sobre esto antes 😊 ¿Quieres que profundice en algún aspecto concreto?`,
        ca: `Ja t'ho vaig explicar abans 😊 Vols que aprofundeixi en algun aspecte concret?`,
        en: `I already covered this one 😊 Want me to go deeper on any specific aspect?`
      };

      let response;
      let smartSuggestions = null;

      if (!match) {
        // ── Frustration detection ──
        if (detectFrustration(text, this.conversationContext)) {
          response = {
            es: `Parece que no te estoy siendo muy útil 😅\n\nDéjame intentarlo de otra forma — cuéntame qué buscas exactamente:`,
            ca: `Sembla que no t'estic sent molt útil 😅\n\nDeixa'm intentar-ho d'una altra manera — explica'm què busques exactament:`,
            en: `Seems like I'm not being very helpful 😅\n\nLet me try a different approach — tell me what you're looking for:`
          }[lang];
          smartSuggestions = [
            { label: lang === 'es' ? 'Soy recruiter o hiring manager' : lang === 'ca' ? 'Soc recruiter o hiring manager' : "I'm a recruiter or hiring manager", id: 'recommendation-recruiter' },
            { label: lang === 'es' ? 'Busco colaborar o hacer networking' : lang === 'ca' ? 'Busco col·laborar o fer networking' : 'Looking to collaborate or network', id: 'recommendation-collaborate' },
            { label: lang === 'es' ? 'Solo tengo curiosidad' : lang === 'ca' ? 'Només tinc curiositat' : 'Just curious', id: 'recommendation-curious' }
          ];
        } else {
          // ── Smart fallback by intent ──
          const intent = detectFallbackIntent(text);
          if (intent === 'recruiter') {
            response = {
              es: `No tengo una respuesta preparada para eso exactamente, pero si estás evaluando mi perfil, esto te puede ayudar:`,
              ca: `No tinc una resposta preparada per a això exactament, però si estàs avaluant el meu perfil, això et pot ajudar:`,
              en: `I don't have a prepared answer for that exactly, but if you're evaluating my profile, this might help:`
            }[lang];
            smartSuggestions = [
              { label: lang === 'es' ? 'Ver resumen de recruiter' : lang === 'ca' ? 'Veure resum de recruiter' : 'See recruiter summary', id: 'recruiter-summary' },
              { label: lang === 'es' ? 'Ver proyectos con resultados' : lang === 'ca' ? 'Veure projectes amb resultats' : 'See projects with results', id: 'projects-overview' },
              { label: lang === 'es' ? 'Descargar CV' : lang === 'ca' ? 'Descarregar CV' : 'Download CV', id: 'cv-download' }
            ];
          } else if (intent === 'tech') {
            response = {
              es: `No tengo respuesta específica para eso, pero si te interesa el stack técnico del portfolio:`,
              ca: `No tinc resposta específica per a això, però si t'interessa l'stack tècnic del portfolio:`,
              en: `I don't have a specific answer for that, but if you're curious about the technical side:`
            }[lang];
            smartSuggestions = [
              { label: lang === 'es' ? 'Cómo está construido el portfolio' : lang === 'ca' ? 'Com està construït el portfolio' : 'How this portfolio is built', id: 'portfolio-stack' },
              { label: lang === 'es' ? 'Arquitectura de componentes' : lang === 'ca' ? 'Arquitectura de components' : 'Component architecture', id: 'component-architecture' },
              { label: lang === 'es' ? 'Cómo funciona el chatbot' : lang === 'ca' ? 'Com funciona el chatbot' : 'How the chatbot works', id: 'chatbot' }
            ];
          } else {
            response = FALLBACK[lang];
          }
        }
      } else if (wasAlreadyDiscussed(match.id, this.conversationContext)) {
        response = alreadyMsg[lang];
      } else {
        response = match.response[lang];
        response = injectCaseStudyLinks(response);
        const followup = match.followup && match.followup[lang];
        if (followup) response += `\n\n${followup}`;
      }

      this.appendMessage('assistant', response, true, match?.id || null).then(() => {
        if (smartSuggestions) {
          this.showQuickReplies(smartSuggestions);
        } else if (match && !wasAlreadyDiscussed(match.id, this.conversationContext.slice(0, -1))) {
          const suggestions = match.suggestions && match.suggestions[lang];
          if (suggestions && suggestions.length > 0) this.showQuickReplies(suggestions);
          const HIGH_INTENT = ['availability', 'contact', 'cv-download', 'recruiter-summary', 'salary', 'why-hire-me'];
          if (HIGH_INTENT.includes(match.id)) this.showCTAs(lang);
        }
      });

      this.conversationContext.push({ role: 'assistant', content: response, id: match?.id || null });
      if (this.conversationContext.length > 6) this.conversationContext.shift();

      if (match?.id) {
        const projectIds = ['project-map', 'project-mobile-first', 'project-self-service', 'project-smart-suggester'];
        const p = getVisitorProfile() || {};
        if (projectIds.includes(match.id)) {
          updateVisitorProfile({ seenProjects: [...new Set([...(p.seenProjects || []), match.id])], lastIntent: match.id });
        } else if (match.id === 'recruiter-summary') {
          updateVisitorProfile({ isRecruiter: true, lastIntent: 'recruiter-summary' });
        } else {
          updateVisitorProfile({ lastIntent: match.id });
        }
      }

      this.saveHistory();
      this.isLoading = false;
      this.sendBtn.disabled = !this.inputEl.value.trim();
    }, Math.max(900, Math.min(400 + Math.floor(text.length * 1.5), 1200)));
  }

  startPlaceholderRotation() {
    const placeholders = {
      es: [
        '¿En qué proyectos has trabajado?',
        '¿Cuál es tu proceso de diseño?',
        '¿Estás buscando trabajo?',
        '¿Cómo trabajas con ingeniería?',
        '¿Qué te diferencia de otros diseñadores?',
      ],
      ca: [
        'En quins projectes has treballat?',
        'Quin és el teu procés de disseny?',
        'Estàs buscant feina?',
        'Com treballes amb enginyeria?',
        "Què et diferencia d'altres dissenyadors?",
      ],
      en: [
        'What projects have you worked on?',
        "What's your design process?",
        'Are you open to new roles?',
        'How do you work with engineering?',
        'What sets you apart from other designers?',
      ]
    };

    let index = 0;
    setInterval(() => {
      const lang = localStorage.getItem('chatbot-lang') || 'en';
      const list = placeholders[lang] || placeholders.en;
      index = (index + 1) % list.length;
      if (this.inputEl && document.activeElement !== this.inputEl) {
        this.inputEl.style.transition = 'opacity 0.4s ease';
        this.inputEl.style.opacity = '0';
        setTimeout(() => {
          this.inputEl.placeholder = list[index];
          this.inputEl.style.opacity = '1';
        }, 400);
      }
    }, 6000);
  }
}

// ── Init ──
export function initChatbot() {
  if (window._oscarChatbot) return;
  window._oscarChatbot = new OscarChatbot();
}