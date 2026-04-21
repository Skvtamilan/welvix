import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/data/site-config";

export function PortfolioSection() {
  return (
    <AnimatedSection id="work" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="A polished showcase section that is ready for your real projects as soon as you have them."
          description="These cards are intentionally designed to feel complete before portfolio assets are replaced. Update the placeholder values in the config file and the section will stay visually polished."
        />

        <div className="mt-14 grid gap-6">
          {portfolioProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25"
            >
              <div className="relative border-b border-white/10 p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-70" />
                <div className="relative grid min-h-[220px] gap-4 rounded-[1.5rem] border border-white/15 bg-[radial-gradient(circle_at_top_left,rgba(76,201,240,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 lg:grid-cols-[1.1fr_0.9fr]">
                  {project.images.map((image, imageIndex) => (
                    <div
                      key={image}
                      className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/40"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} preview ${imageIndex + 1}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.summary}
                </p>
                <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-accent">
                  {project.result}
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
