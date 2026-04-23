"use client";

import { motion } from "framer-motion";
import { Gauge, LockKeyhole, MonitorSmartphone, Search, Sparkles, Target } from "lucide-react";

import {
  AnimatedSection,
  fadeUpItem,
  staggerContainer
} from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Fast performance",
    description:
      "Speed is built in from the beginning so the experience feels smooth and confident, not frustrating.",
    icon: Gauge
  },
  {
    title: "Mobile responsive",
    description:
      "Your website is designed to feel intentional on phones, tablets, laptops, and large desktop screens.",
    icon: MonitorSmartphone
  },
  {
    title: "Lead-focused design",
    description:
      "Every section works toward clarity, trust, and next-step action instead of visual clutter.",
    icon: Target
  },
  {
    title: "Clean modern UI",
    description:
      "A polished visual system helps your business look established, current, and easier to believe in.",
    icon: Sparkles
  },
  {
    title: "Secure and scalable",
    description:
      "Builds use current, dependable technology stacks so your website stays maintainable as your offers, pages, and business needs evolve.",
    icon: LockKeyhole
  },
  {
    title: "SEO-friendly structure",
    description:
      "Semantic layout and clean content hierarchy give your site a strong foundation for discoverability.",
    icon: Search
  }
];

export function BenefitsSection() {
  return (
    <AnimatedSection className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Clients Choose Welvix"
          title="The goal is not just a better-looking website. It is a better-performing online presence."
          description="Welvix websites are designed to strengthen first impressions, remove friction, and support the kind of growth serious businesses actually care about."
          align="center"
        />

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                variants={fadeUpItem}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-7"
              >
                <motion.div
                  whileHover={{ rotate: 6 }}
                  className="inline-flex rounded-2xl bg-white/10 p-3 text-primary"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mt-6 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
