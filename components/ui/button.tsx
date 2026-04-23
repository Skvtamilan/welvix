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
    "border border-white/20 bg-[linear-gradient(135deg,rgba(155,225,93,0.95),rgba(76,201,240,0.92)_45%,rgba(227,248,255,0.98))] text-slate-950 shadow-[0_18px_48px_rgba(76,201,240,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(76,201,240,0.32)]",
  secondary:
    "border border-white/15 bg-white/[0.07] text-white backdrop-blur-xl hover:border-primary/35 hover:bg-white/[0.11] hover:-translate-y-0.5",
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
