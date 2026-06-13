# Project - Development History

## Version 0.1.0 - Initial Scaffold (YYYY-MM-DD)

### Summary
<!-- Brief description of what was accomplished in this version -->

### Changes

#### Solution Structure
- [ ] Created solution file
- [ ] Created project structure
- [ ] Configured project references

#### Domain Layer
- [ ] Implemented base entities
- [ ] Created value objects

#### Application Layer
- [ ] Created repository abstractions
- [ ] Implemented CQRS pattern

#### Infrastructure Layer
- [ ] Implemented repository implementations
- [ ] Added database context

#### API Layer
- [ ] Configured Program.cs
- [ ] Created controllers

#### Documentation
- [ ] Created architecture documentation
- [ ] Created development history (this file)

### NuGet Packages Added
<!-- List packages added in this version -->

### CLI Commands Used
```bash
# Commands used during development
```

### Verification Results
- [ ] Solution builds without errors
- [ ] API starts successfully
- [ ] Endpoints return expected responses

### Next Steps (Roadmap)
1. **Feature 1**
   - Description of planned work

2. **Feature 2**
   - Description of planned work

---

## Version 1.0.0 - Portfolio Revamp (2026-01-11)

### Summary
Complete portfolio website revamp implementing US002. Added Projects section showcasing Listo and InCasa apps, redesigned hero with typing animation, skill bars with scroll animations, experience timeline, and Formspree contact form.

### Changes

#### HTML Structure
- ✅ Rewrote `index.html` with semantic sections: Hero, Projects, Skills, Experience, Education, Contact, Footer
- ✅ Added SEO meta tags, Open Graph, and JSON-LD structured data
- ✅ Integrated Formspree contact form (endpoint: mqeezvkl)

#### CSS
- ✅ Enhanced `css/styles.css` with 760+ lines of new component styles
- ✅ Created `css/animations.css` - typing effect, fade-in, skill bar animations
- ✅ Created `css/print.css` - print-optimized stylesheet
- ✅ Responsive breakpoints: 480px, 768px, 1024px, 1440px

#### JavaScript
- ✅ Created `js/main.js` - typing effect, Intersection Observer scroll animations, form validation with mailto fallback

#### Assets
- ✅ Created `images/projects/` and `images/profile/` folders
- ✅ Copied headshot to `images/profile/cezar-headshot.jpg`
- ✅ Created `cv/` folder with CV PDF

#### Accessibility
- ✅ ARIA labels, focus states, reduced motion support, 44px touch targets

### Verification Results
- ✅ Website renders correctly at all breakpoints
- ✅ Contact form submits to Formspree
- ✅ Animations work with Intersection Observer
- ✅ Print stylesheet hides non-essential elements

---

## Version 2.0.0 - Professional Profile Update & Design Refresh (2026-04-09)

### Summary
Complete redesign implementing US003. New "Midnight Architect" dark theme, expanded RAZAC experience with 4 collapsible areas, updated Correios/Sinerlog with cross-border details, skills refresh, and updated resume.

### Changes

#### Design System — "Midnight Architect"
- ✅ New dark palette: deep navy (#0a0e1a) base, electric cyan (#22d3ee) accents, amber highlights
- ✅ New typography: Sora (headings), DM Sans (body), JetBrains Mono (tags/code)
- ✅ Grid-pattern hero background with floating gradient orbs
- ✅ Subtle glow effects on interactive elements

#### HTML Structure
- ✅ Floating side navigation with active section tracking (Intersection Observer)
- ✅ Hero: availability badge, count-up animated metrics, mouse scroll indicator
- ✅ RAZAC: 4 expandable areas (Engineering, Product, Support, AI Innovation) with accordion toggles
- ✅ Correios: expanded with Cainiao, Shopee, Encaminhei.com cross-border projects
- ✅ Sinerlog: added Remessa Conforme federal tax compliance program
- ✅ Updated all meta tags, OG tags, JSON-LD (jobTitle → Engineering & Support Manager)
- ✅ Footer copyright updated to 2026
- ✅ Removed `calc.html` (obsolete Correios calculator)

#### CSS (1400+ lines rewritten)
- ✅ Complete rewrite of `styles.css` with CSS custom properties system
- ✅ Updated `animations.css` with orchestrated scroll reveals and stagger delays
- ✅ Updated `print.css` for dark theme → print conversion
- ✅ Responsive: 480/768/1024/1440px breakpoints, mobile-first
- ✅ Timeline: first item (RAZAC) spans full width on desktop, remaining alternate
- ✅ Touch/hover/reduced-motion media queries

#### JavaScript
- ✅ Rewritten `main.js`: typing effect, scroll animations, form handling, skill bars
- ✅ New: `initFloatingNav()` — scroll-triggered side nav with active state
- ✅ New: `initAreaToggles()` — accordion for RAZAC experience areas
- ✅ New: `initCountUp()` — animated number counters in hero metrics

#### Skills Section
- ✅ Backend: added Oracle (Dapper), MongoDB, RabbitMQ
- ✅ DevOps renamed to "DevOps & Observability" (80%): Azure DevOps, Pipelines, Grafana/Loki, SonarQube, Consul, Railway

#### Resume
- ✅ Created `resources/2026-04 - Resume Cezar Sevilhano EN.html` — print-ready HTML resume
- ✅ Updated RAZAC with 4-area breakdown and full tech stack
- ✅ Updated Correios with cross-border accounts (Cainiao, Shopee, Encaminhei.com)
- ✅ Updated Sinerlog with Remessa Conforme
- ✅ Added personal projects section (Listo, InCasa)

### Breaking Changes
- Complete visual redesign (light → dark theme)
- `calc.html` removed
- Font stack changed from Roboto/Open Sans to Sora/DM Sans/JetBrains Mono

---

## Version 2.1.0 - Internationalization EN/PT/ZH (2026-04-09)

### Summary
Implementing US004: JSON-based client-side internationalization supporting English, Portuguese, and Chinese. Language switcher, auto-detection, localStorage persistence, and CJK font support.

### Changes

#### i18n System
- ✅ Created `i18n/en.json`, `i18n/pt.json`, `i18n/zh.json` — 83 translation keys each
- ✅ Created `js/i18n.js` — translation engine with auto-detect, localStorage, and DOM injection
- ✅ Supports `data-i18n` (text), `data-i18n-html` (HTML), `data-i18n-ph` (placeholder), `data-i18n-list` (array→list)

#### HTML
- ✅ Added `data-i18n` attributes to 83 translatable elements
- ✅ Added language switcher component (EN | PT | ZH)
- ✅ Experience achievement lists use `data-i18n-list` for dynamic rendering
- ✅ Removed availability badge from hero
- ✅ Added Noto Sans SC font for Chinese locale

#### JavaScript
- ✅ `main.js` refactored: typing effect and form messages now read from i18n data
- ✅ `window.__restartTyping(roles)` exposed for language switching
- ✅ `window.__i18nForm` stores translated form messages

#### CSS
- ✅ `.lang-switcher` and `.lang-btn` styles added
- ✅ CJK font override for `html[lang="zh"]`
- ✅ Removed orphaned `.hero__badge` styles

---

## Version 2.2.0 - Full Portfolio Expansion (8 Projects) (2026-06-13)

### Summary
Expanded the Projects section from 2 to all 8 active projects. Honest 2-tier presentation: 4 live apps with working demo links (Listo, InCasa, Allocare, Monei) and 4 in-progress projects shown as "Currently Building" compact cards with no links (zero broken links).

### Changes

#### HTML Structure
- ✅ Added Allocare featured card (Provider & Cost Management, live demo)
- ✅ Added Monei featured card (Tax Compliance, live demo)
- ✅ Added "Currently Building" subsection with 4 compact cards: CarSure, PeopleSense, LightSource, Coronéis do Brasil
- ✅ Hero metrics updated: "4 Live Apps" + "8 Projects Built" (replaced "2 Live Apps" / "20+ Repos Managed")

#### Screenshots
- ✅ Captured authenticated dashboards via Playwright login automation: `allocare-screenshot.png`, `monei-screenshot.png` (Monei required Terms-of-Use acceptance flow)

#### CSS
- ✅ `.projects-compact-grid` (1-col mobile, 2-col ≥768px)
- ✅ `.project-card--compact` overrides (static badge, smaller title)
- ✅ `.project-card__badge--dev` (amber In Development / Coming Soon badge)
- ✅ `.section-header--sub` / `.section-subtitle-heading` for the subsection heading
- ✅ New tech badges: `.tech-badge--godot`, `.tech-badge--gdscript`

#### i18n (EN/PT/ZH)
- ✅ Added `hero.metrics.projects`
- ✅ Added `projects.allocare`, `projects.monei` (type/tagline/f1-f4/badge/link)
- ✅ Added `projects.building` (label/title) and compact entries for `carsure`, `peoplesense`, `lightsource`, `coroneis`

### Verification Results
- ✅ 8 project cards render (4 featured + 4 compact)
- ✅ "Currently Building" subsection and amber badges render correctly
- ✅ No console errors; all live demo links navigable
- ✅ Non-live projects intentionally have no demo links (no broken links)

---

<!-- Template for future versions:

## Version X.Y.Z - Feature Name (YYYY-MM-DD)

### Summary
Brief description of what was accomplished.

### Changes

#### Layer Name
- ✅ Change description

### Breaking Changes
- List any breaking changes

### Migration Notes
- Any migration steps required

---
-->
