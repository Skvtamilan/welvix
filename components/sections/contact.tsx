"use client";

import { FormEvent } from "react";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { contactPlaceholders } from "@/data/site-config";

const projectTypes = [
  "Business Website",
  "Landing Page",
  "E-commerce Website",
  "Website Redesign",
  "Ongoing Support"
];

const budgetRanges = ["₹9,999", "₹24,999", "₹49,999+", "Not sure yet"];

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const business = String(formData.get("business") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const whatsappNumber = contactPlaceholders.whatsappLink.replace(
      "https://wa.me/",
      ""
    );

    const whatsappMessage = [
      "Hi Welvix, I would like to enquire about a website project.",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Business / Brand: ${business || "Not provided"}`,
      `Project Type: ${projectType || "Not selected"}`,
      `Budget: ${budget || "Not selected"}`,
      `Message: ${message || "Not provided"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <AnimatedSection id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/10 via-white/6 to-accent/10 p-6 shadow-glow sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-8">
            {/* Replace these contact placeholders in data/site-config.ts with real business details. */}
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
              Contact Welvix
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white">
              Let&apos;s build a website that makes your business look as strong as it really is.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Share a few details about your brand, goals, and timeline. We&apos;ll
              use that to understand the project, recommend the right direction,
              and help you move toward a cleaner, more credible, higher-converting
              website. Every launch also includes one month of free website
              maintenance so you have support during the most important early stage.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contactPlaceholders.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
              >
                <div className="rounded-xl bg-white/10 p-2 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                {contactPlaceholders.email}
              </a>
              <a
                href={`tel:${contactPlaceholders.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
              >
                <div className="rounded-xl bg-white/10 p-2 text-primary">
                  <PhoneCall className="h-5 w-5" />
                </div>
                {contactPlaceholders.phone}
              </a>
              <a
                href={`tel:${contactPlaceholders.secondaryPhone}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
              >
                <div className="rounded-xl bg-white/10 p-2 text-primary">
                  <PhoneCall className="h-5 w-5" />
                </div>
                {contactPlaceholders.secondaryPhone}
              </a>
              <a
                href={contactPlaceholders.whatsappLink}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-xl bg-white/10 p-2 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </div>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8">
            <form className="grid gap-5" action="#" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Business / Brand"
                  name="business"
                  type="text"
                  placeholder="Brand or company name"
                />
                <SelectField label="Project Type" name="projectType" options={projectTypes} />
              </div>
              <SelectField label="Budget" name="budget" options={budgetRanges} />
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project goals, timeline, and what you want the website to achieve."
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-primary/40"
                />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">
                  Clicking the button opens WhatsApp with your project details prefilled.
                </p>
                <Button className="sm:min-w-56">Book Your Discovery Call</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

function Field({ label, name, type, placeholder }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm text-slate-200">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-primary/40"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
};

function SelectField({ label, name, options }: SelectFieldProps) {
  return (
    <label className="grid gap-2 text-sm text-slate-200">
      <span>{label}</span>
      <select
        name={name}
        defaultValue=""
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-primary/40"
      >
        <option value="" disabled className="bg-slate-950">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-slate-950">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
