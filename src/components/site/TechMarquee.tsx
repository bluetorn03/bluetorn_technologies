import { useState } from "react";

type Tech = { name: string; category: string; letter: string; color: string };

const row1: Tech[] = [
  { name: "React", category: "Frontend", letter: "R", color: "#61DAFB" },
  { name: "Next.js", category: "Framework", letter: "N", color: "#000000" },
  { name: "TypeScript", category: "Language", letter: "TS", color: "#3178C6" },
  { name: "Node.js", category: "Runtime", letter: "N", color: "#5FA04E" },
  { name: "Python", category: "Language", letter: "Py", color: "#3776AB" },
  { name: "PostgreSQL", category: "Database", letter: "PG", color: "#4169E1" },
  { name: "MongoDB", category: "Database", letter: "M", color: "#47A248" },
  { name: "Redis", category: "Cache", letter: "R", color: "#DC382D" },
  { name: "GraphQL", category: "API", letter: "GQ", color: "#E10098" },
  { name: "Tailwind", category: "Styling", letter: "TW", color: "#06B6D4" },
];

const row2: Tech[] = [
  { name: "AWS", category: "Cloud", letter: "AW", color: "#FF9900" },
  { name: "Azure", category: "Cloud", letter: "AZ", color: "#0078D4" },
  { name: "GCP", category: "Cloud", letter: "GC", color: "#4285F4" },
  { name: "Docker", category: "Container", letter: "D", color: "#2496ED" },
  { name: "Kubernetes", category: "Orchestration", letter: "K8", color: "#326CE5" },
  { name: "Terraform", category: "IaC", letter: "TF", color: "#7B42BC" },
  { name: "OpenAI", category: "AI", letter: "AI", color: "#10A37F" },
  { name: "Flutter", category: "Mobile", letter: "Fl", color: "#02569B" },
  { name: "React Native", category: "Mobile", letter: "RN", color: "#61DAFB" },
  { name: "Stripe", category: "Payments", letter: "S", color: "#635BFF" },
];

function Card({ t }: { t: Tech }) {
  return (
    <div className="mx-3 flex min-w-[220px] items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_10px_30px_-20px_oklch(0.19_0.03_200/0.3)] transition-transform duration-300 hover:-translate-y-0.5">
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-xs font-bold text-white"
        style={{ backgroundColor: t.color }}
        aria-hidden
      >
        {t.letter}
      </div>
      <div className="min-w-0">
        <div className="font-display text-sm font-semibold leading-tight">{t.name}</div>
        <div className="text-[0.68rem] uppercase tracking-widest text-muted-foreground">{t.category}</div>
      </div>
    </div>
  );
}

function Marquee({ items, direction = "left", speed = 40 }: { items: Tech[]; direction?: "left" | "right"; speed?: number }) {
  const [paused, setPaused] = useState(false);
  const dup = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {dup.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="space-y-5">
      <Marquee items={row1} direction="left" speed={55} />
      <Marquee items={row2} direction="right" speed={65} />
    </div>
  );
}
