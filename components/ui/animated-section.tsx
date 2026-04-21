"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.section
      id={id}
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
