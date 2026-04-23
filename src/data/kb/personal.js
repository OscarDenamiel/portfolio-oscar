export const personal = [
    
    // ── SOBRE OSCAR ────────────────────────────────────────────
  {
    id: 'about',
    triggers: ['quien eres', 'who are you', 'qui ets', 'sobre ti', 'about you', 'cuentame', 'tell me about yourself', 'aficiones', 'hobbies', 'intereses', 'fuera del trabajo', 'outside work', 'barcelona', 'personal', 'quien es oscar', 'who is oscar'],
    response: {
      es: `Soy Oscar, Senior Product Designer en Barcelona con 8+ años de experiencia\n\nProfesionalmente me obsesiona el diseño basado en datos, la experimentación y construir cosas que realmente funcionen. Me incomoda mucho lanzar y rezar.\n\nFuera del trabajo: buceo, corro, juego al pádel y automatizo todo lo que puedo en casa hasta que mi familia me pide que pare. Tengo un perro y llevo años sin recordar cómo funciona un interruptor de luz físico.`,
      ca: `Soc l'Oscar, Senior Product Designer a Barcelona amb 8+ anys d'experiència\n\nProfessionalment m'obsessiona el disseny basat en dades, l'experimentació i construir coses que realment funcionin.\n\nFora del treball: busseig, corro, juco a pàdel i automatitzo tot el que puc a casa fins que la meva família em para els peus. Tinc un gos i porto anys sense recordar com funciona un interruptor de llum físic.`,
      en: `I'm Oscar, Senior Product Designer based in Barcelona with 8+ years of experience\n\nProfessionally I'm obsessed with data-driven design, experimentation and building things that actually work. Ship and pray makes me very uncomfortable.\n\nOutside work: I dive, run, play padel and automate everything at home until my family asks me to stop. I have a dog and I've genuinely forgotten how a physical light switch works.`
    },
    followup: {
      es: `  Hay algo en concreto sobre lo que quieras saber mas?`,
      ca: `  Hi ha alguna cosa en concret sobre la qual vulguis saber mes?`,
      en: `  Anything specific you'd like to know more about?`
    },
    suggestions: {
      es: [
        { label: '¿Tienes side projects?', id: 'side-projects' },
        { label: '¿Qué proyectos tienes?', id: 'projects-overview' },
        { label: '¿Estás buscando trabajo?', id: 'availability' }
      ],
      ca: [
        { label: 'Tens side projects?', id: 'side-projects' },
        { label: 'Quins projectes tens?', id: 'projects-overview' },
        { label: 'Estàs buscant feina?', id: 'availability' }
      ],
      en: [
        { label: 'Do you have side projects?', id: 'side-projects' },
        { label: 'What projects do you have?', id: 'projects-overview' },
        { label: 'Are you open to new roles?', id: 'availability' }
      ]
    },
  },

  // ── PROYECTO DEL QUE MENOS ORGULLOSO ──────────────────────
  {
    id: 'failed-project',
    triggers: ['proyecto fallido', 'failed project', 'projecte fallit', 'no orgulloso', 'not proud', 'no orgullos', 'aprendizaje', 'lesson learned', 'aprenentatge', 'error', 'mistake', 'equivocacion', 'que salio mal', 'what went wrong', 'que va anar malament', 'habitaciones', 'room selection', 'seleccio habitacions'],
    response: {
      es: `Hay un proyecto en Stayforlong del que no estoy especialmente orgulloso: el rediseño del sistema de selección de habitaciones.\n\nFue un cambio demasiado grande en una zona demasiado core del producto. Englobamos demasiados cambios a la vez — no solo UX, sino también estrategias de revenue, CX y distribución de la oferta. Eso hizo que sacar conclusiones significativas del A/B test fuera casi imposible porque no podías aislar el impacto de cada cambio.\n\nEl aprendizaje fue claro: el scope inicial fue demasiado ambicioso. Hay que resistir la tentación de resolverlo todo en una iteración. Iteraciones pequeñas, medibles y aisladas. Siempre.`,
      ca: `Hi ha un projecte a Stayforlong del qual no estic especialment orgullós: el redisseny del sistema de selecció d'habitacions.\n\nVa ser un canvi massa gran en una zona massa core del producte. Vam englobar massa canvis alhora — no només UX, sinó també estratègies de revenue, CX i distribució de l'oferta.\n\nL'aprenentatge va ser clar: el scope inicial va ser massa ambiciós. Cal resistir la temptació de resoldre-ho tot en una iteració.`,
      en: `There's one project at Stayforlong I'm not especially proud of: the room selection system redesign.\n\nIt was too big a change in too core an area of the product. We bundled too many changes at once — not just UX, but also revenue strategies, CX and offer distribution. That made it almost impossible to draw meaningful conclusions from the A/B test because you couldn't isolate the impact of each change.\n\nThe lesson was clear: the initial scope was too ambitious. You have to resist the temptation to solve everything in one iteration. Small, measurable, isolated iterations. Always.`
    }
  },

  // ── EASTER EGG: EL PERRO ──────────────────────────────────
  {
    id: 'easter-dog',
    triggers: ['perro', 'dog', 'gos', 'mascota', 'pet', 'animal', 'tiene perro', 'do you have a dog', 'tens gos', 'tienes mascota', 'do you have a pet'],
    response: {
      es: `Sí, tengo un perro y es básicamente mi co-worker 🐕\n\nTrabaja desde casa igual que yo — siempre está encima mío, dormido, mientras yo trabajo. No aporta mucho al producto pero la compañía es buena.`,
      ca: `Sí, tinc un gos i és bàsicament el meu co-worker 🐕\n\nTreballa des de casa igual que jo — sempre està a sobre meu, dormint, mentre jo treballo. No aporta gaire al producte però la companyia és bona.`,
      en: `Yes, I have a dog and he's basically my co-worker 🐕\n\nHe works from home just like me — always on top of me, sleeping, while I work. Doesn't contribute much to the product but the company is good.`
    },
    suggestions: {
      es: [
        { label: '¿Qué proyectos tienes?', id: 'projects-overview' },
        { label: '¿Cómo es tu proceso de diseño?', id: 'design-process' }
      ],
      ca: [
        { label: 'Quins projectes tens?', id: 'projects-overview' },
        { label: 'Com és el teu procés de disseny?', id: 'design-process' }
      ],
      en: [
        { label: 'What projects do you have?', id: 'projects-overview' },
        { label: "What's your design process?", id: 'design-process' }
      ]
    },
  },

  // ── EASTER EGG: AUTOMATIZACIÓN ────────────────────────────
  {
    id: 'easter-automation',
    triggers: ['automatizacion', 'automation', 'automatitzacio', 'smart home', 'casa inteligente', 'casa intel·ligent', 'domotica', 'home assistant', 'alexa', 'google home', 'iot', 'interruptor', 'light switch', 'luces', 'llums'],
    response: {
      es: `Bastante. Ya no sé cómo funcionan los interruptores de la luz 😄\n\nSolo enciendo las luces por voz o con rutinas. Si alguna automatización falla, me quedo literalmente a oscuras porque no recuerdo dónde están los switches físicos ni cómo funcionan. He perdido todos los mandos y no tengo ni idea de dónde están.`,
      ca: `Bastant. Ja no sé com funcionen els interruptors de la llum 😄\n\nNomés encenc les llums per veu o amb rutines. Si alguna automatització falla, em quedo literalment a les fosques perquè no recordo on són els switches físics ni com funcionen. He perdut tots els comandaments i no tinc ni idea d'on són.`,
      en: `Quite a lot. I no longer know how light switches work 😄\n\nI only turn lights on by voice or with routines. If any automation fails, I'm literally left in the dark because I don't remember where the physical switches are or how they work. I've lost all the remotes and have no idea where they are.`
    },
    suggestions: {
      es: [
        { label: '¿Qué proyectos tienes?', id: 'projects-overview' },
        { label: '¿Cómo es tu proceso de diseño?', id: 'design-process' }
      ],
      ca: [
        { label: 'Quins projectes tens?', id: 'projects-overview' },
        { label: 'Com és el teu procés de disseny?', id: 'design-process' }
      ],
      en: [
        { label: 'What projects do you have?', id: 'projects-overview' },
        { label: "What's your design process?", id: 'design-process' }
      ]
    },
  },

  // ── EASTER EGG: NALU ──────────────────────────────────────
  {
    id: 'easter-nalu',
    triggers: ['nalu', 'app oceano', 'ocean app', 'app ocean', 'strava buceo', 'strava diving', 'strava ocean', 'buceo app', 'diving app', 'fauna marina', 'marine life', 'vida marina', 'snorkel app', 'open water', 'aguas abiertas', 'aigu obertes'],
    response: {
      es: `Nalu es mi side project más ambicioso y del que más orgulloso estoy 🌊\n\nEs básicamente el Strava para actividades oceánicas. La idea nació de mi pasión por el buceo y la vida marina — y de que no existía ninguna app que combinara bien el registro de actividades con el descubrimiento de fauna marina y la conexión con otras personas que comparten esa pasión.\n\nNalu permite registrar buceos, snorkel y natación en aguas abiertas, tiene una especie de Pokédex para identificar fauna marina, y conecta a usuarios con centros de buceo y otros profesionales.\n\nAún está en desarrollo. Cuando salga te aviso 😄`,
      ca: `Nalu és el meu side project més ambiciós i del qual estic més orgullós 🌊\n\nÉs bàsicament el Strava per a activitats oceàniques. La idea va néixer de la meva passió pel busseig i la vida marina — i que no existia cap app que combinés bé el registre d'activitats amb el descobriment de fauna marina.\n\nNalu permet registrar busseigs, snorkel i natació en aigües obertes, té una mena de Pokédex per identificar fauna marina, i connecta usuaris amb centres de busseig i altres professionals.\n\nEncara està en desenvolupament. Quan surti t'aviso 😄`,
      en: `Nalu is my most ambitious side project and the one I'm most proud of 🌊\n\nIt's basically Strava for ocean activities. The idea came from my passion for diving and marine life — and the fact that no app combined activity logging with marine life discovery and connecting with people who share that passion.\n\nNalu lets you log dives, snorkelling and open-water swims, has a kind of Pokédex for identifying marine life, and connects users with dive centres and other professionals.\n\nStill in development. I'll let you know when it launches 😄`
    },
    suggestions: {
      es: [
        { label: '¿Tienes más side projects?', id: 'side-projects' },
        { label: '¿Qué proyectos tienes en el portfolio?', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Tens més side projects?', id: 'side-projects' },
        { label: 'Quins projectes tens al portfolio?', id: 'projects-overview' }
      ],
      en: [
        { label: 'Tell me more about side projects', id: 'side-projects' },
        { label: 'What projects are in your portfolio?', id: 'projects-overview' }
      ]
    },
  },

  // ── SIDE PROJECTS / PROYECTOS PERSONALES ──────────────────
  {
    id: 'side-projects',
    triggers: ['side project', 'proyecto personal', 'projecte personal', 'proyectos personales', 'personal projects', 'projectes personals', 'nalu', 'app personal', 'que haces fuera', 'what do you do outside', 'que fas fora', 'hobbies profesionales', 'professional hobbies', 'hobies professionals'],
    response: {
      es: `Sí, siempre tengo algo en marcha fuera del trabajo.\n\nAhora mismo el proyecto más importante en el que estoy trabajando se llama **Nalu** — básicamente el Strava para actividades oceánicas. La idea nació de mi pasión por el buceo y la vida marina.\n\nNalu permite registrar actividades como buceo, snorkel o natación en aguas abiertas, tiene una especie de Pokédex para identificar fauna marina, y conecta a personas que comparten la pasión por el océano — tanto usuarios como centros de buceo y profesionales.\n\nEs un proyecto que me permite explorar todo el proceso de producto desde cero: research, definición, diseño, prototipado. El portfolio que estás viendo ahora también es un side project — está construido con Vite, Vanilla JS y CSS puro, sin frameworks, y el chatbot con el que estás hablando lo construí yo también sin APIs externas.`,
      ca: `Sí, sempre tinc alguna cosa en marxa fora de la feina.\n\nAra mateix el projecte més important en el qual estic treballant s'anomena **Nalu** — bàsicament el Strava per a activitats oceàniques. La idea va néixer de la meva passió pel busseig i la vida marina.\n\nNalu permet registrar activitats com busseig, snorkel o natació en aigües obertes, té una mena de Pokédex per identificar fauna marina, i connecta persones que comparteixen la passió per l'oceà.\n\nÉs un projecte que em permet explorar tot el procés de producte des de zero. El portfolio que estàs veient ara també és un side project.`,
      en: `Yes, I always have something going on outside work.\n\nRight now the most important project I'm working on is called **Nalu** — basically Strava for ocean activities. The idea came from my passion for diving and marine life.\n\nNalu lets you log activities like diving, snorkelling or open-water swimming, has a kind of Pokédex for identifying marine life, and connects people who share a passion for the ocean — users, dive centres and professionals alike.\n\nIt's a project that lets me explore the full product process from scratch: research, definition, design, prototyping. The portfolio you're looking at right now is also a side project — built with Vite, Vanilla JS and pure CSS, no frameworks, and the chatbot you're talking to right now I also built with zero external APIs.`
    },
    suggestions: {
      es: [
        { label: '¿Qué proyectos tienes en el portfolio?', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Quins projectes tens al portfolio?', id: 'projects-overview' }
      ],
      en: [
        { label: 'What projects are in your portfolio?', id: 'projects-overview' }
      ]
    },
  },

  ];