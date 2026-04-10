# US003 – Atualização do Perfil Profissional: RAZAC + Portfólio de Projetos

## Description

Como profissional em busca de visibilidade no mercado, preciso que meu currículo virtual reflita com precisão meu cargo atual na RAZAC (Gerente de Engenharia e Suporte), minhas responsabilidades detalhadas e o portfólio completo de projetos pessoais que desenvolvo, para que recrutadores e potenciais empregadores vejam o escopo real da minha atuação técnica e de liderança.

---

## Contexto

O site atualmente mostra informações genéricas sobre o cargo na RAZAC ("Software Development Manager" com 3 bullet points vagos) e apenas 2 projetos pessoais (Listo e InCasa). A realidade é muito mais rica:

- **RAZAC**: o cargo cobre 4 áreas — Engenharia/Arquitetura, Produto/Desenvolvimento, Suporte/Sustentação e Inovação com IA
- **Projetos pessoais**: são 8 projetos ativos, não apenas 2
- **Skills**: a stack real inclui Oracle, MongoDB, RabbitMQ, Azure DevOps, Grafana, Loki — nada disso aparece hoje

---

## O que muda

### 1. Seção Experience — RAZAC (Prioridade máxima)

**De:**
```
Software Development Manager
Nov 2024 - Present | RAZAC

- Lead and mentor development teams, ensuring high performance
- Oversee scalable system design and implementation
- Built IDA Freight Quotes (AI-powered) and RAZAC Workspace
```

**Para:**
```
Engineering & Support Manager
Nov 2024 - Present | RAZAC | São Paulo, Brazil · Hybrid

Engenharia e Arquitetura:
- Gestão de 20+ repositórios no Azure DevOps, organizados por domínio (Core, Cadastros, Integrações, Financeiro, Processos, IA)
- Definição e manutenção de bibliotecas compartilhadas (NuGet interno via feed razac-libs)
- Stack: .NET 8, Oracle (Dapper/ODP.NET), MongoDB, RabbitMQ, Docker, API Gateway, Identity Server
- CI/CD com Azure Pipelines (publicação automatizada de pacotes NuGet)
- Análise estática de qualidade com SonarQube

Produto e Desenvolvimento:
- Colaboração com PO em refinamentos — quebra de épicos, histórias de usuário, critérios de aceite
- Gestão de roadmap no Jira: épicos, histórias, estimativas, priorização
- Liderança técnica do MVP de Análise Tributária (backend .NET + frontend Railway + LLMs)

Suporte e Sustentação:
- Gestão de backlog de bugs e incidentes (Jira projeto TEC)
- Investigação de falhas com Loki, Grafana, RabbitMQ, Oracle e MongoDB
- Base de conhecimento de procedimentos de suporte
- Monitoramento de saúde de serviços via Consul e Portainer

Inovação com IA:
- Adoção de IA generativa no dia a dia (Claude Code com MCPs integrados a Jira, Loki, Grafana, RabbitMQ, Oracle, MongoDB, Azure DevOps)
- Desenvolvimento de MVPs com deploy em Railway
```

**Tags de tecnologia atualizadas:**
`.NET 8` `Oracle` `MongoDB` `RabbitMQ` `Docker` `Azure DevOps` `Grafana` `Jira` `AI` `SonarQube`

### 2. Hero Section — Título e Métricas

| Campo | Atual | Novo |
|-------|-------|------|
| Title | Software Development Manager | Engineering & Support Manager |
| Live Apps | 2 | 8 (ou "8 Projects") |
| Typing text | Software Development Manager | Engineering & Support Manager |
| Meta title | Software Development Manager | Engineering & Support Manager |
| Meta description | atualizar com contexto RAZAC | atualizar |
| JSON-LD jobTitle | Software Development Manager | Engineering & Support Manager |

### 3. Seção Projects — Expandir para 8 projetos

**Projetos atuais no site (manter e atualizar):**
1. **Listo** — Price Research App (.NET 9 + Next.js 15)
2. **InCasa Fitness** — Gym Management (.NET 8 + Next.js 15)

**Projetos novos a adicionar:**
3. **Allocare** — Provider Management (.NET 8 + Next.js 15)
4. **BrazilRoots** — RTS 2D Isométrico (Godot 4.x + GDScript)
5. **Monei** — Tax Compliance (.NET 8 + Next.js)
6. **Overtime** — AI Knowledge Engine (.NET 8 + Next.js 15)
7. **PeopleSense** — HR/People Management (.NET 8 + Next.js 15)
8. **Soon (SUM)** — Logistics/Shipment Management (.NET 8 API-first)

**Layout**: mudar de grid 2 colunas para grid responsivo que acomode 8 cards. Opções:
- Grid 3 colunas desktop (3x3 com 8 cards)
- Cards menores/compactos para os projetos sem screenshot (apenas nome + tagline + tech stack + status)
- Seção "Featured" (Listo + InCasa com cards grandes) + "Other Projects" (cards compactos)

**Recomendação**: abordagem "Featured + Grid compacto" — mantém Listo e InCasa em destaque (têm screenshots e estão live) e lista os outros 6 de forma limpa.

### 4. Seção Skills — Atualizar tecnologias

**Backend Development** — adicionar:
- Oracle (Dapper/ODP.NET)
- MongoDB
- RabbitMQ

**DevOps & Cloud** — atualizar:
- Azure DevOps / Azure Pipelines
- Docker
- Grafana / Loki
- Railway
- SonarQube

**Considerar nova categoria:**
- **Observability & Monitoring**: Grafana, Loki, Consul, Portainer, RabbitMQ Management

### 5. Metadata e SEO

- Atualizar `<title>` tag
- Atualizar `<meta name="description">`
- Atualizar `<meta property="og:title">` e `og:description`
- Atualizar JSON-LD `jobTitle`
- Atualizar footer copyright year (2025 → 2026)

---

## Acceptance Criteria

### Step 1: RAZAC Experience Update
- [x] Alterar título de "Software Development Manager" para "Engineering & Support Manager" ✅ DONE
- [x] Substituir os 3 bullet points genéricos pelo conteúdo detalhado (4 áreas) ✅ DONE
- [x] Atualizar as tags de tecnologia do card RAZAC ✅ DONE
- [x] Manter o formato visual consistente com os outros itens da timeline ✅ DONE
- [x] O card RAZAC deve ser expansível ou ter layout que comporte o conteúdo maior sem quebrar o design ✅ DONE (accordion com JS + full-width no desktop)

### Step 2: Hero & Metadata Update
- [x] Atualizar título no hero (typing text + fallback) ✅ DONE
- [x] Atualizar métricas: mantido "2 Live Apps" (decisão do usuário: sem projetos extras) ✅ DONE
- [x] Atualizar `<title>`, meta description, OG tags, JSON-LD ✅ DONE
- [x] Atualizar copyright no footer para 2026 ✅ DONE

### Step 3: Projects Section
- [x] Manter Listo e InCasa como "Featured Projects" (cards grandes com screenshot) ✅ DONE
- [x] ~~Adicionar seção "Other Projects" com 6 cards compactos~~ CANCELADO — decisão do usuário: manter apenas Listo e InCasa por enquanto

### Step 4: Skills Section Update
- [x] Adicionar Oracle, MongoDB, RabbitMQ em "Backend & Architecture" ✅ DONE
- [x] Atualizar "DevOps & Cloud" → "DevOps & Observability" com Azure DevOps, Azure Pipelines, Railway, SonarQube, Grafana/Loki, Consul ✅ DONE
- [x] Categoria "Observability" incorporada em "DevOps & Observability" ✅ DONE
- [x] DevOps atualizado de 70% para 80% ✅ DONE

### Step 5: Visual Consistency & Responsiveness
- [x] O card expandido da RAZAC não quebra o layout da timeline em mobile ✅ DONE
- [x] Breakpoints: 480px, 768px, 1024px, 1440px ✅ DONE
- [x] Hover effects (desktop only via `@media (hover: hover)`) ✅ DONE

### Step 6: Content Review
- [x] Todo o conteúdo RAZAC em inglês (consistente com o resto do site) ✅ DONE
- [x] Links dos projetos live apontam para URLs corretas ✅ DONE

### Step 7: Full Design Refresh (adicional)
- [x] Redesign completo: "Midnight Architect" — dark theme, Sora/DM Sans/JetBrains Mono, cyan/amber accents ✅ DONE
- [x] Floating side navigation com Intersection Observer ✅ DONE
- [x] Count-up animation nos métricas do hero ✅ DONE
- [x] Mouse scroll indicator no hero ✅ DONE
- [x] Availability badge no hero ✅ DONE
- [x] Resume HTML atualizado: `resources/2026-04 - Resume Cezar Sevilhano EN.html` ✅ DONE
- [x] Limpeza de CSS órfão (compact cards, godot/gdscript badges) ✅ DONE

---

## Informações dos Novos Projetos

### Allocare — Provider Management
- **Stack**: .NET 8 + Next.js 15 + PostgreSQL
- **Tagline**: Streamlined provider management and allocation
- **Status**: In Development
- **URL**: —

### BrazilRoots — RTS Game
- **Stack**: Godot 4.x + GDScript
- **Tagline**: 2D isometric RTS set in Brazilian history
- **Status**: In Development
- **URL**: —

### Monei — Tax Compliance
- **Stack**: .NET 8 + Next.js + PostgreSQL
- **Tagline**: Smart tax compliance and fiscal management
- **Status**: In Development
- **URL**: —

### Overtime — AI Knowledge Engine
- **Stack**: .NET 8 + Next.js 15 + PostgreSQL
- **Tagline**: AI-powered knowledge management engine
- **Status**: In Development
- **URL**: —

### PeopleSense — HR Platform
- **Stack**: .NET 8 + Next.js 15 + PostgreSQL
- **Tagline**: Modern HR and people management platform
- **Status**: In Development
- **URL**: —

### Soon (SUM) — Logistics
- **Stack**: .NET 8 (API-first) + PostgreSQL
- **Tagline**: Shipment and logistics management system
- **Status**: In Development
- **URL**: —

---

## Technical Notes

- O site é HTML/CSS/JS puro (sem framework) — todas as alterações são diretas nos arquivos
- `css/styles.css` já tem o design system com variáveis CSS
- Os novos cards compactos devem reutilizar as classes `.project-card` e `.tech-badge` existentes
- Para o card RAZAC expandido, pode ser necessário um sub-layout com `.timeline__achievements-group` ou similar
- Considerar um accordion/collapse para as 4 áreas no mobile (JS mínimo)

---

## Fora de Escopo

- Dark mode
- Blog/articles section
- Tradução para português
- Novos screenshots dos projetos existentes
- Refatoração de CSS para Tailwind ou outro framework

---

**Story Points**: 8 (Medium-Large)
**Dependência**: Nenhuma — todo o conteúdo foi fornecido
