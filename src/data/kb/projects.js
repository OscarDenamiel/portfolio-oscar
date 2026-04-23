export const projects = [
    
    // ── PROYECTOS OVERVIEW ─────────────────────────────────────
  {
    id: 'projects-overview',
    triggers: ['proyectos', 'projects', 'que veo', 'what do i see', 'que hay aqui', 'projectes', 'case studies', 'case study', 'portfolio', 'que has hecho', 'what have you done', 'que has fet', 'trabajo', 'work', 'show me your work', 'show me work', 'tus proyectos', 'your projects', 'els teus projectes', 'que veo', 'what do i see', 'que hay aqui', 'que tienes', 'what do you have', 'show me', 'ensenyam', 'enséñame'],
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

  /* ============================================================
   MAP REDESIGN
============================================================ */

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

  // ── MAP REDESIGN — EXECUTIVE SUMMARY ──────────────────────
{
    id: 'project-map-summary',
    triggers: ['map summary', 'map executive summary', 'map resumen', 'map resumen ejecutivo', 'map resum', 'map resum executiu'],
    response: {
      es: `**Map Redesign — Resumen ejecutivo**\n\n🔴 **El problema**\nEl mapa de Stayforlong tenía carga bloqueante, visual saturado con markers superpuestos y los usuarios abandonaban a Google Maps para buscar contexto. Las sesiones mobile eran un 50% más cortas que en desktop.\n\n👤 **Mi rol y proceso**\nLead Product Designer — lideré 4 meses de discovery completo: análisis heurístico de 14 competidores, 10 entrevistas en 7 países, encuesta a 148 usuarios y análisis de comportamiento con Hotjar y GA. Diseñé la solución completa y coordiné la entrega incremental con Engineering mediante un sistema de release notes.\n\n📈 **Impacto medible**\n→ +17% CTR del mapa\n→ +25% conversión mapa-a-reserva\n→ +43% duración de sesión\n→ 95% de usuarios prefieren la nueva UI\n→ +28% en System Usability Scale (de 64 a 82)`,
      ca: `**Map Redesign — Resum executiu**\n\n🔴 **El problema**\nEl mapa de Stayforlong tenia càrrega bloquejant, visual saturat amb markers superposats i els usuaris abandonaven a Google Maps per buscar context. Les sessions mòbil eren un 50% més curtes que al desktop.\n\n👤 **El meu rol i procés**\nLead Product Designer — vaig liderar 4 mesos de discovery complet: anàlisi heurística de 14 competidors, 10 entrevistes a 7 països, enquesta a 148 usuaris i anàlisi de comportament amb Hotjar i GA. Vaig dissenyar la solució completa i coordinar el lliurament incremental amb Engineering mitjançant un sistema de release notes.\n\n📈 **Impacte mesurable**\n→ +17% CTR del mapa\n→ +25% conversió mapa-a-reserva\n→ +43% durada de sessió\n→ 95% d'usuaris prefereixen la nova UI\n→ +28% en System Usability Scale (de 64 a 82)`,
      en: `**Map Redesign — Executive summary**\n\n🔴 **The problem**\nStayforlong's map had blocking load, cluttered UI with overlapping markers, and users were leaving to Google Maps for context. Mobile sessions were 50% shorter than desktop.\n\n👤 **My role and process**\nLead Product Designer — led 4 months of full discovery: heuristic analysis of 14 competitors, 10 interviews across 7 countries, 148-user survey, and behaviour analysis with Hotjar and GA. Designed the complete solution and coordinated incremental delivery with Engineering via a release notes system.\n\n📈 **Measurable impact**\n→ +17% map CTR\n→ +25% map-to-booking conversion\n→ +43% user session duration\n→ 95% of users prefer the new UI\n→ +28% in System Usability Scale (from 64 to 82)`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso de research?', id: 'project-map-research' },
        { label: '¿Qué decisiones de diseño tomaste?', id: 'project-map-decisions' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Com va ser el procés de research?', id: 'project-map-research' },
        { label: 'Quines decisions de disseny vas prendre?', id: 'project-map-decisions' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'Walk me through the research', id: 'project-map-research' },
        { label: 'What design decisions did you make?', id: 'project-map-decisions' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },

  // ── MAP REDESIGN — RESEARCH ────────────────────────────────
{
    id: 'project-map-research',
    triggers: ['map research', 'map redesign research', 'map discovery', 'how did you research the map', 'map process', 'map interviews', 'map survey', 'map competitor analysis', 'map methodology'],
    response: {
      es: `El discovery del Map Redesign duró 4 meses y combinó 4 metodologías\n\n**Análisis competitivo** — Evaluación heurística de 14 competidores (Booking, Expedia, Airbnb, Google Maps Hotels...) en 9 áreas clave: entry point, velocidad de carga, diseño de markers, filtros, información on-click, sincronización mapa-lista, POIs, distancias y optimización mobile.\n\n**Entrevistas con usuarios** — 10 entrevistas basadas en tareas con usuarios de 7 países (ES, US, TK, MX, GB, FI, PL), edad 40-55, todos con reserva en las últimas 48h. El hallazgo clave: los usuarios abandonaban Stayforlong para ir a Google Maps a buscar información contextual que no encontraban en nuestro mapa.\n\n**Encuesta** — 148 respuestas en 4 idiomas (EN, PT, IT, ES) a usuarios que acababan de completar una reserva. Rating medio de navegación: 3.79/5 con desviación estándar de 1.41 — señal clara de variabilidad alta en la experiencia.\n\n**Análisis de comportamiento** — Google Analytics + Hotjar para detectar patrones reales: rage clicks en el zoom, sesiones mobile un 50% más cortas que desktop, y el carousel de imágenes como elemento más consumido pero con más fricciones.`,
      ca: `El discovery del Map Redesign va durar 4 mesos i va combinar 4 metodologies\n\n**Anàlisi competitiva** — Avaluació heurística de 14 competidors en 9 àrees clau.\n\n**Entrevistes amb usuaris** — 10 entrevistes basades en tasques amb usuaris de 7 països. El descobriment clau: els usuaris abandonaven Stayforlong per anar a Google Maps a buscar informació contextual.\n\n**Enquesta** — 148 respostes en 4 idiomes. Rating mitjà de navegació: 3.79/5 amb desviació estàndard d'1.41.\n\n**Anàlisi de comportament** — Google Analytics + Hotjar per detectar patrons reals: rage clicks al zoom, sessions mòbil un 50% més curtes que desktop, i el carousel d'imatges com a element més consumit però amb més friccions.`,
      en: `The Map Redesign discovery took 4 months and combined 4 methodologies\n\n**Competitor analysis** — Heuristic evaluation of 14 competitors (Booking, Expedia, Airbnb, Google Maps Hotels...) across 9 key areas: entry point, load speed, marker design, filters, on-click info, map-list sync, POIs, distances and mobile optimisation.\n\n**User interviews** — 10 task-based interviews with users from 7 countries (ES, US, TK, MX, GB, FI, PL), aged 40-55, all with a booking in the last 48h. Key finding: users were leaving Stayforlong to go to Google Maps for contextual information they couldn't find in our map.\n\n**Survey** — 148 responses in 4 languages (EN, PT, IT, ES) from users who had just completed a booking. Average navigation rating: 3.79/5 with a standard deviation of 1.41 — a clear signal of high experience variability.\n\n**Behaviour analysis** — Google Analytics + Hotjar to detect real patterns: rage clicks on zoom, mobile sessions 50% shorter than desktop, and the image carousel as the most consumed element but with the most friction.`
    },
    suggestions: {
      es: [
        { label: '¿Cuáles fueron los resultados?', id: 'project-map-impact' },
        { label: '¿Qué decisiones de diseño tomaste?', id: 'project-map-decisions' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Quins van ser els resultats?', id: 'project-map-impact' },
        { label: 'Quines decisions de disseny vas prendre?', id: 'project-map-decisions' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'What were the results?', id: 'project-map-impact' },
        { label: 'What design decisions did you make?', id: 'project-map-decisions' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },

  // ── MAP REDESIGN — IMPACT ──────────────────────────────────
{
    id: 'project-map-impact',
    triggers: ['map results', 'map impact', 'map kpis', 'map metrics', 'map conversion', 'map numbers', 'resultados map', 'impacto map', 'resultats map'],
    response: {
      es: `Los resultados del Map Redesign se midieron 1 mes después del último deploy, usando los 12 meses anteriores como referencia para evitar distorsiones por estacionalidad\n\n**Métricas cuantitativas:**\n→ +17% en CTR del mapa (click-through rate)\n→ +25% en conversión mapa-a-reserva (M2B)\n→ +43% en duración de sesión de usuario\n\n**Métricas cualitativas** (test con 25 power users):\n→ +28% en SUS — System Usability Scale (de 64 a 82)\n→ 95% de usuarios prefieren la nueva UI\n→ +80% de success rate con el nuevo sistema\n\nTodo medido con los datos de bots excluidos (Stayforlong recibe ataques frecuentes que distorsionan métricas). El sistema de release notes incremental fue clave — cada mejora se medía de forma aislada, sin tener que esperar al lanzamiento completo.`,
      ca: `Els resultats del Map Redesign es van mesurar 1 mes després del darrer deploy, usant els 12 mesos anteriors com a referència\n\n**Mètriques quantitatives:**\n→ +17% en CTR del mapa\n→ +25% en conversió mapa-a-reserva (M2B)\n→ +43% en durada de sessió d'usuari\n\n**Mètriques qualitatives** (test amb 25 power users):\n→ +28% en SUS (de 64 a 82)\n→ 95% d'usuaris prefereixen la nova UI\n→ +80% de success rate amb el nou sistema`,
      en: `The Map Redesign results were measured 1 month after the last deploy, using the previous 12 months as a baseline to avoid seasonality distortion\n\n**Quantitative metrics:**\n→ +17% in map CTR (click-through rate)\n→ +25% in map-to-booking conversion (M2B)\n→ +43% in user session duration\n\n**Qualitative metrics** (test with 25 power users):\n→ +28% in SUS — System Usability Scale (from 64 to 82)\n→ 95% of users prefer the new UI\n→ +80% success rate with the new system\n\nAll measured with bot traffic excluded — Stayforlong receives frequent bot attacks that distort metrics. The incremental release notes system was key — each improvement was measured in isolation, without waiting for the full launch.`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso de research?', id: 'project-map-research' },
        { label: '¿Qué decisiones de diseño tomaste?', id: 'project-map-decisions' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Com va ser el procés de research?', id: 'project-map-research' },
        { label: 'Quines decisions de disseny vas prendre?', id: 'project-map-decisions' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'Walk me through the research', id: 'project-map-research' },
        { label: 'What design decisions did you make?', id: 'project-map-decisions' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },

  // ── MAP REDESIGN — DESIGN DECISIONS ───────────────────────
{
    id: 'project-map-decisions',
    triggers: ['map design decisions', 'map solution', 'map features', 'map improvements', 'what did you change in the map', 'map ab test', 'map avuxi', 'map clustering', 'decisiones diseño map'],
    response: {
      es: `Las decisiones de diseño del Map Redesign vinieron directamente de los problemas detectados en research\n\n**Problemas críticos resueltos:**\n→ **Carga bloqueante** — El mapa se congelaba al cargar nuevos resultados. Solución: carga no bloqueante para que el usuario pudiera interactuar mientras se cargaba.\n→ **Visual saturado** — Markers de precio superpuestos en zonas densas. Solución: clustering de hoteles para agrupar markers cercanos.\n→ **Sin barra de búsqueda en mobile** — Los usuarios en desktop usaban mucho la search bar pero no existía en mobile. Solución: añadir search bar en mobile.\n→ **Información contextual** — Usuarios salían a Google Maps para buscar contexto. Solución: integrar POIs, transporte público y aeropuertos directamente.\n→ **AVUXI confuso** — El heatmap de puntos de interés confundía a usuarios ("¿es la temperatura?"). Solución: A/B test — resultado inconcluso, solución intermedia: AVUXI oculto por defecto pero accesible.\n\nEl sistema de release notes incremental fue la metodología de entrega — cada mejora se lanzaba por separado y se medía de forma aislada.`,
      ca: `Les decisions de disseny del Map Redesign van venir directament dels problemes detectats al research\n\n→ **Càrrega no bloquejant** — el mapa es gelava en carregar nous resultats\n→ **Clustering** — markers de preu superposats en zones denses\n→ **Barra de cerca al mòbil** — no existia malgrat l'alta interacció al desktop\n→ **POIs integrats** — usuaris sortien a Google Maps per buscar context\n→ **AVUXI** — A/B test inconclús, solució intermèdia: ocult per defecte però accessible`,
      en: `The Map Redesign decisions came directly from the problems detected during research\n\n**Critical problems solved:**\n→ **Blocking load** — The map froze while loading new results. Solution: non-blocking load so users could interact during loading.\n→ **Visual clutter** — Overlapping price markers in dense areas. Solution: hotel clustering to group nearby markers.\n→ **No search bar on mobile** — Desktop users heavily used the search bar but it didn't exist on mobile. Solution: add search bar on mobile.\n→ **Contextual information** — Users left for Google Maps to find context. Solution: integrate POIs, public transport and airports directly.\n→ **Confusing AVUXI** — The POI heatmap confused users ("is this temperature?"). Solution: A/B test — inconclusive result, intermediate solution: AVUXI hidden by default but accessible.\n\nThe incremental release notes system was the delivery methodology — each improvement shipped separately and measured in isolation.`
    },
    suggestions: {
      es: [
        { label: '¿Cuáles fueron los resultados?', id: 'project-map-impact' },
        { label: '¿Cómo fue el proceso de research?', id: 'project-map-research' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Quins van ser els resultats?', id: 'project-map-impact' },
        { label: 'Com va ser el procés de research?', id: 'project-map-research' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'What were the results?', id: 'project-map-impact' },
        { label: 'Walk me through the research', id: 'project-map-research' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },

  /* ============================================================
   MOBILE FIRST
============================================================ */
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

  // ── MOBILE FIRST — EXECUTIVE SUMMARY ──────────────────────
{
    id: 'project-mobile-first-summary',
    triggers: ['mobile first summary', 'mobile first executive summary', 'mobile first resumen', 'mobile first resumen ejecutivo', 'mobile first resum', 'mobile first resum executiu'],
    response: {
      es: `**Mobile First — Resumen ejecutivo**\n\n🔴 **El problema**\nLeadtech tenía un 55% más de tráfico mobile que desktop pero un 40% menos de conversión. La causa: la experiencia mobile era el desktop mal adaptado — un formulario único gigante, sin flujo optimizado, con problemas de accesibilidad y sin las ventajas nativas del móvil.\n\n👤 **Mi rol y proceso**\nLead Product Designer end-to-end — lideré 6 meses de discovery (heuristic evaluation, desk research, benchmark de competidores, análisis cuantitativo, exit-intent survey, behavioral analysis). 9 iteraciones mayores del prototipo y 11 métodos de validación diferentes antes del handoff. Construí el Design System completo desde cero.\n\n📈 **Impacto medible**\n→ +8% Conversion Rate mobile\n→ -12% Refund Ratio\n→ +7% beneficio diario estimado\n→ -20% drop-off\n→ Cambio de mindset de empresa: de "responsive" a "Mobile First"`,
      ca: `**Mobile First — Resum executiu**\n\n🔴 **El problema**\nLeadtech tenia un 55% més de trànsit mòbil que desktop però un 40% menys de conversió. La causa: l'experiència mòbil era el desktop mal adaptat — un formulari únic gegant, sense flux optimitzat i sense els avantatges natius del mòbil.\n\n👤 **El meu rol i procés**\nLead Product Designer end-to-end — vaig liderar 6 mesos de discovery. 9 iteracions majors del prototip i 11 mètodes de validació diferents abans del handoff. Vaig construir el Design System complet des de zero.\n\n📈 **Impacte mesurable**\n→ +8% Conversion Rate mòbil\n→ -12% Refund Ratio\n→ +7% benefici diari estimat\n→ -20% drop-off\n→ Canvi de mindset d'empresa: de "responsive" a "Mobile First"`,
      en: `**Mobile First — Executive summary**\n\n🔴 **The problem**\nLeadtech had 55% more mobile traffic than desktop but 40% lower conversion. The cause: the mobile experience was a poorly adapted desktop — one giant form, no optimised flow, accessibility issues, and no native mobile advantages.\n\n👤 **My role and process**\nEnd-to-end Lead Product Designer — led 6 months of discovery (heuristic evaluation, desk research, competitor benchmark, quantitative analysis, exit-intent survey, behavioural analysis). 9 major prototype iterations and 11 different validation methods before handoff. Built the complete Design System from scratch.\n\n📈 **Measurable impact**\n→ +8% mobile Conversion Rate\n→ -12% Refund Ratio\n→ +7% estimated daily profit\n→ -20% drop-off\n→ Company mindset shift: from "responsive" to "Mobile First"`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso de research?', id: 'project-mobile-first-research' },
        { label: '¿Cómo validaste el diseño?', id: 'project-mobile-first-validation' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Com va ser el procés de research?', id: 'project-mobile-first-research' },
        { label: 'Com vas validar el disseny?', id: 'project-mobile-first-validation' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'Walk me through the research', id: 'project-mobile-first-research' },
        { label: 'How did you validate the design?', id: 'project-mobile-first-validation' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },
  
  // ── MOBILE FIRST — RESEARCH ────────────────────────────────
  {
    id: 'project-mobile-first-research',
    triggers: ['mobile first research', 'mobile first process', 'mobile first discovery', 'mobile first methodology', 'how did you research mobile first', 'leadtech research', 'mobile first interviews'],
    response: {
      es: `El proceso de Mobile First combinó Lean UX con múltiples metodologías de validación a lo largo de 6 meses\n\n**Discovery inicial:**\n→ **Workshops con stakeholders** — Para alinear objetivos de negocio, restricciones y criterios de éxito antes de tocar Figma.\n→ **Evaluación heurística** — Análisis exhaustivo del producto existente en mobile con 3 Product Designers, enfocado en usuarios de mercados occidentales.\n→ **Desk research** — Benchmark de competidores, Material Design, Apple HIG, tendencias mobile y análisis de componentes UI.\n\n**Insights más profundos:**\n→ **Análisis cuantitativo** — Revisión de métricas de sesión, funnel drop-off, exit pages, clickmaps y grabaciones de sesión en Amplitude.\n→ **Exit-intent survey** — El hallazgo más crítico: +60% de usuarios abandonaban durante el formulario porque el precio no era transparente.\n→ **Behavioral analysis con Hotjar** — Grabaciones revelaron que los usuarios alternaban constantemente entre introducir datos y hacer scroll para revisar lo que habían introducido — señal clara de carga cognitiva alta.\n\n**Resultado del discovery:** el problema se reencuadró de "mejorar el responsive" a "repensar todo el funnel desde una filosofía Mobile First".`,
      ca: `El procés de Mobile First va combinar Lean UX amb múltiples metodologies de validació al llarg de 6 mesos\n\n→ **Workshops amb stakeholders** — alinear objectius de negoci abans de tocar Figma\n→ **Avaluació heurística** — anàlisi exhaustiva del producte existent en mòbil\n→ **Exit-intent survey** — descobriment clau: +60% d'usuaris abandonaven durant el formulari perquè el preu no era transparent\n→ **Behavioral analysis amb Hotjar** — les gravacions van revelar que els usuaris alternaven constantment entre introduir dades i fer scroll per revisar-les`,
      en: `The Mobile First process combined Lean UX with multiple validation methodologies over 6 months\n\n**Initial discovery:**\n→ **Stakeholder workshops** — To align business goals, constraints and success criteria before touching Figma.\n→ **Heuristic evaluation** — Exhaustive analysis of the existing mobile product with 3 Product Designers, focused on western market users.\n→ **Desk research** — Competitor benchmark, Material Design, Apple HIG, mobile trends and UI component analysis.\n\n**Deeper insights:**\n→ **Quantitative analysis** — Session metrics, funnel drop-off, exit pages, clickmaps and session recordings in Amplitude.\n→ **Exit-intent survey** — The most critical finding: +60% of users abandoned during the form because the price wasn't transparent.\n→ **Behavioral analysis with Hotjar** — Recordings revealed users constantly alternating between inputting data and scrolling back to review what they'd entered — a clear signal of high cognitive load.\n\n**Discovery outcome:** the problem was reframed from "improve the responsive" to "rethink the entire funnel from a Mobile First philosophy".`
    },
    suggestions: {
      es: [
        { label: '¿Cuáles fueron los resultados?', id: 'project-mobile-first-impact' },
        { label: '¿Cómo fue la validación?', id: 'project-mobile-first-validation' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Quins van ser els resultats?', id: 'project-mobile-first-impact' },
        { label: 'Com va ser la validació?', id: 'project-mobile-first-validation' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'What were the results?', id: 'project-mobile-first-impact' },
        { label: 'How did you validate the design?', id: 'project-mobile-first-validation' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },
  
  // ── MOBILE FIRST — IMPACT ──────────────────────────────────
  {
    id: 'project-mobile-first-impact',
    triggers: ['mobile first results', 'mobile first impact', 'mobile first kpis', 'mobile first metrics', 'leadtech results', 'leadtech impact', 'resultados mobile first', 'resultats mobile first'],
    response: {
      es: `Los resultados de Mobile First se midieron en los primeros meses post-lanzamiento del MVP\n\n**Métricas clave** (valores exactos omitidos por NDA):\n→ +8% en Conversion Rate mobile\n→ -12% en Refund Ratio\n→ +7% en beneficio diario estimado\n→ -20% en drop-off\n\nEl uplift en CVR superó las expectativas, pero el beneficio diario creció solo un 7% frente al objetivo del 14% — en parte porque el Refund Ratio mejoró menos de lo proyectado. La iteración continua post-lanzamiento es clave para cerrar esa brecha.\n\nAdemás del impacto numérico, el proyecto cambió el mindset de la empresa: de "responsive" a "Mobile First" como filosofía de producto. Y el Design System creado aceleró el time-to-market de futuros productos.`,
      ca: `Els resultats de Mobile First es van mesurar els primers mesos post-llançament del MVP\n\n→ +8% en Conversion Rate mòbil\n→ -12% en Refund Ratio\n→ +7% en benefici diari estimat\n→ -20% en drop-off\n\nValors exactes omesos per NDA. A més de l'impacte numèric, el projecte va canviar el mindset de l'empresa: de "responsive" a "Mobile First" com a filosofia de producte.`,
      en: `Mobile First results were measured in the first months post-MVP launch\n\n**Key metrics** (exact values omitted due to NDA):\n→ +8% in mobile Conversion Rate\n→ -12% in Refund Ratio\n→ +7% in estimated daily profit\n→ -20% in drop-off\n\nThe CVR uplift exceeded expectations, but daily profit only grew 7% vs the 14% target — partly because the Refund Ratio improved less than projected. Continued post-launch iteration is key to closing that gap.\n\nBeyond the numbers, the project shifted the company mindset: from "responsive" to "Mobile First" as a product philosophy. And the Design System created accelerated time-to-market for future products.`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso de research?', id: 'project-mobile-first-research' },
        { label: '¿Cómo fue la validación?', id: 'project-mobile-first-validation' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Com va ser el procés de research?', id: 'project-mobile-first-research' },
        { label: 'Com va ser la validació?', id: 'project-mobile-first-validation' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'Walk me through the research', id: 'project-mobile-first-research' },
        { label: 'How did you validate the design?', id: 'project-mobile-first-validation' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },
  
  // ── MOBILE FIRST — VALIDATION ──────────────────────────────
  {
    id: 'project-mobile-first-validation',
    triggers: ['mobile first validation', 'mobile first testing', 'mobile first ab test', 'mobile first prototype', 'mobile first design system', 'leadtech validation', 'leadtech ab test'],
    response: {
      es: `Mobile First fue el proyecto más validado en el que he trabajado — 9 iteraciones mayores del prototipo y 11 métodos de testing diferentes\n\n**Métodos aplicados en orden de fidelidad:**\nCard sorting → A/B testing de componentes UI → Test de 5 segundos → UX test early design (mid-fi) → UX test checkout (mid-fi) → UX test de tareas específicas → UX test funnel completo (hi-fi) → UX test en producción → A/B testing en producción → Split URL testing → Funnel event analysis en Amplitude\n\nEl resultado: todos los A/B tests y Split URL tests del MVP mostraron resultados positivos, con mejoras de entre 5% y 40%. Tasa de éxito media en los tests de usabilidad superior al 70%.\n\nAntes del handoff a desarrollo creé el Design System completo — solo 6 componentes de input y 17 componentes totales para construir todas las páginas. Eso simplificó enormemente el esfuerzo de desarrollo y las futuras iteraciones.`,
      ca: `Mobile First va ser el projecte més validat en el qual he treballat — 9 iteracions majors del prototip i 11 mètodes de testing diferents\n\nCard sorting → A/B testing de components → Test de 5 segons → UX tests en mid-fi i hi-fi → UX test en producció → A/B testing i Split URL en producció → Funnel event analysis a Amplitude\n\nTots els A/B tests i Split URL tests del MVP van mostrar resultats positius, amb millores d'entre el 5% i el 40%.`,
      en: `Mobile First was the most validated project I've worked on — 9 major prototype iterations and 11 different testing methods\n\n**Methods applied in fidelity order:**\nCard sorting → UI component A/B testing → 5-second test → Early design UX test (mid-fi) → Checkout UX test (mid-fi) → Specific tasks UX test → Full funnel UX test (hi-fi) → Production UX test → Production A/B testing → Split URL testing → Funnel event analysis in Amplitude\n\nOutcome: all MVP A/B and Split URL tests showed positive results, with improvements ranging from 5% to 40%. Average usability test success rate above 70%.\n\nBefore dev handoff I built the complete Design System — just 6 input components and 17 total components to build all pages. That massively simplified development effort and future iterations.`
    },
    suggestions: {
      es: [
        { label: '¿Cuáles fueron los resultados?', id: 'project-mobile-first-impact' },
        { label: '¿Cómo fue el proceso de research?', id: 'project-mobile-first-research' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Quins van ser els resultats?', id: 'project-mobile-first-impact' },
        { label: 'Com va ser el procés de research?', id: 'project-mobile-first-research' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'What were the results?', id: 'project-mobile-first-impact' },
        { label: 'Walk me through the research', id: 'project-mobile-first-research' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },


/* ============================================================
   SELF-SERVICE BOOKINGS
============================================================ */
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

  // ── SELF-SERVICE — EXECUTIVE SUMMARY ──────────────────────
{
    id: 'project-self-service-summary',
    triggers: ['self service summary', 'self service executive summary', 'self service resumen', 'self service resumen ejecutivo', 'self service resum', 'self service resum executiu'],
    response: {
      es: `**Self-Service Bookings — Resumen ejecutivo**\n\n🔴 **El problema**\nStayforlong recibía más de 10.000 contactos de soporte a la semana por acciones básicas post-reserva (cambios de fecha, cancelaciones, confirmaciones). El equipo de 60 agentes CX estaba al límite, especialmente en picos de temporada. El producto no había evolucionado desde 2015.\n\n👤 **Mi rol y proceso**\nSenior Product Designer — lideré el rediseño estratégico de la experiencia de gestión de reservas entre diciembre 2023 y junio 2024. 12 entrevistas con usuarios, análisis competitivo, entrevistas con el equipo CX y dashboard ad-hoc para cuantificar los drivers de contacto. Diseñé la solución bajo 3 principios: Transparencia, Autonomía y Fail-safe.\n\n📈 **Impacto medible**\n→ -17% contactos de soporte por reserva (objetivo: -15%)\n→ -7% tasa de cancelación de reservas\n→ +6% eNPS de clientes\n→ +8% retención de clientes\n→ Reducción en tiempo medio de gestión de contactos CX`,
      ca: `**Self-Service Bookings — Resum executiu**\n\n🔴 **El problema**\nStayforlong rebia més de 10.000 contactes de suport a la setmana per accions bàsiques post-reserva. L'equip de 60 agents CX estava al límit. El producte no havia evolucionat des del 2015.\n\n👤 **El meu rol i procés**\nSenior Product Designer — vaig liderar el redisseny estratègic de l'experiència de gestió de reserves. 12 entrevistes amb usuaris, anàlisi competitiva, entrevistes amb l'equip CX i dashboard ad-hoc per quantificar els drivers de contacte. 3 principis guia: Transparència, Autonomia i Fail-safe.\n\n📈 **Impacte mesurable**\n→ -17% contactes de suport per reserva (objectiu: -15%)\n→ -7% taxa de cancel·lació de reserves\n→ +6% eNPS de clients\n→ +8% retenció de clients`,
      en: `**Self-Service Bookings — Executive summary**\n\n🔴 **The problem**\nStayforlong was receiving over 10,000 support contacts per week for basic post-booking actions (date changes, cancellations, confirmations). The 60-agent CX team was at its limit, especially during seasonal peaks. The product hadn't evolved since 2015.\n\n👤 **My role and process**\nSenior Product Designer — led the strategic redesign of the booking management experience from December 2023 to June 2024. 12 user interviews, competitor analysis, CX team interviews and an ad-hoc dashboard to quantify contact drivers. Designed the solution under 3 principles: Transparency, Autonomy and Fail-safe.\n\n📈 **Measurable impact**\n→ -17% support contacts per booking (target: -15%)\n→ -7% booking cancellation rate\n→ +6% customer eNPS\n→ +8% customer retention\n→ Reduction in average CX contact handling time`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso?', id: 'project-self-service-process' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' },
        { label: 'Ver resumen de recruiter', id: 'recruiter-summary' }
      ],
      ca: [
        { label: 'Com va ser el procés?', id: 'project-self-service-process' },
        { label: 'Veure tots els projectes', id: 'projects-overview' },
        { label: 'Veure resum de recruiter', id: 'recruiter-summary' }
      ],
      en: [
        { label: 'Walk me through the process', id: 'project-self-service-process' },
        { label: 'See all projects', id: 'projects-overview' },
        { label: 'See recruiter summary', id: 'recruiter-summary' }
      ]
    }
  },
  
  // ── SELF-SERVICE — PROCESS ─────────────────────────────────
  {
    id: 'project-self-service-process',
    triggers: ['self service process', 'self service research', 'self service discovery', 'self service methodology', 'how did you approach self service', 'self service interviews', 'self service cx'],
    response: {
      es: `Self-Service Bookings empezó desde un problema operacional muy concreto: +10.000 contactos de soporte a la semana con un equipo de 60 agentes al límite\n\n**Research:**\n→ **12 entrevistas con usuarios** focalizadas en pain points post-reserva. Hallazgo clave: los usuarios no entendían los diferentes estados de reserva, había dos códigos de reserva distintos que generaban confusión en el check-in, y acciones básicas como cambios de fecha o cancelaciones requerían contactar con soporte.\n→ **Análisis competitivo** — para detectar si la experiencia estaba por debajo del estándar de la industria y buscar soluciones a los problemas identificados.\n→ **Entrevistas con el equipo CX** — trabajo directo con los agentes para mapear los patrones más frecuentes de contacto. Un dashboard ad-hoc reveló que "booking confirmation" sola generaba más de 17.000 tickets — un problema fácilmente solucionable con mejor UI.\n\n**Estrategia de rediseño:**\n3 principios guía: **Transparencia** (el usuario entiende su reserva de un vistazo), **Autonomía** (cada acción ejecutable sin CX) y **Fail-safe** (diseño de edge cases para prevenir escalaciones).\n\nEntregas incrementales combinando quick wins (copy, señales de confianza) con cambios estructurales mayores (nuevos flujos, lógica async).`,
      ca: `Self-Service Bookings va començar des d'un problema operacional molt concret: +10.000 contactes de suport a la setmana\n\n→ **12 entrevistes amb usuaris** — els usuaris no entenien els estats de reserva, hi havia dos codis de reserva diferents, i accions com canvis de data requerien contactar amb suport\n→ **Anàlisi competitiva** — detectar si l'experiència estava per sota de l'estàndard del sector\n→ **Entrevistes amb l'equip CX** — un dashboard ad-hoc va revelar que "booking confirmation" sola generava més de 17.000 tickets\n\n3 principis guia: Transparència, Autonomia i Fail-safe.`,
      en: `Self-Service Bookings started from a very concrete operational problem: 10,000+ support contacts per week with a 60-agent team at its limit\n\n**Research:**\n→ **12 user interviews** focused on post-booking pain points. Key finding: users didn't understand booking statuses, two different booking codes caused confusion at check-in, and basic actions like date changes or cancellations required contacting support.\n→ **Competitor analysis** — to detect whether the experience was below industry standards and find solutions to identified problems.\n→ **CX team interviews** — direct work with agents to map the most frequent contact patterns. An ad-hoc dashboard revealed that "booking confirmation" alone generated over 17,000 tickets — an easily solvable problem with better UI.\n\n**Redesign strategy:**\n3 guiding principles: **Transparency** (user understands their booking at a glance), **Autonomy** (every action executable without CX) and **Fail-safe** (edge case design to prevent escalations).\n\nIncremental delivery combining quick wins (copy, trust signals) with larger structural changes (new flows, async logic).`
    },
    suggestions: {
      es: [
        { label: '¿Cuáles fueron los resultados?', id: 'project-self-service-impact' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' },
        { label: '¿Cómo trabajas con ingeniería?', id: 'engineering-relationship' }
      ],
      ca: [
        { label: 'Quins van ser els resultats?', id: 'project-self-service-impact' },
        { label: 'Veure tots els projectes', id: 'projects-overview' },
        { label: 'Com treballes amb enginyeria?', id: 'engineering-relationship' }
      ],
      en: [
        { label: 'What were the results?', id: 'project-self-service-impact' },
        { label: 'See all projects', id: 'projects-overview' },
        { label: 'How do you work with engineering?', id: 'engineering-relationship' }
      ]
    }
  },
  
  // ── SELF-SERVICE — IMPACT ──────────────────────────────────
  {
    id: 'project-self-service-impact',
    triggers: ['self service results', 'self service impact', 'self service kpis', 'self service metrics', 'resultados self service', 'resultats self service', 'self service numbers'],
    response: {
      es: `Los resultados de Self-Service Bookings se midieron 3 meses después del lanzamiento por fases en mayo-junio 2024\n\n→ -17% en contactos de soporte por reserva (objetivo: -15% — superado)\n→ -7% en tasa de cancelación de reservas\n→ +6% en eNPS de clientes\n→ +8% en retención de clientes\n→ Reducción en tiempo medio de gestión de contactos — los agentes CX pueden focalizarse en casos de alto impacto\n\nEl rediseño se lanzó en fases — un rediseño integral desde cero en tiempo récord gracias a la colaboración estrecha con Engineering, el Operations PM y el Chief Customer Officer.\n\nHay acciones con adopción más baja de lo esperado (como el rediseño del flujo de cambio de fecha) — probablemente requiere un cambio de comportamiento gradual que llegará con el tiempo.`,
      ca: `Els resultats de Self-Service Bookings es van mesurar 3 mesos després del llançament per fases\n\n→ -17% en contactes de suport per reserva (objectiu: -15% — superat)\n→ -7% en taxa de cancel·lació de reserves\n→ +6% en eNPS de clients\n→ +8% en retenció de clients\n→ Reducció en temps mitjà de gestió de contactes`,
      en: `Self-Service Bookings results were measured 3 months after the phased launch in May-June 2024\n\n→ -17% in support contacts per booking (target: -15% — exceeded)\n→ -7% in booking cancellation rate\n→ +6% in customer eNPS\n→ +8% in customer retention\n→ Reduction in average contact handling time — CX agents can focus on high-impact cases\n\nThe redesign launched in phases — a full rebuild from scratch in record time thanks to close collaboration with Engineering, the Operations PM and the Chief Customer Officer.\n\nSome actions have lower adoption than expected (like the date change flow redesign) — likely requiring a gradual behavioral change that will come over time.`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso?', id: 'project-self-service-process' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' },
        { label: '¿Cuál es tu mayor logro?', id: 'biggest-achievement' }
      ],
      ca: [
        { label: 'Com va ser el procés?', id: 'project-self-service-process' },
        { label: 'Veure tots els projectes', id: 'projects-overview' },
        { label: 'Quin és el teu major assoliment?', id: 'biggest-achievement' }
      ],
      en: [
        { label: 'Walk me through the process', id: 'project-self-service-process' },
        { label: 'See all projects', id: 'projects-overview' },
        { label: "What's your biggest achievement?", id: 'biggest-achievement' }
      ]
    }
  },


/* ============================================================
   SMART SUGGESTER
============================================================ */
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

  // ── SMART SUGGESTER — EXECUTIVE SUMMARY ───────────────────
{
    id: 'project-smart-suggester-summary',
    triggers: ['smart suggester summary', 'smart suggester executive summary', 'smart suggester resumen', 'smart suggester resumen ejecutivo', 'smart suggester resum', 'smart suggester resum executiu'],
    response: {
      es: `**Smart Suggester — Resumen ejecutivo**\n\n🔴 **El problema**\nEl buscador de Stayforlong tenía tolerancia cero a errores tipográficos, no mostraba resultados previos al input del usuario, carecía de empty states y tenía un límite duro de 5 resultados. Los usuarios reseteaban el input con frecuencia y el tiempo de búsqueda era alto.\n\n👤 **Mi rol y proceso**\nProduct Designer end-to-end — lideré 6 meses de research y diseño: grabaciones y heatmaps con Hotjar, encuestas con SUS, entrevistas con usuarios, benchmark de 7 competidores y usability testing con prototipo live. Trabajé directamente con back-end para hacer fine-tuning del índice de ElasticSearch. Estrategia de entrega incremental desde homepage (menos tráfico) antes de escalar a la SERP.\n\n📈 **Impacto medible**\n→ -40% tiempo de búsqueda\n→ +9% tráfico homepage → SERP\n→ +8% usuarios que seleccionan sugerencias\n→ -8% clicks en reset del input\n→ 85% de usuarios prefieren la nueva UI`,
      ca: `**Smart Suggester — Resum executiu**\n\n🔴 **El problema**\nEl cercador de Stayforlong tenia tolerància zero als errors tipogràfics, no mostrava resultats previs a l'input de l'usuari, mancava d'empty states i tenia un límit dur de 5 resultats.\n\n👤 **El meu rol i procés**\nProduct Designer end-to-end — vaig liderar 6 mesos de research i disseny. Vaig treballar directament amb back-end per fer fine-tuning de l'índex d'ElasticSearch. Estratègia de lliurament incremental des de la homepage abans d'escalar a la SERP.\n\n📈 **Impacte mesurable**\n→ -40% temps de cerca\n→ +9% trànsit homepage → SERP\n→ +8% usuaris que seleccionen suggeriments\n→ -8% clics al reset de l'input\n→ 85% d'usuaris prefereixen la nova UI`,
      en: `**Smart Suggester — Executive summary**\n\n🔴 **The problem**\nStayforlong's search had zero typo tolerance, no pre-input results, no empty states and a hard limit of 5 results. Users frequently reset the input and search time was high.\n\n👤 **My role and process**\nEnd-to-end Product Designer — led 6 months of research and design: Hotjar recordings and heatmaps, SUS surveys, user interviews, 7-competitor benchmark and live prototype usability testing. Worked directly with back-end to fine-tune the ElasticSearch index. Incremental delivery strategy starting from homepage (lower traffic) before scaling to SERP.\n\n📈 **Measurable impact**\n→ -40% search time\n→ +9% homepage → SERP traffic\n→ +8% users selecting suggestions\n→ -8% input reset clicks\n→ 85% of users prefer the new UI`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso de research?', id: 'project-smart-suggester-research' },
        { label: '¿Cómo trabajaste con ingeniería?', id: 'project-smart-suggester-engineering' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Com va ser el procés de research?', id: 'project-smart-suggester-research' },
        { label: 'Com vas treballar amb enginyeria?', id: 'project-smart-suggester-engineering' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'Walk me through the research', id: 'project-smart-suggester-research' },
        { label: 'How did you work with engineering?', id: 'project-smart-suggester-engineering' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },
  
  // ── SMART SUGGESTER — RESEARCH ─────────────────────────────
  {
    id: 'project-smart-suggester-research',
    triggers: ['smart suggester research', 'smart suggester process', 'smart suggester discovery', 'smart suggester methodology', 'how did you approach smart suggester', 'suggester competitor', 'suggester hotjar', 'suggester elasticsearch'],
    response: {
      es: `El Smart Suggester empezó con un research plan en Q3 2024 combinando metodologías cualitativas y cuantitativas\n\n**Grabaciones y heatmaps con Hotjar** — Para detectar bugs, problemas y oportunidades en la interacción con el buscador. Esto reveló la mayoría de los problemas con la UI existente.\n\n**Encuestas** — Para medir la satisfacción actual y obtener el SUS (System Usability Scale) del buscador antiguo, con el que luego comparar el nuevo.\n\n**Entrevistas con usuarios** — Para entender frustraciones y expectativas en profundidad.\n\n**Competitor analysis** — Benchmark heurístico de 7 competidores (Expedia, Booking, Kayak, Hostelworld, Vio, Athotel, Agoda). Hallazgos clave: competidores mostraban más resultados, permitían búsqueda por POIs cercanos, tenían empty states, loading indicators y pre-search suggestions antes de que el usuario escribiera.\n\n**Usability testing** — Validación con prototipo live antes de desarrollo, dado que la interacción tiene muchos micro-estados difíciles de testear en staging.\n\nEl contexto técnico fue clave: la homepage era el terreno perfecto para probar iteraciones — menos tráfico que la SERP, pero base de datos real de producción.`,
      ca: `El Smart Suggester va començar amb un research plan al Q3 2024\n\n→ **Gravacions i heatmaps amb Hotjar** — detectar problemes i oportunitats a la interacció amb el cercador\n→ **Enquestes** — mesurar satisfacció actual i SUS del cercador antic\n→ **Entrevistes amb usuaris** — entendre frustracions i expectatives\n→ **Competitor analysis** — benchmark de 7 competidors. Descobriments clau: mostraven més resultats, pre-search suggestions i loading indicators\n→ **Usability testing** — validació amb prototip live abans del desenvolupament`,
      en: `Smart Suggester started with a research plan in Q3 2024 combining qualitative and quantitative methodologies\n\n**Hotjar recordings and heatmaps** — To detect bugs, problems and opportunities in the search interaction. This revealed most of the issues with the existing UI.\n\n**Surveys** — To measure current satisfaction and get the SUS (System Usability Scale) of the old suggester, for later comparison with the new one.\n\n**User interviews** — To understand frustrations and expectations in depth.\n\n**Competitor analysis** — Heuristic benchmark of 7 competitors (Expedia, Booking, Kayak, Hostelworld, Vio, Athotel, Agoda). Key findings: competitors showed more results, allowed search by nearby POIs, had empty states, loading indicators and pre-search suggestions before user input.\n\n**Usability testing** — Live prototype validation before development, since the interaction has many micro-states difficult to test in staging.\n\nThe technical context was key: the homepage was the perfect testing ground — less traffic than the SERP, but real production database.`
    },
    suggestions: {
      es: [
        { label: '¿Cuáles fueron los resultados?', id: 'project-smart-suggester-impact' },
        { label: '¿Cómo trabajaste con ingeniería?', id: 'project-smart-suggester-engineering' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Quins van ser els resultats?', id: 'project-smart-suggester-impact' },
        { label: 'Com vas treballar amb enginyeria?', id: 'project-smart-suggester-engineering' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'What were the results?', id: 'project-smart-suggester-impact' },
        { label: 'How did you work with engineering?', id: 'project-smart-suggester-engineering' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },
  
  // ── SMART SUGGESTER — IMPACT ───────────────────────────────
  {
    id: 'project-smart-suggester-impact',
    triggers: ['smart suggester results', 'smart suggester impact', 'smart suggester kpis', 'smart suggester metrics', 'resultados smart suggester', 'resultats smart suggester', 'suggester numbers'],
    response: {
      es: `Los resultados del Smart Suggester se midieron analizando el flujo homepage → SERP antes y después de la implementación\n\n→ -40% en tiempo de búsqueda\n→ +9% en tráfico de homepage a SERP (de 41% a 45% de usuarios, +4 puntos porcentuales)\n→ +8% en usuarios que seleccionan sugerencias al interactuar con el buscador (de 36% a 39%)\n→ -8% en clicks en el botón de reset del input\n\nEl dashboard en Looker Studio creado por el equipo de Data permitió monitorizar cada mejora incremental en tiempo real — si cualquier upload no tenía el impacto esperado o había un bug en los eventos, lo detectábamos inmediatamente.\n\n85% de usuarios prefirieron la nueva UI vs la antigua en los tests de validación, con un 66.7% de success rate con el nuevo sistema.`,
      ca: `Els resultats del Smart Suggester es van mesurar analitzant el flux homepage → SERP\n\n→ -40% en temps de cerca\n→ +9% en trànsit de homepage a SERP\n→ +8% en usuaris que seleccionen suggeriments\n→ -8% en clics al botó de reset de l'input\n\n85% d'usuaris van preferir la nova UI vs l'antiga en els tests de validació.`,
      en: `Smart Suggester results were measured by analysing the homepage → SERP flow before and after implementation\n\n→ -40% in search time\n→ +9% in homepage to SERP traffic (from 41% to 45% of users, +4 percentage points)\n→ +8% in users selecting suggestions when interacting with the search (from 36% to 39%)\n→ -8% in clicks on the input reset button\n\nThe Looker Studio dashboard built by the Data team allowed monitoring each incremental improvement in real time — if any upload didn't have the expected impact or there was a bug in the events, we'd detect it immediately.\n\n85% of users preferred the new UI vs the old one in validation tests, with a 66.7% success rate with the new system.`
    },
    suggestions: {
      es: [
        { label: '¿Cómo fue el proceso de research?', id: 'project-smart-suggester-research' },
        { label: '¿Cómo trabajaste con ingeniería?', id: 'project-smart-suggester-engineering' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Com va ser el procés de research?', id: 'project-smart-suggester-research' },
        { label: 'Com vas treballar amb enginyeria?', id: 'project-smart-suggester-engineering' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'Walk me through the research', id: 'project-smart-suggester-research' },
        { label: 'How did you work with engineering?', id: 'project-smart-suggester-engineering' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
  },
  
  // ── SMART SUGGESTER — ENGINEERING ─────────────────────────
  {
    id: 'project-smart-suggester-engineering',
    triggers: ['smart suggester engineering', 'smart suggester backend', 'smart suggester elasticsearch', 'smart suggester tech', 'how did you work with backend smart suggester', 'suggester backend collaboration'],
    response: {
      es: `El Smart Suggester fue el proyecto donde más trabajé con back-end de toda mi carrera\n\nEl problema central era que el sistema de búsqueda tenía tolerancia cero a errores tipográficos — el índice de ElasticSearch era demasiado estricto. Cualquier letra mal escrita, orden diferente de palabras o acento faltante devolvía cero resultados.\n\nTrabajé directamente con el equipo de back-end para hacer fine-tuning manual del índice de ElasticSearch — ajustando la tolerancia de matching, los pesos de los campos y la lógica de priorización por localización del usuario. No era un cambio de UI, era una colaboración técnica profunda donde yo definía el comportamiento esperado y ellos ajustaban el algoritmo.\n\nOtros cambios técnicos relevantes que diseñé y trabajé con front-end:\n→ Pre-search suggestions antes del input del usuario\n→ Carga no bloqueante del dropdown de resultados\n→ Auto-preselección del primer resultado si el usuario no selecciona ninguno\n→ Búsquedas recientes cacheadas en el dispositivo\n→ Resultados priorizados por localización geográfica del usuario`,
      ca: `El Smart Suggester va ser el projecte on més vaig treballar amb back-end de tota la meva carrera\n\nEl problema central era que el sistema de cerca tenia tolerància zero als errors tipogràfics. Vaig treballar directament amb l'equip de back-end per fer fine-tuning manual de l'índex d'ElasticSearch — ajustant la tolerància de matching, els pesos dels camps i la lògica de priorització per localització.\n\nAlts canvis tècnics: pre-search suggestions, càrrega no bloquejant, auto-preselecció del primer resultat, cerques recents cachejades i resultats prioritzats per localització geogràfica.`,
      en: `Smart Suggester was the project where I collaborated most closely with back-end in my entire career\n\nThe core problem was that the search system had zero typo tolerance — the ElasticSearch index was too strict. Any misspelled letter, different word order or missing accent returned zero results.\n\nI worked directly with the back-end team to manually fine-tune the ElasticSearch index — adjusting match tolerance, field weights and location-based prioritisation logic. This wasn't a UI change, it was deep technical collaboration where I defined the expected behaviour and they adjusted the algorithm.\n\nOther relevant technical changes I designed and worked on with front-end:\n→ Pre-search suggestions before user input\n→ Non-blocking dropdown load for results\n→ Auto-preselection of the first result if the user doesn't select any\n→ Recent searches cached on the device\n→ Results prioritised by user's geographic location`
    },
    suggestions: {
      es: [
        { label: '¿Cuáles fueron los resultados?', id: 'project-smart-suggester-impact' },
        { label: '¿Cómo trabajas con ingeniería en general?', id: 'engineering-relationship' },
        { label: 'Ver todos los proyectos', id: 'projects-overview' }
      ],
      ca: [
        { label: 'Quins van ser els resultats?', id: 'project-smart-suggester-impact' },
        { label: 'Com treballes amb enginyeria en general?', id: 'engineering-relationship' },
        { label: 'Veure tots els projectes', id: 'projects-overview' }
      ],
      en: [
        { label: 'What were the results?', id: 'project-smart-suggester-impact' },
        { label: 'How do you work with engineering in general?', id: 'engineering-relationship' },
        { label: 'See all projects', id: 'projects-overview' }
      ]
    }
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

  ];