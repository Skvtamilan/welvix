"use client";

import { motion } from "framer-motion";

import {
  AnimatedSection,
  fadeUpItem,
  staggerContainer
} from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    name: "Client Engagement",
    description:
      "We connect with the client to understand the business, the goals of the website, and the overall direction of the project."
  },
  {
    name: "Requirements & Advance",
    description:
      "We note down the full project requirements and receive an advance payment of 40% of the total project amount before moving forward."
  },
  {
    name: "Development Begins",
    description:
      "Once everything is confirmed, we begin building the website with the approved direction, structure, goals, and the latest suitable technology stack in mind."
  },
  {
    name: "Frontend Preview",
    description:
      "We showcase sample frontend models to the client and confirm the planned backend features before continuing deeper into the build."
  },
  {
    name: "Full Website Completion",
    description:
      "We complete the full website build, bringing together the final interface, pages, features, and overall user experience."
  },
  {
    name: "Final Review",
    description:
      "We present the finished website to the client and collect any final change requests needed before launch."
  },
  {
    name: "Launch",
    description:
      "Once the final review is complete, we launch the website online and make it live for the world to see."
  }
];

export function ProcessSection() {
  return (
    <AnimatedSection id="process" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="A clear workflow that keeps projects moving without confusion."
          description="Clients trust process when they know what happens next. This structure helps the project feel organized, collaborative, and professionally managed from start to finish."
        />

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.name}
              variants={fadeUpItem}
              whileHover={{ y: -8 }}
              className={`relative rounded-[2rem] border border-white/10 bg-white/5 p-7 ${
                index === steps.length - 1
                  ? "md:col-span-2 md:w-full md:max-w-xl md:justify-self-center xl:col-start-2 xl:col-span-1"
                  : ""
              }`}
            >
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step {index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{step.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mt-8 rounded-[2rem] border border-accent/30 bg-gradient-to-r from-accent/12 via-primary/10 to-accent/12 p-6 text-center shadow-[0_18px_48px_rgba(155,225,93,0.08)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Note
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-100 sm:text-base">
            Clients can reach out at any stage of the process and request to
            see the website progress whenever needed. Welvix values transparency
            and keeps communication open throughout the project.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
