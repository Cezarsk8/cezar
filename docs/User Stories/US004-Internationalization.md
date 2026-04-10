# US004 — Internationalization: English, Portuguese & Chinese

## Contexto

The portfolio site currently serves only English-speaking audiences. Given Cezar's cross-border background (Cainiao/Alibaba, Shopee/Sea Group) and target markets, supporting Portuguese (native) and Chinese (key business contacts) would significantly expand reach and demonstrate the multilingual, cross-cultural competence that defines his career.

## User Story

As a visitor from Brazil, China, or any English-speaking country, I want to view the portfolio in my preferred language so that I can understand Cezar's experience and qualifications without a language barrier.

## Escopo
- [ ] **Tipo**: Single-phase (HTML/CSS/JS static site)

## Requisitos Funcionais

- [ ] RF1: Language switcher visible on all sections (floating or in nav)
- [ ] RF2: Support 3 locales: English (en), Portuguese (pt), Chinese (zh)
- [ ] RF3: All visible text translated (hero, projects, skills, experience, education, contact, footer)
- [ ] RF4: Meta tags (title, description, OG tags) update per locale
- [ ] RF5: `<html lang="">` attribute updates per locale
- [ ] RF6: Typing effect cycles through translated role titles per locale
- [ ] RF7: Form labels, placeholders, and feedback messages translated
- [ ] RF8: Persist language preference in localStorage
- [ ] RF9: Auto-detect browser language on first visit (fallback to English)

## Requisitos Nao-Funcionais

- [ ] RNF1: No visible flash of untranslated content (FOUC) on load
- [ ] RNF2: Page load performance unaffected (JSON files are small, < 5KB each)
- [ ] RNF3: SEO: structured data (JSON-LD) updates per locale
- [ ] RNF4: Print stylesheet works correctly regardless of locale
- [ ] RNF5: Chinese text renders properly (font stack includes CJK fallbacks)

## Design Tecnico

### Architecture: JSON-based Client-Side i18n

**Why JSON + JS injection (not separate HTML files):**
- 150+ strings across one HTML file = maintenance nightmare if duplicated
- Single source of truth for structure (HTML), separate sources for content (JSON)
- Zero backend required, works on GitHub Pages

### File Structure
```
cezar/
  i18n/
    en.json        # English (source of truth)
    pt.json        # Portuguese
    zh.json        # Chinese
  js/
    i18n.js        # Translation engine (~100 lines)
    main.js        # Existing (minor changes)
  css/
    styles.css     # Minor additions (language switcher, CJK font)
  index.html       # Add data-i18n attributes + language switcher
```

### Translation Engine (`js/i18n.js`)

```
Core functions:
- loadLocale(lang)        — fetch /i18n/{lang}.json
- applyTranslations(data) — walk DOM, replace text via data-i18n keys
- detectLanguage()        — check localStorage > navigator.language > 'en'
- switchLanguage(lang)    — load + apply + persist + update html[lang]
```

**DOM strategy**: Add `data-i18n="section.key"` attributes to translatable elements. On load, JS walks all `[data-i18n]` elements and replaces `textContent`.

Example:
```html
<!-- Before -->
<h1 class="hero__name">Cezar Sevilhano</h1>
<p class="hero__subtitle" data-i18n="hero.subtitle">Leading microservices...</p>

<!-- After JS applies pt locale -->
<p class="hero__subtitle" data-i18n="hero.subtitle">Liderando arquitetura de microsservicos...</p>
```

**Non-translatable elements** (name, company names, tech badges, dates) keep no `data-i18n` — they stay as-is.

### JSON Structure (`i18n/en.json`)
```json
{
  "meta": {
    "title": "Cezar Sevilhano - Engineering & Support Manager",
    "description": "Leading microservices architecture at RAZAC..."
  },
  "nav": {
    "home": "Home",
    "projects": "Projects",
    "skills": "Skills",
    "experience": "Experience",
    "contact": "Contact"
  },
  "hero": {
    "badge": "Available for opportunities",
    "subtitle": "Leading microservices architecture, CI/CD pipelines, and AI innovation at",
    "roles": [
      "Engineering & Support Manager",
      "Microservices Architect",
      "AI-Powered Engineering",
      "Technical Leadership"
    ],
    "metrics": {
      "years": "Years Experience",
      "apps": "Live Apps",
      "repos": "Repos Managed"
    },
    "cta": {
      "projects": "View Projects",
      "cv": "Download CV",
      "contact": "Get in Touch"
    }
  },
  "projects": { ... },
  "skills": { ... },
  "experience": { ... },
  "education": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

### Language Switcher UI

**Position**: Inside the floating nav (desktop) + top-right corner (mobile)

**Design**: 3 small flag/code buttons — `EN | PT | ZH`
- Active locale highlighted with cyan accent
- Follows the Midnight Architect design system (dark bg, cyan border on active)
- Minimal footprint: 3 buttons, ~120px total width

### CSS Additions

```css
/* CJK font fallback for Chinese */
body[lang="zh"] {
  font-family: 'DM Sans', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

/* Language switcher styles */
.lang-switcher { ... }
.lang-switcher__btn { ... }
.lang-switcher__btn.active { ... }
```

### Changes to Existing Files

**index.html:**
- Add `data-i18n` attributes to ~120 translatable elements
- Add language switcher component
- Add `<script src="js/i18n.js">` before main.js
- Add Google Font for Noto Sans SC (Chinese)

**js/main.js:**
- `initTypingEffect()`: read roles from i18n data instead of hardcoded array
- `initContactForm()`: read messages from i18n data
- Export function to re-init typing when language changes

**css/styles.css:**
- Add `.lang-switcher` styles
- Add CJK font-family override for `[lang="zh"]`

## Translation Content

### What gets translated (~120 keys):
- Section labels, titles, subtitles
- Hero badge, subtitle, CTA buttons, metric labels
- Project taglines, feature descriptions (NOT project names or tech badges)
- Skill category names (NOT individual tech names like "PostgreSQL")
- Experience: job titles, achievement bullets, area toggle labels
- Education: degree names, types
- Contact: form labels, placeholders, success/error messages
- Footer: nav links, copyright text
- Meta tags, OG tags, aria-labels, alt text

### What stays in English (NOT translated):
- Cezar Sevilhano (name)
- Company names: RAZAC, Kestraa, Sinerlog, Correios, Cainiao, Shopee
- Tech stack: .NET 8, PostgreSQL, MongoDB, RabbitMQ, etc.
- Project names: Listo, InCasa Fitness
- Dates: Nov 2024, Jul 2007, etc.
- URLs

## Criterios de Aceitacao

- [ ] CA1: Language switcher is visible and functional on desktop and mobile
- [ ] CA2: Switching to PT translates all visible text to Portuguese
- [ ] CA3: Switching to ZH translates all visible text to Chinese with proper CJK rendering
- [ ] CA4: Language preference persists across page reloads (localStorage)
- [ ] CA5: First visit auto-detects browser language (pt-BR → PT, zh-CN → ZH, else → EN)
- [ ] CA6: No FOUC — page renders in correct language immediately
- [ ] CA7: Typing effect uses translated role titles
- [ ] CA8: Contact form messages appear in selected language
- [ ] CA9: Meta title and description update per locale (for shared links)
- [ ] CA10: Print view works correctly in all 3 languages
- [ ] CA11: Chinese text is readable with proper font (Noto Sans SC or similar)

## Fora de Escopo

- Server-side rendering or SSR locale detection
- URL-based routing (/en/, /pt/, /zh/) — this is a static GitHub Pages site
- Right-to-left (RTL) languages (Arabic, Hebrew)
- Translation of the resume PDF (separate concern)
- Automated translation — all translations are manually reviewed

## Dependencias

- US003 (completed) — current content must be finalized before extracting to JSON

---

**Story Points**: 8 (Medium-Large)
**Fluxo**: `/dev` (single-phase) → `/ship`
