# Zohair Azmat — AI SaaS Engineer Portfolio

A modern, production-style personal portfolio built to showcase AI SaaS projects, full-stack engineering work, and real-world product thinking.

🔗 **Live:** [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app) &nbsp;|&nbsp; 📂 **Repo:** [github.com/zohair-azmat-ai/zohair-portfolio](https://github.com/zohair-azmat-ai/zohair-portfolio)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router), TypeScript, Tailwind CSS |
| Backend (Projects) | FastAPI, Python |
| Database (Projects) | PostgreSQL |
| AI (Projects) | OpenAI API |
| Deployment | Vercel |

---

## ✨ Features

- **Premium UI** — dark-first design with glass navbar, ambient glows, and smooth entrance animations
- **Fully responsive** — mobile-first layout, works across all screen sizes
- **Flagship project showcase** — SupportPilot AI presented as a full SaaS case study with screen mockups
- **Data-driven content** — all portfolio content managed from a single `data/portfolio.ts` file
- **Reusable component system** — `Badge`, `Button`, `ProjectCard`, `SectionCard`, `Container`, `SectionHeading`
- **SEO ready** — full metadata, OpenGraph, and Twitter card support
- **Smooth scroll navigation** — sticky navbar with anchor links and scroll-padding offset

---

## 🚀 Projects

### SupportPilot AI — Digital Customer Support FTE *(Flagship)*
A production-style AI SaaS platform that automates customer support operations. Features LLM-powered responses, ticketing, multi-channel communication (WhatsApp, email), admin and customer portals, analytics, and escalation logic.

`Next.js` `FastAPI` `PostgreSQL` `OpenAI` `Tailwind CSS`

---

### AI Task Manager
Full-stack AI productivity assistant with chatbot-driven task workflows, built on Next.js, FastAPI, and OpenAI.

`Next.js` `FastAPI` `OpenAI` `Tailwind CSS`

---

### Zohair Racing Portfolio
Creative browser-based racing-inspired interface focused on immersive UI and polished frontend interactions.

`Next.js` `Tailwind CSS` `Animations`

---

## 📁 Folder Structure

```
zohair-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, navbar
│   ├── page.tsx            # Page entry — renders all sections
│   └── globals.css         # Global styles, animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky glass navbar
│   │   ├── Container.tsx   # Max-width responsive wrapper
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── FeaturedProjectSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── ProjectCard.tsx
│       └── SectionCard.tsx
├── data/
│   └── portfolio.ts        # All content: config, skills, projects
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
└── public/
```

---

## 🏁 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

To deploy your own instance:
1. Fork this repository
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables required for the portfolio itself.

---

## 🔧 Customization

All portfolio content lives in [`data/portfolio.ts`](data/portfolio.ts). Update `siteConfig`, `skills`, and `projects` to make it your own — no component changes needed.

---

*Built by [Zohair Azmat](https://github.com/zohair-azmat-ai)*
