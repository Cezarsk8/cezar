# Cezar Sevilhano - Personal Portfolio Website

## Overview

A static personal portfolio/resume website showcasing professional experience, skills, education, and contact information. The site also includes a utility tool for calculating Brazilian postal service (Correios) shipping prices and delivery times.

## Project Purpose

- **Personal Branding**: Professional online presence for Cezar Sevilhano
- **Resume/CV**: Digital portfolio highlighting career experience and skills
- **Utility Tools**: Shipping calculator for Correios services (SEDEX/PAC)

## Technology Stack

| Category | Technology |
|----------|------------|
| **Markup** | HTML5 |
| **Styling** | CSS3 with CSS Variables |
| **Fonts** | Google Fonts (Roboto, Open Sans) |
| **Icons** | Font Awesome 6.0 |
| **External API** | Correios CalcPrecoPrazo Web Service |

## Project Structure

```
cezar/
├── index.html              # Main portfolio/resume page (revamped v1.0)
├── calc.html               # Correios shipping calculator tool
├── README.md               # Project description
├── css/
│   ├── styles.css          # Main stylesheet (760+ lines, responsive)
│   ├── animations.css      # Scroll animations, typing effect
│   ├── print.css           # Print-optimized stylesheet
│   └── sigep.css           # Calculator page styles
├── js/
│   └── main.js             # Typing effect, scroll animations, form handling
├── cv/
│   └── CezarSevilhano_CV.pdf  # Downloadable resume
├── docs/
│   ├── System/
│   │   ├── development_history.md  # Version history tracking
│   │   └── project_structure.md    # This file
│   ├── User Stories/
│   │   ├── US002-WebsiteRevampWithProjects.md
│   │   └── UserStories.md
│   └── Release Notes/          # Release documentation
├── examples/
│   ├── DevelopmentHistory.md   # Template example
│   └── project_structure.md    # Template example
├── icons/
│   ├── Lamp.ico            # Favicon
│   ├── data.png            # Data icon
│   ├── email.png           # Email icon
│   ├── linkedin.png        # LinkedIn icon
│   ├── money.png           # Money icon
│   └── shopping.png        # Shopping icon
└── images/
    ├── Cezar1.jpg          # Profile photo (original)
    ├── cloud.png           # Cloud graphic (fallback)
    ├── cloud.webp          # Cloud graphic (WebP)
    ├── computer.png        # Computer graphic
    ├── mountain.png        # Mountain background
    ├── mountain.webp       # Mountain background (WebP)
    ├── profile/
    │   └── cezar-headshot.jpg  # Hero section headshot
    └── projects/
        ├── listo-screenshot.png    # Listo app screenshot
        └── incasa-screenshot.png   # InCasa app screenshot
```

## Pages

### 1. Main Portfolio (`index.html`)

**Purpose**: Personal resume and professional portfolio

**Sections**:
- **Hero**: Full-viewport with headshot, typing animation, metrics, CTAs
- **Projects**: Showcases Listo and InCasa apps with tech badges
- **Skills**: Animated skill bars (Frontend 90%, Backend 85%, PM 95%, DevOps 70%)
- **Experience**: Timeline layout with 4 positions and tech tags
  - Software Development Manager @ RAZAC (2024-Present)
  - Project Manager @ Kestraa (2024)
  - Technical Product Owner @ Sinerlog (2021-2023)
  - International Business Development @ Correios (2007-2021)
- **Education**: 3 degrees + certifications grid
- **Contact**: Formspree form with email/LinkedIn links
- **Footer**: Navigation, social links, copyright

**External Dependencies**:
- Google Fonts: Roboto, Open Sans
- Font Awesome 6.0 (CDN)

### 2. Shipping Calculator (`calc.html`)

**Purpose**: Calculate Correios shipping prices and delivery times

**Features**:
- Service selection (SEDEX 04162, PAC 04669)
- Administrative credentials input
- Origin/destination ZIP codes (CEP)
- Package dimensions and weight
- Additional services (declared value, receipt notification, own hands delivery)

**Integration**: Submits form to `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx`

## Styling Architecture

### CSS Variables (`styles.css`)

```css
:root {
  --primary: #2563eb;        /* Blue primary color */
  --primary-light: #3b82f6;  /* Light blue */
  --secondary: #64748b;      /* Gray secondary */
  --dark: #1e293b;           /* Dark text */
  --light: #f1f5f9;          /* Light background */
  --background: #ffffff;     /* White background */
  --gradient: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  --transition: all 0.3s ease;
}
```

### Design Features

- **Responsive Design**: Mobile-first with breakpoint at 768px
- **Card-based Layout**: Skills, jobs, and education in card components
- **Hover Effects**: Subtle lift animations on interactive elements
- **Gradient Header**: Blue gradient with white text
- **Modern Typography**: Roboto for body, Open Sans for headings

## File Details

| File | Size | Description |
|------|------|-------------|
| `index.html` | 8.3 KB | Main portfolio page (188 lines) |
| `calc.html` | 6.8 KB | Shipping calculator (202 lines) |
| `css/styles.css` | 4.7 KB | Main stylesheet (270 lines) |
| `css/sigep.css` | 6.8 KB | Calculator styles (duplicate content) |
| `README.md` | 41 bytes | Basic project description |

## Deployment

This is a static website that can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server (Apache, Nginx)

No build process required - files can be served directly.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and desktop
- CSS Grid and Flexbox for layout

## External Resources

- **Google Fonts**: `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Open+Sans:wght@400;600&display=swap`
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`
- **Correios API**: `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx`

## Contact Information

- **Email**: cezarsevilhano@gmail.com
- **LinkedIn**: [linkedin.com/in/cezar-sevilhano-a1b08ba6](https://www.linkedin.com/in/cezar-sevilhano-a1b08ba6/)
