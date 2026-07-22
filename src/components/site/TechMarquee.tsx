import { useState, type FC, type SVGProps } from "react";

type TechItem = {
  name: string;
  category: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  brandColor: string;
};

// Official SVG Icons for Tech Stack
const ReactIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" {...props}>
    <circle cx="0" cy="0" r="2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextjsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <circle cx="64" cy="64" r="64" fill="#000000" />
    <path
      d="M101.3 108.6L46.8 38H36v52h10V52.8l46.7 60.1a63.6 63.6 0 008.6-4.3z"
      fill="#FFFFFF"
    />
    <path d="M82 38h10v52H82z" fill="#FFFFFF" />
  </svg>
);

const TypeScriptIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path
      d="M71.5 61.6h17v8.5h-17v25.5h-9.5v-25.5h-17v-8.5h43.5zm31.3 17.5c-2.3-2.1-5.7-3.6-10.2-4.5-3.3-.6-5.4-1.3-6.4-2.1-1-.8-1.5-1.8-1.5-3.1 0-1.4.6-2.5 1.8-3.3 1.2-.8 3-1.2 5.3-1.2 2.3 0 4.2.4 5.7 1.3 1.5.9 2.5 2.1 3 3.7h8.8c-.6-3.8-2.4-6.8-5.4-9-3-2.2-7.1-3.3-12.2-3.3-5.2 0-9.4 1.1-12.6 3.4-3.2 2.3-4.8 5.4-4.8 9.5 0 3.1 1 5.6 3 7.5 2 1.9 5.3 3.3 9.9 4.3 3.7.8 6.1 1.6 7.2 2.4 1.1.8 1.7 1.9 1.7 3.3 0 1.5-.7 2.7-2 3.6-1.3.9-3.2 1.3-5.7 1.3-3 0-5.3-.6-7.1-1.8-1.8-1.2-2.9-2.9-3.4-5.2h-9c.6 4.6 2.6 8.2 6 10.7 3.4 2.5 8.1 3.7 14 3.7 5.6 0 10.1-1.2 13.5-3.6 3.4-2.4 5.1-5.7 5.1-9.9 0-3.4-1.1-6.1-3.3-8.2z"
      fill="#FFFFFF"
    />
  </svg>
);

const NodeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path
      d="M64 8l52 30v60L64 128 12 98V38L64 8z"
      fill="#339933"
    />
    <path
      d="M64 24L26 46v44l38 22 38-22V46L64 24zm20 54.5c0 6.5-5.5 10.5-12 10.5-6.5 0-11-3.5-12-8.5h8c.5 2 2 3.5 4 3.5 2 0 3.5-1 3.5-2.5 0-1.5-1-2-4-2.5l-3.5-.5c-5-1-8-3.5-8-8 0-6 5-10 11.5-10 6 0 10.5 3.5 11.5 8h-7.5c-.5-1.5-2-2.5-4-2.5-2 0-3 1-3 2 0 1 1 1.5 3.5 2l3.5.5c5.5 1 9 3.5 9 8z"
      fill="#FFFFFF"
    />
  </svg>
);

const PythonIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path
      d="M63 8c-20 0-18.7 8.7-18.7 8.7l.1 9h19v2.7H36c-8.7 0-16.3 5.3-16.3 16.3 0 11 5.3 15.6 15.6 15.6h5.3v-7.8c0-8.8 7.5-16.3 16.3-16.3h18.7v-2.7c0-8.7-7.4-15.5-12.6-15.5H63zm-5.3 5.3a2.7 2.7 0 110 5.4 2.7 2.7 0 010-5.4z"
      fill="#3776AB"
    />
    <path
      d="M65 120c20 0 18.7-8.7 18.7-8.7l-.1-9h-19v-2.7h27.4c8.7 0 16.3-5.3 16.3-16.3 0-11-5.3-15.6-15.6-15.6h-5.3v7.8c0 8.8-7.5 16.3-16.3 16.3H47.4v2.7c0 8.7 7.4 15.5 12.6 15.5H65zm5.3-5.3a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4z"
      fill="#FFD43B"
    />
  </svg>
);

const PostgresIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <circle cx="64" cy="64" r="56" fill="#336791" />
    <path
      d="M64 24c-18 0-32 12-32 28 0 10 6 19 15 24-2 6-8 14-15 18 10 0 19-4 24-9 3 1 6 1 8 1 18 0 32-12 32-28S82 24 64 24z"
      fill="#FFFFFF"
      opacity="0.9"
    />
  </svg>
);

const MongoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path
      d="M64 8c-2 0-3 1-3 3v47c-7 2-17 9-17 25 0 18 13 28 20 37 7-9 20-19 20-37 0-16-10-23-17-25V11c0-2-1-3-3-3z"
      fill="#47A248"
    />
    <path
      d="M64 8v112c.5 0 1 0 1.5-.5 7-9 18.5-19 18.5-36.5 0-16-10-23-17-25V11c0-2-1-3-3-3z"
      fill="#499D4A"
    />
  </svg>
);

const RedisIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="24" fill="#DC382D" />
    <path
      d="M32 44l32-16 32 16-32 16-32-16zm0 24l32 16 32-16-32-16-32 16zm0 24l32 16 32-16-32-16-32 16z"
      fill="#FFFFFF"
      opacity="0.9"
    />
  </svg>
);

const GraphQLIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path
      d="M64 16l42 24v48L64 112 22 88V40L64 16z"
      stroke="#E10098"
      strokeWidth="8"
      fill="none"
    />
    <circle cx="64" cy="16" r="10" fill="#E10098" />
    <circle cx="106" cy="40" r="10" fill="#E10098" />
    <circle cx="106" cy="88" r="10" fill="#E10098" />
    <circle cx="64" cy="112" r="10" fill="#E10098" />
    <circle cx="22" cy="88" r="10" fill="#E10098" />
    <circle cx="22" cy="40" r="10" fill="#E10098" />
  </svg>
);

const TailwindIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path
      d="M32 48c5-10 13-15 24-15 16 0 20 12 28 14 6 2 11 0 16-6-5 10-13 15-24 15-16 0-20-12-28-14-6-2-11 0-16 6zm-16 28c5-10 13-15 24-15 16 0 20 12 28 14 6 2 11 0 16-6-5 10-13 15-24 15-16 0-20-12-28-14-6-2-11 0-16 6z"
      fill="#06B6D4"
    />
  </svg>
);

const AWSIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="24" fill="#232F3E" />
    <path
      d="M36 76c12 9 28 14 44 14 16 0 28-4 36-10m-36 6l8 4-2-8"
      stroke="#FF9900"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="64" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="bold" fontFamily="sans-serif">aws</text>
  </svg>
);

const AzureIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path d="M38 98L68 28h22L54 104H38z" fill="#0089D6" />
    <path d="M24 88l30-46 16 26-28 32H24z" fill="#0072C6" />
  </svg>
);

const GCPIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path d="M42 42h44v44H42z" fill="#4285F4" opacity="0.2" />
    <path d="M64 24L28 44v40l36 20 36-20V44L64 24z" stroke="#4285F4" strokeWidth="8" fill="none" />
    <circle cx="64" cy="64" r="16" fill="#EA4335" />
  </svg>
);

const DockerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="24" fill="#1D63ED" />
    <path d="M24 74c0 18 16 26 40 26s40-8 40-26c-4 0-14 2-20-4-6 6-18 4-24-2-4 4-16 6-20 2-4 2-12 4-16 4z" fill="#FFFFFF" />
    <rect x="36" y="56" width="10" height="10" rx="2" fill="#FFFFFF" />
    <rect x="50" y="56" width="10" height="10" rx="2" fill="#FFFFFF" />
    <rect x="64" y="56" width="10" height="10" rx="2" fill="#FFFFFF" />
    <rect x="50" y="42" width="10" height="10" rx="2" fill="#FFFFFF" />
    <rect x="64" y="42" width="10" height="10" rx="2" fill="#FFFFFF" />
  </svg>
);

const K8sIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <circle cx="64" cy="64" r="56" fill="#326CE5" />
    <polygon points="64,24 98,44 98,84 64,104 30,84 30,44" fill="none" stroke="#FFFFFF" strokeWidth="6" />
    <circle cx="64" cy="64" r="12" fill="#FFFFFF" />
  </svg>
);

const TerraformIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="24" fill="#844FBA" />
    <path d="M34 32l26 15v30L34 62V32zm30 30l26 15v30L64 92V62zm0-30l26 15v30L64 62V32zm30 30l26 15v30L94 92V62z" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

const OpenAIIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="24" fill="#10A37F" />
    <path
      d="M88 64c0-13.3-10.7-24-24-24S40 50.7 40 64s10.7 24 24 24 24-10.7 24-24z"
      stroke="#FFFFFF"
      strokeWidth="8"
      fill="none"
    />
    <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
  </svg>
);

const FlutterIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <path d="M78 20L34 64l18 18L96 38H78z" fill="#42A5F5" />
    <path d="M52 82l26 26h18L64 76l-12 6z" fill="#0D47A1" />
    <path d="M78 56L52 82l12 12 32-38H78z" fill="#29B6F6" />
  </svg>
);

const StripeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 128 128" fill="none" {...props}>
    <rect width="128" height="128" rx="24" fill="#635BFF" />
    <path
      d="M86 52c0-6-5-9-14-9-12 0-24 5-30 9l-4-16c8-5 21-10 35-10 24 0 36 11 36 29 0 24-33 25-33 36 0 3 3 5 9 5 13 0 25-5 31-10l4 16c-8 6-22 11-37 11-24 0-37-11-37-29 0-25 34-26 34-36 0-3-2-4-7-4z"
      fill="#FFFFFF"
    />
  </svg>
);

const row1: TechItem[] = [
  { name: "React", category: "Frontend", Icon: ReactIcon, brandColor: "#61DAFB" },
  { name: "Next.js", category: "Framework", Icon: NextjsIcon, brandColor: "#000000" },
  { name: "TypeScript", category: "Language", Icon: TypeScriptIcon, brandColor: "#3178C6" },
  { name: "Node.js", category: "Runtime", Icon: NodeIcon, brandColor: "#339933" },
  { name: "Python", category: "AI / Data", Icon: PythonIcon, brandColor: "#3776AB" },
  { name: "PostgreSQL", category: "Database", Icon: PostgresIcon, brandColor: "#336791" },
  { name: "MongoDB", category: "NoSQL", Icon: MongoIcon, brandColor: "#47A248" },
  { name: "Redis", category: "Caching", Icon: RedisIcon, brandColor: "#DC382D" },
  { name: "GraphQL", category: "API", Icon: GraphQLIcon, brandColor: "#E10098" },
  { name: "Tailwind CSS", category: "Styling", Icon: TailwindIcon, brandColor: "#06B6D4" },
];

const row2: TechItem[] = [
  { name: "AWS", category: "Cloud", Icon: AWSIcon, brandColor: "#FF9900" },
  { name: "Azure", category: "Cloud", Icon: AzureIcon, brandColor: "#0089D6" },
  { name: "GCP", category: "Cloud", Icon: GCPIcon, brandColor: "#4285F4" },
  { name: "Docker", category: "Container", Icon: DockerIcon, brandColor: "#1D63ED" },
  { name: "Kubernetes", category: "Orchestration", Icon: K8sIcon, brandColor: "#326CE5" },
  { name: "Terraform", category: "IaC", Icon: TerraformIcon, brandColor: "#844FBA" },
  { name: "OpenAI", category: "AI Agents", Icon: OpenAIIcon, brandColor: "#10A37F" },
  { name: "Flutter", category: "Cross-Platform", Icon: FlutterIcon, brandColor: "#02569B" },
  { name: "React Native", category: "Mobile", Icon: ReactIcon, brandColor: "#61DAFB" },
  { name: "Stripe", category: "Fintech", Icon: StripeIcon, brandColor: "#635BFF" },
];

function Card({ t }: { t: TechItem }) {
  const Icon = t.Icon;
  return (
    <div className="group mx-3.5 flex min-w-[240px] items-center gap-3.5 rounded-2xl border border-border/80 bg-card/90 px-4 py-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_15px_30px_-15px_rgba(56,224,208,0.25)]">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface p-1.5 transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-7 w-7" />
      </div>
      <div className="min-w-0">
        <div className="font-display text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-teal">
          {t.name}
        </div>
        <div className="text-[0.68rem] font-medium uppercase tracking-wider text-muted-foreground">
          {t.category}
        </div>
      </div>
    </div>
  );
}

function Marquee({
  items,
  direction = "left",
  speed = 45,
}: {
  items: TechItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);
  const dup = [...items, ...items, ...items];
  return (
    <div
      className="group relative overflow-hidden py-1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-background to-transparent" />
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
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="space-y-6">
      <Marquee items={row1} direction="left" speed={45} />
      <Marquee items={row2} direction="right" speed={50} />
    </div>
  );
}
