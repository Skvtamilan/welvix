"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  fadeUpItem,
  staggerContainer
} from "@/components/ui/animated-section";

const trustPills = [
  "Strategy-led design",
  "Conversion-focused builds",
  "1 month free maintenance after launch"
];

export function HeroSection() {
  return (
    <AnimatedSection
      id="home"
      className="overflow-hidden px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-center text-center">
        <motion.div
          className="relative z-10 mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-primary backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            Premium websites built to win trust faster
          </motion.div>
          <motion.h1
            variants={fadeUpItem}
            className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Premium websites that make your business look instantly more trusted,
            modern, and worth contacting.
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-slate-300 sm:text-lg"
          >
            Welvix helps businesses, startups, creators, and modern brands launch
            sleek websites that earn trust fast, communicate value clearly, and
            turn more visitors into enquiries using modern design systems and
            the latest website technology stacks.
          </motion.p>

          <motion.div
            variants={fadeUpItem}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button href="#contact" icon className="sm:min-w-44">
              Start Your Project
            </Button>
            <Button href="#work" variant="secondary" className="sm:min-w-44">
              <PlayCircle className="h-4 w-4" />
              See Our Work
            </Button>
          </motion.div>

          <motion.p variants={fadeUpItem} className="mt-5 text-sm text-slate-400">
            Clear process, premium execution, and one month of free website
            maintenance after launch so you are supported beyond go-live.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {trustPills.map((item) => (
              <motion.div
                key={item}
                variants={fadeUpItem}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
