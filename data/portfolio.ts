// ─── Site Config ────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Zohair Azmat",
  title: "AI SaaS Engineer building production-level intelligent systems",
  description:
    "I build modern AI SaaS products with real-world architecture, scalable backend systems, intelligent workflows, and polished frontend experiences.",
  about:
    "Zohair Azmat is an AI SaaS developer focused on building production-grade applications that combine strong backend architecture, modern frontend systems, and real-world AI functionality. His work spans intelligent support systems, full-stack productivity tools, and high-quality interactive interfaces using Next.js, FastAPI, PostgreSQL, OpenAI, and Tailwind CSS.",
  email: "zohairazmat@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/zohair-azmat-991aa53b8",
};

// ─── Skills ─────────────────────────────────────────────────────────────────

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & AI",
    items: ["FastAPI", "Python", "OpenAI", "REST APIs"],
  },
  {
    category: "Data & Systems",
    items: ["PostgreSQL", "SaaS Architecture", "AI Workflows", "Analytics Dashboards"],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export type ProjectLinks = {
  liveFrontend?: string;
  liveApi?: string;
  live?: string;
  github?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLinks;
  label?: string;
  featured?: boolean;
  features?: string[];
  screenshots?: {
    desktop?: string;
    mobile?: string;
    dashboard?: string;
    [key: string]: string | undefined;
  };
};

export const projects: Project[] = [
  {
    title: "SupportPilot AI — Digital Customer Support FTE",
    description:
      "A production-style AI SaaS platform built to simulate and automate real customer support operations. It includes intelligent ticket handling, LLM-powered responses, multi-channel communication workflows, analytics, escalation systems, and structured event logging inside a modern SaaS architecture.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Tailwind CSS"],
    links: {
      liveFrontend: "https://your-frontend-link.com",
      liveApi: "https://your-api-link.com",
      github: "https://github.com/yourusername/supportpilot-ai",
    },
    features: [
      "Production-grade SaaS UI",
      "Admin portal and customer portal",
      "WhatsApp integration",
      "Email integration",
      "LLM-based AI responses",
      "Analytics dashboard",
      "Ticketing system",
      "Conversations system",
      "Escalation logic",
      "Event logging",
      "Real-world SaaS architecture",
    ],
    screenshots: {
      desktop: undefined,
      mobile: undefined,
      dashboard: undefined,
    },
    featured: true,
  },
  {
    title: "AI Task Manager",
    description:
      "A full-stack AI productivity assistant with chatbot-driven workflows, smart task interactions, and a modern web interface powered by Next.js, FastAPI, and OpenAI.",
    tags: ["Next.js", "FastAPI", "OpenAI", "Tailwind CSS"],
    label: "AI Productivity App",
    links: {
      live: "https://taskai-zohair.vercel.app/",
    },
  },
  {
    title: "Zohair Racing Portfolio",
    description:
      "A creative browser-based racing-inspired interface focused on smooth motion, immersive UI, and polished frontend interactions.",
    tags: ["Next.js", "Tailwind CSS", "Animations"],
    label: "Creative Frontend",
    links: {
      live: "https://zohair-racing-portfolio.vercel.app/",
    },
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
