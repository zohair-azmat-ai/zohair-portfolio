import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { featuredProject } from "@/data/portfolio";

const callouts = [
  "Multi-channel Support",
  "AI-powered Workflows",
  "Admin Analytics",
  "Escalation Engine",
];

export default function FeaturedProjectSection() {
  return (
    <section id="featured" className="relative py-16">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center"
      >
        <div className="h-[400px] w-[700px] rounded-full bg-violet-500/8 blur-[100px]" />
      </div>

      <Container>
        <SectionHeading eyebrow="Flagship Product" title="Featured Project" />

        {/* Flagship card */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 lg:p-10">

          {/* Top badge row */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-[11px] font-semibold text-white">
              Flagship Project
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              AI SaaS Platform
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">

            {/* ── Left: project content ── */}
            <div className="flex flex-col gap-6 lg:col-span-3">

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {featuredProject.title}
              </h3>

              <p className="text-[15px] leading-relaxed text-zinc-400">
                {featuredProject.description}
              </p>

              {/* Callout chips */}
              <div className="flex flex-wrap gap-2">
                {callouts.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-900/50 bg-blue-950/40 px-3 py-1 text-[11px] font-medium text-blue-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-500" />
                    {c}
                  </span>
                ))}
              </div>

              {/* Feature list */}
              {featuredProject.features && (
                <ul className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2">
                  {featuredProject.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[13px] text-zinc-400"
                    >
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* Divider */}
              <div className="h-px bg-zinc-800" />

              {/* Tech stack */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">
                  Stack
                </span>
                {featuredProject.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                {featuredProject.links.liveFrontend && (
                  <Button
                    href={featuredProject.links.liveFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm"
                  >
                    Live Demo →
                  </Button>
                )}
                {featuredProject.links.liveApi && (
                  <Button
                    href={featuredProject.links.liveApi}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm"
                  >
                    Live API
                  </Button>
                )}
                {featuredProject.links.github && (
                  <Button
                    href={featuredProject.links.github}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm"
                  >
                    GitHub
                  </Button>
                )}
              </div>

            </div>

            {/* ── Right: real screenshots ── */}
            <div className="flex flex-col gap-3 lg:col-span-2">

              <div className="h-[300px] w-full overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/admin.png"
                  alt="SupportPilot Admin Dashboard"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="h-[165px] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/tickets.png"
                    alt="SupportPilot Tickets Portal"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="h-[165px] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/analytics.png"
                    alt="SupportPilot Analytics"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 text-center">
                <p className="text-[10px] font-medium text-zinc-600">Admin Dashboard</p>
                <p className="text-[10px] font-medium text-zinc-600">Tickets Portal</p>
                <p className="text-[10px] font-medium text-zinc-600">Analytics</p>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
