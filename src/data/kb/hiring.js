export const hiring = [
    
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
    triggers: ['porque te tenemos que contratar', 'por que te tenemos que contratar', 'convince me', 'por que contratarte', 'why should we hire you', 'per que contractar-te', 'que te hace diferente', 'what makes you different', 'que et fa diferent', 'convenceme', 'convince me', 'convence\'m', 'pitch', 'en 60 segundos', 'in 60 seconds', 'en 60 segons', 'elevator pitch', 'value proposition', 'propuesta de valor', 'por que te tenemos que contratar', 'porque tenemos que contratarte', 'por que contratarte', 'why should we hire you', 'convince me', 'convenceme'],
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
    }
  },
  ];