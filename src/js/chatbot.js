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

/* ── Language detection ── */
function detectLanguage(text, context = []) {
  const t = normalizeText(text);
  const words = t.split(' ');

  const caUnique = ['pero', 'tambe', 'molt', 'gracies', 'vaig', 'tinc', 'vull', 'pots', 'estic', 'puc', 'soc', 'quin', 'quina', 'projectes', 'feina', 'treballes', 'disseny', 'bon', 'bona', 'doncs', 'perque', 'aixo', 'nomes', 'molta', 'estava', 'podeu', 'teniu', 'voleu'];
  const esUnique = ['tambien', 'gracias', 'estas', 'cuentame', 'cual', 'puedes', 'estoy', 'tengo', 'quien', 'diseno', 'habilidades', 'disponible', 'buenos', 'buenas', 'entonces', 'porque', 'muy', 'seria', 'podria', 'tienes', 'trabajas', 'haces'];

  let caScore = 0;
  let esScore = 0;

  for (const w of words) {
    if (caUnique.some(m => levenshtein(w, m) <= 1)) caScore += 2;
    if (esUnique.some(m => levenshtein(w, m) <= 1)) esScore += 2;
  }

  if (/\b(projectes|treballes|disseny|gracies|tambe|nomes|estic|tinc)\b/.test(t)) caScore += 3;
  if (/\b(tambien|gracias|diseno|puedes|estoy|tengo|haces)\b/.test(t)) esScore += 3;

  let detected = null;
  if (caScore > esScore && caScore >= 2) detected = 'ca';
  else if (esScore > caScore && esScore >= 2) detected = 'es';

  if (detected) {
    try { localStorage.setItem('chatbot-lang', detected); } catch(e) {}
    return detected;
  }

  for (let i = context.length - 1; i >= Math.max(0, context.length - 4); i--) {
    const c = normalizeText(context[i].content || '');
    const cWords = c.split(' ');
    let cCa = 0, cEs = 0;
    for (const w of cWords) {
      if (caUnique.some(m => levenshtein(w, m) <= 1)) cCa++;
      if (esUnique.some(m => levenshtein(w, m) <= 1)) cEs++;
    }
    if (cCa > cEs) return 'ca';
    if (cEs > cCa) return 'es';
  }

  try { return localStorage.getItem('chatbot-lang') || 'en'; } catch(e) { return 'en'; }
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

class OscarChatbot {
  constructor() {
    this.isOpen = false;
    this.isLoading = false;
    this.hasShownSuggestions = false;
    this.welcomeShown = false;
    this.conversationContext = [];
    this.init();
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
  
    this.setTriggerActive(true);
    setTimeout(() => this.inputEl.focus(), 300);
  }

  close() {
    this.isOpen = false;
    this.overlay.classList.remove('open');
    this.panel.classList.remove('open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    this.setTriggerActive(false);
  }

  showWelcome() {
    const saved = sessionStorage.getItem('chatbot-history');
    if (saved) {
      try {
        const history = JSON.parse(saved);
        if (history.length > 0) {
          history.forEach(({ role, content, raw }) => {
            this.appendMessage(role, content, raw || false);
          });
          this.conversationContext = history.map(h => ({
            role: h.role,
            content: h.content,
            id: null
          })).slice(-6);
          this.hasShownSuggestions = true;
          return;
        }
      } catch(e) { sessionStorage.removeItem('chatbot-history'); }
    }
  
    const storedLang = (() => { try { return localStorage.getItem('chatbot-lang') || 'en'; } catch(e) { return 'en'; } })();
  
    // ── Detectar página actual ──
    const PAGE_CONTEXT = {
      '/map':                  { id: 'project-map',           en: `I see you're checking out the Map Redesign 👀\n\nHappy to go deeper on any part of it — the research process, the results, or the decisions behind it. What are you curious about?`, es: `Veo que estás viendo el Map Redesign 👀\n\nPuedo contarte más sobre el proceso de research, los resultados o las decisiones detrás del proyecto. ¿Qué te interesa?`, ca: `Veig que estàs veient el Map Redesign 👀\n\nPuc explicar-te més sobre el procés de research, els resultats o les decisions darrere del projecte. Què t'interessa?` },
      '/mobile-first':         { id: 'project-mobile-first',  en: `You're looking at Mobile First 👀\n\nThis one's close to my heart — it completely changed how I think about mobile design. Ask me anything about it.`, es: `Estás viendo el Mobile First 👀\n\nEste proyecto cambió mucho cómo pienso sobre el diseño mobile. Pregúntame lo que quieras.`, ca: `Estàs veient el Mobile First 👀\n\nAquest projecte va canviar molt com penso sobre el disseny mòbil. Pregunta'm el que vulguis.` },
      '/self-service-booking': { id: 'project-self-service',  en: `You're on the Self-Service Bookings case study 👀\n\nThis one started from a very real operational problem. Want me to walk you through the thinking behind it?`, es: `Estás en el case study de Self-Service Bookings 👀\n\nEste empezó de un problema operacional muy real. ¿Quieres que te cuente el razonamiento detrás?`, ca: `Estàs al case study de Self-Service Bookings 👀\n\nAquest va començar d'un problema operacional molt real. Vols que t'expliqui el raonament?` },
      '/smart-suggester':      { id: 'project-smart-suggester', en: `You're exploring the Smart Suggester 👀\n\nThis one's more technical than it looks. Happy to explain the UX decisions and the back-end collaboration behind it.`, es: `Estás explorando el Smart Suggester 👀\n\nEste es más técnico de lo que parece. Puedo explicarte las decisiones de UX y la colaboración con back-end.`, ca: `Estàs explorant el Smart Suggester 👀\n\nAquest és més tècnic del que sembla. Puc explicar-te les decisions de UX i la col·laboració amb back-end.` },
      '/about':                { id: 'about',                 en: `You're on the About page 👋\n\nAsk me anything — about my background, what I'm working on, or what I'm looking for next.`, es: `Estás en la página About 👋\n\nPregúntame lo que quieras — sobre mi background, en qué estoy trabajando o qué busco.`, ca: `Estàs a la pàgina About 👋\n\nPregunta'm el que vulguis — sobre el meu background, en què estic treballant o què busco.` },
    };
  
    const path = window.location.pathname;
    const pageCtx = Object.entries(PAGE_CONTEXT).find(([key]) => path.includes(key));
  
    let welcomeText;
    let contextSuggestions = null;
  
    if (pageCtx) {
      const [, ctx] = pageCtx;
      welcomeText = ctx[storedLang] || ctx.en;
      // Sugerencias específicas de la página
      const pageEntry = KNOWLEDGE_BASE.find(e => e.id === ctx.id);
      if (pageEntry && pageEntry.suggestions) {
        contextSuggestions = pageEntry.suggestions[storedLang] || pageEntry.suggestions.en;
      }
    } else {
      // Homepage o página desconocida — mensaje genérico
      const welcomeMessages = {
        es: `Hola! Soy Oscar, Senior Product Designer en Barcelona. Puedo responderte en español, catalán o inglés — el que prefieras.\n\nPregúntame sobre mis proyectos, experiencia, proceso de diseño o lo que necesites. Este chat está en mejora constante y aprenderá para darte mejores respuestas con el tiempo.`,
        ca: `Hola! Soc l'Oscar, Senior Product Designer a Barcelona. Puc respondre't en català, castellà o anglès — el que prefereixis.\n\nPregunta'm sobre els meus projectes, experiència, procés de disseny o el que necessitis. Aquest xat està en millora constant i aprendrà per donar-te millors respostes amb el temps.`,
        en: `Hey! 👋 I'm Oscar — Senior Product Designer based in Barcelona. I can reply in English, Spanish or Catalan — just write in whichever you prefer.\n\nAsk me about my projects, experience, design process or anything else. This chat is constantly improving and will keep getting better over time.`
      };
      welcomeText = welcomeMessages[storedLang];
    }
  
    this.appendMessage('assistant', welcomeText);
    this.saveHistory();
  
    // Mostrar suggestions específicas de página o las genéricas
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
        // Disparar directamente por ID, sin pasar por matching
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

  appendMessage(role, content, raw = false) {
    const msg = document.createElement('div');
    msg.className = `chatbot-msg ${role}`;
  
    const bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble';
    bubble.innerHTML = raw ? this.formatRaw(content) : this.formatText(content);
  
    msg.appendChild(bubble);
  
      // Feedback buttons — solo en mensajes del asistente
  if (role === 'assistant') {
    const feedback = document.createElement('div');
    feedback.className = 'chatbot-feedback';

    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'chatbot-feedback-btn';
    copyBtn.setAttribute('aria-label', 'Copy response');
    copyBtn.setAttribute('data-tooltip', 'Copy');
    copyBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
    copyBtn.addEventListener('click', () => {
      const text = bubble.innerText;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.setAttribute('data-tooltip', 'Copied!');
        copyBtn.classList.add('chatbot-feedback-btn--active');
        setTimeout(() => {
          copyBtn.setAttribute('data-tooltip', 'Copy');
          copyBtn.classList.remove('chatbot-feedback-btn--active');
        }, 2000);
      });
    });
    feedback.appendChild(copyBtn);

    // Thumbs up / down
    [
      { emoji: '👍', svg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`, tooltip: 'Helpful', type: 'helpful' },
      { emoji: '👎', svg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/><path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>`, tooltip: 'Not helpful', type: 'not_helpful' },
    ].forEach(({ svg, tooltip, type }) => {
      const btn = document.createElement('button');
      btn.className = 'chatbot-feedback-btn';
      btn.setAttribute('aria-label', tooltip);
      btn.setAttribute('data-tooltip', tooltip);
      btn.innerHTML = svg;
      btn.addEventListener('click', () => {
        // 📳 HAPTIC FEEDBACK
        if (navigator.vibrate) {
        navigator.vibrate(10); // súper sutil (recomendado)
        }

        const buttons = feedback.querySelectorAll('.chatbot-feedback-btn');
      
        // Reset estado de todos
        buttons.forEach(b => {
          if (b !== copyBtn) {
            b.classList.remove('chatbot-feedback-btn--active');
          }
        });
      
        // Toggle del botón actual
        const isActive = btn.classList.contains('chatbot-feedback-btn--active');
      
        if (!isActive) {
          btn.classList.add('chatbot-feedback-btn--active');
      
          if (typeof gtag !== 'undefined') {
            gtag('event', 'chatbot_feedback', {
              feedback_type: type, // helpful / not_helpful
              response_preview: bubble.innerText.slice(0, 80),
              matched_intent: match?.id || 'unknown'
            });
          }
        }
      });
      feedback.appendChild(btn);
    });

    msg.appendChild(feedback);
  }
  
    this.messagesEl.appendChild(msg);
    this.scrollToBottom();
    return bubble;
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
    this.conversationContext.push({ role: 'user', content: label });
    if (this.conversationContext.length > 6) this.conversationContext.shift();
  
    const typingEl = this.showTyping();
  
    setTimeout(() => {
      typingEl.remove();
  
      const lang = (() => { try { return localStorage.getItem('chatbot-lang') || 'en'; } catch(e) { return 'en'; } })();
      const match = KNOWLEDGE_BASE.find(e => e.id === entryId);
      let response = match ? match.response[lang] : FALLBACK[lang];
  
      response = injectCaseStudyLinks(response);
  
      const followup = match && match.followup && match.followup[lang];
      if (followup) response += `\n\n${followup}`;
  
      this.appendMessage('assistant', response, true);
  
      const suggestions = match && match.suggestions && match.suggestions[lang];
      if (suggestions && suggestions.length > 0) this.showQuickReplies(suggestions);
  
      const HIGH_INTENT = ['availability', 'contact', 'cv-download', 'recruiter-summary', 'salary', 'why-hire-me'];
      if (match && HIGH_INTENT.includes(match.id)) this.showCTAs(lang);
  
      this.conversationContext.push({ role: 'assistant', content: response, id: match?.id || null });
      if (this.conversationContext.length > 6) this.conversationContext.shift();
  
      this.saveHistory();
      this.isLoading = false;
      this.sendBtn.disabled = !this.inputEl.value.trim();
    }, 600);
  }

  send() {
    const text = this.inputEl.value.trim();
    if (!text || this.isLoading) return;

    this.inputEl.value = '';
    this.inputEl.style.height = 'auto';
    this.sendBtn.disabled = true;
    this.isLoading = true;

    this.appendMessage('user', text);

    this.conversationContext.push({ role: 'user', content: text });
    if (this.conversationContext.length > 6) this.conversationContext.shift();

    const typingEl = this.showTyping();

    setTimeout(() => {
      typingEl.remove();

      const lang = detectLanguage(text, this.conversationContext);
      const match = findResponse(text, this.conversationContext);
      // Google Analytics — tracking de inputs del chatbot
      if (typeof gtag !== 'undefined') {
        gtag('event', 'chatbot_message', {
          search_term: text,
          matched_intent: match?.id || 'no_match',
          language: lang
        });
      }
      let response = match ? match.response[lang] : FALLBACK[lang];

      response = injectCaseStudyLinks(response);

      const followup = match && match.followup && match.followup[lang];
      if (followup) response += `\n\n${followup}`;

      this.appendMessage('assistant', response, true);

      // Quick replies dinámicos del KB entry
const suggestions = match && match.suggestions && match.suggestions[lang];
if (suggestions && suggestions.length > 0) {
  this.showQuickReplies(suggestions);
}

      // CTAs de alto intent
      const HIGH_INTENT = ['availability', 'contact', 'cv-download', 'recruiter-summary', 'salary', 'why-hire-me'];
      if (match && HIGH_INTENT.includes(match.id)) {
      this.showCTAs(lang);
      }

      // ── Fix: guardar ID del entry en el context ──
      this.conversationContext.push({ role: 'assistant', content: response, id: match?.id || null });
      if (this.conversationContext.length > 6) this.conversationContext.shift();

      this.saveHistory();
      this.isLoading = false;
      this.sendBtn.disabled = !this.inputEl.value.trim();
    }, 600);
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
    const lang = (() => { try { return localStorage.getItem('chatbot-lang') || 'en'; } catch(e) { return 'en'; } })();
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