/* ============================================================
   CHATBOT KNOWLEDGE BASE — chatbot-kb.js
   Tono: natural, profesional, técnico. Como hablaría Oscar.
   Para actualizar respuestas edita este archivo únicamente.
============================================================ */

export const KNOWLEDGE_BASE = [

  {
    id: 'greeting',
    triggers: ['hola', 'hey', 'hello', 'hi', 'buenos dias', 'buenas', 'bon dia', 'bona tarda', 'good morning', 'sup'],
    response: {
      es: `Hola! Soy Oscar, Senior Product Designer en Barcelona. Cuentame, que te trae por aqui?`,
      ca: `Hola! Soc l'Oscar, Senior Product Designer a Barcelona. Explica'm, en que et puc ajudar?`,
      en: `Hey! I'm Oscar, Senior Product Designer based in Barcelona. What brings you here?`
    }
  },

  {
    id: 'projects-overview',
    triggers: ['proyectos', 'projects', 'projectes', 'case studies', 'portfolio', 'que has hecho', 'what have you done', 'que has fet', 'trabajo', 'work'],
    response: {
      es: `Tengo 4 case studies publicados, todos con resultados reales y medibles\n\n**Map Redesign** -> +17% CTR, +25% CVR, +43% sesion (Stayforlong)\n**Mobile First** -> +8% CVR, -12% reembolsos, +7% beneficio diario (Leadtech)\n**Self-Service Bookings** -> -17% contactos de soporte, +8% retencion (Stayforlong)\n**Smart Suggester** -> -40% tiempo de busqueda, +9% trafico al funnel (Stayforlong)\n\nTe interesa alguno en concreto?`,
      ca: `Tinc 4 case studies publicats, tots amb resultats reals i mesurables\n\n**Map Redesign** -> +17% CTR, +25% CVR, +43% sessio (Stayforlong)\n**Mobile First** -> +8% CVR, -12% reemborsaments, +7% benefici diari (Leadtech)\n**Self-Service Bookings** -> -17% contactes de suport, +8% retencio (Stayforlong)\n**Smart Suggester** -> -40% temps de cerca, +9% transit al funnel (Stayforlong)\n\nT'interessa algun en concret?`,
      en: `I've got 4 published case studies, all with real measurable results\n\n**Map Redesign** -> +17% CTR, +25% CVR, +43% session duration (Stayforlong)\n**Mobile First** -> +8% CVR, -12% refunds, +7% daily profit (Leadtech)\n**Self-Service Bookings** -> -17% support contacts, +8% retention (Stayforlong)\n**Smart Suggester** -> -40% search time, +9% funnel traffic (Stayforlong)\n\nWant to dig into any of them?`
    }
  },

  {
    id: 'project-map',
    triggers: ['map', 'mapa', 'map redesign', 'location search', 'reshaping', 'stayforlong map'],
    response: {
      es: `El Map Redesign es probablemente el proyecto del que mas orgulloso estoy\n\nEl mapa de Stayforlong tenia problemas serios: visual saturado, carga bloqueante, usuarios abandonando para ir a Google Maps a buscar contexto que no encontraban. Un desastre silencioso.\n\nLidere 4 meses de discovery: 14 competidores analizados, 10 entrevistas en 7 paises, encuesta a 148 usuarios y analisis de comportamiento con Hotjar. El resultado fue clustering de hoteles, carga no bloqueante, search bar en mobile y un nuevo sistema geografico que paso de 300 a 1.000 resultados.\n\n**Resultados:** +17% CTR, +25% CVR, +43% duracion de sesion, 95% usuarios prefieren la nueva UI.\n\noscardenamiel.com/map`,
      ca: `El Map Redesign es probablement el projecte del qual estic mes orgullos\n\nEl mapa de Stayforlong tenia problemes seriosos: visual saturat, carrega bloquejant, usuaris abandonant per anar a Google Maps. Un desastre silencions.\n\nVaig liderar 4 mesos de discovery: 14 competidors, 10 entrevistes a 7 paisos, enquesta a 148 usuaris i analisi de comportament amb Hotjar. El resultat va ser clustering d'hotels, carrega no bloquejant, barra de cerca al mobil i un nou sistema geografic de 300 a 1.000 resultats.\n\n**Resultats:** +17% CTR, +25% CVR, +43% duracio de sessio, 95% usuaris prefereixen la nova UI.\n\noscardenamiel.com/map`,
      en: `The Map Redesign is probably the project I'm most proud of\n\nStayforlong's map had serious issues: cluttered UI, blocking loads, users leaving for Google Maps to find context they couldn't find on ours. A silent disaster.\n\nI led 4 months of discovery: analysed 14 competitors, ran 10 interviews across 7 countries, surveyed 148 users, dug into behavioural data. Result: hotel clustering, non-blocking load, mobile search bar and a new geo system going from 300 to 1,000 results.\n\n**Results:** +17% CTR, +25% CVR, +43% session duration, 95% of users prefer the new UI.\n\noscardenamiel.com/map`
    }
  },

  {
    id: 'project-mobile-first',
    triggers: ['mobile first', 'mobile-first', 'leadtech', 'mobile design', 'disseny mobile', 'diseno mobile'],
    response: {
      es: `Mobile First fue uno de esos proyectos que te cambian como ves el diseno\n\nEn Leadtech, el movil tenia un 55% mas de trafico que desktop pero generaba un 40% menos de conversion. La causa: la experiencia movil era literalmente el desktop mal adaptado.\n\nAplique Lean UX, hice 9 iteraciones del prototipo y 11 rondas de testing diferentes. Tambien construi el Design System completo para que todo fuera escalable desde el principio.\n\n**Resultados:** +8% CVR, -12% reembolsos, +7% beneficio diario, -20% drop-off.\n\noscardenamiel.com/mobile-first`,
      ca: `Mobile First va ser un d'aquells projectes que et canvien com veus el disseny\n\nA Leadtech, el mobil tenia un 55% mes de transit que desktop pero generava un 40% menys de conversio. La causa: l'experiencia mobil era literalment el desktop mal adaptat.\n\nVaig aplicar Lean UX, fer 9 iteracions del prototip i 11 rondes de testing. Tambe vaig construir el Design System complet.\n\n**Resultats:** +8% CVR, -12% reemborsaments, +7% benefici diari, -20% drop-off.\n\noscardenamiel.com/mobile-first`,
      en: `Mobile First was one of those projects that changes how you see design\n\nAt Leadtech, mobile had 55% more traffic than desktop but 40% lower conversion. The cause: the mobile experience was literally desktop badly adapted.\n\nI used Lean UX, ran 9 prototype iterations and 11 testing rounds. Also built the full Design System for scalability from day one.\n\n**Results:** +8% CVR, -12% refund ratio, +7% daily profit, -20% drop-off.\n\noscardenamiel.com/mobile-first`
    }
  },

  {
    id: 'project-self-service',
    triggers: ['self-service', 'self service', 'bookings', 'reservas', 'reserves', 'gestion reservas', 'booking management', 'gestio reserves', 'soporte', 'support'],
    response: {
      es: `Self-Service Bookings nacio de un problema operacional bastante gordo\n\nStayforlong recibia mas de 10.000 contactos de soporte a la semana por cosas que el usuario deberia poder resolver solo. El equipo de 60 agentes estaba al limite.\n\nRedisene toda la experiencia post-reserva: cambios de fecha, cancelaciones, descarga PDF, historial de solicitudes... sin tocar a nadie de soporte. Trabaje codo a codo con CX para priorizar por volumen.\n\n**Resultados:** -17% contactos por reserva, -7% cancelaciones, +6% eNPS, +8% retencion.\n\noscardenamiel.com/self-service-booking`,
      ca: `Self-Service Bookings va neixer d'un problema operacional bastant gros\n\nStayforlong rebia mes de 10.000 contactes de suport a la setmana per coses que l'usuari hauria de poder resoldre sol. L'equip de 60 agents estava al limit.\n\nVaig redissenyar tota l'experiencia post-reserva: canvis de data, cancel-lacions, descarrega PDF, historial. Vaig treballar amb CX per prioritzar per volum.\n\n**Resultats:** -17% contactes per reserva, -7% cancel-lacions, +6% eNPS, +8% retencio.\n\noscardenamiel.com/self-service-booking`,
      en: `Self-Service Bookings came from a pretty big operational problem\n\nStayforlong was getting over 10,000 support contacts per week for things users should handle themselves. The 60-agent CX team was at its limit.\n\nI redesigned the whole post-booking experience: date changes, cancellations, PDF download, request history... no support contact needed. Worked closely with CX to prioritise by volume.\n\n**Results:** -17% contacts per booking, -7% cancellation rate, +6% eNPS, +8% retention.\n\noscardenamiel.com/self-service-booking`
    }
  },

  {
    id: 'project-smart-suggester',
    triggers: ['smart suggester', 'suggester', 'buscador', 'cercador', 'search engine', 'busqueda', 'motor de busqueda'],
    response: {
      es: `El Smart Suggester es mas tecnico de lo que parece\n\nEl buscador de Stayforlong tenia tolerancia cero a errores tipograficos. Sin estado vacio, sin resultados previos al input, con iconos confusos. Basicamente un buscador de 2015.\n\nTrabaje con back-end para afinar el indice de ElasticSearch y anade mejoras UX: destinos populares, busquedas recientes, resultados por localizacion, carga no bloqueante y preseleccion automatica para no bloquear al usuario.\n\n**Resultados:** -40% tiempo de busqueda, +9% trafico homepage a SERP, +8% menos resets de input.\n\noscardenamiel.com/smart-suggester`,
      ca: `El Smart Suggester es mes tecnic del que sembla\n\nEl cercador de Stayforlong tenia tolerancia zero als errors tipografics. Sense estat buit, sense resultats previs, amb icones confoses. Basicament un cercador del 2015.\n\nVaig treballar amb back-end per afinar l'index d'ElasticSearch i vaig afegir millores UX: destinacions populars, cerques recents, resultats per localitzacio, carrega no bloquejant.\n\n**Resultats:** -40% temps de cerca, +9% transit homepage a SERP, +8% menys resets d'input.\n\noscardenamiel.com/smart-suggester`,
      en: `Smart Suggester is more technical than it looks\n\nStayforlong's search had zero typo tolerance. No empty state, no pre-input results, confusing icons. Basically a 2015 search box.\n\nI worked with back-end to fine-tune the ElasticSearch index and added UX improvements: popular destinations, recent searches, location-based results, non-blocking load and auto-preselection.\n\n**Results:** -40% search time, +9% homepage to SERP traffic, +8% fewer input resets.\n\noscardenamiel.com/smart-suggester`
    }
  },

  {
    id: 'experience',
    triggers: ['experiencia', 'experience', 'experiencia', 'trayectoria', 'carrera', 'career', 'empresas', 'companies', 'empreses', 'historial', 'cv', 'curriculum', 'background', 'anos de experiencia', 'years of experience'],
    response: {
      es: `Llevo 8 anos en diseno de producto, siempre en entornos digitales de alta conversion\n\n**Stayforlong** (2024-hoy) Senior PD en una OTA con 300M+ de facturacion.\n**Leadtech** (2022-2024) Product Designer, lidere Mobile First.\n**FloraQueen** (2021-2022) Rediseno web y Design System.\n**Be.Green** (2020-2021) Head of UX/UI desde cero.\n**Sopeel** (2018-2020) UX/UI en startup de energias renovables.\n**Bodas.net / The Knot** (2018-2019) UI Designer.\n\nMi zona de confort: Travel Tech y E-commerce.`,
      ca: `Porto 8 anys en disseny de producte, sempre en entorns d'alta conversio\n\n**Stayforlong** (2024-avui) Senior PD en una OTA amb 300M+ de facturacio.\n**Leadtech** (2022-2024) Product Designer, vaig liderar Mobile First.\n**FloraQueen** (2021-2022) Redisseny web i Design System.\n**Be.Green** (2020-2021) Head of UX/UI des de zero.\n**Sopeel** (2018-2020) UX/UI en startup d'energies renovables.\n**Bodas.net / The Knot** (2018-2019) UI Designer.\n\nLa meva zona de confort: Travel Tech i E-commerce.`,
      en: `I've been in product design for 8 years, always in high-conversion digital environments\n\n**Stayforlong** (2024-present) Senior PD at an OTA with 300M+ annual revenue.\n**Leadtech** (2022-2024) Product Designer, led Mobile First.\n**FloraQueen** (2021-2022) Website redesign and Design System.\n**Be.Green** (2020-2021) Head of UX/UI from scratch.\n**Sopeel** (2018-2020) UX/UI at a renewable energy startup.\n**Bodas.net / The Knot** (2018-2019) UI Designer.\n\nMy comfort zone: Travel Tech and E-commerce.`
    }
  },

  {
    id: 'design-process',
    triggers: ['proceso', 'process', 'metodologia', 'methodology', 'como trabajas', 'how do you work', 'com treballes', 'approach', 'workflow', 'design process'],
    response: {
      es: `Mi proceso tiene 4 fases y no me salto ninguna\n\n**1. Diagnostico** Miro los datos antes de tocar Figma. Si no hay datos, los creo. Disenar sin datos es adivinar.\n**2. Enfoque** Dedicar tiempo a enmarcar el problema correcto es lo mas valioso que puedes hacer. El problema equivocado a escala es carisimo.\n**3. Solucion** Diseno contra una hipotesis medible. Nada de "yo creo que". Apuestas basadas en evidencia.\n**4. Validar** Primero el experimento, luego el producto final.\n\nHerramientas core: Lean UX, A/B testing, UX Research mixto.`,
      ca: `El meu proces te 4 fases i no me'n salto cap\n\n**1. Diagnostic** Miro les dades abans de tocar Figma. Si no hi ha dades, les creo.\n**2. Enfocament** Emmarcar el problema correcte es el mes valuos que pots fer.\n**3. Solucio** Dissenyo contra una hipotesi mesurable. Res de "jo crec que".\n**4. Validar** Primer l'experiment, despres el producte final.\n\nEines core: Lean UX, A/B testing, UX Research mixt.`,
      en: `My process has 4 phases and I don't skip any of them\n\n**1. Diagnose** I look at the data before opening Figma. If there's no data, I create it.\n**2. Scope** Framing the right problem is the most valuable thing you can do.\n**3. Solution** I design against a measurable hypothesis. No "I think that". Evidence-based bets.\n**4. Validate** Experiment first, then the final product.\n\nCore tools: Lean UX, A/B testing, mixed UX Research.`
    }
  },

  {
    id: 'skills',
    triggers: ['habilidades', 'skills', 'habilitats', 'especialidad', 'especializacion', 'specialisation', 'que sabes', 'what do you know', 'herramientas', 'tools', 'eines', 'figma', 'cro', 'ux research', 'ab testing', 'design system'],
    response: {
      es: `Mis especialidades principales\n\n**Growth y CRO** Diseno orientado a conversion, A/B testing, experimentos a escala.\n**UX Research** Entrevistas, encuestas, analisis de comportamiento con Hotjar y Clarity, tests de usabilidad.\n**Design Systems** Creacion y mantenimiento de sistemas escalables. Me gustan los componentes bien pensados.\n**Data Analysis** Google Analytics, Amplitude, Looker Studio. Me incomoda tomar decisiones sin datos.\n\nHerramientas: Figma, Hotjar, Mixpanel, Jira.\nIdiomas: Espanol y Catalan (nativos), Ingles (profesional), Aleman (supervivencia).`,
      ca: `Les meves especialitats principals\n\n**Growth i CRO** Disseny orientat a conversio, A/B testing, experiments a escala.\n**UX Research** Entrevistes, enquestes, analisi de comportament, tests d'usabilitat.\n**Design Systems** Creacio i manteniment de sistemes escalables.\n**Data Analysis** Google Analytics, Amplitude, Looker Studio.\n\nEines: Figma, Hotjar, Mixpanel, Jira.\nIdiomes: Espanyol i Catala (natius), Angles (professional), Alemany (supervivencia).`,
      en: `My main specialisms\n\n**Growth and CRO** Conversion-oriented design, A/B testing, experiments at scale.\n**UX Research** Interviews, surveys, behavioural analysis with Hotjar and Clarity, usability testing.\n**Design Systems** Building and maintaining scalable systems. I like well-thought-out components.\n**Data Analysis** Google Analytics, Amplitude, Looker Studio. I'm uncomfortable making decisions without data.\n\nTools: Figma, Hotjar, Mixpanel, Jira.\nLanguages: Spanish and Catalan (native), English (professional), German (survival level).`
    }
  },

  {
    id: 'education',
    triggers: ['educacion', 'education', 'educacio', 'formacion', 'formacio', 'estudios', 'estudis', 'universidad', 'university', 'universitat', 'master', 'titulacion'],
    response: {
      es: `Mi formacion es bastante variada, creo que se nota en como trabajo\n\n**Master en Big Data, Business Intelligence y Digital Business** ENEB\n**Master en UX Design y Creatividad Audiovisual** Elisava\n**Full-stack Web Developer Bootcamp** The App Brewery (si, se programar un poco)\n**Grado en Comunicacion Audiovisual** UAB\n\nAdemas certificaciones en CRO, Product Analytics, Hotjar, Accessibility y Mobile UX en IxDF.`,
      ca: `La meva formacio es bastant variada, crec que es nota en com treballo\n\n**Master en Big Data, Business Intelligence i Digital Business** ENEB\n**Master en UX Design i Creativitat Audiovisual** Elisava\n**Full-stack Web Developer Bootcamp** The App Brewery (si, se programar una mica)\n**Grau en Comunicacio Audiovisual** UAB\n\nA mes certificacions en CRO, Product Analytics, Hotjar, Accessibility i Mobile UX a IxDF.`,
      en: `My background is pretty varied, which I think shows in how I work\n\n**Master's in Big Data, Business Intelligence and Digital Business** ENEB\n**Master's in UX Design and Audiovisual Creativity** Elisava\n**Full-stack Web Developer Bootcamp** The App Brewery (yes, I can code a bit)\n**Degree in Audiovisual Communication** UAB\n\nPlus certifications in CRO, Product Analytics, Hotjar, Accessibility and Mobile UX at IxDF.`
    }
  },

  {
    id: 'availability',
    triggers: ['disponible', 'available', 'disponibilitat', 'job', 'feina', 'oportunidad', 'opportunity', 'oportunitat', 'hiring', 'contractar', 'looking for work', 'open to work', 'abierto a', 'obert a', 'buscando trabajo'],
    response: {
      es: `Si, estoy abierto a nuevas oportunidades\n\nBusco roles de Senior Product Designer o Lead Designer en empresas donde el diseno tenga impacto real en el negocio, no solo en los decks de presentacion.\n\nSectores de interes: Travel Tech, E-commerce, Fintech o cualquier producto digital con foco en crecimiento y experimentacion.\n\nEscribeme a oscardenamiel@gmail.com o conectate en linkedin.com/in/oscardenamiel. Suelo responder en el dia.`,
      ca: `Si, estic obert a noves oportunitats\n\nBusco rols de Senior Product Designer o Lead Designer en empreses on el disseny tingui impacte real en el negoci.\n\nSectors d'interes: Travel Tech, E-commerce, Fintech o qualsevol producte digital amb focus en creixement i experimentacio.\n\nEscriu-me a oscardenamiel@gmail.com o connecta't a linkedin.com/in/oscardenamiel.`,
      en: `Yes, I'm open to new opportunities\n\nI'm looking for Senior Product Designer or Lead Designer roles at companies where design has real business impact, not just in presentation decks.\n\nAreas of interest: Travel Tech, E-commerce, Fintech or any digital product focused on growth and experimentation.\n\nReach me at oscardenamiel@gmail.com or connect on linkedin.com/in/oscardenamiel. I usually reply the same day.`
    }
  },

  {
    id: 'contact',
    triggers: ['contacto', 'contact', 'contacte', 'email', 'correo', 'linkedin', 'whatsapp', 'hablar', 'talk', 'parlar', 'reunion', 'meeting', 'llamada', 'call', 'escribir', 'write'],
    response: {
      es: `Puedes encontrarme en:\n\nEmail: oscardenamiel@gmail.com\nLinkedIn: linkedin.com/in/oscardenamiel\nWhatsApp: wa.link/92htwm\n\nEstoy en Barcelona (CET). Para calls o reuniones, el email o LinkedIn son la mejor via.`,
      ca: `Pots trobar-me a:\n\nEmail: oscardenamiel@gmail.com\nLinkedIn: linkedin.com/in/oscardenamiel\nWhatsApp: wa.link/92htwm\n\nSoc a Barcelona (CET).`,
      en: `You can find me at:\n\nEmail: oscardenamiel@gmail.com\nLinkedIn: linkedin.com/in/oscardenamiel\nWhatsApp: wa.link/92htwm\n\nI'm in Barcelona (CET). For calls or meetings, email or LinkedIn are best.`
    }
  },

  {
    id: 'portfolio-stack',
    triggers: ['portfolio stack', 'web stack', 'construido', 'built', 'tecnologia', 'technology', 'vite', 'vanilla', 'vercel', 'como esta hecho', 'how is it built', 'codigo', 'code', 'codi'],
    response: {
      es: `El portfolio esta construido con stack minimo porque no necesita mas\n\n**Vite 8** Build tool, HMR instantaneo.\n**Vanilla JS** (ES Modules) Sin frameworks. Para un site de 6 paginas, React seria matar moscas a canonazos.\n**CSS puro** con custom properties. Sin Tailwind.\n**Vercel** Deploy automatico en cada push a main.\n\nEl chatbot que estas usando ahora tambien esta construido por mi, sin APIs externas. Knowledge-based puro.`,
      ca: `El portfolio esta construat amb stack minim perque no necessita mes\n\n**Vite 8** Build tool, HMR instantani.\n**Vanilla JS** (ES Modules) Sense frameworks. Per a un site de 6 pagines, React seria matar mosques amb un cano.\n**CSS pur** amb custom properties. Sense Tailwind.\n**Vercel** Deploy automatic a cada push a main.\n\nEl chatbot que estras usant ara tambe esta construat per mi, sense APIs externes.`,
      en: `The portfolio is built with a minimal stack because it doesn't need more\n\n**Vite 8** Build tool, instant HMR.\n**Vanilla JS** (ES Modules) No frameworks. For a 6-page site, React would be massive overkill.\n**Pure CSS** with custom properties. No Tailwind.\n**Vercel** Automatic deploy on every push to main.\n\nThe chatbot you're using right now is also built by me, with zero external APIs. Pure knowledge-based.`
    }
  },

  {
    id: 'impact',
    triggers: ['impacto', 'impact', 'impacte', 'resultados', 'results', 'resultats', 'metricas', 'metrics', 'metriques', 'logros', 'achievements', 'kpis', 'numeros', 'numbers'],
    response: {
      es: `Algunos numeros de los que estoy contento\n\n+43% duracion de sesion en el mapa\n+25% CVR map-to-booking\n+7% beneficio diario en mobile\n-17% contactos de soporte por reserva\n-40% tiempo de busqueda\n+8% retencion de clientes\n3M+ usuarios impactados\n100+ experimentos validados\n\nTodos estos datos estan en los case studies con el contexto completo.`,
      ca: `Alguns numeros dels quals estic content\n\n+43% duracio de sessio al mapa\n+25% CVR map-to-booking\n+7% benefici diari en mobil\n-17% contactes de suport per reserva\n-40% temps de cerca\n+8% retencio de clients\n3M+ usuaris impactats\n100+ experiments validats\n\nTotes les dades estan als case studies amb el context complet.`,
      en: `Some numbers I'm happy with\n\n+43% session duration on the map\n+25% map-to-booking CVR\n+7% daily profit on mobile\n-17% support contacts per booking\n-40% search time\n+8% customer retention\n3M+ users impacted\n100+ experiments validated\n\nAll of these are in the case studies with full context.`
    }
  },

  {
    id: 'about',
    triggers: ['quien eres', 'who are you', 'qui ets', 'sobre ti', 'about you', 'cuentame sobre ti', 'tell me about yourself', 'aficiones', 'hobbies', 'intereses', 'fuera del trabajo', 'outside work', 'barcelona', 'personal'],
    response: {
      es: `Soy Oscar, Senior Product Designer en Barcelona\n\nProfesionalmente me obsesiona el diseno basado en datos, la experimentacion y construir cosas que realmente funcionen. Me incomoda mucho lanzar y rezar.\n\nFuera del trabajo me encontraras buceando, corriendo, jugando al padel o automatizando cosas en casa hasta que mi familia me pide que pare. Tengo un perro y llevo anos sin recordar como funciona un interruptor de luz fisico.`,
      ca: `Soc l'Oscar, Senior Product Designer a Barcelona\n\nProfessionalment m'obsessiona el disseny basat en dades, l'experimentacio i construir coses que realment funcionin. Em fa mal rollo llançar i resar.\n\nFora del treball em trobaras fent busseig, corrent, jugant a padel o automatitzant coses a casa fins que la meva familia em demana que pari. Tinc un gos i porto anys sense recordar com funciona un interruptor de llum fisic.`,
      en: `I'm Oscar, Senior Product Designer based in Barcelona\n\nProfessionally I'm obsessed with data-driven design, experimentation and building things that actually work. Ship and pray makes me uncomfortable.\n\nOutside work you'll find me diving, running, playing padel or automating things at home until my family asks me to stop. I have a dog and I've genuinely forgotten how a physical light switch works.`
    }
  },

  {
    id: 'cv-download',
    triggers: ['cv', 'resume', 'curriculum', 'descargar', 'download', 'descarregar', 'pdf'],
    response: {
      es: `Aqui tienes mi CV\n\n<a href="https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF" class="text-link" target="_blank">Descargar CV en PDF</a>\n\nTambien puedes verlo en LinkedIn: linkedin.com/in/oscardenamiel`,
      ca: `Aqui tens el meu CV\n\n<a href="https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF" class="text-link" target="_blank">Descarregar CV en PDF</a>\n\nTambe pots veure'l a LinkedIn: linkedin.com/in/oscardenamiel`,
      en: `Here's my CV\n\n<a href="https://drive.google.com/uc?export=download&id=1nvxUNm1693SgYEKQGExxxnDI-gNvVTKF" class="text-link" target="_blank">Download CV as PDF</a>\n\nYou can also view it on LinkedIn: linkedin.com/in/oscardenamiel`
    }
  },

  {
    id: 'freelance',
    triggers: ['freelance', 'colaboracion', 'collaboration', 'col-laboracio', 'consultoria', 'consulting', 'autonomo', 'autonom'],
    response: {
      es: `Dependiendo del proyecto y el momento, si estoy abierto a colaboraciones\n\nMe interesan especialmente proyectos de CRO, auditorias UX o diseno de producto para startups con ambicion. Escribeme a oscardenamiel@gmail.com y lo vemos.`,
      ca: `Depenent del projecte i el moment, si estic obert a col-laboracions\n\nM'interessen especialment projectes de CRO, auditories UX o disseny de producte per a startups amb ambicio. Escriu-me a oscardenamiel@gmail.com i ho veiem.`,
      en: `Depending on the project and timing, yes I'm open to collaborations\n\nI'm especially interested in CRO projects, UX audits or product design for ambitious startups. Drop me an email at oscardenamiel@gmail.com and let's talk.`
    }
  },

  {
    id: 'thanks',
    triggers: ['gracias', 'thank you', 'thanks', 'gracies', 'genial', 'great', 'perfecto', 'perfect', 'muy bien', 'awesome', 'increible', 'guay', 'mola'],
    response: {
      es: `De nada! Si tienes mas preguntas o quieres profundizar en algo, aqui estoy.`,
      ca: `De res! Si tens mes preguntes o vols aprofundir en alguna cosa, aqui estic.`,
      en: `You're welcome! If you have more questions or want to dig deeper into anything, just ask.`
    }
  },

];

export const FALLBACK = {
  es: `Mmm, no tengo una respuesta clara para eso. Puedes preguntarme sobre mis proyectos, experiencia, proceso de diseno, educacion o contacto. O escribeme directamente: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`,
  ca: `Mmm, no tinc una resposta clara per a aixo. Pots preguntar-me sobre els meus projectes, experiencia, proces de disseny, educacio o contacte. O escriu-me: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`,
  en: `Hmm, not sure I have a great answer for that. You can ask me about my projects, experience, design process, education or contact. Or just reach me directly: <a href="mailto:oscardenamiel@gmail.com" class="text-link">oscardenamiel@gmail.com</a>`
};
