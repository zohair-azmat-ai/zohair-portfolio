import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-600 dark:border-zinc-700/60 dark:bg-zinc-800/60 dark:text-zinc-300",
        className
      )}
    >
      {children}
    </span>
  );
}
