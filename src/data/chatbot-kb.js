/* ============================================================
   CHATBOT KNOWLEDGE BASE — chatbot-kb.js
   v2 — cobertura ampliada, tono natural de Oscar
   Edita solo este archivo para actualizar respuestas.
============================================================ */

export const KNOWLEDGE_BASE = [

  // ── SALUDO ─────────────────────────────────────────────────
  {
    id: 'greeting',
    triggers: ['hola', 'hey', 'hello', 'hi', 'buenos dias', 'buenas', 'bon dia', 'bona tarda', 'good morning', 'sup', 'howdy', 'greetings', 'si', 'ok', 'vale', 'dale', 'bueno', 'claro'],
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

  // ── PROYECTOS OVERVIEW ─────────────────────────────────────
  {
    id: 'projects-overview',
    triggers: ['proyectos', 'projects', 'projectes', 'case studies', 'case study', 'portfolio', 'que has hecho', 'what have you done', 'que has fet', 'trabajo', 'work', 'show me your work', 'show me work', 'tus proyectos', 'your projects', 'els teus projectes', 'que veo', 'what do i see', 'que hay aqui', 'que tienes', 'what do you have'],
    response: {
      es: `Tengo 4 case studies publicados, todos con resultados reales y medibles\n\n**Map Redesign** → +17% CTR, +25% CVR, +43% sesión (Stayforlong)\n**Mobile First** → +8% CVR, -12% reembolsos, +7% beneficio diario (Leadtech)\n**Self-Service Bookings** → -17% contactos soporte, +8% retención (Stayforlong)\n**Smart Suggester** → -40% tiempo búsqueda, +9% tráfico al funnel (Stayforlong)\n\nTe interesa alguno en concreto?`,
      ca: `Tinc 4 case studies publicats, tots amb resultats reals i mesurables\n\n**Map Redesign** → +17% CTR, +25% CVR, +43% sessió (Stayforlong)\n**Mobile First** → +8% CVR, -12% reemborsaments, +7% benefici diari (Leadtech)\n**Self-Service Bookings** → -17% contactes suport, +8% retenció (Stayforlong)\n**Smart Suggester** → -40% temps cerca, +9% trànsit al funnel (Stayforlong)\n\nT'interessa algun en concret?`,
      en: `I have 4 published case studies, all with real measurable results\n\n**Map Redesign** → +17% CTR, +25% CVR, +43% session duration (Stayforlong)\n**Mobile First** → +8% CVR, -12% refunds, +7% daily profit (Leadtech)\n**Self-Service Bookings** → -17% support contacts, +8% retention (Stayforlong)\n**Smart Suggester** → -40% search time, +9% funnel traffic (Stayforlong)\n\nWant to dig into any of them?`
    },
    followup: {
      es: `  Se quieres saber mas de algun proyecto en concreto, dime cual.`,
      ca: `  Si vols saber mes d'algun projecte en concret, digues-me quin.`,
      en: `  Want me to go deeper on any specific one?`
    },
    suggestions: {
      es: [
        { label: 'Cuéntame sobre el Map Redesign', id: 'project-map' },
        { label: 'Cuéntame sobre Mobile First', id: 'project-mobile-first' },
        { label: '¿Cuál es tu proceso de diseño?', id: 'design-process' }
      ],
      ca: [
        { label: "Explica'm el Map Redesign", id: 'project-map' },
        { label: "Explica'm el Mobile First", id: 'project-mobile-first' },
        { label: 'Com és el teu procés de disseny?', id: 'design-process' }
      ],
      en: [
        { label: 'Tell me about the Map Redesign', id: 'project-map' },
        { label: 'Tell me about Mobile First', id: 'project-mobile-first' },
        { label: 'Tell me about Self-Service Bookings', id: 'project-self-service' }
      ]
    },
  },

  // ── MAP REDESIGN ───────────────────────────────────────────
  {
    id: 'project-map',
    triggers: ['map', 'mapa', 'map redesign', 'location search', 'reshaping location', 'stayforlong map', 'hotel map', 'mapa hotel', 'map project'],
    response: {
      es: `El Map Redesign es probablemente el proyecto del que más orgulloso estoy\n\nEl mapa de Stayforlong tenía problemas serios: visual saturado, carga bloqueante, usuarios abandonando para ir a Google Maps a buscar contexto que no encontraban en nuestro producto.\n\nLideré 4 meses de discovery: 14 competidores analizados, 10 entrevistas en 7 países, encuesta a 148 usuarios y análisis de comportamiento con Hotjar. El resultado fue clustering de hoteles, carga no bloqueante, search bar en mobile y un sistema geográfico que pasó de 300 a 1.000 resultados.\n\n**Resultados:** +17% CTR, +25% CVR, +43% duración de sesión, 95% usuarios prefieren la nueva UI.\n\noscardenamiel.com/map`,
      ca: `El Map Redesign és probablement el projecte del qual estic més orgullós\n\nEl mapa de Stayforlong tenia problemes seriosos: visual saturat, càrrega bloquejant, usuaris abandonant per anar a Google Maps.\n\nVaig liderar 4 mesos de discovery: 14 competidors, 10 entrevistes a 7 països, enquesta a 148 usuaris i anàlisi de comportament amb Hotjar. El resultat va ser clustering d'hotels, càrrega no bloquejant, barra de cerca al mòbil i un sistema geogràfic de 300 a 1.000 resultats.\n\n**Resultats:** +17% CTR, +25% CVR, +43% durada de sessió, 95% usuaris prefereixen la nova UI.\n\noscardenamiel.com/map`,
      en: `The Map Redesign is probably the project I'm most proud of\n\nStayforlong's map had serious issues: cluttered UI, blocking loads, users leaving for Google Maps to find context they couldn't find on ours.\n\nI led 4 months of discovery: 14 competitors analysed, 10 interviews across 7 countries, 148-user survey, behavioural analysis with Hotjar. Result: hotel clustering, non-blocking load, mobile search bar and a geo system going from 300 to 1,000 results.\n\n**Results:** +17% CTR, +25% CVR, +43% session duration, 95% of users prefer the new UI.\n\noscardenamiel.com/map`
    },
    suggestions: {
      es: [
        { label: 'Cuéntame sobre Mobile First', id: 'project-mobile-first' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' },
        { label: '¿Cómo fue el proceso de research?', id: 'design-process' }
      ],
      ca: [
        { label: "Explica'm el Mobile First", id: 'project-mobile-first' },
        { label: 'Veure tots els projectes', id: 'projects-overview' },
        { label: 'Com va ser el procés de research?', id: 'design-process' }
      ],
      en: [
        { label: 'Tell me about Mobile First', id: 'project-mobile-first' },
        { label: 'See all projects', id: 'projects-overview' },
        { label: "What's your design process?", id: 'design-process' }
      ]
    },
  },

  // ── MOBILE FIRST ───────────────────────────────────────────
  {
    id: 'project-mobile-first',
    triggers: ['mobile first', 'mobile-first', 'leadtech', 'mobile design', 'disseny mobile', 'diseno mobile', 'mobile project', 'proyecto mobile', 'proyecto movil', 'mobile experience'],
    response: {
      es: `Mobile First fue uno de esos proyectos que te cambian cómo ves el diseño\n\nEn Leadtech, el móvil tenía un 55% más de tráfico que desktop pero generaba un 40% menos de conversión. La causa: la experiencia móvil era literalmente el desktop mal adaptado.\n\nApliqué Lean UX, hice 9 iteraciones del prototipo y 11 rondas de testing. También construí el Design System completo para que todo fuera escalable desde el principio.\n\n**Resultados:** +8% CVR, -12% reembolsos, +7% beneficio diario, -20% drop-off.\n\noscardenamiel.com/mobile-first`,
      ca: `Mobile First va ser un d'aquells projectes que et canvien com veus el disseny\n\nA Leadtech, el mòbil tenia un 55% més de trànsit que desktop però generava un 40% menys de conversió.\n\nVaig aplicar Lean UX, fer 9 iteracions del prototip i 11 rondes de testing. També vaig construir el Design System complet.\n\n**Resultats:** +8% CVR, -12% reemborsaments, +7% benefici diari, -20% drop-off.\n\noscardenamiel.com/mobile-first`,
      en: `Mobile First was one of those projects that changes how you see design\n\nAt Leadtech, mobile had 55% more traffic than desktop but 40% lower conversion. The cause: the mobile experience was literally desktop badly adapted.\n\nI used Lean UX, ran 9 prototype iterations and 11 testing rounds. Also built the full Design System for scalability from day one.\n\n**Results:** +8% CVR, -12% refund ratio, +7% daily profit, -20% drop-off.\n\noscardenamiel.com/mobile-first`
    },
    suggestions: {
      es: [
        { label: '¿Hay NDA?', id: 'nda' },
        { label: 'Ver el Map Redesign', id: 'project-map' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Hi ha NDA?', id: 'nda' },
        { label: 'Veure el Map Redesign', id: 'project-map' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: "What's the Leadtech NDA?", id: 'nda' },
        { label: 'See the Map Redesign', id: 'project-map' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    },
  },

  // ── SELF-SERVICE BOOKINGS ──────────────────────────────────
  {
    id: 'project-self-service',
    triggers: ['self-service', 'self service', 'bookings', 'reservas', 'reserves', 'gestion reservas', 'booking management', 'gestio reserves', 'soporte', 'support contacts', 'post-booking', 'post booking'],
    response: {
      es: `Self-Service Bookings nació de un problema operacional bastante gordo\n\nStayforlong recibía más de 10.000 contactos de soporte a la semana por cosas que el usuario debería poder resolver solo. El equipo de 60 agentes estaba al límite.\n\nRediseñé toda la experiencia post-reserva: cambios de fecha, cancelaciones, descarga PDF, historial de solicitudes... sin tocar a nadie de soporte.\n\n**Resultados:** -17% contactos por reserva, -7% cancelaciones, +6% eNPS, +8% retención.\n\noscardenamiel.com/self-service-booking`,
      ca: `Self-Service Bookings va néixer d'un problema operacional bastant gros\n\nStayforlong rebia més de 10.000 contactes de suport a la setmana per coses que l'usuari hauria de poder resoldre sol.\n\nVaig redissenyar tota l'experiència post-reserva: canvis de data, cancel·lacions, descàrrega PDF, historial.\n\n**Resultats:** -17% contactes per reserva, -7% cancel·lacions, +6% eNPS, +8% retenció.\n\noscardenamiel.com/self-service-booking`,
      en: `Self-Service Bookings came from a pretty big operational problem\n\nStayforlong was getting over 10,000 support contacts per week for things users should handle themselves. The 60-agent CX team was at its limit.\n\nI redesigned the whole post-booking experience: date changes, cancellations, PDF download, request history... no support contact needed.\n\n**Results:** -17% contacts per booking, -7% cancellation rate, +6% eNPS, +8% retention.\n\noscardenamiel.com/self-service-booking`
    }
  },

  // ── SMART SUGGESTER ────────────────────────────────────────
  {
    id: 'project-smart-suggester',
    triggers: ['smart suggester', 'suggester', 'buscador', 'cercador', 'search engine', 'busqueda', 'motor de busqueda', 'search project', 'proyecto buscador', 'elasticsearch', 'elastic search'],
    response: {
      es: `El Smart Suggester es más técnico de lo que parece\n\nEl buscador de Stayforlong tenía tolerancia cero a errores tipográficos. Sin estado vacío, sin resultados previos al input, con iconos confusos. Básicamente un buscador de 2015.\n\nTrabajé con back-end para afinar el índice de ElasticSearch y añadí mejoras UX: destinos populares, búsquedas recientes, resultados por localización, carga no bloqueante y preselección automática.\n\n**Resultados:** -40% tiempo de búsqueda, +9% tráfico homepage→SERP, +8% menos resets de input.\n\noscardenamiel.com/smart-suggester`,
      ca: `El Smart Suggester és més tècnic del que sembla\n\nEl cercador de Stayforlong tenia tolerància zero als errors tipogràfics. Sense estat buit, sense resultats previs, amb icones confoses.\n\nVaig treballar amb back-end per afinar l'índex d'ElasticSearch i vaig afegir millores UX.\n\n**Resultats:** -40% temps de cerca, +9% trànsit homepage→SERP, +8% menys resets d'input.\n\noscardenamiel.com/smart-suggester`,
      en: `Smart Suggester is more technical than it looks\n\nStayforlong's search had zero typo tolerance. No empty state, no pre-input results, confusing icons. Basically a 2015 search box.\n\nI worked with back-end to fine-tune the ElasticSearch index and added UX improvements: popular destinations, recent searches, location-based results, non-blocking load and auto-preselection.\n\n**Results:** -40% search time, +9% homepage→SERP traffic, +8% fewer input resets.\n\noscardenamiel.com/smart-suggester`
    }
  },

  // ── EXPERIENCIA ────────────────────────────────────────────
  {
    id: 'experience',
    triggers: ['experiencia', 'experience', 'experiència', 'trayectoria', 'carrera', 'career', 'empresas', 'companies', 'empreses', 'historial', 'curriculum', 'background', 'anos experiencia', 'years experience', 'work history', 'donde has trabajado', 'where have you worked'],
    response: {
      es: `Llevo 8+ años en diseño de producto, siempre en entornos digitales de alta conversión\n\n**Stayforlong** (2024–hoy) Senior PD en una OTA con 300M€+ de facturación.\n**Leadtech** (2022–2024) Product Designer, lideré Mobile First.\n**FloraQueen** (2021–2022) Rediseño web y Design System.\n**Be.Green** (2020–2021) Head of UX/UI desde cero.\n**Sopeel** (2018–2020) UX/UI en startup de energías renovables.\n**Bodas.net / The Knot** (2018–2019) UI Designer.\n\nMi zona de confort: Travel Tech y E-commerce.`,
      ca: `Porto 8+ anys en disseny de producte, sempre en entorns d'alta conversió\n\n**Stayforlong** (2024–avui) Senior PD en una OTA amb 300M€+ de facturació.\n**Leadtech** (2022–2024) Product Designer, vaig liderar Mobile First.\n**FloraQueen** (2021–2022) Redisseny web i Design System.\n**Be.Green** (2020–2021) Head of UX/UI des de zero.\n**Sopeel** (2018–2020) UX/UI en startup d'energies renovables.\n**Bodas.net / The Knot** (2018–2019) UI Designer.`,
      en: `I've been in product design for 8+ years, always in high-conversion digital environments\n\n**Stayforlong** (2024–present) Senior PD at an OTA with 300M€+ annual revenue.\n**Leadtech** (2022–2024) Product Designer, led Mobile First.\n**FloraQueen** (2021–2022) Website redesign and Design System.\n**Be.Green** (2020–2021) Head of UX/UI from scratch.\n**Sopeel** (2018–2020) UX/UI at a renewable energy startup.\n**Bodas.net / The Knot** (2018–2019) UI Designer.`
    },
    followup: {
      es: `  Quieres que profundice en alguna empresa en concreto, o prefieres ver los proyectos?`,
      ca: `  Vols que aprofundeixi en alguna empresa en concret, o prefereixes veure els projectes?`,
      en: `  Want me to go deeper on any specific company, or would you rather see the projects?`
    },
    suggestions: {
      es: [
        { label: 'Cuéntame sobre Stayforlong', id: 'stayforlong' },
        { label: 'Cuéntame sobre Leadtech', id: 'leadtech' },
        { label: 'Ver los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: "Explica'm Stayforlong", id: 'stayforlong' },
        { label: "Explica'm Leadtech", id: 'leadtech' },
        { label: 'Veure els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'Tell me about Stayforlong', id: 'stayforlong' },
        { label: 'Tell me about Leadtech', id: 'leadtech' },
        { label: 'See the projects', id: 'projects-overview' }
      ]
    },
  },

  // ── STAYFORLONG ────────────────────────────────────────────
  {
    id: 'stayforlong',
    triggers: ['stayforlong', 'stay for long', 'ota', 'online travel agency', 'agencia viajes', 'current job', 'trabajo actual', 'feina actual', 'current company', 'empresa actual'],
    response: {
      es: `Llevo en Stayforlong desde 2024. Es una OTA especializada en estancias largas (3+ noches), con presencia en 25 países, 720.000+ hoteles y 300M€+ de facturación anual.\n\nComo Senior Product Designer colaboro con los equipos de Producto e Ingeniería para definir la visión UX end-to-end. He liderado el Map Redesign, el Smart Suggester y Self-Service Bookings.`,
      ca: `Soc a Stayforlong des del 2024. És una OTA especialitzada en estades llargues (3+ nits), amb presència a 25 països, 720.000+ hotels i 300M€+ de facturació anual.\n\nCom a Senior Product Designer col·laboro amb els equips de Producte i Enginyeria. He liderat el Map Redesign, el Smart Suggester i Self-Service Bookings.`,
      en: `I've been at Stayforlong since 2024. It's an OTA specialising in long stays (3+ nights), operating in 25 countries with 720,000+ hotels and 300M€+ annual gross revenue.\n\nAs Senior Product Designer I collaborate with Product and Engineering to define the end-to-end UX vision. I've led the Map Redesign, Smart Suggester and Self-Service Bookings.`
    },
    suggestions: {
      es: [
        { label: 'Ver el Map Redesign', id: 'project-map' },
        { label: 'Ver el Smart Suggester', id: 'project-smart-suggester' },
        { label: 'Ver Self-Service Bookings', id: 'project-self-service' }
      ],
      ca: [
        { label: 'Veure el Map Redesign', id: 'project-map' },
        { label: 'Veure el Smart Suggester', id: 'project-smart-suggester' },
        { label: 'Veure Self-Service Bookings', id: 'project-self-service' }
      ],
      en: [
        { label: 'See the Map Redesign', id: 'project-map' },
        { label: 'See the Smart Suggester', id: 'project-smart-suggester' },
        { label: 'See Self-Service Bookings', id: 'project-self-service' }
      ]
    },
  },

  // ── LEADTECH ───────────────────────────────────────────────
  {
    id: 'leadtech',
    triggers: ['leadtech', 'lead tech', 'leadtech innovation', 'trabajo anterior', 'previous job', 'feina anterior'],
    response: {
      es: `En Leadtech estuve de 2022 a 2024. Es una empresa barcelonesa especializada en transformar ideas en productos digitales rentables, principalmente en el sector de documentos de viaje y trámites online.\n\nFui Product Designer responsable de la optimización de la experiencia móvil — el proyecto Mobile First — y también del experimentation program y CRO en varios productos.`,
      ca: `A Leadtech vaig estar del 2022 al 2024. És una empresa barcelonina especialitzada a transformar idees en productes digitals rendibles, principalment en el sector de documents de viatge.\n\nVaig ser Product Designer responsable de l'optimització de l'experiència mòbil — el projecte Mobile First — i també del programa d'experimentació i CRO.`,
      en: `I was at Leadtech from 2022 to 2024. It's a Barcelona-based company specialising in turning ideas into profitable digital products, mainly in the travel documents and online processing space.\n\nI was the Product Designer responsible for mobile experience optimisation — the Mobile First project — and also managed the experimentation program and CRO across several products.`
    },
    suggestions: {
      es: [
        { label: 'Ver Mobile First', id: 'project-mobile-first' },
        { label: '¿Hay NDA?', id: 'nda' },
        { label: 'Ver otros proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Veure Mobile First', id: 'project-mobile-first' },
        { label: 'Hi ha NDA?', id: 'nda' },
        { label: 'Veure altres projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'See Mobile First', id: 'project-mobile-first' },
        { label: 'Is there an NDA?', id: 'nda' },
        { label: 'See other projects', id: 'projects-overview' }
      ]
    },
  },

  // ── PROCESO DE DISEÑO ──────────────────────────────────────
  {
    id: 'design-process',
    triggers: ['proceso', 'process', 'procés', 'metodologia', 'methodology', 'como trabajas', 'how do you work', 'com treballes', 'approach', 'workflow', 'design process', 'how you design', 'como disenyas', 'lean ux', 'design thinking'],
    response: {
      es: `Mi proceso tiene 4 fases y no me salto ninguna\n\n**1. Diagnóstico** Miro los datos antes de tocar Figma. Si no hay datos, los creo. Diseñar sin datos es adivinar.\n**2. Enfoque** Dedicar tiempo a enmarcar el problema correcto es lo más valioso que puedes hacer. El problema equivocado a escala es carísimo.\n**3. Solución** Diseño contra una hipótesis medible. Nada de "yo creo que". Apuestas basadas en evidencia.\n**4. Validar** Primero el experimento, luego el producto final.\n\nHerramientas core: Lean UX, A/B testing, UX Research mixto.`,
      ca: `El meu procés té 4 fases i no me'n salto cap\n\n**1. Diagnòstic** Miro les dades abans de tocar Figma.\n**2. Enfocament** Emmarcar el problema correcte és el més valuós que pots fer.\n**3. Solució** Dissenyo contra una hipòtesi mesurable.\n**4. Validar** Primer l'experiment, després el producte final.\n\nEines core: Lean UX, A/B testing, UX Research mixt.`,
      en: `My process has 4 phases and I don't skip any of them\n\n**1. Diagnose** I look at the data before opening Figma. If there's no data, I create it.\n**2. Scope** Framing the right problem is the most valuable thing you can do. The wrong problem at scale is expensive.\n**3. Solution** I design against a measurable hypothesis. No gut feelings, only evidence-based bets.\n**4. Validate** Experiment first, then the final product.\n\nCore tools: Lean UX, A/B testing, mixed UX Research.`
    },
    followup: {
      es: `  Si quieres verlo aplicado, el Map Redesign en oscardenamiel.com/map es el ejemplo mas completo.`,
      ca: `  Si vols veure'l aplicat, el Map Redesign a oscardenamiel.com/map es l'exemple mes complet.`,
      en: `  If you want to see it applied, the Map Redesign at oscardenamiel.com/map is the most complete example.`
    },
    suggestions: {
      es: [
        { label: 'Ver el Map Redesign', id: 'project-map' },
        { label: '¿Cómo trabajas con ingeniería?', id: 'engineering-relationship' },
        { label: '¿Cuáles son tus habilidades?', id: 'skills' }
      ],
      ca: [
        { label: 'Veure el Map Redesign', id: 'project-map' },
        { label: 'Com treballes amb enginyeria?', id: 'engineering-relationship' },
        { label: 'Quines són les teves habilitats?', id: 'skills' }
      ],
      en: [
        { label: 'See the Map Redesign', id: 'project-map' },
        { label: 'How do you work with engineering?', id: 'engineering-relationship' },
        { label: 'What are your skills?', id: 'skills' }
      ]
    },
  },

  // ── HABILIDADES ────────────────────────────────────────────
  {
    id: 'skills',
    triggers: ['habilidades', 'skills', 'habilitats', 'especialidad', 'especializacion', 'specialisation', 'que sabes', 'what do you know', 'herramientas', 'tools', 'eines', 'figma', 'cro', 'ux research', 'ab testing', 'design system', 'conversion rate', 'tus skills', 'your skills'],
    response: {
      es: `Mis especialidades principales\n\n**Growth y CRO** Diseño orientado a conversión, A/B testing, experimentos a escala.\n**UX Research** Entrevistas, encuestas, análisis de comportamiento (Hotjar, Clarity), tests de usabilidad.\n**Design Systems** Creación y mantenimiento de sistemas escalables.\n**Data Analysis** Google Analytics, Amplitude, Looker Studio.\n\nHerramientas: Figma, Hotjar, Mixpanel, Google Analytics, Jira.\nIdiomas: Español y Catalán (nativos), Inglés (profesional), Alemán (básico).`,
      ca: `Les meves especialitats principals\n\n**Growth i CRO** Disseny orientat a conversió, A/B testing, experiments a escala.\n**UX Research** Entrevistes, enquestes, anàlisi de comportament, tests d'usabilitat.\n**Design Systems** Creació i manteniment de sistemes escalables.\n**Data Analysis** Google Analytics, Amplitude, Looker Studio.\n\nEines: Figma, Hotjar, Mixpanel, Google Analytics, Jira.`,
      en: `My main specialisms\n\n**Growth and CRO** Conversion-oriented design, A/B testing, experiments at scale.\n**UX Research** Interviews, surveys, behavioural analysis (Hotjar, Clarity), usability testing.\n**Design Systems** Building and maintaining scalable systems.\n**Data Analysis** Google Analytics, Amplitude, Looker Studio.\n\nTools: Figma, Hotjar, Mixpanel, Google Analytics, Jira.\nLanguages: Spanish and Catalan (native), English (professional), German (basic).`
    }
  },

  // ── EDUCACIÓN ──────────────────────────────────────────────
  {
    id: 'education',
    triggers: ['educacion', 'education', 'educacio', 'formacion', 'formacio', 'estudios', 'estudis', 'universidad', 'university', 'universitat', 'master', 'titulacion', 'grado', 'degree', 'certificaciones', 'certifications', 'elisava', 'uab', 'eneb'],
    response: {
      es: `Mi formación es bastante variada, creo que se nota en cómo trabajo\n\n**Máster en Big Data, Business Intelligence y Digital Business** ENEB\n**Máster en UX Design y Creatividad Audiovisual** Elisava School of Design\n**Full-stack Web Developer Bootcamp** The App Brewery\n**Grado en Comunicación Audiovisual** UAB\n\nCertificaciones: CRO, Product Analytics (Mind the Product), Hotjar Foundations, Accessibility, Mobile UX (IxDF), Responsive Web Design (freeCodeCamp), Python AI Development (Mimo).`,
      ca: `La meva formació és bastant variada, crec que es nota en com treballo\n\n**Màster en Big Data, Business Intelligence i Digital Business** ENEB\n**Màster en UX Design i Creativitat Audiovisual** Elisava School of Design\n**Full-stack Web Developer Bootcamp** The App Brewery\n**Grau en Comunicació Audiovisual** UAB\n\nCertificacions: CRO, Product Analytics, Hotjar, Accessibility, Mobile UX (IxDF).`,
      en: `My background is pretty varied, which I think shows in how I work\n\n**Master's in Big Data, Business Intelligence and Digital Business** ENEB\n**Master's in UX Design and Audiovisual Creativity** Elisava School of Design\n**Full-stack Web Developer Bootcamp** The App Brewery (yes, I can code)\n**Degree in Audiovisual Communication** UAB\n\nCertifications: CRO, Product Analytics (Mind the Product), Hotjar Foundations, Accessibility, Mobile UX (IxDF), Python AI Development (Mimo).`
    }
  },

  // ── DISPONIBILIDAD ─────────────────────────────────────────
  {
    id: 'availability',
    triggers: ['disponible', 'available', 'disponibilitat', 'job', 'feina', 'oportunidad', 'opportunity', 'oportunitat', 'hiring', 'contractar', 'looking for work', 'open to work', 'abierto a', 'obert a', 'buscando trabajo', 'estas buscando', 'are you looking', 'new role', 'nuevo trabajo'],
    response: {
      es: `Sí, estoy abierto a nuevas oportunidades\n\nBusco roles de Senior Product Designer o Lead Designer en empresas donde el diseño tenga impacto real en el negocio, no solo en los decks de presentación.\n\nSectores de interés: Travel Tech, E-commerce, Fintech o cualquier producto digital con foco en crecimiento y experimentación.\n\nEscríbeme a oscardenamiel@gmail.com o conéctate en linkedin.com/in/oscardenamiel. Suelo responder en el día.`,
      ca: `Sí, estic obert a noves oportunitats\n\nBusco rols de Senior Product Designer o Lead Designer en empreses on el disseny tingui impacte real en el negoci.\n\nSectors d'interès: Travel Tech, E-commerce, Fintech o qualsevol producte digital amb focus en creixement.\n\nEscriu-me a oscardenamiel@gmail.com o connecta't a linkedin.com/in/oscardenamiel.`,
      en: `Yes, I'm open to new opportunities\n\nI'm looking for Senior Product Designer or Lead Designer roles at companies where design has real business impact, not just in presentation decks.\n\nAreas of interest: Travel Tech, E-commerce, Fintech or any digital product focused on growth and experimentation.\n\nReach me at oscardenamiel@gmail.com or connect on linkedin.com/in/oscardenamiel. I usually reply the same day.`
    },
    followup: {
      es: `  Si quieres ver el trabajo antes de escribirme, los case studies estan en el portfolio.`,
      ca: `  Si vols veure el treball abans d'escriure'm, els case studies son al portfolio.`,
      en: `  If you want to see the work first, all case studies are on the portfolio.`
    },
    suggestions: {
      es: [
        { label: 'Ver mis proyectos', id: 'projects-overview' },
        { label: 'Descargar CV', id: 'cv-download' },
        { label: 'Contactar directamente', id: 'contact' }
      ],
      ca: [
        { label: 'Veure els meus projectes', id: 'projects-overview' },
        { label: 'Descarregar CV', id: 'cv-download' },
        { label: 'Contactar directament', id: 'contact' }
      ],
      en: [
        { label: 'See my projects', id: 'projects-overview' },
        { label: 'Download CV', id: 'cv-download' },
        { label: 'Contact directly', id: 'contact' }
      ]
    },
  },

  // ── REMOTO / PRESENCIAL ────────────────────────────────────
  {
    id: 'remote-hybrid',
    triggers: ['remoto', 'remote', 'hibrido', 'hybrid', 'presencial', 'on-site', 'onsite', 'relocate', 'reubicacion', 'relocation', 'oficina', 'office', 'donde trabajas', 'where do you work', 'trabajo remoto'],
    response: {
      es: `Actualmente trabajo en formato híbrido desde Barcelona. Estoy abierto a remoto, híbrido o presencial según la empresa y el proyecto.\n\nNo descarto reubicación para la oportunidad correcta, aunque Barcelona es mi base. Para roles 100% remotos estoy disponible desde cualquier lugar.`,
      ca: `Actualment treballo en format híbrid des de Barcelona. Estic obert a remot, híbrid o presencial segons l'empresa i el projecte.\n\nNo descarto reubicació per a l'oportunitat correcta, tot i que Barcelona és la meva base.`,
      en: `I currently work hybrid from Barcelona. I'm open to remote, hybrid or on-site depending on the company and project.\n\nI wouldn't rule out relocation for the right opportunity, though Barcelona is my base. For fully remote roles I'm available from anywhere.`
    }
  },

  // ── SALARIO ────────────────────────────────────────────────
  {
    id: 'salary',
    triggers: ['salario', 'salary', 'sou', 'sueldo', 'compensacion', 'compensation', 'cuanto cobras', 'how much', 'rate', 'tarifa', 'expectativas salariales', 'salary expectations'],
    response: {
      es: `Es un tema que prefiero tratar directamente en conversación, ya que depende mucho del rol, la empresa y el contexto.\n\nSi quieres hablar de esto en detalle, escríbeme a oscardenamiel@gmail.com o en LinkedIn y lo vemos.`,
      ca: `És un tema que prefereixo tractar directament en conversa, ja que depèn molt del rol, l'empresa i el context.\n\nSi vols parlar-ne en detall, escriu-me a oscardenamiel@gmail.com o a LinkedIn.`,
      en: `It's something I prefer to discuss directly in conversation, as it depends a lot on the role, company and context.\n\nIf you want to talk about it in detail, drop me an email at oscardenamiel@gmail.com or reach out on LinkedIn.`
    }
  },

  // ── CONTACTO ───────────────────────────────────────────────
  {
    id: 'contact',
    triggers: ['contacto', 'contact', 'contacte', 'email', 'correo', 'linkedin', 'whatsapp', 'hablar', 'talk', 'parlar', 'reunion', 'meeting', 'llamada', 'call', 'escribir', 'write', 'get in touch', 'reach you', 'como te contacto', 'how to contact'],
    response: {
      es: `Puedes encontrarme en\n\n📧 oscardenamiel@gmail.com\n💼 linkedin.com/in/oscardenamiel\n💬 wa.link/92htwm\n\nEstoy en Barcelona (CET). Para calls o reuniones, el email o LinkedIn son la mejor vía para coordinar.`,
      ca: `Pots trobar-me a\n\n📧 oscardenamiel@gmail.com\n💼 linkedin.com/in/oscardenamiel\n💬 wa.link/92htwm\n\nSoc a Barcelona (CET).`,
      en: `You can find me at\n\n📧 oscardenamiel@gmail.com\n💼 linkedin.com/in/oscardenamiel\n💬 wa.link/92htwm\n\nI'm in Barcelona (CET). For calls or meetings, email or LinkedIn are the best way to coordinate.`
    }
  },

  // ── CV ─────────────────────────────────────────────────────
  {
    id: 'cv-download',
    triggers: ['cv', 'resume', 'curriculum', 'descargar', 'download', 'descarregar', 'pdf', 'download cv', 'descargar cv', 'get cv'],
    response: {
      es: `Aquí tienes mi CV\n\n<a href="https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF" class="text-link" target="_blank">Descargar CV en PDF</a>\n\nTambién puedes verlo en LinkedIn: linkedin.com/in/oscardenamiel`,
      ca: `Aquí tens el meu CV\n\n<a href="https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF" class="text-link" target="_blank">Descarregar CV en PDF</a>\n\nTambé pots veure'l a LinkedIn: linkedin.com/in/oscardenamiel`,
      en: `Here's my CV\n\n<a href="https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF" class="text-link" target="_blank">Download CV as PDF</a>\n\nYou can also view it on LinkedIn: linkedin.com/in/oscardenamiel`
    }
  },

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

  // ── IMPACTO / MÉTRICAS ─────────────────────────────────────
  {
    id: 'impact',
    triggers: ['impacto', 'impact', 'impacte', 'resultados', 'results', 'resultats', 'metricas', 'metrics', 'logros', 'achievements', 'kpis', 'numeros', 'numbers', 'datos', 'data driven'],
    response: {
      es: `Algunos números de los que estoy contento\n\n→ +43% duración de sesión en el mapa\n→ +25% CVR map-to-booking\n→ +7% beneficio diario en mobile\n→ -17% contactos de soporte por reserva\n→ -40% tiempo de búsqueda\n→ +8% retención de clientes\n→ 3M+ usuarios impactados\n→ 100+ experimentos validados\n\nTodos estos datos están en los case studies con el contexto completo.`,
      ca: `Alguns números dels quals estic content\n\n→ +43% durada de sessió al mapa\n→ +25% CVR map-to-booking\n→ +7% benefici diari en mòbil\n→ -17% contactes de suport per reserva\n→ -40% temps de cerca\n→ +8% retenció de clients\n→ 3M+ usuaris impactats\n→ 100+ experiments validats`,
      en: `Some numbers I'm happy with\n\n→ +43% session duration on the map\n→ +25% map-to-booking CVR\n→ +7% daily profit on mobile\n→ -17% support contacts per booking\n→ -40% search time\n→ +8% customer retention\n→ 3M+ users impacted\n→ 100+ experiments validated\n\nAll of these are in the case studies with full context.`
    }
  },

  // ── SECTORES ───────────────────────────────────────────────
  {
    id: 'industry',
    triggers: ['sector', 'industry', 'industria', 'travel tech', 'travel', 'viajes', 'viatges', 'ecommerce', 'e-commerce', 'fintech', 'startup', 'scaleup', 'que sectores', 'what industries'],
    response: {
      es: `Mi experiencia principal es en Travel Tech y E-commerce — OTAs, plataformas de reservas, e-commerce de productos físicos.\n\nLo que más me gusta de estos sectores es la presión que pone el negocio sobre el diseño. No hay espacio para diseñar bonito sin impacto real. Cada pixel tiene que ganarse su sitio.`,
      ca: `La meva experiència principal és en Travel Tech i E-commerce — OTAs, plataformes de reserves, e-commerce de productes físics.\n\nEl que més m'agrada d'aquests sectors és la pressió que posa el negoci sobre el disseny.`,
      en: `My main experience is in Travel Tech and E-commerce — OTAs, booking platforms, physical product e-commerce.\n\nWhat I like most about these sectors is the pressure the business puts on design. There's no room for designing pretty without real impact. Every pixel has to earn its place.`
    }
  },

  // ── FREELANCE ──────────────────────────────────────────────
  {
    id: 'freelance',
    triggers: ['freelance', 'colaboracion', 'collaboration', 'col-laboracio', 'consultoria', 'consulting', 'autonomo', 'autonom', 'side project', 'proyecto paralelo'],
    response: {
      es: `Dependiendo del proyecto y el momento, sí estoy abierto a colaboraciones\n\nMe interesan especialmente proyectos de CRO, auditorías UX o diseño de producto para startups con ambición. Escríbeme a oscardenamiel@gmail.com y lo vemos.`,
      ca: `Depenent del projecte i el moment, sí estic obert a col·laboracions\n\nM'interessen especialment projectes de CRO, auditories UX o disseny de producte per a startups amb ambició.`,
      en: `Depending on the project and timing, yes I'm open to collaborations\n\nI'm especially interested in CRO projects, UX audits or product design for ambitious startups. Drop me an email at oscardenamiel@gmail.com and let's talk.`
    }
  },

  // ── PORTFOLIO TECH STACK ───────────────────────────────────
  {
    id: 'portfolio-stack',
    triggers: ['portfolio stack', 'web stack', 'construido', 'built with', 'tecnologia', 'technology', 'vite', 'vanilla', 'vercel', 'como esta hecho', 'how is it built', 'como funciona la web', 'how does the site work', 'stack tecnico', 'tech stack', 'codigo', 'code', 'codi', 'website tech', 'que usas para la web'],
    response: {
      es: `El portfolio usa un stack mínimo — Vite 8, Vanilla JS (ES Modules), CSS puro y Vercel. Sin frameworks, sin Tailwind, sin dependencias innecesarias. Para un site de 6 páginas es exactamente lo que necesita: builds rápidos, cero overhead.\n\nPero lo más interesante es el chatbot que estás usando ahora mismo. Lo he construído yo desde cero, sin APIs externas — sin OpenAI, sin Anthropic, sin nada. Funciona con un sistema knowledge-based: un archivo con todas las respuestas que yo escribo, y una lógica de intent matching con fuzzy matching y distancia Levenshtein para tolerar errores tipográficos y variaciones de idioma.\n\nDetecta si escribes en español, catalán o inglés, recuerda el contexto de la conversación, personaliza el mensaje de bienvenida si ya has visitado antes, y trackea todo en GA4 con dimensiones custom. Coste de runtime: cero.`,
      ca: `El portfolio usa un stack mínim — Vite 8, Vanilla JS (ES Modules), CSS pur i Vercel. Sense frameworks, sense Tailwind, sense dependències innecessàries. Per a un site de 6 pàgines és exactament el que necessita.\n\nPerò el més interessant és el chatbot que estàs utilitzant ara mateix. L'he construït jo des de zero, sense APIs externes — sense OpenAI, sense Anthropic, res. Funciona amb un sistema knowledge-based: un arxiu amb totes les respostes que jo escric, i una lògica d'intent matching amb fuzzy matching i distància Levenshtein per tolerar errors tipogràfics.\n\nDetecta si escrius en català, castellà o anglès, recorda el context de la conversa, personalitza el missatge de benvinguda si ja has visitat abans, i ho trackeja tot a GA4. Cost de runtime: zero.`,
      en: `The portfolio runs on a minimal stack — Vite 8, Vanilla JS (ES Modules), pure CSS and Vercel. No frameworks, no Tailwind, no unnecessary dependencies. For a 6-page site it's exactly what's needed: fast builds, zero overhead.\n\nBut the most interesting part is the chatbot you're using right now. I built it from scratch, with zero external APIs — no OpenAI, no Anthropic, nothing. It runs on a knowledge-based system: a file with all the responses I write, and intent matching logic with fuzzy matching and Levenshtein distance to handle typos and language variations.\n\nIt detects whether you write in English, Spanish or Catalan, remembers conversation context, personalises the welcome message if you've visited before, and tracks everything in GA4 with custom dimensions. Runtime cost: zero.`
    }
  },

  // ── POR QUÉ VITE ───────────────────────────────────────────
  {
    id: 'why-vite',
    triggers: ['por que vite', 'why vite', 'per que vite', 'vite vs', 'por que no react', 'why not react', 'why no framework', 'por que vanilla', 'why vanilla js', 'next js', 'nextjs', 'astro', 'por que no nextjs'],
    response: {
      es: `El portfolio es un site de contenido con 6 páginas, sin server-side data fetching y sin estado de componentes más allá del modo oscuro.\n\nReact, Next.js o Astro habrían añadido bundle size, complejidad de build e hidratación overhead con cero beneficio. Vite da desarrollo local rápido y builds de producción optimizados sin ninguno de esos costes.\n\nEl único comportamiento dinámico — las project cards renderizadas desde un data file — se maneja con una sola función renderProjects() en main.js. No se necesita virtual DOM.`,
      ca: `El portfolio és un site de contingut amb 6 pàgines, sense server-side data fetching i sense estat de components més enllà del mode fosc.\n\nReact, Next.js o Astro haurien afegit bundle size, complexitat de build i overhead d'hidratació amb zero benefici.`,
      en: `The portfolio is a content site with 6 pages, no server-side data fetching and no component state beyond dark mode.\n\nReact, Next.js or Astro would have added bundle size, build complexity and hydration overhead with zero benefit. Vite gives fast local development and optimised production builds without any of that cost.\n\nThe only dynamic behaviour — project cards rendered from a data file — is handled with a single renderProjects() function in main.js. No virtual DOM needed.`
    }
  },

  // ── POR QUÉ VANILLA CSS ────────────────────────────────────
  {
    id: 'why-vanilla-css',
    triggers: ['por que css puro', 'why plain css', 'per que css pur', 'por que no tailwind', 'why not tailwind', 'css variables', 'custom properties', 'design tokens', 'css methodology', 'sin tailwind', 'no tailwind'],
    response: {
      es: `El design system es pequeño y estable: un puñado de clases de layout, un sistema de tokens via CSS custom properties y un conjunto de patrones de componentes.\n\nTailwind habría añadido un paso de compilación y habría hecho el HTML más difícil de leer. CSS-in-JS no tiene sentido sin un framework.\n\nLas custom properties (--container-max, --text-container-max, --section-spacer...) dan los mismos beneficios de tokens que un utility framework, con cero tooling.`,
      ca: `El design system és petit i estable. Tailwind hauria afegit un pas de compilació i hauria fet l'HTML més difícil de llegir.\n\nLes custom properties donen els mateixos beneficis de tokens que un utility framework, amb zero tooling.`,
      en: `The design system is small and stable: a handful of layout classes, a token system via CSS custom properties and a set of component patterns.\n\nTailwind would have added a compiler step and made the HTML harder to read. CSS-in-JS makes no sense without a framework.\n\nCustom properties (--container-max, --text-container-max, --section-spacer...) provide the same design token benefits as a utility framework, with zero tooling.`
    }
  },

  // ── ARQUITECTURA COMPONENTES ───────────────────────────────
  {
    id: 'component-architecture',
    triggers: ['componentes', 'components', 'components', 'header', 'sidebar', 'footer', 'arquitectura', 'architecture', 'como cargas componentes', 'how do you load components', 'shared ui', 'fragmentos html', 'html fragments', 'loadcomponent'],
    response: {
      es: `Los componentes compartidos (header, sidebar, footer, bloques more-projects) se cargan en runtime con una función ligera loadComponent() via fetch. Esto evita duplicar HTML en 6 archivos manteniendo el stack sin frameworks.\n\nEl componente more-projects se selecciona automáticamente según el slug de la URL actual, mediante un objeto MORE_PROJECTS_MAP. Sin librería de routing.`,
      ca: `Els components compartits es carreguen en runtime amb una funció lleugera loadComponent() via fetch. Això evita duplicar HTML en 6 arxius mantenint l'stack sense frameworks.\n\nEl component more-projects es selecciona automàticament segons el slug de la URL actual.`,
      en: `Shared UI (header, sidebar, footer, more-projects blocks) is loaded at runtime with a lightweight loadComponent() function via fetch. This avoids duplicating HTML across 6 files while keeping the stack framework-free.\n\nThe more-projects component is selected automatically based on the current URL slug, via a MORE_PROJECTS_MAP object — no routing library required.`
    }
  },

  // ── DARK MODE ──────────────────────────────────────────────
  {
    id: 'dark-mode',
    triggers: ['dark mode', 'modo oscuro', 'mode fosc', 'dark theme', 'tema oscuro', 'darkmode', 'como funciona el dark mode', 'how does dark mode work', 'light mode', 'theme toggle'],
    response: {
      es: `El dark mode está implementado via una clase .dark-mode en el body, activada por darkMode.js con persistencia en localStorage. Todos los tokens de color están definidos dos veces en :root y body.dark-mode, así todo el tema cambia con un solo cambio de clase.\n\nCuriosamente, el portfolio siempre usa dark mode — es el modo base. La arquitectura permite añadir un light mode fácilmente si se necesitara.`,
      ca: `El dark mode està implementat via una classe .dark-mode al body, activada per darkMode.js amb persistència a localStorage. Tots els tokens de color estan definits dues vegades.`,
      en: `Dark mode is implemented via a .dark-mode class on the body, toggled by darkMode.js with localStorage persistence. All colour tokens are defined twice in :root and body.dark-mode, so the entire theme switches with a single class change.\n\nInterestingly, the portfolio always uses dark mode — it's the base mode. The architecture makes adding a light mode easy if ever needed.`
    }
  },

  // ── SCROLL REVEAL ──────────────────────────────────────────
  {
    id: 'scroll-reveal',
    triggers: ['animaciones', 'animations', 'animacions', 'scroll reveal', 'scroll animation', 'intersection observer', 'reveal', 'animate on scroll', 'como funcionan las animaciones', 'how do animations work'],
    response: {
      es: `Las secciones se animan al hacer scroll usando un único IntersectionObserver en scrollManager.js. El observer añade una clase .visible, el CSS maneja la transición. El threshold y rootMargin se ajustan según el viewport para evitar que las animaciones se disparen demasiado pronto en móvil.\n\nLas animaciones respetan prefers-reduced-motion — si el usuario tiene activada esa preferencia, no se anima nada.`,
      ca: `Les seccions s'animen al fer scroll usant un únic IntersectionObserver a scrollManager.js. L'observer afegeix una classe .visible, el CSS gestiona la transició.\n\nLes animacions respecten prefers-reduced-motion.`,
      en: `Sections animate in on scroll using a single IntersectionObserver in scrollManager.js. The observer adds a .visible class, CSS handles the transition. Threshold and rootMargin are adjusted per viewport to avoid animations triggering too early on mobile.\n\nAnimations respect prefers-reduced-motion — if the user has that preference enabled, nothing animates.`
    }
  },

  // ── PERFORMANCE ────────────────────────────────────────────
  {
    id: 'performance',
    triggers: ['performance', 'rendimiento', 'rendiment', 'velocidad', 'speed', 'velocitat', 'optimizacion', 'optimization', 'core web vitals', 'webp', 'lazy loading', 'fonts', 'lighthouse', 'como optimizas', 'how do you optimize'],
    response: {
      es: `Algunas decisiones de performance que tomé en el portfolio\n\n→ 25 archivos de fuentes eliminados (Inter, SpotifyMix, TWKLausanne — no se usaban)\n→ Imágenes servidas como .webp\n→ Archivos de audio con preload="none" — se cargan solo al interactuar\n→ Primera project card con loading="eager" + fetchpriority="high", el resto lazy\n→ font-display: swap via Google Fonts\n→ Vercel edge CDN para entrega global de assets`,
      ca: `Algunes decisions de performance que vaig prendre al portfolio\n\n→ 25 arxius de fonts eliminats\n→ Imatges servides com a .webp\n→ Arxius d'àudio amb preload="none"\n→ Primera project card amb loading="eager"\n→ Vercel edge CDN`,
      en: `Some performance decisions I made on the portfolio\n\n→ 25 unused font files removed (Inter, SpotifyMix, TWKLausanne)\n→ Images served as .webp\n→ Project audio files with preload="none" — loaded only on user interaction\n→ First project card with loading="eager" + fetchpriority="high", rest are lazy\n→ font-display: swap via Google Fonts\n→ Vercel edge CDN for global asset delivery`
    }
  },

  // ── SEO ────────────────────────────────────────────────────
  {
    id: 'seo',
    triggers: ['seo', 'search engine', 'google', 'indexacion', 'indexation', 'sitemap', 'meta tags', 'og tags', 'open graph', 'canonical', 'robots', 'search console', 'como esta el seo', 'how is the seo'],
    response: {
      es: `El portfolio tiene SEO bien configurado\n\n→ Título, meta description y og:* únicos por página\n→ URLs canónicas sin extensión .html\n→ sitemap.xml con 6 URLs y prioridades\n→ robots.txt apuntando al sitemap\n→ Google Search Console verificado\n\nCada página tiene su propio og:image optimizado para compartir en redes sociales.`,
      ca: `El portfolio té SEO ben configurat\n\n→ Títol, meta description i og:* únics per pàgina\n→ URLs canòniques sense extensió .html\n→ sitemap.xml amb 6 URLs i prioritats\n→ robots.txt apuntant al sitemap\n→ Google Search Console verificat`,
      en: `The portfolio has solid SEO setup\n\n→ Unique title, meta description and og:* tags per page\n→ Canonical URLs without .html extension\n→ sitemap.xml with 6 URLs and priorities\n→ robots.txt pointing to sitemap\n→ Google Search Console verified\n\nEach page has its own optimised og:image for social sharing.`
    }
  },

  // ── ACCESIBILIDAD ──────────────────────────────────────────
  {
    id: 'accessibility',
    triggers: ['accesibilidad', 'accessibility', 'accessibilitat', 'wcag', 'a11y', 'aria', 'contraste', 'contrast', 'screen reader', 'lector pantalla', 'como es la accesibilidad', 'how accessible'],
    response: {
      es: `El portfolio cumple WCAG AA en lo esencial\n\n→ Contraste de color ≥ 4.5:1 para todo el texto body\n→ aria-label en todos los botones con iconos\n→ Jerarquía semántica de headings (h1 → h2 → h3)\n→ prefers-reduced-motion respetado para las animaciones de blob\n→ scroll-behavior: smooth solo cuando el movimiento no está reducido`,
      ca: `El portfolio compleix WCAG AA en l'essencial\n\n→ Contrast de color ≥ 4.5:1 per a tot el text body\n→ aria-label a tots els botons amb icones\n→ Jerarquia semàntica de headings\n→ prefers-reduced-motion respectat`,
      en: `The portfolio meets WCAG AA on the essentials\n\n→ Colour contrast ≥ 4.5:1 for all body text\n→ aria-label on all icon buttons\n→ Semantic HTML headings hierarchy (h1 → h2 → h3)\n→ prefers-reduced-motion respected for blob animations\n→ scroll-behavior: smooth only applied when motion is not reduced`
    }
  },

  // ── DEPLOY / VERCEL ────────────────────────────────────────
  {
    id: 'deploy',
    triggers: ['deploy', 'despliegue', 'desplegament', 'vercel', 'hosting', 'como despliegas', 'how do you deploy', 'ci cd', 'cicd', 'git push', 'github', 'production', 'produccion'],
    response: {
      es: `El portfolio está hosteado en Vercel con deploys automáticos conectados a GitHub.\n\nCada push a main dispara un deploy de producción automático — sin pasos manuales. Vercel también genera una URL de preview para cada commit, útil para revisar cambios antes de que lleguen a producción.\n\nEl proceso completo: git add . → git commit → git push → Vercel despliega en ~30 segundos.`,
      ca: `El portfolio està hostatjat a Vercel amb deploys automàtics connectats a GitHub.\n\nCada push a main dispara un deploy de producció automàtic. Vercel també genera una URL de preview per a cada commit.\n\nEl procés complet: git add . → git commit → git push → Vercel desplega en ~30 segons.`,
      en: `The portfolio is hosted on Vercel with automatic deploys connected to GitHub.\n\nEvery push to main triggers an automatic production deploy — no manual steps. Vercel also generates a preview URL for each commit, useful for reviewing changes before they hit production.\n\nFull process: git add . → git commit → git push → Vercel deploys in ~30 seconds.`
    }
  },

  // ── CAROUSELS ──────────────────────────────────────────────
  {
    id: 'carousels',
    triggers: ['carousel', 'carrusel', 'carrusel', 'slider', 'scroll snap', 'horizontal scroll', 'swipe', 'como funcionan los carousels', 'how do carousels work'],
    response: {
      es: `Los carousels usan CSS scroll snap + overflow horizontal en mobile, con controles JS para la navegación. La implementación usa márgenes negativos para romper el padding del contenedor manteniendo la primera tarjeta alineada con el contenido de la página — sin trucos de 100vw que rompen con overflow: hidden.\n\nCada carousel es configurable via data attributes: data-cols-mobile, data-cols-tablet, data-cols-desktop. En desktop con data-cols-desktop="fit" se convierte en un grid sin scroll.`,
      ca: `Els carousels usen CSS scroll snap + overflow horitzontal en mòbil, amb controls JS per a la navegació.\n\nCada carousel és configurable via data attributes.`,
      en: `Carousels use CSS scroll snap + horizontal overflow on mobile, with JS carousel controls for navigation. The implementation uses negative margins to break out of the container padding while keeping the first card visually aligned with the page content — no 100vw tricks that break with overflow: hidden.\n\nEach carousel is configurable via data attributes: data-cols-mobile, data-cols-tablet, data-cols-desktop. In desktop with data-cols-desktop="fit" it becomes a grid without scroll.`
    }
  },

  // ── CHATBOT ────────────────────────────────────────────────
  {
    id: 'chatbot',
    triggers: ['chatbot', 'chat', 'este chat', 'this chat', 'como funciona el chat', 'how does the chat work', 'como esta hecho el chatbot', 'how is the chatbot built', 'ai chat', 'inteligencia artificial', 'artificial intelligence', 'knowledge base', 'base de conocimiento'],
    response: {
      es: `Lo construí yo desde cero, sin APIs externas — sin OpenAI, sin Anthropic, sin coste de runtime.\n\nPor dentro funciona con un sistema knowledge-based: todas las respuestas las escribo yo, y un motor de intent matching con fuzzy matching y distancia Levenshtein encuentra la mejor según lo que escribes, tolerando errores tipográficos y variaciones de idioma. Detecta si escribes en español, catalán o inglés en el primer mensaje y lo recuerda para toda la sesión.\n\nTambién tiene memoria entre sesiones — si ya visitaste antes, el mensaje de bienvenida cambia según lo que viste. El contexto de conversación se guarda en sessionStorage mientras navegas entre páginas, y se borra al cerrar la pestaña.\n\nY trackea todo en GA4 con dimensiones custom: qué buscan los usuarios, qué no encuentra respuesta, qué respuestas marcan como útiles. Así mejoro el sistema con datos reales.`,
      ca: `El vaig construir jo des de zero, sense APIs externes — sense OpenAI, sense Anthropic, sense cost de runtime.\n\nPer dins funciona amb un sistema knowledge-based: totes les respostes les escric jo, i un motor d'intent matching amb fuzzy matching i distància Levenshtein troba la millor segons el que escrius, tolerant errors tipogràfics i variacions d'idioma. Detecta si escrius en català, castellà o anglès al primer missatge i ho recorda per a tota la sessió.\n\nTambé té memòria entre sessions — si ja has visitat abans, el missatge de benvinguda canvia segons el que vas veure. El context de conversa es guarda a sessionStorage mentre navegues entre pàgines, i s'esborra en tancar la pestanya.\n\nI ho trackeja tot a GA4 amb dimensions custom: què busquen els usuaris, què no troba resposta, quines respostes marquen com a útils. Així milloro el sistema amb dades reals.`,
      en: `I built it from scratch, with zero external APIs — no OpenAI, no Anthropic, no runtime cost.\n\nUnder the hood it runs on a knowledge-based system: all the responses are written by me, and an intent matching engine with fuzzy matching and Levenshtein distance finds the best one based on what you type, handling typos and language variations. It detects whether you write in English, Spanish or Catalan on the first message and remembers it for the whole session.\n\nIt also has cross-session memory — if you've visited before, the welcome message changes based on what you looked at. Conversation context is saved in sessionStorage as you navigate between pages, and clears when you close the tab.\n\nEverything is tracked in GA4 with custom dimensions: what users search for, what finds no answer, which responses get marked as helpful. That's how I improve the system with real data.`
    }
  },

  // ── ESTRUCTURA DEL PROYECTO ────────────────────────────────
  {
    id: 'project-structure',
    triggers: ['estructura', 'structure', 'estructura del proyecto', 'project structure', 'archivos', 'files', 'arxius', 'carpetas', 'folders', 'como esta organizado', 'how is it organised', 'src', 'public', 'components folder'],
    response: {
      es: `La estructura del portfolio es bastante limpia\n\n**public/components/** Fragmentos HTML compartidos (header, sidebar, footer, more-projects)\n**src/data/** projects.js y chatbot-kb.js\n**src/js/** chatbot.js, darkMode.js, mobileMenu.js, audioManager.js, scrollManager.js\n**src/** main.js, style.css, chatbot.css\n**Raíz/** Las 6 páginas HTML + vite.config.js\n\nEl project-template.html en la raíz es una plantilla de referencia con los 14 patrones de secciones documentados.`,
      ca: `L'estructura del portfolio és bastant neta\n\n**public/components/** Fragments HTML compartits\n**src/data/** projects.js i chatbot-kb.js\n**src/js/** chatbot.js, darkMode.js, mobileMenu.js, audioManager.js, scrollManager.js\n**src/** main.js, style.css, chatbot.css\n**Arrel/** Les 6 pàgines HTML`,
      en: `The portfolio structure is pretty clean\n\n**public/components/** Shared HTML fragments (header, sidebar, footer, more-projects)\n**src/data/** projects.js and chatbot-kb.js\n**src/js/** chatbot.js, darkMode.js, mobileMenu.js, audioManager.js, scrollManager.js\n**src/** main.js, style.css, chatbot.css\n**Root/** The 6 HTML pages + vite.config.js\n\nproject-template.html at the root is a reference template with all 14 documented section patterns.`
    }
  },

  // ── ANALYTICS ──────────────────────────────────────────────
  {
    id: 'analytics',
    triggers: ['analytics', 'analitica', 'anàlisi', 'clarity', 'microsoft clarity', 'vercel analytics', 'hotjar', 'como mides', 'how do you measure', 'tracking', 'sessions', 'heatmaps', 'recordings'],
    response: {
      es: `El portfolio usa dos herramientas de analytics\n\n**Vercel Analytics** Datos cuantitativos: páginas vistas, visitantes únicos, países, dispositivos. Sin cookies, GDPR-friendly.\n**Microsoft Clarity** Grabaciones de sesión y heatmaps. Muy útil para entender cómo se navega el portfolio en detalle.\n\nEn los proyectos de Stayforlong también uso Amplitude para análisis de funnel y Hotjar para análisis de comportamiento.`,
      ca: `El portfolio usa dues eines d'analytics\n\n**Vercel Analytics** Dades quantitatives sense cookies.\n**Microsoft Clarity** Gravacions de sessió i heatmaps.\n\nEls projectes de Stayforlong també usen Amplitude i Hotjar.`,
      en: `The portfolio uses two analytics tools\n\n**Vercel Analytics** Quantitative data: page views, unique visitors, countries, devices. Cookie-free, GDPR-friendly.\n**Microsoft Clarity** Session recordings and heatmaps. Very useful for understanding how the portfolio is actually navigated.\n\nOn Stayforlong projects I also use Amplitude for funnel analysis and Hotjar for behavioural analysis.`
    }
  },

  // ── PATRONES DE DISEÑO / CSS ────────────────────────────────
  {
    id: 'css-patterns',
    triggers: ['patrones', 'patterns', 'css patterns', 'section patterns', 'patron', 'pattern', 'como documentas', 'how do you document', 'project template', 'plantilla', 'template', 'design tokens', 'tokens', 'variables css'],
    response: {
      es: `Cada tipo de sección en un case study está documentado como un patrón numerado (PATRÓN 1–14) en project-template.html. Cada patrón tiene reglas explícitas de espaciado, animación, tipografía y comportamiento responsive.\n\nEsto hace que añadir nuevos case studies sea consistente y rápido — sabes exactamente qué clase usar y cómo estructurar cada bloque sin pensar.`,
      ca: `Cada tipus de secció en un case study està documentat com un patró numerat (PATRÓ 1–14) a project-template.html. Cada patró té regles explícites.\n\nAixò fa que afegir nous case studies sigui consistent i ràpid.`,
      en: `Every section type in a case study is documented as a numbered pattern (PATRÓN 1–14) in project-template.html. Each pattern has explicit rules for spacing, animation, typography and responsive behaviour.\n\nThis makes adding new case studies consistent and fast — you know exactly what class to use and how to structure each block without having to think about it.`
    }
  },

  // ── DIFERENCIACIÓN / PROPUESTA DE VALOR ───────────────────
  {
    id: 'differentiator',
    triggers: ['que te diferencia', 'what makes you different', 'que t\'diferencia', 'diferenciacion', 'differentiation', 'diferencia', 'unique', 'especial', 'por que tu', 'why you', 'per que tu', 'valor anadido', 'added value', 'valor afegit', 'perfil unico', 'unique profile'],
    response: {
      es: `Lo que me diferencia de otros diseñadores es la combinación de datos y negocio.\n\nTengo background de Data Analysis y he trabajado casi más como Product Manager que como diseñador en algunas etapas — eso me da una perspectiva que la mayoría de diseñadores no tienen. No diseño para que quede bien, diseño para que funcione y para que el negocio lo note.\n\nTambién hice un bootcamp de full-stack development, lo que me permite hablar el mismo idioma que ingeniería y hacer handoffs mucho más precisos y eficientes.`,
      ca: `El que em diferencia d'altres dissenyadors és la combinació de dades i negoci.\n\nTinc background de Data Analysis i he treballat gairebé més com a Product Manager que com a dissenyador en algunes etapes — això em dona una perspectiva que la majoria de dissenyadors no tenen.\n\nTambé vaig fer un bootcamp de full-stack development, cosa que em permet parlar el mateix idioma que enginyeria.`,
      en: `What sets me apart from other designers is the combination of data and business.\n\nI have a Data Analysis background and in some roles I worked more like a Product Manager than a designer — that gives me a perspective most designers don't have. I don't design for it to look good, I design for it to work and for the business to feel it.\n\nI also did a full-stack development bootcamp, which lets me speak engineering's language and deliver much more precise, efficient handoffs.`
    }
  },

  // ── FORTALEZAS Y DEBILIDADES ───────────────────────────────
  {
    id: 'strengths-weaknesses',
    triggers: ['fortaleza', 'strength', 'fortalesa', 'debilidad', 'weakness', 'debilitat', 'mejor en', 'best at', 'millor en', 'peor en', 'worst at', 'pitjor en', 'areas de mejora', 'areas of improvement', 'arees de millora', 'puntos fuertes', 'strong points', 'punts forts'],
    response: {
      es: `Mi mayor fortaleza es el research. Si no tengo datos, los genero — planes de investigación profundos que combinan qual y quant para hacer un scope correcto del problema antes de tocar Figma.\n\nMi área de mejora es la UI visual. Siempre me he apoyado en diseñadores gráficos, herramientas de vibe design o vibe coding para dar ese salto de calidad final. He mejorado mucho con los años y sigo mejorando, pero es honesto reconocerlo.`,
      ca: `La meva major fortalesa és el research. Si no tinc dades, les genero — plans d'investigació profunds que combinen qual i quant per fer un scope correcte del problema abans de tocar Figma.\n\nLa meva àrea de millora és la UI visual. Sempre m'he recolzat en dissenyadors gràfics, eines de vibe design o vibe coding per donar aquell salt de qualitat final. He millorat molt amb els anys i continuo millorant.`,
      en: `My biggest strength is research. If I don't have data, I generate it — deep research plans that combine qual and quant to properly scope the problem before touching Figma.\n\nMy area for improvement is visual UI. I've always leaned on graphic designers, vibe design or vibe coding tools to get that final quality jump. I've improved a lot over the years and I'm still improving — but it's honest to acknowledge it.`
    }
  },

  // ── RELACIÓN CON INGENIERÍA ────────────────────────────────
  {
    id: 'engineering-relationship',
    triggers: ['ingenieria', 'engineering', 'enginyeria', 'desarrolladores', 'developers', 'desenvolupadors', 'handoff', 'hand-off', 'relacion con dev', 'relationship with dev', 'relacio amb dev', 'trabajo con devs', 'work with devs', 'treballes amb devs', 'full stack', 'codigo', 'code', 'programar', 'coding'],
    response: {
      es: `Mi relación con ingeniería es muy cercana, con comunicación constante. Hice un bootcamp de full-stack development, lo que me permite hablar su idioma y entender los trade-offs técnicos antes de proponer soluciones.\n\nEstoy obsesionado con perfeccionar los handoffs. Con IA he mejorado mucho: archivos MD con reglas del Design System, uso de variables en todos los aspectos del diseño, reuniones de handoff estructuradas. La clave es la comunicación constante para detectar trade-offs pronto y tener la agilidad de plantear ajustes incrementales sin bloquear el desarrollo.`,
      ca: `La meva relació amb enginyeria és molt propera, amb comunicació constant. Vaig fer un bootcamp de full-stack development, cosa que em permet parlar el seu idioma i entendre els trade-offs tècnics.\n\nEstic obsessionat amb perfeccionar els handoffs. Amb IA he millorat molt: arxius MD amb regles del Design System, ús de variables en tots els aspectes del disseny, reunions de handoff estructurades.`,
      en: `My relationship with engineering is very close, with constant communication. I did a full-stack development bootcamp, which lets me speak their language and understand technical trade-offs before proposing solutions.\n\nI'm obsessed with perfecting handoffs. AI has helped a lot: MD files with Design System rules, variables across all aspects of the design, structured handoff meetings. The key is constant communication to catch trade-offs early and have the agility to propose incremental adjustments without blocking development.`
    }
  },

  // ── EMPRESA IDEAL ──────────────────────────────────────────
  {
    id: 'ideal-company',
    triggers: ['empresa ideal', 'ideal company', 'empresa ideal', 'que buscas', 'what are you looking for', 'que busques', 'tipo de empresa', 'type of company', 'tipus d\'empresa', 'cultura empresa', 'company culture', 'cultura empresa', 'entorno ideal', 'ideal environment', 'entorn ideal'],
    response: {
      es: `Mi empresa ideal sería una top tech en Travel, E-commerce o Retail donde producto tenga autonomía real para tomar decisiones y la UX se posicione como herramienta estratégica, no como servicio de entrega de pantallas.\n\nNo me cierro por tamaño ni seniority del equipo, pero sí es clave que la empresa entienda el valor del diseño y su impacto en negocio. Si no lo entienden, mi trabajo no tendrá el mismo impacto.\n\nAdemás del salario, valoro mucho la flexibilidad, el trabajo remoto/flexible, la conciliación familiar y el apoyo a formación continua.`,
      ca: `La meva empresa ideal seria una top tech en Travel, E-commerce o Retail on producte tingui autonomia real per prendre decisions i la UX es posicioni com a eina estratègica.\n\nNo em tanco per mida ni seniority de l'equip, però sí que és clau que l'empresa entengui el valor del disseny i el seu impacte en negoci.\n\nA més del salari, valoro molt la flexibilitat, el treball remot/flexible, la conciliació familiar i el suport a formació contínua.`,
      en: `My ideal company would be a top tech firm in Travel, E-commerce or Retail where product has real autonomy to make decisions and UX is positioned as a strategic tool, not a screen delivery service.\n\nI'm not closed off by team size or seniority, but it's key that the company understands the value of design and its business impact. If they don't get that, my work won't have the same impact.\n\nBeyond salary, I value flexibility, remote/flexible work, work-life balance and continuous learning support a lot.`
    }
  },

  // ── QUÉ TE APASIONA ────────────────────────────────────────
  {
    id: 'passion',
    triggers: ['que te apasiona', 'what are you passionate about', 'que t\'apassiona', 'te gusta', 'you enjoy', 't\'agrada', 'que te motiva', 'what motivates you', 'que et motiva', 'pasion', 'passion', 'passio', 'te encanta', 'love doing', 't\'encanta', 'favorito', 'favorite', 'favorit'],
    response: {
      es: `Me encanta resolver problemas complejos en entornos multiculturales. Especialmente ir al detalle de interacciones muy específicas para desgranarlas y optimizarlas desde el contexto real de uso, no desde diseños estáticos.\n\nMe apasiona el formato de release notes — entregas de valor incrementales y poder medir el impacto en realtime para informar el próximo paso. Que cada decisión esté respaldada por datos y que el equipo lo vea en tiempo real es lo que más me engancha.`,
      ca: `M'encanta resoldre problemes complexos en entorns multiculturals. Especialment anar al detall d'interaccions molt específiques per desgranar-les i optimitzar-les des del context real d'ús.\n\nM'apassiona el format de release notes — entregues de valor incrementals i poder mesurar l'impacte en realtime per informar el proper pas.`,
      en: `I love solving complex problems in multicultural environments. Especially diving into the detail of very specific interactions to break them down and optimise from the real context of use, not from static designs.\n\nI'm passionate about the release notes format — incremental value delivery and being able to measure impact in realtime to inform the next step. Having every decision backed by data that the team can see in real time is what really hooks me.`
    }
  },

  // ── RELACIÓN CON STAKEHOLDERS / TRABAJO EN EQUIPO ─────────
  {
    id: 'teamwork',
    triggers: ['trabajo en equipo', 'teamwork', 'treball en equip', 'stakeholders', 'colaboracion', 'collaboration', 'col·laboracio', 'cross-functional', 'multidisciplinar', 'multidisciplinary', 'conflicto', 'conflict', 'conflicte', 'desacuerdo', 'disagreement', 'desacord', 'liderazgo', 'leadership', 'lideratge'],
    response: {
      es: `Me encanta trabajar en equipo y crear sinergias en cross-functional teams. De esas conversaciones entre stakeholders que normalmente no trabajamos juntos es de donde sale el verdadero valor en una empresa.\n\nCuando hay desacuerdo en una decisión de diseño, mi enfoque es siempre volver a los datos y al usuario. Si no hay datos suficientes, propongo generarlos antes de decidir. Raramente el problema es de opiniones — casi siempre es de falta de contexto compartido.`,
      ca: `M'encanta treballar en equip i crear sinergies en cross-functional teams. D'aquestes converses entre stakeholders que normalment no treballem junts és d'on surt el veritable valor en una empresa.\n\nQuan hi ha desacord en una decisió de disseny, el meu enfocament és sempre tornar a les dades i a l'usuari.`,
      en: `I love working in teams and creating synergies in cross-functional setups. The real value in a company comes from those conversations between stakeholders who don't usually work together.\n\nWhen there's disagreement on a design decision, my approach is always to go back to data and the user. If there's not enough data, I propose generating it before deciding. The problem is rarely about opinions — it's almost always about a lack of shared context.`
    }
  },

  // ── APRENDIZAJE ACTUAL / IA ────────────────────────────────
  {
    id: 'learning-now',
    triggers: ['aprendiendo', 'learning', 'aprenent', 'ahora mismo', 'right now', 'ara mateix', 'formacion', 'training', 'formacio', 'ia', 'ai', 'inteligencia artificial', 'artificial intelligence', 'python', 'sql', 'datos', 'data', 'dades', 'vibe coding', 'vibe design', 'design system ai', 'ai ready'],
    response: {
      es: `Ahora mismo estoy muy centrado en dos cosas.\n\nPor un lado, optimizar workflows con IA para mejorar el handoff a desarrollo — he aprendido a estructurar y documentar Design Systems de forma que sean robustos para trabajar con IA y generar prototipos funcionales más rápido y con mayor calidad.\n\nPor otro lado, estoy profundizando en análisis de datos: Python, SQL, Looker Studio. Quiero ser aún más autosuficiente en la parte cuantitativa para no depender de terceros cuando necesito datos para tomar decisiones de diseño.`,
      ca: `Ara mateix estic molt centrat en dues coses.\n\nD'una banda, optimitzar workflows amb IA per millorar el handoff a desenvolupament — he après a estructurar i documentar Design Systems de manera que siguin robustos per treballar amb IA.\n\nDe l'altra, estic aprofundint en anàlisi de dades: Python, SQL, Looker Studio.`,
      en: `Right now I'm focused on two things.\n\nFirst, optimising workflows with AI to improve development handoffs — I've learned to structure and document Design Systems in a way that's robust for working with AI and generating functional prototypes faster and with higher quality.\n\nSecond, I'm deepening my data analysis knowledge: Python, SQL, Looker Studio. I want to be even more self-sufficient on the quantitative side so I don't depend on others when I need data to make design decisions.`
    }
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

  // ── NDA / CONFIDENCIALIDAD ────────────────────────────────
  {
    id: 'nda',
    triggers: ['nda', 'confidencial', 'confidential', 'confidencial', 'no puedes mostrar', 'can\'t show', 'no pots mostrar', 'datos reales', 'real data', 'dades reals', 'leadtech nda', 'datos blanqueados', 'anonymised data'],
    response: {
      es: `Algunos proyectos tienen NDA, especialmente los de Leadtech. El case study de Mobile First usa datos genéricos y diseños modificados para no revelar información real del producto en producción.\n\nEs algo habitual en la industria — lo importante es que los resultados y el proceso están documentados con fidelidad, aunque los datos específicos estén anonimizados.`,
      ca: `Alguns projectes tenen NDA, especialment els de Leadtech. El case study de Mobile First usa dades genèriques i dissenys modificats per no revelar informació real del producte en producció.\n\nÉs quelcom habitual a la indústria.`,
      en: `Some projects have NDAs, especially those at Leadtech. The Mobile First case study uses generic data and modified designs to avoid revealing real production information.\n\nThis is standard in the industry — what matters is that the results and process are faithfully documented, even if the specific numbers are anonymised.`
    }
  },

  // ── DESIGN SYSTEM / AI-READY ──────────────────────────────
  {
    id: 'design-system-ai',
    triggers: ['design system', 'sistema de diseno', 'sistema de disseny', 'ai ready', 'ai-ready', 'variables', 'tokens', 'figma variables', 'handoff', 'documentacion', 'documentation', 'documentacio', 'vibe coding', 'vibe design', 'prototipo funcional', 'functional prototype', 'prototip funcional'],
    response: {
      es: `Los Design Systems que construyo están pensados para ser AI-Ready desde el inicio. Eso implica usar variables en todos los aspectos del diseño, documentar las reglas en archivos MD estructurados y definir los componentes con suficiente contexto para que una IA o un desarrollador puedan generar código consistente.\n\nEsto ha reducido enormemente los tiempos de desarrollo y ha mejorado la consistencia entre diseño y producción. El objetivo es que el handoff sea tan claro que no haga falta una reunión para interpretarlo.`,
      ca: `Els Design Systems que construeixo estan pensats per ser AI-Ready des de l'inici. Això implica usar variables en tots els aspectes del disseny, documentar les regles en arxius MD estructurats i definir els components amb prou context per a que una IA o un desenvolupador puguin generar codi consistent.\n\nAixò ha reduït enormement els temps de desenvolupament.`,
      en: `The Design Systems I build are designed to be AI-Ready from the start. That means using variables across all aspects of the design, documenting rules in structured MD files and defining components with enough context for an AI or developer to generate consistent code.\n\nThis has massively reduced development time and improved consistency between design and production. The goal is for the handoff to be so clear that no meeting is needed to interpret it.`
    }
  },

  // ── RELEASE NOTES / ENTREGAS INCREMENTALES ────────────────
  {
    id: 'release-notes',
    triggers: ['release notes', 'entregas incrementales', 'incremental delivery', '', 'lliuraments incrementals', 'iteracion', 'iteration', 'iteracio', 'valor incremental', 'incremental value', 'valor incremental', 'medir impacto', 'measure impact', 'mesurar impacte', 'entrega continua', 'continuous delivery', 'lliurament continu'],
    response: {
      es: `El formato de release notes es algo en lo que creo mucho. En lugar de grandes lanzamientos donde es difícil aislar qué funcionó y qué no, prefiero entregas pequeñas y medibles donde puedes atribuir el impacto a un cambio concreto.\n\nEsto te permite tomar la siguiente decisión con datos reales, no con suposiciones. Y también facilita el trabajo del equipo de desarrollo — tareas más pequeñas, más manejables, con menos riesgo.\n\nEl Map Redesign en Stayforlong es el mejor ejemplo de esto aplicado: oscardenamiel.com/map`,
      ca: `El format de release notes és quelcom en el qual crec molt. En lloc de grans llançaments on és difícil aïllar què ha funcionat i què no, prefereixo lliuraments petits i mesurables.\n\nEl Map Redesign a Stayforlong és el millor exemple d'això aplicat: oscardenamiel.com/map`,
      en: `The release notes format is something I believe in strongly. Instead of big launches where it's hard to isolate what worked and what didn't, I prefer small, measurable deliveries where you can attribute impact to a specific change.\n\nThis lets you make the next decision with real data, not assumptions. And it also makes the development team's job easier — smaller tasks, more manageable, less risk.\n\nThe Map Redesign at Stayforlong is the best example of this in practice: oscardenamiel.com/map`
    }
  },

  // ── PERFIL HÍBRIDO DISEÑO + NEGOCIO ───────────────────────
  {
    id: 'design-business',
    triggers: ['negocio', 'business', 'negoci', 'product manager', 'pm', 'product design', 'diseno y negocio', 'design and business', 'disseny i negoci', 'estrategia', 'strategy', 'estrategia', 'impacto negocio', 'business impact', 'impacte negoci', 'kpi', 'metricas negocio', 'business metrics'],
    response: {
      es: `En algunas etapas de mi carrera he trabajado casi más como Product Manager que como diseñador — definiendo roadmaps, priorizando con el equipo, alineando stakeholders.\n\nEso me da una perspectiva de negocio que muchos diseñadores no tienen. No me basta con que el diseño sea bueno desde el punto de vista del usuario — necesito que mueva métricas de negocio. Si no puedo medir el impacto, algo ha fallado en el proceso.`,
      ca: `En algunes etapes de la meva carrera he treballat gairebé més com a Product Manager que com a dissenyador — definint roadmaps, prioritzant amb l'equip, alineant stakeholders.\n\nAixò em dona una perspectiva de negoci que molts dissenyadors no tenen.`,
      en: `In some stages of my career I've worked more like a Product Manager than a designer — defining roadmaps, prioritising with the team, aligning stakeholders.\n\nThat gives me a business perspective most designers don't have. It's not enough for the design to be good from a user perspective — I need it to move business metrics. If I can't measure the impact, something has gone wrong in the process.`
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

  // ── POR QUÉ DEJARÍAS STAYFORLONG ──────────────────────────
  {
    id: 'why-leave',
    triggers: ['por que dejarias', 'why would you leave', 'per que deixaries', 'por que cambias', 'why are you leaving', 'por que buscas trabajo', 'why looking for a job', 'que te hizo buscar', 'what made you look'],
    response: {
      es: `Stayforlong es exactamente el tipo de empresa en la que me gusta estar — la UX tiene peso real en las decisiones de producto y en el roadmap, no es solo un departamento de entrega de pantallas.\n\nDicho esto, me movería por un reto que me motivara más: un sector diferente, un rol con más alcance, o una empresa donde el impacto potencial fuera mayor. Pero el requisito es innegociable: que el diseño de producto esté a la altura del C-Level y la dirección estratégica. Si no es así, mi trabajo no tendrá el mismo impacto y no tendría sentido el cambio.`,
      ca: `Stayforlong és exactament el tipus d'empresa en la qual m'agrada estar — la UX té pes real en les decisions de producte i en el roadmap.\n\nDit això, em mouria per un repte que em motivés més: un sector diferent, un rol amb més abast, o una empresa on l'impacte potencial fos major. Però el requisit és innegociable: que el disseny de producte estigui a l'alçada del C-Level.`,
      en: `Stayforlong is exactly the kind of company I want to be at — UX has real weight in product decisions and roadmap, it's not just a screen delivery department.\n\nThat said, I'd move for the right challenge: a different sector, a broader role, or a company where the potential impact is bigger. But the requirement is non-negotiable: product design needs to be at C-Level decision-making height. If it's not, my work won't have the same impact and the move wouldn't make sense.`
    }
  },

  // ── MAYOR LOGRO PROFESIONAL ───────────────────────────────
  {
    id: 'biggest-achievement',
    triggers: ['mayor logro', 'biggest achievement', 'major assoliment', 'logro profesional', 'professional achievement', 'de lo que mas orgulloso', 'most proud of', 'mes orgullos', 'mejor proyecto', 'best project', 'millor projecte', 'app stayforlong', 'aplicacion', 'app launch'],
    response: {
      es: `Mi mayor logro profesional hasta ahora es el lanzamiento de la app de Stayforlong.\n\nEl punto de partida fue una evaluación heurística profunda de toda la experiencia mobile web — un proceso exhaustivo que expuso las debilidades y fortalezas del producto con criterios claros. Los cambios que aplicamos en web eran casi invisibles para muchos stakeholders, incluyendo al CEO y al CTO, que en algún momento expresaron dudas. Pero cuando vimos esos mismos cambios aplicados en la app, todo tuvo sentido.\n\nGracias a ese trabajo previo, pudimos encapsular la web como Progressive Web App dentro de apps nativas para iOS y Android — una app que el usuario percibe como nativa pero que en realidad es la web optimizada, funcionando plug and play. El resultado: métricas de conversión y retención muy positivas en tiempo récord.\n\nActualmente estoy documentando este proyecto como case study para publicarlo en el portfolio.`,
      ca: `El meu major assoliment professional fins ara és el llançament de l'app de Stayforlong.\n\nEl punt de partida va ser una avaluació heurística profunda de tota l'experiència mobile web. Els canvis que vam aplicar a la web eren gairebé invisibles per a molts stakeholders, incloent el CEO i el CTO. Però quan vam veure aquests mateixos canvis aplicats a l'app, tot va tenir sentit.\n\nGràcies a aquesta feina prèvia, vam poder encapsular la web com a Progressive Web App dins d'apps natives per a iOS i Android. El resultat: mètriques de conversió i retenció molt positives en temps rècord.\n\nActualment estic documentant aquest projecte com a case study.`,
      en: `My biggest professional achievement to date is the Stayforlong app launch.\n\nThe starting point was a deep heuristic evaluation of the entire mobile web experience — a thorough process that exposed the product's weaknesses and strengths with clear criteria. The changes we applied on web were almost invisible to many stakeholders, including the CEO and CTO, who at some point expressed doubts. But when we saw those same changes applied in the app, everything clicked.\n\nThanks to that groundwork, we were able to encapsulate the web as a Progressive Web App inside native iOS and Android apps — an app that users perceive as native but is actually the optimised web, working plug and play. The result: very strong conversion and retention metrics in record time.\n\nI'm currently documenting this project as a case study to publish on the portfolio.`
    }
  },

  // ── MANEJO DE PRESIÓN Y DEADLINES ─────────────────────────
  {
    id: 'pressure-deadlines',
    triggers: ['presion', 'pressure', 'pressio', 'deadlines', 'plazo', 'terminis', 'trabajo bajo presion', 'work under pressure', 'treballes sota pressio', 'priorizar', 'prioritize', 'prioritzar', 'organizacion', 'organisation', 'organitzacio', 'gestion del tiempo', 'time management', 'gestio del temps'],
    response: {
      es: `Trabajo bien bajo presión porque tengo un sistema claro de priorización.\n\nOrganizo mi trabajo en función del impacto en los objetivos estratégicos de la empresa — las tareas que afectan a goals prioritarios van primero, siempre. Las secundarias esperan su momento.\n\nLo que también me ayuda mucho es anticiparme. Cuando sé que un proyecto de research va a llevar tiempo — y el research lleva mucho tiempo si lo haces bien — lo empiezo antes de que sea urgente, aunque aún no sea el foco principal. Así cuando llega el momento del handoff a desarrollo, el trabajo invisible ya está hecho.\n\nHe trabajado siempre en entornos muy dinámicos con cambios de prioridad frecuentes. Me adapto rápido y sin fricción.`,
      ca: `Treballo bé sota pressió perquè tinc un sistema clar de priorització.\n\nOrganitzo la meva feina en funció de l'impacte en els objectius estratègics de l'empresa — les tasques que afecten goals prioritaris van primer, sempre.\n\nEl que també m'ajuda molt és anticipar-me. Quan sé que un projecte de research portarà temps, el començo abans que sigui urgent. Així quan arriba el moment del handoff a desenvolupament, la feina invisible ja està feta.\n\nHe treballat sempre en entorns molt dinàmics amb canvis de prioritat freqüents. M'adapto ràpid i sense fricció.`,
      en: `I work well under pressure because I have a clear prioritisation system.\n\nI organise my work based on impact on the company's strategic goals — tasks that affect priority goals go first, always. Secondary ones wait their turn.\n\nWhat also helps a lot is getting ahead. When I know a research project will take time — and research takes a lot of time if you do it properly — I start it before it becomes urgent, even if it's not the current focus. That way when handoff time comes, the invisible work is already done.\n\nI've always worked in very dynamic environments with frequent priority changes. I adapt quickly and without friction.`
    }
  },

  // ── PRIMER MES EN NUEVA EMPRESA ───────────────────────────
  {
    id: 'first-month',
    triggers: ['primer mes', 'first month', 'primer mes', 'como empezarias', 'how would you start', 'com comencaries', 'onboarding', 'primeros pasos', 'first steps', 'primers passos', 'que harias al llegar', 'what would you do first', 'que faries al arribar', 'incorporacion', 'joining a new company'],
    response: {
      es: `Mi primer mes en una empresa nueva tiene una estructura clara.\n\nLo primero es entender qué hay: qué datos de investigación existen, qué metodologías se han usado, qué repositorio de insights hay disponible. Eso me da el contexto de dónde estamos y hacia dónde vamos.\n\nSi hay datos sólidos, voy directo a hablar con usuarios — entrevistas en profundidad para entender de primera mano los problemas actuales del producto. Con ideas frescas y sin sesgos previos, ese primer contacto con usuarios tiene mucho valor.\n\nSi hay poca data, empiezo con una evaluación heurística completa del producto. Es una metodología que me permite exponer de forma crítica las debilidades y fortalezas de un sistema con criterios claros, y da un overview muy completo del estado actual.\n\nCon eso, construyo un mini repositorio de insights priorizado por frecuencia e impacto — y ya tengo un framework claro para empezar a trabajar con criterio desde el primer día.`,
      ca: `El meu primer mes en una empresa nova té una estructura clara.\n\nEl primer és entendre què hi ha: quines dades d'investigació existeixen, quines metodologies s'han usat, quin repositori d'insights hi ha disponible.\n\nSi hi ha dades sòlides, vaig directe a parlar amb usuaris — entrevistes en profunditat per entendre de primera mà els problemes actuals del producte.\n\nSi hi ha poca data, començo amb una avaluació heurística completa del producte per exposar de forma crítica les debilitats i fortaleses del sistema.\n\nAmb això, construeixo un mini repositori d'insights prioritzat per freqüència i impacte.`,
      en: `My first month at a new company has a clear structure.\n\nFirst, understand what's there: what research data exists, what methodologies have been used, what insights repository is available. That gives me the context of where we are and where we're going.\n\nIf there's solid data, I go straight to talking to users — in-depth interviews to understand the product's current problems first-hand. With fresh eyes and no prior bias, that first user contact is very valuable.\n\nIf there's little data, I start with a full heuristic evaluation of the product. It's a methodology that lets me critically expose a system's weaknesses and strengths with clear criteria, giving a comprehensive overview of the current state.\n\nFrom there, I build a mini insights repository prioritised by frequency and impact — and I have a clear framework to start working with real criteria from day one.`
    }
  },

  // ── POR QUÉ CONTRATARME / PITCH 60 SEGUNDOS ──────────────
  {
    id: 'why-hire-me',
    triggers: ['por que contratarte', 'why should we hire you', 'per que contractar-te', 'que te hace diferente', 'what makes you different', 'que et fa diferent', 'convenceme', 'convince me', 'convence\'m', 'pitch', 'en 60 segundos', 'in 60 seconds', 'en 60 segons', 'elevator pitch', 'value proposition', 'propuesta de valor', 'por que te tenemos que contratar', 'porque tenemos que contratarte', 'por que contratarte', 'why should we hire you', 'convince me', 'convenceme'],
    response: {
      es: `Soy un Product Designer con un background técnico y de negocio que pocos diseñadores tienen.\n\nPor un lado, tengo formación en Data Analysis y experiencia trabajando como lead PD en empresas donde reportaba directamente al C-Level y participaba en la definición de goals y roadmap — no solo ejecutaba diseño, tomaba decisiones estratégicas. En Stayforlong soy el único Product Designer de la empresa, lo que me da una visión transversal del negocio que no tendrías con un diseñador más especialista.\n\nPor otro lado, hice un bootcamp de full-stack development, lo que me permite hablar el idioma de ingeniería, hacer handoffs precisos y entender los trade-offs técnicos antes de proponer soluciones.\n\nNo me defino como UX/UI. Me defino como Product Designer especialista en Growth — mi trabajo mueve métricas de negocio, no solo mejora la experiencia.`,
      ca: `Soc un Product Designer amb un background tècnic i de negoci que pocs dissenyadors tenen.\n\nD'una banda, tinc formació en Data Analysis i experiència treballant com a lead PD en empreses on reportava directament al C-Level i participava en la definició de goals i roadmap. A Stayforlong soc l'únic Product Designer de l'empresa, cosa que em dona una visió transversal del negoci.\n\nDe l'altra, vaig fer un bootcamp de full-stack development, cosa que em permet parlar l'idioma d'enginyeria i fer handoffs precisos.\n\nNo em defineixo com a UX/UI. Em defineixo com a Product Designer especialista en Growth.`,
      en: `I'm a Product Designer with a technical and business background that few designers have.\n\nOn one side, I have a Data Analysis background and experience working as lead PD at companies where I reported directly to C-Level and participated in defining goals and roadmap — not just executing design, but making strategic decisions. At Stayforlong I'm the only Product Designer in the company, which gives me a cross-functional business view you wouldn't get from a more specialist designer.\n\nOn the other side, I did a full-stack development bootcamp, which lets me speak engineering's language, deliver precise handoffs and understand technical trade-offs before proposing solutions.\n\nI don't define myself as UX/UI. I define myself as a Growth-focused Product Designer — my work moves business metrics, not just improves the experience.`
    }
  },

  // ── DÓNDE TE VES EN 3 AÑOS ────────────────────────────────
  {
    id: 'three-years',
    triggers: ['donde te ves', 'where do you see yourself', 'on et veus', 'en 3 anos', 'in 3 years', 'en 3 anys', 'futuro profesional', 'professional future', 'futur professional', 'objetivos carrera', 'career goals', 'objectius carrera', 'planes', 'plans', 'plans futurs'],
    response: {
      es: `En tres años me veo en uno de dos caminos, ambos en la misma dirección.\n\nO bien como Lead Product Designer liderando un equipo en una empresa de impacto global — Travel Tech, E-commerce o Retail — donde el diseño de producto sea una palanca estratégica real, con acceso directo a las métricas de negocio y participación en las decisiones de alto nivel.\n\nO bien como Senior Product Designer en una empresa top tech — FAANG o equivalente — donde pueda trabajar en productos con millones de usuarios globales y ver el impacto de mi trabajo a una escala que ahora mismo no tengo.\n\nEn ambos casos, lo que me motiva es lo mismo: más impacto, más escala, más visibilidad del resultado de mi trabajo en el negocio.`,
      ca: `En tres anys em veig en un de dos camins, ambdós en la mateixa direcció.\n\nO bé com a Lead Product Designer liderant un equip en una empresa d'impacte global on el disseny de producte sigui una palanca estratègica real.\n\nO bé com a Senior Product Designer en una empresa top tech — FAANG o equivalent — on pugui treballar en productes amb milions d'usuaris globals.\n\nEn tots dos casos, el que em motiva és el mateix: més impacte, més escala, més visibilitat del resultat del meu treball en el negoci.`,
      en: `In three years I see myself on one of two paths, both heading in the same direction.\n\nEither as a Lead Product Designer leading a team at a global-impact company — Travel Tech, E-commerce or Retail — where product design is a real strategic lever, with direct access to business metrics and participation in high-level decisions.\n\nOr as a Senior Product Designer at a top tech company — FAANG or equivalent — where I can work on products with millions of global users and see the impact of my work at a scale I don't have right now.\n\nIn both cases, what drives me is the same: more impact, more scale, more visibility of how my work moves the business.`
    }
  },

  // ── LANZAR SIN VALIDAR ────────────────────────────────────
  {
    id: 'launch-without-validating',
    triggers: ['lanzar sin validar', 'launch without validating', 'llançar sense validar', 'sin research', 'without research', 'sense research', 'jefe pide lanzar', 'boss wants to ship', 'cap vol llançar', 'ship it', 'just ship it', 'sin datos', 'without data', 'sense dades', 'presion para lanzar', 'pressure to ship'],
    response: {
      es: `Es una situación que he vivido y tiene matices.\n\nMi posición por defecto es siempre validar antes de lanzar — diseñar contra una hipótesis medible y comprobarla. Lanzar sin datos es apostar a ciegas.\n\nPero también entiendo la realidad del negocio. Si hay presión para lanzar y no hay tiempo para un proceso completo, mi enfoque es proponer el mínimo de validación viable: un test rápido con 5 usuarios, una revisión heurística express, o al menos un A/B test post-lanzamiento para medir el impacto inmediatamente.\n\nLo que no haría es lanzar sin ningún tipo de criterio y sin un plan para medir el resultado. Si lanzamos sin validar, al menos midamos qué pasa y tengamos un plan de rollback si los datos son negativos.`,
      ca: `És una situació que he viscut i té matisos.\n\nLa meva posició per defecte és sempre validar abans de llançar. Llançar sense dades és apostar a cegues.\n\nPerò també entenc la realitat del negoci. Si hi ha pressió per llançar, el meu enfocament és proposar el mínim de validació viable: un test ràpid amb 5 usuaris, una revisió heurística express, o almenys un A/B test post-llançament.\n\nEl que no faria és llançar sense cap tipus de criteri i sense un pla per mesurar el resultat.`,
      en: `It's a situation I've lived through and it has nuance.\n\nMy default position is always to validate before launching — design against a measurable hypothesis and test it. Shipping without data is betting blind.\n\nBut I also understand business reality. If there's pressure to ship and no time for a full process, my approach is to propose the minimum viable validation: a quick test with 5 users, an express heuristic review, or at least a post-launch A/B test to measure impact immediately.\n\nWhat I wouldn't do is ship with zero criteria and no plan to measure the outcome. If we launch without validating, at least let's measure what happens and have a rollback plan if the data is negative.`
    }
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

  // ── EQUIPO IDEAL / CULTURA ────────────────────────────────
  {
    id: 'ideal-team',
    triggers: ['equipo ideal', 'ideal team', 'equip ideal', 'cultura de equipo', 'team culture', 'cultura d\'equip', 'que saca lo mejor', 'what brings out your best', 'que et treu el millor', 'tipo de equipo', 'type of team', 'tipus d\'equip', 'entorno de trabajo', 'work environment', 'entorn de treball'],
    response: {
      es: `El entorno que saca lo mejor de mí es uno donde el diseño tiene voz real en las decisiones — no solo ejecuta, sino que informa la estrategia.\n\nMe funcionan bien los equipos cross-functional donde hay comunicación constante entre diseño, producto e ingeniería. De esas conversaciones entre disciplinas es de donde salen las mejores soluciones — no del trabajo en silos.\n\nTambién valoro mucho la autonomía. Trabajo mejor cuando tengo claro el objetivo y libertad para decidir cómo llegamos ahí, que cuando me dan una solución ya definida para ejecutar.\n\nY el ambiente: prefiero equipos donde se cuestiona, se debate y se decide con datos, antes que equipos donde todo va hacia arriba para que alguien lo apruebe.`,
      ca: `L'entorn que em treu el millor és un on el disseny té veu real en les decisions — no només executa, sinó que informa l'estratègia.\n\nEm funcionen bé els equips cross-functional on hi ha comunicació constant entre disseny, producte i enginyeria.\n\nTambé valoro molt l'autonomia. Treballo millor quan tinc clar l'objectiu i llibertat per decidir com hi arribem.\n\nI l'ambient: prefereixo equips on es qüestiona, es debat i es decideix amb dades.`,
      en: `The environment that brings out my best is one where design has a real voice in decisions — not just executing, but informing strategy.\n\nI work well in cross-functional teams with constant communication between design, product and engineering. The best solutions come from those cross-discipline conversations, not from working in silos.\n\nI also value autonomy a lot. I work better when I have a clear goal and freedom to decide how we get there, rather than being handed a pre-defined solution to execute.\n\nAnd the culture: I prefer teams that question, debate and decide with data, over teams where everything goes up the chain for someone to approve.`
    }
  },

  // ── LO QUE NO TOLERARÍA ───────────────────────────────────
  {
    id: 'deal-breakers',
    triggers: ['no tolerarias', 'deal breaker', 'deal breakers', 'no toleraries', 'que no soportas', 'what you cant stand', 'que no suportes', 'lineas rojas', 'red lines', 'linies vermelles', 'que evitas', 'what do you avoid', 'que evites', 'empresa mala', 'bad company', 'mala empresa'],
    response: {
      es: `Hay tres cosas que no funcionan para mí.\n\nPrimero, que el diseño sea un departamento de ejecución sin voz en las decisiones. Si el PD llega cuando ya está todo decidido para hacer pantallas bonitas, mi trabajo no tiene el impacto que debería y es frustrante para todos.\n\nSegundo, la cultura del "lanzamos y ya veremos". Sin datos, sin hipótesis, sin plan de medición. He visto cómo eso genera deuda técnica, deuda de UX y decisiones basadas en opiniones en lugar de evidencia.\n\nTercero, entornos donde no haya aprendizaje continuo. Para mí el aprendizaje es parte del trabajo, no algo que pasa fuera. Si una empresa no invierte en la formación de su equipo, es una señal de que tampoco invierte en su futuro.`,
      ca: `Hi ha tres coses que no funcionen per a mi.\n\nPrimer, que el disseny sigui un departament d'execució sense veu en les decisions.\n\nSegon, la cultura del "llançem i ja veurem". Sense dades, sense hipòtesis, sense pla de mesura.\n\nTercer, entorns on no hi hagi aprenentatge continu. Per a mi l'aprenentatge és part de la feina, no una cosa que passa fora.`,
      en: `There are three things that don't work for me.\n\nFirst, design being an execution department with no voice in decisions. If the PD only arrives once everything is decided to make pretty screens, my work doesn't have the impact it should — and it's frustrating for everyone.\n\nSecond, the "ship it and we'll see" culture. No data, no hypothesis, no measurement plan. I've seen how that creates technical debt, UX debt and decisions based on opinions instead of evidence.\n\nThird, environments with no continuous learning. For me learning is part of the job, not something that happens outside of it. If a company doesn't invest in its team's growth, it's a signal they're not investing in their future either.`
    }
  },

  // ── MODO RECRUITER ─────────────────────────────────────────
  {
    id: 'recruiter-summary',
    triggers: ['recruiter', 'reclutador', 'reclutadora', 'hiring', 'contratando', 'contratacion', 'vacante', 'posicion', 'puesto', 'oportunidad laboral', 'job opportunity', 'tenemos una oferta', 'we have a role', 'looking to hire', 'buscamos disenador', 'buscamos designer', 'looking for a designer', 'te estamos buscando', 'encajas en', 'you would be a great fit'],
    response: {
      es: `Perfecto, aquí va el resumen rápido 👋\n\n**Oscar Denamiel — Senior Product Designer**\n8+ años · Barcelona · Disponible\n\n**Especialidad:** Growth, CRO, UX Research, Design Systems AI-Ready\n**Sectores:** Travel Tech, E-commerce, Fintech\n\n**Top resultados:**\n→ +25% CVR y +43% sesión (Map Redesign, Stayforlong)\n→ +8% CVR y +7% beneficio diario (Mobile First, Leadtech)\n→ -17% contactos soporte (Self-Service Bookings)\n→ 3M+ usuarios impactados · 100+ experimentos validados\n\n**Stack:** Figma, A/B testing, Hotjar, Amplitude, Python/SQL\n**Modalidad:** Remoto, híbrido o presencial · Abierto a reubicación\n\n📧 <a href="mailto:oscardenamiel@gmail.com" class="text-link" target="_blank">oscardenamiel@gmail.com</a>\n💼 <a href="https://linkedin.com/in/oscardenamiel" class="text-link" target="_blank">linkedin.com/in/oscardenamiel</a>`,
      ca: `Perfecte, aquí va el resum ràpid 👋\n\n**Oscar Denamiel — Senior Product Designer**\n8+ anys · Barcelona · Disponible\n\n**Especialitat:** Growth, CRO, UX Research, Design Systems AI-Ready\n**Sectors:** Travel Tech, E-commerce, Fintech\n\n**Top resultats:**\n→ +25% CVR i +43% sessió (Map Redesign, Stayforlong)\n→ +8% CVR i +7% benefici diari (Mobile First, Leadtech)\n→ -17% contactes suport (Self-Service Bookings)\n→ 3M+ usuaris impactats · 100+ experiments validats\n\n**Stack:** Figma, A/B testing, Hotjar, Amplitude, Python/SQL\n**Modalitat:** Remot, híbrid o presencial · Obert a reubicació\n\n📧 <a href="mailto:oscardenamiel@gmail.com" class="text-link" target="_blank">oscardenamiel@gmail.com</a>\n💼 <a href="https://linkedin.com/in/oscardenamiel" class="text-link" target="_blank">linkedin.com/in/oscardenamiel</a>`,
      en: `Perfect, here's the quick summary 👋\n\n**Oscar Denamiel — Senior Product Designer**\n8+ years · Barcelona · Available\n\n**Specialty:** Growth, CRO, UX Research, AI-Ready Design Systems\n**Sectors:** Travel Tech, E-commerce, Fintech\n\n**Top results:**\n→ +25% CVR and +43% session duration (Map Redesign, Stayforlong)\n→ +8% CVR and +7% daily profit (Mobile First, Leadtech)\n→ -17% support contacts (Self-Service Bookings)\n→ 3M+ users impacted · 100+ experiments validated\n\n**Stack:** Figma, A/B testing, Hotjar, Amplitude, Python/SQL\n**Format:** Remote, hybrid or on-site · Open to relocation\n\n📧 <a href="mailto:oscardenamiel@gmail.com" class="text-link" target="_blank">oscardenamiel@gmail.com</a>\n💼 <a href="https://linkedin.com/in/oscardenamiel" class="text-link" target="_blank">linkedin.com/in/oscardenamiel</a>`
    },
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