import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { siteConfig } from "@/data/portfolio";

const contactMethods = [
  {
    label: "Email",
    description: "Direct message",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    accent: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  {
    label: "GitHub",
    description: "Projects & code",
    value: "github.com/yourusername",
    href: siteConfig.github,
    accent: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
  },
  {
    label: "LinkedIn",
    description: "Professional profile",
    value: "linkedin.com/in/your-linkedin",
    href: siteConfig.linkedin,
    accent: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-500",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 pb-32">
      <Container>
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get In Touch"
        />

        {/* Contact card */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 lg:p-10 dark:border-zinc-800 dark:bg-zinc-900/80">

          {/* Opening statement */}
          <div className="mb-8 max-w-2xl">
            <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
              Open to AI engineering, SaaS, and product-focused opportunities.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Whether you have a project in mind, a role to discuss, or want to
              talk AI and product — my inbox is always open.
            </p>
          </div>

          {/* Contact method cards */}
          <div className="grid gap-3 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="group flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
              >
                {/* Label row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${method.dot}`} />
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${method.accent}`}>
                      {method.label}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-zinc-600">
                    →
                  </span>
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {method.description}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-zinc-500 dark:text-zinc-500">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Footer line */}
        <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          {siteConfig.name} &nbsp;&bull;&nbsp; AI SaaS Engineer &nbsp;&bull;&nbsp; {new Date().getFullYear()}
        </p>

      </Container>
    </section>
  );
}
