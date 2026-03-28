import { Fragment } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";

const stats = [
  "AI SaaS Systems",
  "Full-Stack Products",
  "Production Architecture",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] md:min-h-[720px] overflow-hidden py-20 sm:py-28 lg:py-32">

      {/* ── Full background image ── */}
      <img
        src="/profile.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[75%_35%] brightness-90 scale-[1.05]"
      />

      {/* ── Gradient overlay for readability ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      {/* ── Radial glow accent ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%)]" />

      <Container>
        <div className="relative z-10 flex max-w-2xl flex-col gap-9">

          {/* Badge */}
          <div className="flex animate-fade-up">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AI Engineer &nbsp;&bull;&nbsp; SaaS Builder
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3 animate-fade-up animation-delay-100">
            <p className="text-sm font-medium text-zinc-400">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[72px] lg:leading-[1.08]">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
              {siteConfig.title}
            </p>
          </div>

          {/* Description */}
          <p className="animate-fade-up animation-delay-200 max-w-xl text-base leading-loose text-zinc-300 sm:text-lg">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-3">
            <Button href="#projects" className="px-6 py-3 text-sm">
              View Projects
            </Button>
            <Button
              href="#contact"
              variant="outline"
              className="px-6 py-3 text-sm"
            >
              Contact Me
            </Button>
          </div>

          {/* Mini stats strip */}
          <div className="animate-fade-up animation-delay-400 flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
            {stats.map((label, i) => (
              <Fragment key={label}>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  {label}
                </span>
                {i < stats.length - 1 && (
                  <span className="h-3 w-px shrink-0 bg-zinc-700" />
                )}
              </Fragment>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
