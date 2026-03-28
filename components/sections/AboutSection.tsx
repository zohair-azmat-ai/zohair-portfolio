import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { siteConfig } from "@/data/portfolio";

const highlights = [
  {
    label: "AI SaaS Systems",
    description: "Production-grade intelligent platforms",
    accent: "bg-blue-500",
  },
  {
    label: "Backend Architecture",
    description: "Scalable APIs and data systems",
    accent: "bg-violet-500",
  },
  {
    label: "Product Thinking",
    description: "User-first, business-aware engineering",
    accent: "bg-emerald-500",
  },
  {
    label: "Full-Stack Execution",
    description: "End-to-end from DB to polished UI",
    accent: "bg-amber-500",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <Container>
        <SectionHeading eyebrow="Background" title="About Me" />

        <div className="grid gap-6 lg:grid-cols-5">

          {/* Bio card */}
          <div className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-[15px] leading-8 text-zinc-600 dark:text-zinc-400">
                {siteConfig.about}
              </p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <span className={`h-1 w-6 rounded-full ${h.accent}`} />
                  <div className="flex flex-col gap-1">
                    <p className="text-[13px] font-semibold leading-tight text-zinc-800 dark:text-zinc-200">
                      {h.label}
                    </p>
                    <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500">
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
