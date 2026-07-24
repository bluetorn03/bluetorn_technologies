import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";
import { MagneticButton } from "./MagneticButton";

type MegaItem = { title: string; desc?: string; to: string };
type MegaSection = { heading: string; items: MegaItem[] };

const nav: {
  label: string;
  to?: string;
  mega?: MegaSection[];
}[] = [
  { label: "Home", to: "/" },
  {
    label: "Company",
    to: "/about",
    mega: [
      {
        heading: "About BLUETORN",
        items: [
          { title: "Our Story", desc: "Founded in 2026, Navi Mumbai.", to: "/about" },
          { title: "Mission", desc: "Empower businesses with software.", to: "/about#mission" },
          { title: "Vision", desc: "India's most trusted software firm.", to: "/about#vision" },
          { title: "Core Values", desc: "10 principles we build on.", to: "/about#values" },
        ],
      },
      {
        heading: "How We Work",
        items: [
          { title: "Development Process", desc: "Discovery to deployment.", to: "/about#process" },
          { title: "Quality Assurance", desc: "Rigorous, automated QA.", to: "/about#qa" },
          { title: "Careers", desc: "Join a premium engineering team.", to: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    mega: [
      {
        heading: "Engineering",
        items: [
          { title: "Software Development", to: "/services/software-development" },
          { title: "Web Development", to: "/services/web-development" },
          { title: "Mobile Apps", to: "/services/mobile-development" },
          { title: "API Integration", to: "/services/api-development" },
          { title: "Automation", to: "/services/automation" },
        ],
      },
      {
        heading: "Platforms",
        items: [
          { title: "AI Solutions", to: "/services/ai-solutions" },
          { title: "ERP Solutions", to: "/services/erp-solutions" },
          { title: "CRM Development", to: "/services/crm-development" },
          { title: "SaaS Development", to: "/services/saas-development" },
          { title: "Cloud & DevOps", to: "/services/cloud-devops" },
        ],
      },
      {
        heading: "Experience",
        items: [
          { title: "UI/UX Design", to: "/services/ui-ux-design" },
          { title: "Maintenance & Support", to: "/services/maintenance-support" },
          { title: "Digital Marketing", to: "/services/digital-marketing" },
          { title: "E-Commerce", to: "/services/e-commerce" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    to: "/solutions",
    mega: [
      {
        heading: "By Stage",
        items: [
          { title: "Startup MVP", desc: "0 → paying customers in weeks.", to: "/solutions/startup-mvp" },
          { title: "Enterprise Platform", desc: "Mission-critical software at scale.", to: "/solutions/enterprise-platform" },
          { title: "SaaS Launch", desc: "B2B SaaS ready for enterprise buyers.", to: "/solutions/saas-launch" },
          { title: "Internal Tools", desc: "Give ops teams their week back.", to: "/solutions/internal-tools" },
        ],
      },
      {
        heading: "By Outcome",
        items: [
          { title: "Digital Transformation", desc: "Modernise legacy — no big bang.", to: "/solutions/digital-transformation" },
          { title: "AI Integration", desc: "Production-grade AI with ROI.", to: "/solutions/ai-integration" },
          { title: "Cloud Migration", desc: "Cost, uptime and DR done right.", to: "/solutions/cloud-migration" },
          { title: "Cybersecurity", desc: "Security engineered in.", to: "/solutions/cybersecurity" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    to: "/industries",
    mega: [
      {
        heading: "Regulated & Complex",
        items: [
          { title: "Healthcare", to: "/industries/healthcare" },
          { title: "Finance", to: "/industries/finance" },
          { title: "Banking", to: "/industries/banking" },
          { title: "Insurance", to: "/industries/insurance" },
          { title: "Manufacturing", to: "/industries/manufacturing" },
          { title: "Education", to: "/industries/education" },
        ],
      },
      {
        heading: "Commerce & Services",
        items: [
          { title: "Retail", to: "/industries/retail" },
          { title: "E-Commerce", to: "/industries/e-commerce" },
          { title: "Logistics", to: "/industries/logistics" },
          { title: "Real Estate", to: "/industries/real-estate" },
          { title: "Hospitality", to: "/industries/hospitality" },
          { title: "Construction", to: "/industries/construction" },
        ],
      },
    ],
  },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<number, boolean>>({});

  const toggleMobileExpand = (idx: number) => {
    setMobileExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto px-4 pt-4 md:px-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-[oklch(0.15_0.025_200/0.72)] backdrop-blur-xl shadow-[0_20px_60px_-30px_oklch(0.1_0_0/0.5)]"
              : "border-white/5 bg-[oklch(0.15_0.025_200/0.35)] backdrop-blur-md"
          }`}
          onMouseLeave={() => setOpenIdx(null)}
        >
          <Link to="/" className="shrink-0">
            <Wordmark tone="light" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item, i) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenIdx(item.mega ? i : null)}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                    {item.mega && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-white/75 hover:text-white">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </button>
                )}

                <AnimatePresence>
                  {openIdx === i && item.mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
                      className="absolute left-1/2 top-[calc(100%+14px)] -translate-x-1/2"
                    >
                      <div
                        className="min-w-[560px] rounded-3xl border border-white/10 bg-[oklch(0.17_0.03_200/0.95)] p-6 shadow-[0_40px_80px_-30px_oklch(0_0_0/0.7)] backdrop-blur-2xl"
                        style={{
                          gridTemplateColumns: `repeat(${item.mega.length}, minmax(0, 1fr))`,
                          display: "grid",
                          gap: "1.25rem",
                        }}
                      >
                        {item.mega.map((sec) => (
                          <div key={sec.heading}>
                            <div className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal">
                              {sec.heading}
                            </div>
                            <ul className="space-y-1">
                              {sec.items.map((it) => (
                                <li key={it.title}>
                                  <Link
                                    to={it.to}
                                    className="group flex items-start justify-between gap-3 rounded-xl px-3 py-2 text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                                  >
                                    <div className="min-w-0">
                                      <div className="text-sm font-medium">{it.title}</div>
                                      {it.desc && (
                                        <div className="text-xs text-white/50">{it.desc}</div>
                                      )}
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 shrink-0 translate-y-0.5 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton to="/contact" variant="primary">
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobile(true)}
            className="rounded-full border border-white/15 p-2 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-xl" onClick={() => setMobile(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-2 bg-[oklch(0.17_0.03_200)] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Wordmark tone="light" />
                <button
                  aria-label="Close menu"
                  onClick={() => setMobile(false)}
                  className="rounded-full border border-white/15 p-2 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-1 overflow-y-auto pr-1 pb-8">
                {nav.map((n, i) => {
                  const isExpanded = !!mobileExpanded[i];

                  if (!n.mega) {
                    return (
                      <Link
                        key={n.label}
                        to={n.to ?? "/"}
                        onClick={() => setMobile(false)}
                        className="rounded-2xl px-4 py-3 text-lg font-medium text-white/90 transition-colors hover:bg-white/5"
                      >
                        {n.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={n.label} className="rounded-2xl transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleMobileExpand(i)}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium text-white/90 transition-colors hover:bg-white/5 ${
                          isExpanded ? "bg-white/5 text-teal" : ""
                        }`}
                      >
                        <span>{n.label}</span>
                        <ChevronDown
                          className={`h-5 w-5 opacity-70 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-teal" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="my-1 ml-4 border-l border-teal/30 pl-4 pr-2 space-y-4 py-2">
                              {n.mega.map((sec) => (
                                <div key={sec.heading}>
                                  <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal">
                                    {sec.heading}
                                  </div>
                                  <ul className="space-y-1">
                                    {sec.items.map((it) => (
                                      <li key={it.title}>
                                        <Link
                                          to={it.to}
                                          onClick={() => setMobile(false)}
                                          className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                                        >
                                          <div>
                                            <div className="font-medium">{it.title}</div>
                                            {it.desc && (
                                              <div className="text-[0.7rem] text-white/50">{it.desc}</div>
                                            )}
                                          </div>
                                          <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:text-teal group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="mt-6 pt-4 border-t border-white/10">
                  <MagneticButton to="/contact" variant="primary" onClick={() => setMobile(false)}>
                    Get in Touch <ArrowUpRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
