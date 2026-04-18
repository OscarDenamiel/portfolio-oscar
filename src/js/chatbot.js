/* ============================================================
   OSCAR CHATBOT — chatbot.js
   Chatbot para oscardenamiel.com
   Knowledge-based — sin dependencias externas
============================================================ */

import { KNOWLEDGE_BASE, FALLBACK } from '../data/chatbot-kb.js';
import '../chatbot.css';

/* ── Language detection — saves preference to localStorage ── */
function detectLanguage(text, context = []) {
  const t = text.toLowerCase().trim();
 
  // Strong Catalan markers — words that only exist in Catalan
  const caStrong = /(però|també|molt|gràcies|vaig|tinc|vull|pots|estic|puc|soc|quin|quina|projectes|feina|treballes|disseny|experiència|bon dia|bona tarda|bona nit|doncs|perquè|aquí|això|això|com va|molt bé|d'acord|t'interessa|m'expliques|fas|treballes|estàs)/;
  // Strong Spanish markers — words that only exist in Spanish
  const esStrong = /(también|qué tal|gracias|estás|también|cuéntame|cuál|puedes|estoy|tengo|quién|diseño|experiencia|habilidades|disponible|buenos días|buenas tardes|buenas noches|entonces|porque|aquí|cómo estás|muy bien|de acuerdo|te interesa|me explicas|haces|trabajas)/;
  // Catalan-leaning words (also exist in Spanish but different form)
  const caHint = /(hola|bon|tinc|soc|puc|però|molt|també|aquí|com)/;
  // Spanish-leaning words
  const esHint = /(hola|buenas|tengo|soy|puedo|pero|muy|también|aquí|cómo|que|es)/;
 
  let score = { ca: 0, es: 0 };
  if (caStrong.test(t)) score.ca += 3;
  if (esStrong.test(t)) score.es += 3;
  if (caHint.test(t)) score.ca += 1;
  if (esHint.test(t)) score.es += 1;
 
  // Only detect if clear winner (score diff >= 2 avoids false positives on shared words)
  let detected = null;
  if (score.ca - score.es >= 2) detected = 'ca';
  else if (score.es - score.ca >= 2) detected = 'es';
  else if (score.ca > 0 && score.es === 0) detected = 'ca';
  else if (score.es > 0 && score.ca === 0) detected = 'es';
 
  if (detected) {
    try { localStorage.setItem('chatbot-lang', detected); } catch(e) {}
    return detected;
  }
 
  // Check recent context (last 4 entries)
  for (let i = context.length - 1; i >= Math.max(0, context.length - 4); i--) {
    const c = (context[i].content || '').toLowerCase();
    if (caStrong.test(c)) return 'ca';
    if (esStrong.test(c)) return 'es';
  }
 
  // Fall back to stored preference, then English
  try { return localStorage.getItem('chatbot-lang') || 'en'; } catch(e) { return 'en'; }
}
 
/* ── Intent matching — uses context to avoid repeating same topic ── */
function findResponse(input, context = []) {
  const text = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;
 
  // Topics already discussed in this session
  const recentTopics = new Set(
    context
      .filter(c => c.role === 'assistant' && c.id)
      .map(c => c.id)
  );
 
  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const trigger of entry.triggers) {
      if (text.includes(trigger.toLowerCase())) {
        score = Math.max(score, trigger.length);
      }
    }
    // Slight penalty for recently discussed topics (encourages variety)
    if (score > 0 && recentTopics.has(entry.id)) score *= 0.8;
 
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }
 
  return bestMatch;
}
 
/* ── Case study URLs — auto-linked wherever mentioned ── */
const CASE_STUDY_LINKS = {
  'oscardenamiel.com/map':                   { url: 'https://oscardenamiel.com/map',                   name: 'Map Redesign' },
  'oscardenamiel.com/mobile-first':          { url: 'https://oscardenamiel.com/mobile-first',          name: 'Mobile First' },
  'oscardenamiel.com/self-service-booking':  { url: 'https://oscardenamiel.com/self-service-booking',  name: 'Self-Service Bookings' },
  'oscardenamiel.com/smart-suggester':       { url: 'https://oscardenamiel.com/smart-suggester',       name: 'Smart Suggester' },
};
 
const CASE_STUDY_PATTERNS = [
  { pattern: /oscardenamiel\.com\/map/g,                  key: 'oscardenamiel.com/map' },
  { pattern: /oscardenamiel\.com\/mobile-first/g,         key: 'oscardenamiel.com/mobile-first' },
  { pattern: /oscardenamiel\.com\/self-service-booking/g, key: 'oscardenamiel.com/self-service-booking' },
  { pattern: /oscardenamiel\.com\/smart-suggester/g,      key: 'oscardenamiel.com/smart-suggester' },
];
 
const CHATBOT_SUGGESTIONS = [
  "\u00bfEn qu\u00e9 proyectos has trabajado?",
  "Tell me about the Map Redesign",
  "What's your design process?",
  "\u00bfEst\u00e1s buscando trabajo?",
  "How is this portfolio built?",
];
 
 
/* ── Inject case study links into response text ── */
function injectCaseStudyLinks(text) {
  // Replace plain URLs with "View project Name →" links
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
    this.conversationContext = []; // últimas N entradas para contexto
    this.init();
  }
 
  init() {
    this.injectCSS();
    this.buildDOM();
    this.attachEvents();
    this.injectTrigger();
  }
 
  injectCSS() {
    if (document.getElementById('chatbot-styles')) return;
    const link = document.createElement('link');
    link.id = 'chatbot-styles';
    link.rel = 'stylesheet';
    link.href = '/src/chatbot.css';
    document.head.appendChild(link);
  }
 
  buildDOM() {
    // Overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'chatbot-overlay';
    this.overlay.addEventListener('click', () => this.close());
 
    // Panel
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
    // Usa los botones existentes del header y sidebar por aria-label
    this.triggerBtns = document.querySelectorAll('[aria-label="Open chatbot"]');
    this.triggerBtns.forEach(btn => {
      // Wrap in tooltip-container to match project-card tooltip style
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
 
    // Overlay + scroll lock en mobile y tablet (no en desktop)
    const isDesktop = window.innerWidth >= 769;
    if (!isDesktop) {
      this.overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
 
    // Mensaje de bienvenida solo la primera vez
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
    this.setTriggerActive(false);
  }
 
  showWelcome() {
    // Restore history from sessionStorage if exists
    const saved = sessionStorage.getItem('chatbot-history');
    if (saved) {
      try {
        const history = JSON.parse(saved);
        if (history.length > 0) {
          history.forEach(({ role, content, raw }) => {
            this.appendMessage(role, content, raw || false);
          });
          this.conversationContext = history.slice(-6); // last 3 exchanges
          this.hasShownSuggestions = true;
          return;
        }
      } catch(e) { sessionStorage.removeItem('chatbot-history'); }
    }
 
    // Use stored language preference, default to English
    const storedLang = localStorage.getItem('chatbot-lang') || 'en';
    const welcomeMessages = {
      es: `Hola! Soy Oscar, Senior Product Designer en Barcelona. Pregúntame sobre mis proyectos, experiencia, proceso de diseño o lo que necesites.`,
      ca: `Hola! Soc l'Oscar, Senior Product Designer a Barcelona. Pregunta'm sobre els meus projectes, experiència, procés de disseny o el que necessitis.`,
      en: `Hey! 👋 I'm Oscar — Senior Product Designer based in Barcelona. Ask me about my projects, experience, design process or anything else you're curious about.`
    };
    this.appendMessage('assistant', welcomeMessages[storedLang]);
    this.saveHistory();
    this.showSuggestions();
  }
 
  saveHistory() {
    const msgs = this.messagesEl.querySelectorAll('.chatbot-msg');
    const history = [];
    msgs.forEach(msg => {
      const role = msg.classList.contains('user') ? 'user' : 'assistant';
      const bubble = msg.querySelector('.chatbot-bubble');
      if (bubble) {
        // Detect if content has HTML links
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
 
    // Chips inside messages area, below welcome message
    const wrapper = document.createElement('div');
    wrapper.className = 'chatbot-suggestions';
    wrapper.id = 'chatbot-suggestions';
 
    CHATBOT_SUGGESTIONS.forEach(text => {
      const chip = document.createElement('button');
      chip.className = 'chatbot-chip';
      chip.textContent = text;
      chip.addEventListener('click', () => {
        wrapper.remove();
        this.inputEl.value = text;
        this.send();
      });
      wrapper.appendChild(chip);
    });
 
    this.messagesEl.appendChild(wrapper);
    this.scrollToBottom();
  }
 
  appendMessage(role, content, raw = false) {
    const msg = document.createElement('div');
    msg.className = `chatbot-msg ${role}`;
 
    const bubble = document.createElement('div');
    bubble.className = 'chatbot-bubble';
    // raw=true: trusted HTML — still apply markdown formatting
    bubble.innerHTML = raw ? this.formatRaw(content) : this.formatText(content);
 
    msg.appendChild(bubble);
    this.messagesEl.appendChild(msg);
    this.scrollToBottom();
    return bubble;
  }
 
  formatRaw(text) {
    // Apply markdown on top of existing HTML (links stay intact)
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/(?<![*])\*(?![*])(.*?)(?<![*])\*(?![*])/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p style="margin:8px 0 0">')
      .replace(/\n/g, '<br>')
      .replace(/^(?!<)/, '<p style="margin:0">')
      .replace(/([^>])$/, '$1</p>');
  }
 
  formatText(text) {
    // Basic markdown-ish formatting
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
    requestAnimationFrame(() => {
      this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
    });
  }
 
  send() {
    const text = this.inputEl.value.trim();
    if (!text || this.isLoading) return;
 
    // Reset input
    this.inputEl.value = '';
    this.inputEl.style.height = 'auto';
    this.sendBtn.disabled = true;
    this.isLoading = true;
 
    // Add user message
    this.appendMessage('user', text);
 
    // Update context
    this.conversationContext.push({ role: 'user', content: text });
    if (this.conversationContext.length > 6) this.conversationContext.shift();
 
    // Show typing
    const typingEl = this.showTyping();
 
    setTimeout(() => {
      typingEl.remove();
 
      const lang = detectLanguage(text, this.conversationContext);
      const match = findResponse(text, this.conversationContext);
      let response = match ? match.response[lang] : FALLBACK[lang];
 
      // Inject case study links — always, regardless of response source
      response = injectCaseStudyLinks(response);
 
      // Append followup question if defined in KB entry
      const followup = match && match.followup && match.followup[lang];
      if (followup) response += `
 
${followup}`;
 
      // Render as raw HTML (links present after injection)
      this.appendMessage('assistant', response, true);
 
      // Update context
      this.conversationContext.push({ role: 'assistant', content: response });
      if (this.conversationContext.length > 6) this.conversationContext.shift();
 
      this.saveHistory();
      this.isLoading = false;
      this.sendBtn.disabled = !this.inputEl.value.trim();
    }, 600);
  }
}
 
// ── Init ──
export function initChatbot() {
  if (window._oscarChatbot) return;
  window._oscarChatbot = new OscarChatbot();
}