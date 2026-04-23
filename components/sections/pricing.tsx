"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import {
  AnimatedSection,
  fadeUpItem,
  staggerContainer
} from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "For getting your business online",
    features: [
      "3-5 pages",
      "Responsive design",
      "Basic SEO",
      "Contact form",
      "Built with modern website technologies",
      "1-2 revisions"
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "For businesses that want consistent leads",
    features: [
      "Everything in Starter",
      "5-10 pages",
      "Custom design",
      "Built with Next.js",
      "Latest modern tech stack",
      "Lead capture + WhatsApp",
      "Animations + speed optimization",
      "3-4 revisions"
    ],
    highlighted: true,
    cta: "Start Growing"
  },
  {
    name: "Premium",
    price: "₹49,999+",
    description: "For serious brands that need a tailored digital build",
    features: [
      "Everything in Growth",
      "Custom architecture",
      "Backend + database",
      "Payment integration",
      "Latest modern tech stack",
      "Automation features",
      "Priority support"
    ],
    highlighted: false,
    cta: "Start Your Project"
  }
];

export function PricingSection() {
  return (
    <AnimatedSection id="pricing" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible packages for brands at different stages, without making the offer feel vague."
          description="These packages give visitors a clear sense of investment and value while still leaving space for custom scope where needed."
          align="center"
        />

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeUpItem}
              whileHover={{ y: -10, scale: 1.01 }}
              className={cn(
                "relative overflow-hidden rounded-[2.2rem] border p-8 transition-all duration-300 hover:-translate-y-1.5",
                plan.highlighted
                  ? "border-primary/40 bg-[linear-gradient(180deg,rgba(76,201,240,0.18),rgba(255,255,255,0.08))] shadow-[0_24px_80px_rgba(14,165,233,0.18)]"
                  : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] shadow-[0_20px_70px_rgba(2,6,23,0.22)]"
              )}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.08] to-transparent" />
              {plan.highlighted ? (
                <div className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">
                  Most Popular
                </div>
              ) : null}
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-white">
                {plan.price}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {plan.description}
              </p>
              <div className="relative mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <motion.div
                    key={feature}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 rounded-full bg-accent/15 p-1 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm text-slate-200">{feature}</p>
                  </motion.div>
                ))}
              </div>
              <Button
                href="#contact"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </motion.article>
          ))}
        </motion.div>
        <p className="mt-8 text-center text-sm font-medium text-slate-300">
          Most clients choose Growth for the best balance of cost and results.
        </p>
      </div>
    </AnimatedSection>
  );
}
