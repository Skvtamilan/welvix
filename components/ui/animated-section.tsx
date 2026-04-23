"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function AnimatedSection({
  id,
  className,
  children
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn("relative", className)}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

export const fadeUpItem = {
  hidden: { opacity: 0, x: -56 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
