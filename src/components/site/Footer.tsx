import { Link } from "@tanstack/react-router";
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Wordmark } from "./Logo";

const cols = [
  {
    title: "Offerings",
    links: [
      { label: "Software Development", to: "/services#software" },
      { label: "Web Development", to: "/services#web" },
      { label: "Mobile Apps", to: "/services#mobile" },
      { label: "AI Solutions", to: "/services#ai" },
      { label: "ERP & CRM", to: "/services#erp" },
      { label: "Cloud & DevOps", to: "/services#cloud" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Process", to: "/about#process" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Careers", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", to: "/services#industries" },
      { label: "Finance", to: "/services#industries" },
      { label: "Manufacturing", to: "/services#industries" },
      { label: "Retail & E-Commerce", to: "/services#industries" },
      { label: "Logistics", to: "/services#industries" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-teal/25 bg-ink text-white shadow-[0_-30px_80px_-40px_rgba(56,224,208,0.35)]">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-8 md:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              BLUETORN Technologies engineers secure, scalable software and digital transformation
              programs for startups, SMEs and enterprises across India and beyond.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>Office 01 & 02, Sai Sagar Apartment, Ulwe, Navi Mumbai – 410206, MH, India</span>
              </div>
              <a href="mailto:info@bluetorn.com" className="flex items-center gap-2 hover:text-teal">
                <Mail className="h-4 w-4 text-teal" /> info@bluetorn.com
              </a>
              <a href="tel:+917788996549" className="flex items-center gap-2 hover:text-teal">
                <Phone className="h-4 w-4 text-teal" /> +91 77889 96549
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/70 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="text-xs text-white/50">
            © 2026 BLUETORN Technologies. Smarter Technology. Stronger Future.
          </div>
          <div className="flex items-center gap-3 text-white/70">
            {[Linkedin, Github, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:border-teal hover:text-teal"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
