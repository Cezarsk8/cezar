# US002 – Portfolio Website Revamp with Projects Showcase

## Description

As a job-seeking professional, I need a modern, visually compelling portfolio website that showcases my technical projects alongside my professional experience, so that potential employers can immediately see my hands-on development capabilities and hire me for technical leadership roles.

## UX Goals

- **First Impression Impact**: Hero section that immediately communicates value proposition
- **Project Credibility**: Live project demos with screenshots, tech stacks, and direct links
- **Scannable Content**: Employers spend ~7 seconds on initial scan - optimize for quick comprehension
- **Mobile Excellence**: 60%+ of recruiters view on mobile first
- **Call-to-Action Clarity**: Clear paths to contact, LinkedIn, and project demos
- **Professional Polish**: Modern design that reflects technical competence

---

## Current State Analysis

### Existing Structure
```
index.html          → Resume/portfolio (single page)
calc.html           → Correios calculator tool
css/styles.css      → Main stylesheet with CSS variables
```

### Current Sections
1. Header (Name + Title)
2. Profile (Bio)
3. Skills (4 categories)
4. Experience (4 jobs)
5. Education (3 degrees)
6. Certifications
7. Contact
8. Footer

### Design System (Current)
- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#64748b` (Gray)
- **Gradient**: `linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)`
- **Fonts**: Roboto (body), Open Sans (headings)
- **Icons**: Font Awesome 6.0

---

## LinkedIn Profile Data (Source of Truth)

### Professional Headline
**Software Development Manager | Team Leadership**

### About Summary
> From international business to technology leadership, my journey has been defined by a commitment to delivering value through innovation and collaboration. As Development Manager at RAZAC, I lead a dynamic team of developers, driving the creation of scalable and efficient software solutions. My focus is on fostering team growth, aligning technology with business goals, and ensuring project success.
>
> With expertise in bridging technical and strategic objectives, I specialize in building cohesive teams, optimizing workflows, and delivering impactful software products. Whether leading development sprints or shaping long-term strategies, I thrive on creating systems that empower teams and meet customer needs.

### Top Skills
- User Stories
- Agile Methodologies

### Experience Details

#### 1. Software Development Manager @ RAZAC (Nov 2024 - Present)
**Location**: São Paulo, Brazil · Hybrid

**Responsibilities**:
- Lead, guide, and motivate development and engineering teams
- Oversee design, implementation, and maintenance of scalable systems
- Promote agile development and DevOps methodologies
- Facilitate communication between technical and non-technical stakeholders
- Mentor and develop technical talent

**Products Developed**:
- **IDA Freight Quotes**: AI-powered agent for freight quote sourcing
- **RAZAC Workspace**: Workflow management dashboard with automation and metrics

**Skills**: Agile Methodologies, Next.js, +4 skills

#### 2. Project Manager @ Kestraa (Jan 2024 - Sep 2024)
**Location**: São Paulo, Brazil · Hybrid

**Activities**:
- Customer assessment and project planning
- Software implementation requirements and parameters
- SAP MM module testing (ME21N, J1B1N, FB60)
- Foreign Trade: Import processes for container/bulk cargo
- SAAS Deployment

**Achievements**:
- Deployed Kestraa solution in major agribusiness multinational
- Ongoing projects with 2 major industrial customers

**Skills**: Customer Service, monday.com, +3 skills

#### 3. Technical Product Owner @ Sinerlog (Jul 2021 - Dec 2023)
**Location**: São Paulo, Brazil · On-site

**Activities**:
- User Story Writing
- API testing for integration
- Kanban board management in Jira
- Documentation and release notes
- Stakeholder discovery and backlog planning

**Products Delivered**:
- **e-Invoice**: International invoice for cross-border retail (SGS integration)
- **CrossCommerce Platform**: API suite for cross-border commerce
- **Global Tracking**: Multi-carrier parcel tracking platform
- **Sinerlog Courier**: Customs clearance app (SISCOMEX integration)

**Skills**: Quality Control, Leadership, +32 skills

#### 4. Correios (Jul 2007 - Jun 2021) - 14 years

**International Business Development** (Mar 2020 - Jun 2021):
- Business development of Correios PACKET import solution
- JSON API documentation writing
- API testing support for tech team
- GRU airport and CWB customs hub coordination

**Sales Representative** (Sep 2013 - Mar 2020):
- Managed commercial portfolio with 300+ clients
- Key contributor in SEDEX/PAC implementation (APIs and integrations)

**Postal Worker** (Jul 2007 - Sep 2013):
- Administrative position across multiple teams
- Transitioned to sales department

### Education

1. **FATEC-SP** - Technology Degree, Computer Systems Analysis (2018-2022)
2. **Centro Universitário Senac** - Specialization, Logistics and Supply Chain Management (2017-2018)
3. **USP** - Bachelor's Degree, History (mentioned in current site)

### Certifications

1. **Workshop Inteligência Artificial Aplicada a Negócios** - CI&T (Apr 2025)
   - Skills: AI, AWS
2. **SAP S4HANA Course 2023** - Udemy (Jul 2024)
   - Skills: SAP ERP
3. **SAFe 6 Product Owner** (Pending - mentioned in current site)
4. Additional certifications (user to provide details if needed)

### LinkedIn Projects

1. **Listo Shopping** (Sep 2025 - Present)
   - Smart Pantry Tracking, Auto Shopping Lists, Price Intelligence, Inventory Management
   - Skills: .NET Framework, Next.js, +3

2. **InCasa Fitness** (Jan 2025 - Present)
   - Workouts, exercises, supplements, injuries, progress tracking
   - AI-powered features, Clean Architecture, JWT auth
   - Skills: Docker, AWS Amplify, +1

### Volunteering
**English Teacher** @ Curso Popular Mafalda (Feb 2013 - Jun 2014)
- Nonprofit education volunteer

---

## Proposed Design Improvements

### 1. Hero Section Redesign

**Current**: Simple gradient header with name/title
**Proposed**: Full-viewport hero with:
- Professional headshot (circular, bordered)
- Animated typing effect for roles: "Software Development Manager | Technical Product Owner | Team Leadership"
- 3 key metrics: "17+ Years Experience | 2 Live Apps | 500+ Connections"
- Prominent CTA buttons: "View Projects" | "Download CV" | "Contact Me"
- Subtle particle/geometric background animation (CSS-only)

### 2. NEW: Projects Section (Priority Feature)

**Position**: Immediately after Hero (above Skills)

**Layout**: 2-column grid on desktop, stacked on mobile

#### Project Card Design
```
┌─────────────────────────────────────────────────────────┐
│  [Screenshot/Demo GIF]                                  │
│                                                         │
│  ┌─────────────────────────────────────────────────────┐│
│  │ PROJECT NAME                              [LIVE] 🔗 ││
│  │ One-line description                                ││
│  │                                                     ││
│  │ Tech Stack: [Badge] [Badge] [Badge] [Badge]         ││
│  │                                                     ││
│  │ Key Features:                                       ││
│  │ • Feature 1                                         ││
│  │ • Feature 2                                         ││
│  │ • Feature 3                                         ││
│  │                                                     ││
│  │ [View Demo] [GitHub] [Read More]                    ││
│  └─────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

#### Project 1: Listo - Price Research App

**Tagline**: "Track prices, save money 🛒💰"

**Description**: Full-stack price tracking application helping Brazilian consumers compare supermarket prices through receipt digitization and historical price analysis.

**Tech Stack Badges**:
- Next.js 15
- TypeScript
- Tailwind CSS
- .NET 9 API
- PostgreSQL
- JWT Auth
- Vercel

**Key Features** (top 5):
- 📸 Receipt digitization with OCR
- 📊 Price history tracking & analytics
- 🏪 Cross-store price comparison
- 📦 Pantry & inventory management
- 🔔 Price alerts (upcoming)

**Stats**:
- 25+ completed user stories
- v1.23.0 current version
- 70% MVP complete

**Links**:
- Live Demo: https://mylistoapp.com/login
- GitHub: Private repository

#### Project 2: MiCasa Fitness

**Tagline**: "Your personal fitness command center 💪"

**Description**: Comprehensive fitness dashboard for individuals and trainers to manage exercises, workouts, supplements, and track progress with AI-powered features.

**Tech Stack Badges**:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- .NET API
- JWT Auth
- AI Integration

**Key Features** (top 5):
- 🏋️ Exercise & workout management with drag-and-drop
- 📈 Progress photos with side-by-side comparison
- 💊 Supplement tracking with dosage analytics
- 🤖 AI-powered exercise descriptions
- 🩹 Injury tracking with recovery monitoring

**Links**:
- Live Demo: https://incasagym.com/
- GitHub: Private repository

### 3. Skills Section Redesign

**Current**: Simple card list
**Proposed**: Visual skill bars with proficiency levels

```
┌─────────────────────────────────────────────────────────┐
│ TECHNICAL SKILLS                                        │
│                                                         │
│ Frontend Development                                    │
│ ████████████████████████████░░ 90%                     │
│ Next.js • React • TypeScript • Tailwind                │
│                                                         │
│ Backend Development                                     │
│ ███████████████████████████░░░ 85%                     │
│ .NET • C# • Node.js • PostgreSQL                       │
│                                                         │
│ Project Management                                      │
│ ████████████████████████████░░ 90%                     │
│ Agile • JIRA • Kanban • SAFe                           │
│                                                         │
│ DevOps & Cloud                                          │
│ ██████████████████░░░░░░░░░░░░ 60%                     │
│ Vercel • Docker • CI/CD • Git                          │
└─────────────────────────────────────────────────────────┘
```

### 4. Experience Section Enhancement

**Current**: Simple job cards
**Proposed**: Timeline layout with:
- Vertical timeline connector
- Company logos (if available)
- Expandable "Key Achievements" with metrics
- Technology tags per role

### 5. Contact Section Redesign

**Current**: Simple links
**Proposed**: 
- Contact form (Formspree/Netlify Forms integration)
- Embedded calendar link (Calendly) for scheduling calls
- Social proof: "Open to opportunities in São Paulo or Remote"

### 6. Footer Enhancement

- Quick navigation links
- "Built with ❤️ using HTML, CSS & JavaScript"
- Last updated date
- Download CV button

---

## Acceptance Criteria

### Step 1: Project Structure & Assets

**User-Provided Assets (REQUIRED before implementation):**
- [x] **USER REQUIRED**: Provide professional headshot image (recommended: 400x400px, JPG/PNG) ✅
- [x] **USER REQUIRED**: Provide or create CV/Resume PDF for download ✅
- [x] **USER REQUIRED**: Provide live URLs for Listo and MiCasa projects ✅
- [ ] **USER REQUIRED**: Capture Listo app screenshots (dashboard, products, purchases) ⚠️ Pending - save to `images/projects/listo-screenshot.png`
- [ ] **USER REQUIRED**: Capture MiCasa app screenshots (workouts, analytics, exercises) ⚠️ Pending - save to `images/projects/incasa-screenshot.png`

**Implementation Tasks:**
- [x] Create `images/projects/` folder for project screenshots ✅
- [x] Create `images/profile/` folder for headshot ✅
- [x] Create `cv/` folder for downloadable resume ✅
- [ ] Create project thumbnail images (800x600px recommended) - Using fallback placeholder
- [ ] Add company logos for experience section (optional)

### Step 2: Hero Section Implementation

- [x] Full-viewport hero with gradient background ✅
- [x] Add professional headshot with circular frame and border ✅
- [x] Implement typing animation for role titles (CSS or minimal JS) ✅
- [x] Add key metrics row (Years Experience | Live Apps | Connections) ✅
- [x] Create CTA button group (View Projects, Download CV, Contact) ✅
- [x] Add subtle scroll indicator animation ✅
- [x] **Responsive**: Headshot scales 150px→200px across breakpoints ✅
- [x] **Responsive**: CTAs stack vertically on mobile, inline on tablet+ ✅
- [x] **Responsive**: Typography uses `clamp()` for fluid sizing ✅

### Step 3: Projects Section Implementation

- [x] Create projects section with anchor `#projects` ✅
- [x] Build reusable project card component ✅
- [x] Implement Listo project card with:
  - Screenshot/mockup image (with placeholder fallback) ✅
  - Tech stack badges (styled pills) ✅
  - Feature bullet list ✅
  - Live demo link ✅
- [x] Implement MiCasa project card with same structure ✅
- [x] Add hover effects (scale, shadow elevation) - **disable on touch devices** ✅
- [x] **Responsive**: CSS Grid 1-column mobile → 2-column tablet+ ✅
- [x] **Responsive**: Card image height scales 200px→280px ✅
- [x] **Responsive**: Tech badges wrap naturally with `flex-wrap` ✅
- [x] All external links use `target="_blank" rel="noopener noreferrer"` ✅
- [x] Add placeholder image for missing screenshots ✅
- [ ] "View All Projects" link (if more projects added later) - Deferred

### Step 4: Skills Section Redesign

- [x] Replace card layout with skill bars ✅
- [x] Group skills by category (Frontend, Backend, Management, DevOps) ✅
- [x] Add technology tags under each skill bar ✅
- [x] Animate skill bars on scroll (intersection observer) ✅
- [x] **Responsive**: 1-column mobile → 2-column grid on desktop (1024px+) ✅
- [x] **Responsive**: Skill bar height scales 8px→12px ✅
- [x] **Responsive**: Technology tags use smaller font on mobile ✅

### Step 5: Experience Timeline

- [x] Convert job cards to timeline layout ✅
- [x] Add vertical connector line between jobs ✅
- [ ] Add company logos or icons - Deferred (optional)
- [x] Create achievements section with bullet points ✅
- [x] Add technology tags per role ✅
- [x] **Responsive**: Linear timeline (left edge) on mobile/tablet ✅
- [x] **Responsive**: Alternating left/right layout on desktop (1024px+) ✅
- [x] **Responsive**: Timeline connector moves from left edge to center on desktop ✅

### Step 6: Contact Form Integration

- [x] Add contact form with fields: Name, Email, Message ✅
- [x] Integrate with Formspree (endpoint: xpwzgkqr) ✅
- [x] Add form validation (required fields, email format) ✅
- [x] Success/error message handling ✅
- [x] Disable submit button during form submission (prevent double-submit) ✅
- [x] Add `<noscript>` fallback with mailto link for JS-disabled browsers ✅
- [ ] Add Calendly embed or link for scheduling (optional) - Deferred
- [x] Keep existing email/LinkedIn links ✅
- [x] **Responsive**: Stacked inputs on mobile, 2-column (Name/Email) on tablet+ ✅
- [x] **Responsive**: Full-width submit button on mobile, auto-width on desktop ✅
- [x] **Responsive**: 44px minimum touch targets for all form elements ✅

### Step 7: Performance & SEO

- [x] Add Open Graph meta tags for social sharing ✅
- [x] Add structured data (JSON-LD) for Person schema ✅
- [x] Optimize images (lazy loading attribute added) ✅
- [x] Add meta description and keywords ✅
- [x] Ensure all images have alt text ✅
- [ ] Test Lighthouse score (target: 90+ all categories) - Manual verification needed

### Step 8: Accessibility & Polish

- [x] Keyboard navigation for all interactive elements ✅
- [x] ARIA labels for icons and buttons ✅
- [x] Color contrast compliance (WCAG AA) ✅
- [x] Focus states for all interactive elements ✅
- [x] Smooth scroll behavior for anchor links ✅
- [x] Print stylesheet for CV printing ✅
- [x] Graceful degradation: static content visible without JavaScript ✅
- [x] `<noscript>` message for JS-dependent features (form) ✅
- [x] **Responsive**: CSS breakpoints at 480px, 768px, 1024px, 1440px ✅
- [x] **Responsive**: Reduced motion media query added ✅
- [x] **Responsive**: Touch targets minimum 44x44px on mobile ✅

---

## Technical Details

### File Structure (Proposed)

```
cezar/
├── index.html                    # Main portfolio (enhanced)
├── calc.html                     # Correios calculator (unchanged)
├── cv/
│   └── CezarSevilhano_CV.pdf    # Downloadable resume
├── css/
│   ├── styles.css               # Main stylesheet (enhanced)
│   ├── animations.css           # Scroll animations, typing effect
│   └── print.css                # Print stylesheet
├── js/
│   ├── main.js                  # Scroll animations, form handling
│   └── typing.js                # Typing effect for hero
├── images/
│   ├── profile/
│   │   └── cezar-headshot.jpg   # Professional photo
│   ├── projects/
│   │   ├── listo-dashboard.png
│   │   ├── listo-products.png
│   │   ├── micasa-workouts.png
│   │   └── micasa-analytics.png
│   └── logos/
│       ├── razac.png
│       ├── kestraa.png
│       └── correios.png
├── docs/
│   ├── System/
│   └── User Stories/
└── icons/
```

### New CSS Variables

```css
:root {
  /* Existing */
  --primary: #2563eb;
  --primary-light: #3b82f6;
  --secondary: #64748b;
  --dark: #1e293b;
  --light: #f1f5f9;
  
  /* New */
  --accent: #10b981;           /* Green for success/live badges */
  --warning: #f59e0b;          /* Orange for in-progress */
  --hero-height: 100vh;
  --section-padding: 6rem;
  --card-radius: 1rem;
  --card-shadow: 0 10px 40px rgba(0,0,0,0.1);
  --timeline-width: 3px;
}
```

### Tech Stack Badges (Reusable Component)

```html
<span class="tech-badge tech-badge--nextjs">Next.js</span>
<span class="tech-badge tech-badge--typescript">TypeScript</span>
<span class="tech-badge tech-badge--dotnet">.NET</span>
```

```css
.tech-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.25rem;
}

.tech-badge--nextjs { background: #000; color: #fff; }
.tech-badge--typescript { background: #3178c6; color: #fff; }
.tech-badge--dotnet { background: #512bd4; color: #fff; }
.tech-badge--tailwind { background: #06b6d4; color: #fff; }
.tech-badge--postgresql { background: #336791; color: #fff; }
```

### JavaScript Requirements (Minimal)

1. **Typing Effect**: Cycle through role titles in hero
2. **Scroll Animations**: Fade-in elements on scroll (Intersection Observer)
3. **Form Handling**: Submit contact form, show success/error
4. **Smooth Scroll**: Anchor link navigation

### External Dependencies

- **Google Fonts**: Roboto, Open Sans (existing)
- **Font Awesome 6.0**: Icons (existing)
- **Formspree**: Contact form backend (free tier)
- **Optional**: AOS library for scroll animations

### Responsive Design System (CRITICAL)

**Current State**: Only 1 breakpoint (768px) with minimal adjustments.

**Required Breakpoints**:

| Breakpoint | Target | CSS Variable |
|------------|--------|-------------|
| 320px | Small phones | `--bp-xs` |
| 480px | Large phones | `--bp-sm` |
| 768px | Tablets | `--bp-md` |
| 1024px | Small laptops | `--bp-lg` |
| 1440px | Desktops | `--bp-xl` |

**Mobile-First Approach**: Base styles for mobile, enhance with `min-width` queries.

```css
/* Base: Mobile (320px+) */
.component { /* mobile styles */ }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .component { /* tablet styles */ }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .component { /* desktop styles */ }
}
```

#### Hero Section Responsive Specs

| Breakpoint | Layout | Headshot | Typography | CTAs |
|------------|--------|----------|------------|------|
| 320-479px | Stacked, centered | 120px circle | h1: 1.75rem, h2: 1rem | Full-width, stacked |
| 480-767px | Stacked, centered | 150px circle | h1: 2rem, h2: 1.125rem | Full-width, stacked |
| 768-1023px | Stacked, centered | 180px circle | h1: 2.5rem, h2: 1.25rem | Inline, centered |
| 1024px+ | Side-by-side option | 200px circle | h1: 3rem, h2: 1.5rem | Inline, centered |

```css
.hero {
  min-height: 100vh;
  padding: 2rem 1rem;
}

.hero__headshot {
  width: 120px;
  height: 120px;
}

.hero__cta-group {
  flex-direction: column;
  gap: 0.75rem;
}

@media (min-width: 480px) {
  .hero__headshot { width: 150px; height: 150px; }
}

@media (min-width: 768px) {
  .hero { padding: 4rem 2rem; }
  .hero__headshot { width: 180px; height: 180px; }
  .hero__cta-group { flex-direction: row; }
}

@media (min-width: 1024px) {
  .hero { padding: 6rem 2rem; }
  .hero__headshot { width: 200px; height: 200px; }
}
```

#### Projects Section Responsive Specs

| Breakpoint | Grid | Card Width | Image Height | Padding |
|------------|------|------------|--------------|--------|
| 320-479px | 1 column | 100% | 180px | 1rem |
| 480-767px | 1 column | 100% | 220px | 1.25rem |
| 768-1023px | 2 columns | 50% | 250px | 1.5rem |
| 1024px+ | 2 columns | 50% | 300px | 2rem |

```css
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.project-card__image {
  height: 180px;
  object-fit: cover;
}

@media (min-width: 480px) {
  .project-card__image { height: 220px; }
}

@media (min-width: 768px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
  .project-card__image { height: 250px; }
}

@media (min-width: 1024px) {
  .project-card__image { height: 300px; }
}
```

#### Skills Section Responsive Specs

| Breakpoint | Layout | Bar Height | Label Position |
|------------|--------|------------|----------------|
| 320-767px | Full-width bars | 8px | Above bar |
| 768-1023px | Full-width bars | 10px | Above bar |
| 1024px+ | 2-column grid | 12px | Inline left |

```css
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-bar {
  height: 8px;
  border-radius: 4px;
}

@media (min-width: 768px) {
  .skill-bar { height: 10px; }
}

@media (min-width: 1024px) {
  .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
  .skill-bar { height: 12px; }
}
```

#### Experience Timeline Responsive Specs

| Breakpoint | Layout | Timeline Position | Card Width |
|------------|--------|-------------------|------------|
| 320-767px | Linear (vertical) | Left edge | 100% |
| 768-1023px | Linear (vertical) | Left edge | 100% |
| 1024px+ | Alternating | Center | 45% each side |

```css
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary);
}

.timeline__item {
  position: relative;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .timeline {
    padding-left: 0;
  }
  
  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .timeline__item:nth-child(odd) {
    padding-right: calc(50% + 2rem);
    text-align: right;
  }
  
  .timeline__item:nth-child(even) {
    padding-left: calc(50% + 2rem);
  }
}
```

#### Contact Form Responsive Specs

| Breakpoint | Layout | Input Width | Button Width |
|------------|--------|-------------|-------------|
| 320-479px | Stacked | 100% | 100% |
| 480-767px | Stacked | 100% | 100% |
| 768px+ | 2-column (Name/Email) | 50% each | Auto |

```css
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form__input {
  width: 100%;
  padding: 0.75rem 1rem;
}

.contact-form__submit {
  width: 100%;
}

@media (min-width: 768px) {
  .contact-form__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .contact-form__submit {
    width: auto;
    align-self: center;
  }
}
```

#### Navigation & Social Links Responsive

```css
.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

@media (min-width: 480px) {
  .social-links {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
```

#### Touch-Friendly Targets

```css
/* Minimum 44x44px touch targets for mobile */
.btn, .social-link, .nav-link {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}

@media (min-width: 1024px) {
  .btn, .social-link, .nav-link {
    min-height: auto;
    min-width: auto;
  }
}
```

---

## Edge Cases & UX Notes

- [ ] Handle missing project screenshots gracefully (placeholder image)
- [ ] Handle missing headshot gracefully (placeholder avatar)
- [ ] Form submission: Disable button during submit, show loading state
- [ ] Mobile: Collapsible sections for long content
- [ ] Slow connections: Lazy load images below the fold
- [ ] Print view: Hide navigation, show full content
- [ ] JavaScript disabled: Core content remains accessible, form has mailto fallback
- [ ] Broken external links: All project links verified before deployment
- [ ] Dark mode: Consider adding toggle (future enhancement)

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |
| Mobile Usability | Pass |
| Time to Interactive | < 3s |
| First Contentful Paint | < 1.5s |

---

## Implementation Priority

1. **P0 (Must Have)**:
   - Projects section with Listo & MiCasa
   - Hero section redesign
   - Mobile responsiveness

2. **P1 (Should Have)**:
   - Skills bars with animations
   - Experience timeline
   - Contact form

3. **P2 (Nice to Have)**:
   - Dark mode toggle
   - Blog/articles section
   - Additional projects showcase

---

## References

- [Listo README](../../examples/listo-readme.md) - Full feature list
- [MiCasa README](../../examples/micasa-readme.md) - Full feature list
- [Current Design System](../System/project_structure.md) - CSS variables and structure

---

**Story Points**: 13 (Large)  
**Sprint**: 1-2 weeks  
**Dependencies**: Project screenshots, CV PDF, optional company logos
