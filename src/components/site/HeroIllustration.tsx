import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { BrainCircuit, Cloud, Code2, Cog, Database, Globe, LineChart, Palette, ShieldCheck, ShoppingBag, Smartphone, Workflow } from "lucide-react";

function Cube({
  size, color = "rgba(56,224,208,0.85)", face = "rgba(56,224,208,0.16)",
  duration = 20, reverse = false,
}: { size: number; color?: string; face?: string; duration?: number; reverse?: boolean }) {
  const half = size / 2;
  const faces = [
    { t: `translateZ(${half}px)` },
    { t: `rotateY(180deg) translateZ(${half}px)` },
    { t: `rotateY(90deg) translateZ(${half}px)` },
    { t: `rotateY(-90deg) translateZ(${half}px)` },
    { t: `rotateX(90deg) translateZ(${half}px)` },
    { t: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return (
    <motion.div
      style={{ width: size, height: size, transformStyle: "preserve-3d" }}
      animate={{ rotateX: reverse ? [0, -360] : [0, 360], rotateY: reverse ? [0, 360] : [0, -360] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {faces.map((f, i) => (
        <div
          key={i}
          className="absolute inset-0 border backdrop-blur-sm"
          style={{
            transform: f.t,
            borderColor: color,
            background: face,
            boxShadow: `inset 0 0 40px ${color}`,
          }}
        />
      ))}
    </motion.div>
  );
}

// The rotating service cards. Cards enter and exit on a schedule so only a
// subset is visible at any time, revealing a rotating tech ecosystem.
const serviceCards = [
  { icon: Code2,        label: "Software",     angle:  90, radius: 46 },
  { icon: Globe,        label: "Web",          angle: 135, radius: 48 },
  { icon: Smartphone,   label: "Mobile",       angle: 180, radius: 46 },
  { icon: BrainCircuit, label: "AI",           angle: 225, radius: 48 },
  { icon: Database,     label: "ERP",          angle: 270, radius: 46 },
  { icon: Workflow,     label: "CRM",          angle: 315, radius: 48 },
  { icon: Cloud,        label: "Cloud",        angle:   0, radius: 46 },
  { icon: Palette,      label: "UI / UX",      angle:  45, radius: 48 },
  { icon: Cog,          label: "Automation",   angle: 110, radius: 52 },
  { icon: ShieldCheck,  label: "Security",     angle: 250, radius: 52 },
  { icon: LineChart,    label: "Marketing",    angle: 200, radius: 52 },
  { icon: ShoppingBag,  label: "E-Commerce",   angle:  20, radius: 52 },
];

// Each card owns a slot on a rotating window so 4-5 are visible at a time.
const CYCLE = 12; // total seconds for full ecosystem cycle
const VISIBLE = 5;

export function HeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 60, damping: 22, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 60, damping: 22, mass: 0.7 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [14, -14]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const tX = useTransform(sx, [-0.5, 0.5], [-20, 20]);
  const tY = useTransform(sy, [-0.5, 0.5], [-16, 16]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[820px]"
      style={{ perspective: 1600 }}
    >
      {/* Ambient light pool */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(56,224,208,0.35), rgba(56,224,208,0.05) 45%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [0.94, 1.06, 0.94] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-10 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(120,140,255,0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Connecting node lines (SVG) */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
        <defs>
          <linearGradient id="line-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(56,224,208,0.5)" />
            <stop offset="100%" stopColor="rgba(56,224,208,0)" />
          </linearGradient>
        </defs>
        {serviceCards.map((c, i) => {
          const rad = (c.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * c.radius;
          const y = 50 + Math.sin(rad) * c.radius;
          return (
            <line key={i} x1="50" y1="50" x2={x} y2={y}
              stroke="url(#line-grad)" strokeWidth="0.15" strokeDasharray="0.6 0.6" />
          );
        })}
      </svg>

      {/* 3D scene */}
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX, rotateY, x: tX, y: tY, transformStyle: "preserve-3d" }}
      >
        {/* Orbital rings */}
        <motion.div
          className="absolute inset-[6%] rounded-full border border-teal/25"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg)" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_20px_rgba(56,224,208,0.9)]" />
        </motion.div>
        <motion.div
          className="absolute inset-[16%] rounded-full border border-teal/20"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg) rotateZ(60deg)" }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-glow shadow-[0_0_16px_rgba(56,224,208,0.8)]" />
        </motion.div>

        {/* Central floating cube composite */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ x: "-50%", y: "-50%", transformStyle: "preserve-3d" }}
          animate={{ y: ["-52%", "-48%", "-52%"] }}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        >
          <div style={{ transformStyle: "preserve-3d", transform: "rotateX(-22deg) rotateY(32deg)" }}>
            <Cube size={170} duration={24} />
          </div>
        </motion.div>

        {/* Secondary orbiters */}
        <div className="pointer-events-none absolute left-[12%] top-[14%]" style={{ transformStyle: "preserve-3d" }}>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <div style={{ transformStyle: "preserve-3d", transform: "rotateX(-15deg) rotateY(25deg)" }}>
              <Cube size={62} duration={16} />
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute right-[10%] top-[22%]" style={{ transformStyle: "preserve-3d" }}>
          <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <div style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateY(-30deg)" }}>
              <Cube size={48} duration={20} reverse color="rgba(180,200,255,0.8)" face="rgba(180,200,255,0.10)" />
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-[14%] left-[16%]" style={{ transformStyle: "preserve-3d" }}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
            <div style={{ transformStyle: "preserve-3d", transform: "rotateX(30deg) rotateY(15deg)" }}>
              <Cube size={40} duration={22} color="rgba(56,224,208,0.7)" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Service cards — placed absolutely, animated in/out in a rolling window */}
      <div className="pointer-events-none absolute inset-0">
        {serviceCards.map((c, i) => {
          const rad = (c.angle * Math.PI) / 180;
          const left = 50 + Math.cos(rad) * c.radius;
          const top = 50 + Math.sin(rad) * c.radius;
          // Rolling window: each card is visible for a slice of the cycle.
          const slot = i / serviceCards.length; // 0..1
          const window = VISIBLE / serviceCards.length;
          // times/values traverse a full cycle where card is visible over its slot window
          const times = [0, slot, slot + window * 0.15, slot + window * 0.85, slot + window, 1]
            .map((t) => Math.min(Math.max(t, 0), 1));
          const opacity = [0, 0, 1, 1, 0, 0];
          const scale = [0.85, 0.85, 1, 1, 0.85, 0.85];
          const y = [10, 10, 0, 0, -10, -10];
          const Icon = c.icon;
          return (
            <motion.div
              key={c.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ opacity, scale, y }}
              transition={{ duration: CYCLE, times, repeat: Infinity, ease: "easeInOut", delay: -CYCLE * slot }}
            >
              <div className="flex items-center gap-2 rounded-2xl border border-teal/30 bg-[oklch(0.15_0.025_200/0.85)] px-3 py-2 shadow-[0_20px_50px_-25px_rgba(56,224,208,0.6)] backdrop-blur-xl">
                <div className="grid h-6 w-6 place-items-center rounded-lg bg-teal/15 text-teal">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-widest text-white/90">
                  {c.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
