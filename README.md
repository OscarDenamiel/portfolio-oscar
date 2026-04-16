# oscardenamiel.com — Portfolio

Personal portfolio of Oscar Denamiel, Senior Product Designer. Built with performance, maintainability and design quality as primary constraints.

**Live:** [oscardenamiel.com](https://oscardenamiel.com)

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Build tool | Vite 8 | Zero-config, instant HMR, native ESM |
| Runtime | Vanilla JS (ES Modules) | No framework overhead for a content site |
| Styles | Plain CSS with custom properties | Full control, no build step complexity |
| Font | Plus Jakarta Sans (Google Fonts) | Geometric, modern, excellent weight range |
| Hosting | Vercel | Git-connected deploys, edge CDN, free tier |
| Analytics | Vercel Analytics + Microsoft Clarity | Quantitative (Vercel) + session recording (Clarity) |

---

## Why Vite and not a framework

The portfolio is a content site with 6 pages, no server-side data fetching and no component state beyond dark mode. React, Next.js or Astro would have added bundle size, build complexity and hydration overhead with zero benefit. Vite gives fast local development and optimised production builds without any of that cost.

The one dynamic behaviour — project cards rendered from a data file — is handled with a single `renderProjects()` function in `main.js`. No virtual DOM needed.

---

## Why vanilla CSS and not Tailwind or a CSS-in-JS solution

The design system is small and stable: a handful of layout classes, a token system via CSS custom properties, and a set of component patterns. Tailwind would have added a compiler step and made the HTML harder to read. CSS-in-JS makes no sense without a framework.

Custom properties (`--container-max`, `--text-container-max`, `--section-spacer`, etc.) provide the same design token benefits as a utility framework, with zero tooling.

---

## Architecture decisions

### Component loading via fetch

Shared UI (header, sidebar, footer, more-projects blocks) is loaded at runtime with a lightweight `loadComponent()` function. This avoids duplicating HTML across 6 files while keeping the stack framework-free.

```js
async function loadComponent(placeholderId, componentPath) {
  const placeholder = document.getElementById(placeholderId);
  const response = await fetch(componentPath);
  const html = await response.text();
  const temp = document.createElement('div');
  temp.innerHTML = html;
  placeholder.replaceWith(...temp.childNodes);
}
```

The `more-projects` component is selected automatically based on the current URL slug, via a `MORE_PROJECTS_MAP` object — no routing library required.

### CSS pattern system

Every section type in a case study is documented as a numbered pattern (`PATRÓN 1–13`) in `project-template.html`. Each pattern has explicit rules for spacing, animation, typography and responsive behaviour. This makes adding new case studies consistent and fast.

### Scroll reveal

Sections animate in on scroll using a single `IntersectionObserver` in `scrollManager.js`. The observer adds a `.visible` class, CSS handles the transition. Threshold and `rootMargin` are adjusted per viewport to avoid animations triggering too early on mobile.

### Responsive image carousels

Photo sections on the About page use CSS scroll snap + horizontal overflow on mobile, with JS carousel controls for navigation. The implementation uses negative margins to break out of the container padding while keeping the first card visually aligned with the page content — no `100vw` tricks that break with `overflow: hidden`.

### Dark mode

Implemented via a `.dark-mode` class on `body`, toggled by `darkMode.js` with `localStorage` persistence. All colour tokens are defined twice in `:root` and `body.dark-mode`, so the entire theme switches with a single class change.

---

## Performance considerations

- 25 unused font files removed (Inter, SpotifyMix, TWKLausanne)
- Images served as `.webp`
- Project audio files use `preload="none"` — loaded only on user interaction
- First project card uses `loading="eager"` + `fetchpriority="high"`, rest are lazy
- `font-display: swap` via Google Fonts `&display=swap`
- Vercel edge CDN for global asset delivery

---

## SEO

- Unique `<title>`, `<meta name="description">` and `og:*` tags per page
- Canonical URLs without `.html` extension
- `sitemap.xml` with 6 URLs and priorities
- `robots.txt` pointing to sitemap
- Google Search Console verified

---

## Accessibility

- Colour contrast ≥ 4.5:1 (WCAG AA) for all body text
- `aria-label` on all icon buttons
- Semantic HTML headings hierarchy (`h1` → `h2` → `h3`)
- `prefers-reduced-motion` respected for blob animations
- `scroll-behavior: smooth` only applied when motion is not reduced

---

## Project structure

```
portfolio-oscar/
├── public/
│   ├── components/        # Shared HTML fragments (header, sidebar, footer, more-projects)
│   ├── images/
│   ├── videos/
│   └── files/             # CV PDF
├── src/
│   ├── data/
│   │   └── projects.js    # Project card content
│   ├── js/
│   │   ├── darkMode.js
│   │   ├── mobileMenu.js
│   │   ├── audioManager.js
│   │   └── scrollManager.js
│   ├── main.js
│   └── style.css
├── about.html
├── index.html
├── map.html
├── mobile-first.html
├── self-service-booking.html
├── smart-suggester.html
└── project-template.html  # Reference template with all 13 documented patterns
```

---

## Local development

```bash
npm install
npm run dev
```

Requires Node 22+.

## Deploy

Every push to `main` triggers an automatic Vercel deployment. No manual steps required.

```bash
git add .
git commit -m "your message"
git push
```
