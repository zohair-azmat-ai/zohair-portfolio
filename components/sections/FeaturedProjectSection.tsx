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

// ─── Screen Mockup Components ─────────────────────────────────────────────────

type MockupType = "dashboard" | "portal" | "analytics";

const mockupUrls: Record<MockupType, string> = {
  dashboard: "app/dashboard",
  portal:    "portal/tickets",
  analytics: "admin/analytics",
};

function DashboardSkeleton() {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div className="flex w-10 shrink-0 flex-col gap-2 border-r border-zinc-700/40 p-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded bg-zinc-700/60"
            style={{ width: i % 2 === 0 ? "100%" : "60%" }}
          />
        ))}
      </div>
      {/* Main content */}
      <div className="flex flex-1 flex-col gap-2 p-2.5">
        <div className="h-2 w-20 rounded bg-zinc-600/80" />
        <div className="grid grid-cols-2 gap-1.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 rounded-lg bg-zinc-700/50" />
          ))}
        </div>
        <div className="h-1.5 w-14 rounded bg-zinc-600/80" />
        <div className="flex-1 rounded-lg bg-zinc-700/40" />
      </div>
    </div>
  );
}

function PortalSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-1.5 overflow-hidden p-2.5">
      <div className="h-1.5 w-14 rounded bg-zinc-600/80" />
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex items-start gap-1.5 rounded-lg border border-zinc-700/40 bg-zinc-800/40 p-1.5"
        >
          <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-zinc-700/60" />
          <div className="flex flex-1 flex-col gap-1">
            <div className="h-1.5 w-10 rounded bg-zinc-700/60" />
            <div className="h-1.5 w-full rounded bg-zinc-700/30" />
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyticsSkeleton() {
  const bars = [42, 68, 55, 88, 61, 74, 50];
  return (
    <div className="flex flex-1 flex-col gap-1.5 overflow-hidden p-2.5">
      <div className="h-1.5 w-14 rounded bg-zinc-600/80" />
      <div className="grid grid-cols-3 gap-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-5 rounded bg-zinc-700/50" />
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1 pt-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-blue-500/35"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function ScreenMockup({ type }: { type: MockupType }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/80">
      {/* Browser chrome */}
      <div className="flex shrink-0 items-center gap-1.5 border-b border-zinc-700/50 bg-zinc-900/80 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
        <span className="ml-2 truncate text-[9px] tracking-wide text-zinc-500">
          supportpilot.ai/{mockupUrls[type]}
        </span>
      </div>

      {/* Content skeleton */}
      {type === "dashboard" && <DashboardSkeleton />}
      {type === "portal"    && <PortalSkeleton />}
      {type === "analytics" && <AnalyticsSkeleton />}
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

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
                    className="px-5 py-2.5 text-sm"
                  >
                    Live Demo →
                  </Button>
                )}
                {featuredProject.links.liveApi && (
                  <Button
                    href={featuredProject.links.liveApi}
                    variant="outline"
                    className="px-5 py-2.5 text-sm"
                  >
                    Live API
                  </Button>
                )}
                {featuredProject.links.github && (
                  <Button
                    href={featuredProject.links.github}
                    variant="outline"
                    className="px-5 py-2.5 text-sm"
                  >
                    GitHub
                  </Button>
                )}
              </div>

            </div>

            {/* ── Right: screen mockups ── */}
            <div className="flex flex-col gap-3 lg:col-span-2">

              <div className="aspect-[4/3] w-full">
                <ScreenMockup type="dashboard" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video">
                  <ScreenMockup type="portal" />
                </div>
                <div className="aspect-video">
                  <ScreenMockup type="analytics" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 text-center">
                <p className="text-[10px] font-medium text-zinc-600">Admin Dashboard</p>
                <p className="text-[10px] font-medium text-zinc-600">Customer Portal</p>
                <p className="text-[10px] font-medium text-zinc-600">Analytics</p>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
