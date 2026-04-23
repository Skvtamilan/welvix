import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl",
          align === "center" ? "mx-auto" : ""
        )}
      >
        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(155,225,93,0.8)]" />
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/85">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
