import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  eyebrow,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow && (
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
