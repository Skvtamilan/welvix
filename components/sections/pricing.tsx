import { Check } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
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

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative rounded-[2rem] border p-8 transition-all duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-primary/40 bg-gradient-to-b from-primary/14 to-white/6 shadow-glow"
                  : "border-white/10 bg-white/5"
              )}
            >
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
              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-accent/15 p-1 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-sm text-slate-200">{feature}</p>
                  </div>
                ))}
              </div>
              <Button
                href="#contact"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-slate-300">
          Most clients choose Growth for the best balance of cost and results.
        </p>
      </div>
    </AnimatedSection>
  );
}
