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
    title: "Aurevia Estate AI",
    description:
      "A premium AI-powered real estate automation platform that captures, qualifies, and converts leads automatically. It integrates WhatsApp, email, and website channels, uses GPT-4o for intelligent responses, and updates CRM workflows in real-time.",
    tags: ["Next.js", "FastAPI", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
    links: {
      live: "https://aurevia-estate-ai.vercel.app/",
    },
  },
  {
    title: "SupportPilot AI — Digital Customer Support FTE",
    description:
      "A production-style AI SaaS platform built to simulate and automate real customer support operations. It includes intelligent ticket handling, LLM-powered responses, multi-channel communication workflows, analytics, escalation systems, and structured event logging inside a modern SaaS architecture.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Tailwind CSS"],
    links: {
      liveFrontend: "https://supportpilot-ai-digital-fte.vercel.app/",
      liveApi: "https://zohairazmat-supportpilot-ai-fte-v2.hf.space/docs",
      github: "https://github.com/zohair-azmat-ai/Supportpilot-Ai-Digital-Fte",
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
    title: "Nexus AI Orchestrator",
    description:
      "A production-grade AI orchestration system with multi-agent workflows, memory layers, RAG retrieval, and full observability. Designed for scalable, intelligent AI systems with real-time decision pipelines.",
    tags: ["Next.js", "FastAPI", "OpenAI", "Qdrant", "PostgreSQL", "Docker"],
    links: {
      live: "https://nexus-ai-orchestrator.vercel.app/",
    },
  },
  {
    title: "We Are Kids Nursery LMS & Live",
    description:
      "A production-grade nursery LMS and live classroom platform with role-based access for admin, teachers, assistants, and students. Includes secure authentication, dashboard workflows, and real-time online class capabilities for structured learning environments.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "WebRTC", "LMS", "Role-Based Access"],
    links: {
      live: "https://we-are-kids-lms-live.vercel.app/",
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
