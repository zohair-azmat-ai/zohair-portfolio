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
        <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-blue-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
