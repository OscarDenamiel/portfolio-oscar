export const tech = [


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

];