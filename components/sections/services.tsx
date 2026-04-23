"use client";

import { motion } from "framer-motion";
import {
  Layers3,
  LayoutTemplate,
  Rocket,
  ShoppingBag,
  Smartphone,
  Wrench
} from "lucide-react";

import {
  AnimatedSection,
  fadeUpItem,
  staggerContainer
} from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Website Design",
    description:
      "Brand-aligned interfaces with strong hierarchy, premium visual language, and clear storytelling.",
    outcome: "Outcome: A first impression that feels credible, modern, and worth taking seriously.",
    icon: LayoutTemplate
  },
  {
    title: "Website Development",
    description:
      "Responsive, performance-focused builds that translate approved designs into smooth, dependable experiences using the latest modern website technologies.",
    outcome: "Outcome: A fast website that feels polished on every screen size.",
    icon: Rocket
  },
  {
    title: "Landing Pages",
    description:
      "Focused, high-converting pages for offers, campaigns, product launches, and lead generation.",
    outcome: "Outcome: Sharper messaging and stronger conversion from paid or organic traffic.",
    icon: Layers3
  },
  {
    title: "E-commerce Websites",
    description:
      "Clean product experiences built with modern technology stacks to reduce friction and help customers move confidently toward checkout.",
    outcome: "Outcome: Better product presentation and a smoother path to revenue.",
    icon: ShoppingBag
  },
  {
    title: "Website Redesign",
    description:
      "Strategic refreshes for businesses that have outgrown an outdated, unclear, or underperforming website.",
    outcome: "Outcome: A stronger online presence without losing the heart of your brand.",
    icon: Smartphone
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, performance care, and design refinements to keep your site reliable after launch.",
    outcome: "Outcome: The first month of maintenance is free, giving you a smoother handoff and extra peace of mind.",
    icon: Wrench
  }
];

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to launch a website that looks exceptional and performs like a real growth asset."
          description="Welvix combines strategy, design, and development to create websites that feel premium, communicate clearly, and make the next step obvious."
          align="center"
        />

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUpItem}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.08]"
              >
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.05 }}
                  className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-3 text-primary transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
                <p className="mt-5 border-t border-white/10 pt-5 text-sm font-medium text-accent">
                  {service.outcome}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
