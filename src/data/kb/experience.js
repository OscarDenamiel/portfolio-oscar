export const experience = [
    
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
  ];