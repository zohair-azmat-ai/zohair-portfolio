import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
};

export default function Button({
  children,
  className,
  variant = "primary",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none";

  const variants = {
    primary: "bg-white text-zinc-900 hover:bg-zinc-200",
    outline: "border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600",
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
