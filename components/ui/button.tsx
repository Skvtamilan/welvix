import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-primary via-sky-400 to-accent text-slate-950 shadow-[0_18px_48px_rgba(76,201,240,0.28)] hover:-translate-y-0.5",
  secondary:
    "border border-white/15 bg-white/8 text-white backdrop-blur hover:border-primary/40 hover:bg-white/12 hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white"
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = false
}: ButtonProps) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-300",
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return <button className={sharedClassName}>{content}</button>;
}
