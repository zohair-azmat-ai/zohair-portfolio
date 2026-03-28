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
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <div className="h-[480px] w-[800px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-indigo-500/10" />
      </div>

      <Container>
        <div className="relative flex flex-col gap-9">

          {/* Badge */}
          <div className="flex animate-fade-up">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AI Engineer &nbsp;&bull;&nbsp; SaaS Builder
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3 animate-fade-up animation-delay-100">
            <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-[72px] lg:leading-[1.08] dark:text-white">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl dark:from-blue-400 dark:to-violet-400">
              {siteConfig.title}
            </p>
          </div>

          {/* Description */}
          <p className="animate-fade-up animation-delay-200 max-w-xl text-base leading-loose text-zinc-600 dark:text-zinc-400 sm:text-lg">
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
                <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                  {label}
                </span>
                {i < stats.length - 1 && (
                  <span className="h-3 w-px shrink-0 bg-zinc-300 dark:bg-zinc-700" />
                )}
              </Fragment>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
