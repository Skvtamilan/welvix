import { AlertCircle, ArrowRight, BadgeCheck, CircleDashed } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const problems = [
  "Outdated design makes your business look less credible than it really is.",
  "Confusing layouts bury the message and leave visitors unsure what to do next.",
  "Slow, inconsistent mobile experiences quietly kill trust and enquiries."
];

const solutions = [
  "Modern design systems that instantly elevate perceived quality and professionalism.",
  "Clear conversion paths with sharper messaging, stronger hierarchy, and focused calls to action.",
  "Responsive, performance-first builds that feel smooth across mobile, tablet, and desktop."
];

export function ProblemSolutionSection() {
  return (
    <AnimatedSection className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Most websites do not fail because the business is weak. They fail because the website does not communicate value well enough."
          description="When your website looks unclear, outdated, or forgettable, you lose attention before the conversation even starts. Welvix fixes that gap with strategy, design, and development working together."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-[2rem] border border-rose-400/15 bg-rose-400/5 p-8">
            <div className="mb-6 inline-flex rounded-2xl bg-rose-400/10 p-3 text-rose-300">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Common Problems</h3>
            <div className="mt-6 space-y-4">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-2xl border border-white/8 bg-white/5 p-5 text-sm leading-7 text-slate-300"
                >
                  {problem}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="rounded-full border border-white/10 bg-white/5 p-5 text-primary">
              <ArrowRight className="h-7 w-7" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8">
            <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white">The Welvix Approach</h3>
            <div className="mt-6 space-y-4">
              {solutions.map((solution) => (
                <div
                  key={solution}
                  className="rounded-2xl border border-white/8 bg-white/5 p-5 text-sm leading-7 text-slate-300"
                >
                  {solution}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <CircleDashed className="mt-1 h-5 w-5 text-accent" />
              <p className="max-w-3xl text-sm leading-7 text-slate-300">
                A good-looking website is not enough. The real win is combining
                positioning, clarity, performance, and polish into one experience
                that helps the right people trust you faster.
              </p>
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white">
              Designed to convert, not just impress
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
