export const meta = [
    
    // ── SALUDO ─────────────────────────────────────────────────
  {
    id: 'greeting',
    triggers: ['hola', 'hey', 'hello', 'hi', 'buenos dias', 'buenas', 'bon dia', 'bona tarda', 'good morning', 'sup', 'howdy', 'greetings', 'si', 'ok', 'vale', 'dale', 'bueno', 'claro', 'funciona', 'com va?', 'funciona', 'com va', 'com anem', 'como vas', 'how are you', 'tot be', 'todo bien'],
    response: {
      es: `Hola! Soy Oscar, Senior Product Designer en Barcelona. Cuéntame, qué te trae por aquí?`,
      ca: `Hola! Soc l'Oscar, Senior Product Designer a Barcelona. En què et puc ajudar?`,
      en: `Hey! I'm Oscar, Senior Product Designer based in Barcelona. What brings you here?`
    },
    suggestions: {
      es: [
        { label: '¿En qué proyectos has trabajado?', id: 'projects-overview' },
        { label: '¿Cómo es tu proceso de diseño?', id: 'design-process' },
        { label: '¿Estás buscando trabajo?', id: 'availability' }
      ],
      ca: [
        { label: 'En quins projectes has treballat?', id: 'projects-overview' },
        { label: 'Com és el teu procés de disseny?', id: 'design-process' },
        { label: 'Estàs buscant feina?', id: 'availability' }
      ],
      en: [
        { label: 'What projects have you worked on?', id: 'projects-overview' },
        { label: "What's your design process?", id: 'design-process' },
        { label: 'Are you open to new roles?', id: 'availability' }
      ]
    },
  },

  // ── SALUDO ─────────────────────────────────────────────────
  {
    id: 'compliment',
    triggers: ['ets brutal', 'eres brutal', 'you are amazing', 'increible', 'incredible', 'impresionante', 'impressive', 'molt bo', 'muy bueno', 'great chatbot', 'love this', 'm agrada', 'me gusta el chat', 'genial el chat', 'que pasada', 'quin pasada', 'wow', 'flipant', 'flipante', 'alucinant', 'alucinante'],
    response: {
      es: `Gracias 😄 He construido este chatbot yo desde cero, sin APIs externas — sin OpenAI, sin Anthropic, nada. Sistema knowledge-based con fuzzy matching y distancia Levenshtein.\n\nSi te interesa cómo funciona por dentro: pregúntame "¿cómo está hecho el chatbot?"`,
      ca: `Gràcies 😄 He construït jo aquest chatbot des de zero, sense APIs externes — sense OpenAI, sense Anthropic, res. Sistema knowledge-based amb fuzzy matching i distància Levenshtein.\n\nSi t'interessa com funciona per dins: pregunta'm "com està fet el chatbot?"`,
      en: `Thanks 😄 I built this chatbot from scratch, zero external APIs — no OpenAI, no Anthropic, nothing. Knowledge-based system with fuzzy matching and Levenshtein distance.\n\nIf you're curious how it works under the hood, ask me "how is the chatbot built?"`
    },
    suggestions: {
      es: [
        { label: '¿Cómo está hecho el chatbot?', id: 'chatbot' },
        { label: '¿Cómo está construido el portfolio?', id: 'portfolio-stack' },
        { label: 'Ver proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Com està fet el chatbot?', id: 'chatbot' },
        { label: 'Com està construït el portfolio?', id: 'portfolio-stack' },
        { label: 'Veure projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'How is the chatbot built?', id: 'chatbot' },
        { label: 'How is the portfolio built?', id: 'portfolio-stack' },
        { label: 'See projects', id: 'projects-overview' }
      ]
    }
  },

  // ── AGRADECIMIENTO ─────────────────────────────────────────
  {
    id: 'thanks',
    triggers: ['gracias', 'thank you', 'thanks', 'gracies', 'genial', 'great', 'perfecto', 'perfect', 'muy bien', 'awesome', 'increible', 'guay', 'mola', 'nice', 'cool', 'impressed', 'impresionado'],
    response: {
      es: `De nada! Si tienes más preguntas o quieres profundizar en algo, aquí estoy.`,
      ca: `De res! Si tens més preguntes o vols aprofundir en alguna cosa, aquí estic.`,
      en: `You're welcome! If you have more questions or want to dig deeper into anything, just ask.`
    }
  },

  // ── RECOMMENDATION ENGINE ─────────────────────────────────
  {
    id: 'recommendation-start',
    triggers: ['que deberia ver', 'what should i see', 'que hauria de veure', 'por donde empiezo', 'where do i start', 'per on comence', 'ayudame a elegir', 'help me choose', 'ajuda m a triar', 'que me recomiendas', 'what do you recommend', 'que em recomanaries', 'guiame', 'guide me', 'guia m'],
    response: {
      es: `Depende de lo que busques. Cuéntame, ¿eres...?`,
      ca: `Depèn del que busquis. Explica'm, ets...?`,
      en: `Depends on what you're looking for. Tell me, are you...?`
    },
    suggestions: {
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
    },
  },

  {
    id: 'recommendation-recruiter',
    triggers: ['soy recruiter', 'soc recruiter', 'i\'m a recruiter', 'hiring manager', 'soy hiring', 'soc hiring'],
    response: {
      es: `Perfecto, aquí va tu ruta en 3 pasos\n\n**1. Resumen ejecutivo** — escribe "recruiter" para ver mi perfil completo con resultados y contacto directo.\n\n**2. Proyectos con más impacto** — el Map Redesign en oscardenamiel.com/map es el más completo. Mobile First en oscardenamiel.com/mobile-first tiene los mejores números de conversión.\n\n**3. CV y contacto** — oscardenamiel@gmail.com o linkedin.com/in/oscardenamiel. Suelo responder en el día.`,
      ca: `Perfecte, aquí va la teva ruta en 3 passos\n\n**1. Resum executiu** — escriu "recruiter" per veure el meu perfil complet amb resultats i contacte directe.\n\n**2. Projectes amb més impacte** — el Map Redesign a oscardenamiel.com/map és el més complet. Mobile First a oscardenamiel.com/mobile-first té els millors números de conversió.\n\n**3. CV i contacte** — oscardenamiel@gmail.com o linkedin.com/in/oscardenamiel. Acostumo a respondre el mateix dia.`,
      en: `Perfect, here's your route in 3 steps\n\n**1. Executive summary** — type "recruiter" to see my full profile with results and direct contact.\n\n**2. Highest impact projects** — the Map Redesign at oscardenamiel.com/map is the most complete. Mobile First at oscardenamiel.com/mobile-first has the best conversion numbers.\n\n**3. CV and contact** — oscardenamiel@gmail.com or linkedin.com/in/oscardenamiel. I usually reply the same day.`
    },
    suggestions: {
      es: [
        { label: 'Ver resumen completo', id: 'recruiter-summary' },
        { label: 'Ver el Map Redesign', id: 'project-map' },
        { label: 'Descargar CV', id: 'cv-download' }
      ],
      ca: [
        { label: 'Veure resum complet', id: 'recruiter-summary' },
        { label: 'Veure el Map Redesign', id: 'project-map' },
        { label: 'Descarregar CV', id: 'cv-download' }
      ],
      en: [
        { label: 'See full recruiter summary', id: 'recruiter-summary' },
        { label: 'See the Map Redesign', id: 'project-map' },
        { label: 'Download CV', id: 'cv-download' }
      ]
    },
  },

  {
    id: 'recommendation-collaborate',
    triggers: ['busco colaborar', 'looking to collaborate', 'busco col·laborar', 'networking', 'colaboracion', 'collaboration', 'col·laboracio', 'trabajar juntos', 'work together', 'treballar junts'],
    response: {
      es: `Genial, me interesa el contexto.\n\nLo mejor que puedes hacer es echar un vistazo a cómo trabajo — el Map Redesign en oscardenamiel.com/map muestra bien mi proceso end-to-end.\n\nSi tienes un proyecto concreto en mente, escríbeme directamente a oscardenamiel@gmail.com con el contexto y lo vemos. Respondo rápido.`,
      ca: `Genial, m'interessa el context.\n\nEl millor que pots fer és veure com treballo — el Map Redesign a oscardenamiel.com/map mostra bé el meu procés end-to-end.\n\nSi tens un projecte concret en ment, escriu-me directament a oscardenamiel@gmail.com amb el context i ho veiem. Responc ràpid.`,
      en: `Great, I'm interested in the context.\n\nBest thing you can do is see how I work — the Map Redesign at oscardenamiel.com/map shows my end-to-end process well.\n\nIf you have a specific project in mind, write to me directly at oscardenamiel@gmail.com with the context and let's talk. I reply fast.`
    },
    suggestions: {
      es: [
        { label: 'Ver el Map Redesign', id: 'project-map' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' },
        { label: 'Contactar directamente', id: 'contact' }
      ],
      ca: [
        { label: 'Veure el Map Redesign', id: 'project-map' },
        { label: 'Veure tots els projectes', id: 'projects-overview' },
        { label: 'Contactar directament', id: 'contact' }
      ],
      en: [
        { label: 'See the Map Redesign', id: 'project-map' },
        { label: 'See all projects', id: 'projects-overview' },
        { label: 'Contact directly', id: 'contact' }
      ]
    },
  },

  {
    id: 'recommendation-curious',
    triggers: ['solo tengo curiosidad', 'just curious', 'nomes tinc curiositat', 'solo curiosidad', 'just looking', 'nomes mirant', 'explorando', 'exploring', 'explorant'],
    response: {
      es: `Bienvenido entonces. Te doy el recorrido rápido.\n\nEmpezaría por la página de inicio para ver los proyectos con resultados reales. Si algo te llama la atención, cada case study tiene el proceso completo documentado.\n\nSi quieres entender cómo pienso, el Map Redesign en oscardenamiel.com/map es el mejor ejemplo — 4 meses de discovery, 14 competidores, 10 países.\n\nY si tienes alguna pregunta, aquí estoy.`,
      ca: `Benvingut llavors. Et dono el recorregut ràpid.\n\nComençaria per la pàgina d'inici per veure els projectes amb resultats reals. Si alguna cosa et crida l'atenció, cada case study té el procés complet documentat.\n\nSi vols entendre com penso, el Map Redesign a oscardenamiel.com/map és el millor exemple.\n\nI si tens alguna pregunta, aquí estic.`,
      en: `Welcome then. Here's the quick tour.\n\nI'd start with the homepage to see the projects with real results. If anything catches your eye, each case study has the full process documented.\n\nIf you want to understand how I think, the Map Redesign at oscardenamiel.com/map is the best example — 4 months of discovery, 14 competitors, 10 countries.\n\nAnd if you have any questions, just ask.`
    },
    suggestions: {
      es: [
        { label: 'Ver el Map Redesign', id: 'project-map' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' },
        { label: '¿Cómo es tu proceso de diseño?', id: 'design-process' }
      ],
      ca: [
        { label: 'Veure el Map Redesign', id: 'project-map' },
        { label: 'Veure tots els projectes', id: 'projects-overview' },
        { label: 'Com és el teu procés de disseny?', id: 'design-process' }
      ],
      en: [
        { label: 'See the Map Redesign', id: 'project-map' },
        { label: 'See all projects', id: 'projects-overview' },
        { label: "What's your design process?", id: 'design-process' }
      ]
    },
  },


  ];

  /* ── FALLBACK — siempre ofrece contacto, nunca un callejón sin salida ── */
export const FALLBACK = {
    es: `No tengo una respuesta preparada para eso, pero no te quedes sin respuesta — puedes preguntarme sobre mis proyectos, experiencia, proceso de diseño, el stack técnico del portfolio o cualquier otra cosa.\n\nO si prefieres hablar directamente: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`,
    ca: `No tinc una resposta preparada per a això, però no et quedis sense resposta — pots preguntar-me sobre els meus projectes, experiència, procés de disseny o el stack tècnic del portfolio.\n\nO si prefereixes parlar directament: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`,
    en: `I don't have a prepared answer for that, but don't leave empty-handed — you can ask me about my projects, experience, design process, the portfolio's tech stack or anything else.\n\nOr if you'd rather talk directly: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`
  };