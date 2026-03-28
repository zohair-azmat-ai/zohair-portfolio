import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Badge from "@/components/ui/Badge";
import { skills } from "@/data/portfolio";

type AccentConfig = {
  dot: string;
  bar: string;
  label: string;
};

const categoryAccent: Record<string, AccentConfig> = {
  "Frontend": {
    dot: "bg-blue-500",
    bar: "bg-blue-500",
    label: "text-blue-600 dark:text-blue-400",
  },
  "Backend & AI": {
    dot: "bg-violet-500",
    bar: "bg-violet-500",
    label: "text-violet-600 dark:text-violet-400",
  },
  "Data & Systems": {
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    label: "text-emerald-600 dark:text-emerald-400",
  },
};

const fallback: AccentConfig = {
  dot: "bg-zinc-500",
  bar: "bg-zinc-500",
  label: "text-zinc-500",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Stack"
          subtitle="Technologies I use to build production-grade systems"
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {skills.map((group) => {
            const accent = categoryAccent[group.category] ?? fallback;
            return (
              <div
                key={group.category}
                className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                {/* Top accent bar */}
                <div className={`absolute inset-x-0 top-0 h-0.5 ${accent.bar}`} />

                {/* Category label */}
                <div className="mb-5 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                  <p className={`text-[11px] font-bold uppercase tracking-widest ${accent.label}`}>
                    {group.category}
                  </p>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
