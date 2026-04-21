import { CheckCircle2, PlayCircle, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const trustPills = [
  "Strategy-led design",
  "Conversion-focused builds",
  "1 month free maintenance after launch"
];

const stats = [
  { label: "Avg. launch timeline", value: "1-4 weeks" },
  { label: "Designed for", value: "Brands, startups, creators" },
  { label: "Built to improve", value: "Credibility, leads, clarity" }
];

export function HeroSection() {
  return (
    <AnimatedSection id="home" className="overflow-hidden px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Premium websites for businesses that want to grow faster
          </div>
          <h1 className="mt-8 max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            We build high-converting websites that make your brand look ready
            for the next level.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
            Welvix helps businesses, startups, creators, and modern brands launch
            sleek websites that earn trust fast, communicate value clearly, and
            turn more visitors into enquiries using modern design systems and
            the latest website technology stacks.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" icon className="sm:min-w-44">
              Start Your Project
            </Button>
            <Button href="#work" variant="secondary" className="sm:min-w-44">
              <PlayCircle className="h-4 w-4" />
              See Our Work
            </Button>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Clear process, premium execution, and one month of free website
            maintenance after launch so you are supported beyond go-live.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustPills.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/12 to-white/5 p-4 shadow-glow backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-white">Welvix Growth Preview</p>
                  <p className="text-xs text-slate-400">
                    Website performance and conversion dashboard
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(76,201,240,0.18),transparent_45%),rgba(255,255,255,0.04)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Conversion uplift potential</p>
                      <p className="mt-2 text-4xl font-semibold text-white">+38%</p>
                    </div>
                    <div className="rounded-2xl bg-accent/15 p-3 text-accent">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-6 h-40 rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 p-4">
                    <div className="flex h-full items-end gap-3">
                      {[42, 58, 50, 76, 88, 96].map((height, index) => (
                        <div key={height} className="flex-1">
                          <div
                            className="rounded-t-2xl bg-gradient-to-t from-primary to-accent"
                            style={{ height: `${height}%`, transitionDelay: `${index * 60}ms` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">What Welvix focuses on</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-200">
                      <li>Clear messaging that instantly explains your offer</li>
                      <li>Intentional layouts that guide people to enquire</li>
                      <li>Performance-first builds that feel smooth everywhere</li>
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-5">
                    <p className="text-sm font-semibold text-white">
                      Premium look. Better trust. Stronger first impression.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Your website should feel like your best salesperson, not an
                      afterthought. That is the standard Welvix builds to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
