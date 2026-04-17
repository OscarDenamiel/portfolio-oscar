/* ============================================================
   OSCAR CHATBOT — chatbot.js
   Chatbot para oscardenamiel.com
   Knowledge-based — sin dependencias externas
============================================================ */

import { KNOWLEDGE_BASE, FALLBACK } from '../data/chatbot-kb.js';
import '../chatbot.css';

/* ── Language detection — uses context to maintain language ── */
function detectLanguage(text, context = []) {
  const t = text.toLowerCase();
  const ca = /(es|però|molt|també|aquí|com|gràcies|vaig|tinc|vull|pots|estic|puc|soc|quin|quina|projectes|feina|treballes|disseny|experiència|hola|bon)/;
  const es = /(está|también|qué|cómo|trabajado|proyectos|tienes|gracias|cuéntame|cuál|puedes|estoy|tengo|quién|diseño|experiencia|habilidades|disponible|hola|buenas)/;
  if (ca.test(t)) return 'ca';
  if (es.test(t)) return 'es';

  // If no clear signal, check recent context to maintain language
  for (let i = context.length - 1; i >= 0; i--) {
    const c = context[i].content.toLowerCase();
    if (ca.test(c)) return 'ca';
    if (es.test(c)) return 'es';
  }
  return 'en';
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

const CHATBOT_SUGGESTIONS = [
  "\u00bfEn qu\u00e9 proyectos has trabajado?",
  "Tell me about the Map Redesign",
  "What's your design process?",
  "\u00bfEst\u00e1s buscando trabajo?",
  "How is this portfolio built?",
];


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
    this.buildDOM();
    this.attachEvents();
    this.injectTrigger();
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

    const welcomeMsg = `Hey! 👋 Soy Oscar — Senior Product Designer en Barcelona. Puedo contarte sobre mis proyectos, proceso de diseño, experiencia... lo que necesites. ¿Qué te trae por aquí?`;
    this.appendMessage('assistant', welcomeMsg);
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
    // raw=true skips escaping — use for trusted HTML like mailto links
    bubble.innerHTML = raw ? content : this.formatText(content);

    msg.appendChild(bubble);
    this.messagesEl.appendChild(msg);
    this.scrollToBottom();
    return bubble;
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
      const response = match
        ? match.response[lang]
        : FALLBACK[lang];

      // CV and contact responses contain HTML links — render raw
      const hasHTML = response.includes('<a ');
      this.appendMessage('assistant', response, hasHTML);

      // Update context with response
      this.conversationContext.push({ role: 'assistant', content: response });
      if (this.conversationContext.length > 6) this.conversationContext.shift();

      // Persist history
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