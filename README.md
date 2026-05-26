# ArthAI

**Intelligent CRM + ERP platform** — a modern marketing site for ArthAI, unifying customer operations, enterprise back-office workflows, and AI agents in one place.

Built by **Sunita Kumari** (Founder).

## Features

- **Landing page** with hero, platform highlights, and product showcases
- **AI Agents** — CRM Intelligence, ERP Operations, Integration Hub
- **CRM & ERP sections** — interactive UI mockups for sales pipeline, analytics, finance, and procurement
- **Unified architecture** — CRM–ERP orchestration diagram
- **Founder section** — leadership note from Sunita Kumari
- **Responsive design** — mobile-friendly navigation and layouts
- **Motion** — scroll animations via Framer Motion

## Tech stack

| Layer | Tools |
|-------|--------|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build | [Vite 8](https://vite.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)
- npm

### Install

```bash
git clone https://github.com/nandani013/ArthAI.git
cd ArthAI
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
├── App.tsx              # Page layout and section order
├── index.css            # Design tokens, utilities, theme
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeatureStrip.tsx
│   ├── AgentShowcase.tsx
│   ├── HowItWorks.tsx
│   ├── CrmShowcase.tsx
│   ├── ErpShowcase.tsx
│   ├── IntegrationShowcase.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── Stats.tsx
│   └── Footer.tsx
└── main.tsx
```

## Design

ArthAI uses a custom **ink + teal + coral** palette (not a generic purple SaaS template):

- **Ink** — deep backgrounds for hero, process, and founder sections
- **Teal** — primary brand and CTAs
- **Coral** — accent highlights
- **Plus Jakarta Sans** — UI typography

## Repository

[https://github.com/nandani013/ArthAI](https://github.com/nandani013/ArthAI)

## License

Private project. All rights reserved.
