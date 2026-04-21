import Link from "next/link";

import { contactPlaceholders } from "@/data/site-config";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

const socialLinks = [
  { label: "Instagram", href: contactPlaceholders.instagramLink },
  { label: "LinkedIn", href: contactPlaceholders.linkedinLink },
  { label: "Twitter", href: contactPlaceholders.twitterLink }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-bold text-slate-950">
              W
            </span>
            <div>
              <p className="text-lg font-semibold text-white">Welvix</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Startup Web Agency
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Welvix designs and builds premium websites that help brands look
            credible, convert better, and make a stronger first impression online.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Quick Links
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-400">
            <p>{contactPlaceholders.footerEmail}</p>
            <p>{contactPlaceholders.footerPhone}</p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Welvix. All rights reserved.</p>
          <p>Built to help serious brands turn attention into leads.</p>
        </div>
      </div>
    </footer>
  );
}
