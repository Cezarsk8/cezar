# Design System - Portfolio Website

**Version**: 1.0.0  
**Last Updated**: January 11, 2026

---

## Color Palette

### CSS Variables

```css
:root {
  /* Primary Colors */
  --primary: #2563eb;        /* Blue - main brand color */
  --primary-light: #3b82f6;  /* Light blue - hover states */
  
  /* Secondary Colors */
  --secondary: #64748b;      /* Gray - secondary text */
  --dark: #1e293b;           /* Dark slate - headings */
  --light: #f1f5f9;          /* Light gray - backgrounds */
  --background: #ffffff;     /* White - card backgrounds */
  
  /* Accent Colors */
  --accent: #10b981;         /* Green - success, highlights */
  --warning: #f59e0b;        /* Amber - warnings */
  --error: #ef4444;          /* Red - errors */
  
  /* Gradients */
  --gradient: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}
```

### Usage

| Token | Usage |
|-------|-------|
| `--primary` | Buttons, links, active states |
| `--primary-light` | Hover states |
| `--secondary` | Body text, labels |
| `--dark` | Headings, emphasis |
| `--light` | Page background, section alternates |
| `--accent` | Success messages, badges |
| `--error` | Error messages, validation |

---

## Typography

### Font Families

```css
/* Headings */
font-family: 'Open Sans', sans-serif;

/* Body */
font-family: 'Roboto', sans-serif;
```

### Font Sizes (Fluid)

```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2rem); }
h3 { font-size: 1.25rem; }
body { font-size: 1rem; line-height: 1.6; }
```

---

## Spacing

### Base Unit: 1rem (16px)

| Size | Value | Usage |
|------|-------|-------|
| xs | 0.5rem | Tight spacing |
| sm | 0.75rem | Badge padding |
| md | 1rem | Default spacing |
| lg | 1.5rem | Section padding |
| xl | 2rem | Large gaps |
| 2xl | 4rem | Section margins |

---

## Components

### Buttons

```css
.btn {
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn--primary {
  background: var(--gradient);
  color: white;
}

.btn--secondary {
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);
}
```

### Cards

```css
.card {
  background: var(--background);
  border-radius: var(--card-radius); /* 1rem */
  box-shadow: var(--card-shadow);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-4px);
}
```

### Tech Badges

```css
.tech-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Variants */
.tech-badge--nextjs { background: #000; color: #fff; }
.tech-badge--typescript { background: #3178c6; color: #fff; }
.tech-badge--tailwind { background: #06b6d4; color: #fff; }
.tech-badge--dotnet { background: #512bd4; color: #fff; }
.tech-badge--postgresql { background: #336791; color: #fff; }
```

### Skill Bars

```css
.skill-bar {
  height: 10px;
  background: var(--light);
  border-radius: 5px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: var(--gradient);
  width: var(--skill-width);
  transition: width 1s ease-out;
}
```

---

## Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 480px) { /* Large phones */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 1024px) { /* Laptops */ }
@media (min-width: 1440px) { /* Desktops */ }
```

### Component Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Hero headshot | 150px | 180px | 200px |
| Hero CTAs | Stacked | Inline | Inline |
| Projects grid | 1 column | 2 columns | 2 columns |
| Skills grid | 1 column | 1 column | 2 columns |
| Timeline | Left edge | Left edge | Alternating |
| Contact form | Stacked | 2-column | 2-column |

---

## Animations

### Transitions

```css
--transition: all 0.3s ease;
```

### Scroll Animations

| Class | Effect |
|-------|--------|
| `.fade-in` | Opacity 0→1, translateY 20px→0 |
| `.slide-in-left` | translateX -50px→0 |
| `.slide-in-right` | translateX 50px→0 |
| `.scale-in` | scale 0.9→1 |

### Typing Animation

```css
.typing-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

---

## Accessibility

### Focus States

```css
:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}
```

### Touch Targets

Minimum 44x44px for all interactive elements on mobile.

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Icons

Using Font Awesome 6.0 via CDN.

### Common Icons

| Icon | Class | Usage |
|------|-------|-------|
| Rocket | `fa-rocket` | View Projects CTA |
| Download | `fa-download` | Download CV |
| Envelope | `fa-envelope` | Contact |
| LinkedIn | `fab fa-linkedin` | Social link |
| GitHub | `fab fa-github` | Social link |
| Check | `fa-check` | Achievements |
| External Link | `fa-external-link-alt` | Demo links |
