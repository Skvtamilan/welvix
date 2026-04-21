"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Most projects take between one and four weeks depending on scope, content readiness, and revision rounds. Smaller landing pages move faster, while more detailed custom websites naturally take a little longer."
  },
  {
    question: "Do you only work with startups?",
    answer:
      "No. Welvix works with startups, established businesses, creators, personal brands, and modern service companies that want a stronger online presence."
  },
  {
    question: "Can you redesign an existing website instead of starting from scratch?",
    answer:
      "Yes. Redesign projects are a core part of the offering, especially when the current website feels outdated, unclear, or underperforming."
  },
  {
    question: "Will my website work well on mobile devices?",
    answer:
      "Yes. Every page is built responsively with mobile, tablet, and desktop experiences considered from the design stage onward."
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes one month of free website maintenance after launch. That gives you a support window for small updates, refinements, and peace of mind while the new site settles in."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers for the questions most clients ask before getting started."
          description="A polished FAQ lowers friction and helps serious leads feel informed before they reach out."
          align="center"
        />

        <div className="mt-14 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-[1.75rem] border border-white/10 bg-white/5"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-7 text-slate-300">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
