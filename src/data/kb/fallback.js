/* ============================================================
   CHATBOT FALLBACK — fallback.js
   Respuestas cuando no hay match en el KB.
   Separado por intención detectada.
============================================================ */

// ── Fallback genérico ──
export const FALLBACK = {
    es: `No tengo una respuesta preparada para eso, pero no te quedes sin respuesta — puedes preguntarme sobre mis proyectos, experiencia, proceso de diseño, el stack técnico del portfolio o cualquier otra cosa.\n\nO si prefieres hablar directamente: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`,
    ca: `No tinc una resposta preparada per a això, però no et quedis sense resposta — pots preguntar-me sobre els meus projectes, experiència, procés de disseny o el stack tècnic del portfolio.\n\nO si prefereixes parlar directament: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`,
    en: `I don't have a prepared answer for that, but don't leave empty-handed — you can ask me about my projects, experience, design process, the portfolio's tech stack or anything else.\n\nOr if you'd rather talk directly: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`
  };
  
  // ── Fallback por intención detectada ──
  export const FALLBACK_BY_INTENT = {
    recruiter: {
      es: `No tengo una respuesta preparada para eso exactamente, pero si estás evaluando mi perfil esto te puede ayudar:`,
      ca: `No tinc una resposta preparada per a això exactament, però si estàs avaluant el meu perfil això et pot ajudar:`,
      en: `I don't have a prepared answer for that exactly, but if you're evaluating my profile this might help:`
    },
    tech: {
      es: `No tengo respuesta específica para eso, pero si te interesa el stack técnico del portfolio:`,
      ca: `No tinc resposta específica per a això, però si t'interessa l'stack tècnic del portfolio:`,
      en: `I don't have a specific answer for that, but if you're curious about the technical side:`
    },
    project: {
      es: `No encuentro eso exactamente, pero aquí tienes los proyectos con más impacto:`,
      ca: `No trobo això exactament, però aquí tens els projectes amb més impacte:`,
      en: `I can't find that exactly, but here are the highest impact projects:`
    },
    frustrated: {
      es: `Parece que no te estoy siendo muy útil 😅\n\nDéjame intentarlo de otra forma — cuéntame qué buscas exactamente:`,
      ca: `Sembla que no t'estic sent molt útil 😅\n\nDeixa'm intentar-ho d'una altra manera — explica'm què busques exactament:`,
      en: `Seems like I'm not being very helpful 😅\n\nLet me try a different approach — tell me what you're looking for:`
    }
  };
  
  // ── Suggestions por intención ──
  export const FALLBACK_SUGGESTIONS = {
    recruiter: {
      es: [
        { label: 'Ver resumen de recruiter', id: 'recruiter-summary' },
        { label: 'Ver proyectos con resultados', id: 'projects-overview' },
        { label: 'Descargar CV', id: 'cv-download' }
      ],
      ca: [
        { label: 'Veure resum de recruiter', id: 'recruiter-summary' },
        { label: 'Veure projectes amb resultats', id: 'projects-overview' },
        { label: 'Descarregar CV', id: 'cv-download' }
      ],
      en: [
        { label: 'See recruiter summary', id: 'recruiter-summary' },
        { label: 'See projects with results', id: 'projects-overview' },
        { label: 'Download CV', id: 'cv-download' }
      ]
    },
    tech: {
      es: [
        { label: 'Cómo está construido el portfolio', id: 'portfolio-stack' },
        { label: 'Cómo funciona el chatbot', id: 'chatbot' },
        { label: 'Arquitectura de componentes', id: 'component-architecture' }
      ],
      ca: [
        { label: 'Com està construït el portfolio', id: 'portfolio-stack' },
        { label: 'Com funciona el chatbot', id: 'chatbot' },
        { label: 'Arquitectura de components', id: 'component-architecture' }
      ],
      en: [
        { label: 'How this portfolio is built', id: 'portfolio-stack' },
        { label: 'How the chatbot works', id: 'chatbot' },
        { label: 'Component architecture', id: 'component-architecture' }
      ]
    },
    project: {
      es: [
        { label: 'Ver el Map Redesign', id: 'project-map' },
        { label: 'Ver Mobile First', id: 'project-mobile-first' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Veure el Map Redesign', id: 'project-map' },
        { label: 'Veure Mobile First', id: 'project-mobile-first' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'See the Map Redesign', id: 'project-map' },
        { label: 'See Mobile First', id: 'project-mobile-first' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    },
    frustrated: {
      es: [
        { label: 'Soy recruiter o hiring manager', id: 'recommendation-recruiter' },
        { label: 'Busco colaborar o hacer networking', id: 'recommendation-collaborate' },
        { label: 'Solo tengo curiosidad', id: 'recommendation-curious' }
      ],
      ca: [
        { label: 'Soc recruiter o hiring manager', id: 'recommendation-recruiter' },
        { label: 'Busco col·laborar o fer networking', id: 'recommendation-collaborate' },
        { label: 'Només tinc curiositat', id: 'recommendation-curious' }
      ],
      en: [
        { label: "I'm a recruiter or hiring manager", id: 'recommendation-recruiter' },
        { label: 'Looking to collaborate or network', id: 'recommendation-collaborate' },
        { label: 'Just curious', id: 'recommendation-curious' }
      ]
    }
  };