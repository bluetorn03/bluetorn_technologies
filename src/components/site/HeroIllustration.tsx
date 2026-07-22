import { useState, useEffect, useRef } from "react";
import {
  BrainCircuit,
  Cloud,
  Database,
  Workflow,
  Code2,
  Smartphone,
  Zap,
  Boxes,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface FloatingCard {
  id: string;
  title: string;
  category: string;
  icon: typeof BrainCircuit;
  stats: string;
  tag: string;
  accent: string;
  depth: number; // 1 = back, 2 = mid, 3 = front
  floatClass: string;
  delay: string;
  posClass: string;
}

const techCards: FloatingCard[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    category: "LLM & RAG Agents",
    icon: BrainCircuit,
    stats: "99.4% Precision",
    tag: "Active",
    accent: "from-teal/20 to-teal/5 border-teal/40 text-teal",
    depth: 3,
    floatClass: "animate-float-slow",
    delay: "0s",
    posClass: "top-2 left-4 md:top-4 md:left-8",
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    category: "AWS / Azure / GCP",
    icon: Cloud,
    stats: "99.99% Uptime",
    tag: "Deployed",
    accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-400/30 text-cyan-400",
    depth: 2,
    floatClass: "animate-float-medium",
    delay: "1.2s",
    posClass: "top-14 right-2 md:top-12 md:right-6",
  },
  {
    id: "erp-systems",
    title: "ERP Systems",
    category: "Enterprise Suite",
    icon: Database,
    stats: "Full Automation",
    tag: "Verified",
    accent: "from-blue-500/20 to-blue-500/5 border-blue-400/30 text-blue-400",
    depth: 1,
    floatClass: "animate-float-fast",
    delay: "0.5s",
    posClass: "top-44 left-0 md:top-48 md:-left-4",
  },
  {
    id: "crm-solutions",
    title: "CRM Solutions",
    category: "Sales & Pipelines",
    icon: Workflow,
    stats: "3.2x Lead Velocity",
    tag: "Live",
    accent: "from-teal/20 to-teal/5 border-teal/40 text-teal",
    depth: 3,
    floatClass: "animate-float-slow",
    delay: "2.1s",
    posClass: "top-56 right-4 md:top-60 md:right-2",
  },
  {
    id: "web-dev",
    title: "Web Development",
    category: "Next.js Engineering",
    icon: Code2,
    stats: "< 0.4s Latency",
    tag: "Optimized",
    accent: "from-emerald-500/20 to-emerald-500/5 border-emerald-400/30 text-emerald-400",
    depth: 2,
    floatClass: "animate-float-medium",
    delay: "1.8s",
    posClass: "bottom-24 left-6 md:bottom-28 md:left-10",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    category: "iOS & Android",
    icon: Smartphone,
    stats: "60 FPS Native UX",
    tag: "Native",
    accent: "from-sky-500/20 to-sky-500/5 border-sky-400/30 text-sky-400",
    depth: 3,
    floatClass: "animate-float-slow",
    delay: "0.8s",
    posClass: "bottom-8 right-8 md:bottom-10 md:right-12",
  },
  {
    id: "api-integration",
    title: "API Integration",
    category: "Microservices",
    icon: Zap,
    stats: "Real-time Sync",
    tag: "Connected",
    accent: "from-teal/20 to-teal/5 border-teal/40 text-teal",
    depth: 1,
    floatClass: "animate-float-fast",
    delay: "2.5s",
    posClass: "-top-6 right-20 md:-top-4 md:right-28",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    category: "Zero-Latency Workflows",
    icon: Boxes,
    stats: "100% Reliability",
    tag: "Scalable",
    accent: "from-indigo-500/20 to-indigo-500/5 border-indigo-400/30 text-indigo-400",
    depth: 2,
    floatClass: "animate-float-medium",
    delay: "3.0s",
    posClass: "bottom-0 left-20 md:-bottom-2 md:left-24",
  },
];

export function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Normalized offset between -1 and 1
      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);
      setMousePos({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-[580px] w-full items-center justify-center max-w-[620px] lg:max-w-[680px] xl:max-w-[750px] [perspective:1200px]"
    >
      {/* Background Glow Spheres */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]"
      />

      {/* Floating Glassmorphism Technology Cards Ecosystem */}
      <div className="relative h-full w-full">
        {techCards.map((card) => {
          const Icon = card.icon;
          // Mouse parallax multiplier based on depth (back cards move less, front cards move more)
          const parallaxX = mousePos.x * card.depth * 12;
          const parallaxY = mousePos.y * card.depth * 12;

          // Scale and zIndex based on depth level
          const scale = card.depth === 3 ? 1 : card.depth === 2 ? 0.92 : 0.84;
          const zIndex = card.depth * 10;
          const opacity = card.depth === 3 ? "opacity-100" : card.depth === 2 ? "opacity-90" : "opacity-75";

          return (
            <div
              key={card.id}
              className={`absolute ${card.posClass} ${card.floatClass} transition-transform duration-300 ease-out ${opacity}`}
              style={{
                animationDelay: card.delay,
                zIndex: zIndex,
                transform: `translate3d(${parallaxX}px, ${parallaxY}px, ${card.depth * 20}px) scale(${scale})`,
              }}
            >
              <div
                className={`group relative flex items-center gap-3.5 rounded-2xl border bg-gradient-to-br p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-teal/60 hover:shadow-[0_25px_60px_-15px_rgba(56,224,208,0.4)] ${card.accent}`}
              >
                {/* Glow outline accent */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-teal/20 via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon wrapper */}
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-teal shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5.5 w-5.5" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col pr-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-white group-hover:text-teal-glow transition-colors">
                      {card.title}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-teal/30 bg-teal/15 px-2 py-0.5 text-[0.62rem] font-medium text-teal">
                      <Sparkles className="h-2.5 w-2.5" />
                      {card.tag}
                    </span>
                  </div>
                  <span className="text-[0.72rem] font-medium text-white/60">
                    {card.category}
                  </span>
                  <div className="mt-1 flex items-center gap-1 text-[0.68rem] text-teal-glow">
                    <CheckCircle2 className="h-3 w-3 text-teal" />
                    <span>{card.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
