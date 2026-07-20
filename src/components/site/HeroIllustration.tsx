import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * A pure-CSS/SVG 3D hero scene: orbital rings, rotating cubes and floating
 * platonic shapes with mouse parallax + continuous breathing. No external
 * image — the whole composition is rendered live in the DOM/GPU.
 */

function Cube({
  size,
  color = "rgba(56,224,208,0.85)",
  face = "rgba(56,224,208,0.18)",
  duration = 16,
  reverse = false,
}: {
  size: number;
  color?: string;
  face?: string;
  duration?: number;
  reverse?: boolean;
}) {
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
            boxShadow: `inset 0 0 30px ${color}`,
          }}
        />
      ))}
    </motion.div>
  );
}

export function HeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 70, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 70, damping: 20, mass: 0.6 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const tX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const tY = useTransform(sy, [-0.5, 0.5], [-14, 14]);

  const pAX = useTransform(sx, [-0.5, 0.5], [30, -30]);
  const pAY = useTransform(sy, [-0.5, 0.5], [22, -22]);
  const pBX = useTransform(sx, [-0.5, 0.5], [-36, 36]);
  const pBY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const pCX = useTransform(sx, [-0.5, 0.5], [24, -24]);
  const pCY = useTransform(sy, [-0.5, 0.5], [-28, 28]);
  const pDX = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const pDY = useTransform(sy, [-0.5, 0.5], [26, -26]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[640px]"
      style={{ perspective: 1400 }}
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
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Secondary purple bloom for depth */}
      <motion.div
        aria-hidden
        className="absolute inset-8 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(120,140,255,0.25), transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      />

      {/* 3D scene */}
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX, rotateY, x: tX, y: tY, transformStyle: "preserve-3d" }}
      >
        {/* Orbital rings */}
        <motion.div
          className="absolute inset-[8%] rounded-full border border-teal/25"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg)" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_20px_rgba(56,224,208,0.9)]" />
        </motion.div>

        <motion.div
          className="absolute inset-[18%] rounded-full border border-teal/20"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg) rotateZ(60deg)" }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-glow shadow-[0_0_16px_rgba(56,224,208,0.8)]" />
        </motion.div>

        <motion.div
          className="absolute inset-[3%] rounded-full border border-white/10"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(75deg) rotateZ(-30deg)" }}
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        />

        {/* Central floating primary cube */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ x: "-50%", y: "-50%", transformStyle: "preserve-3d" }}
          animate={{ y: ["-52%", "-48%", "-52%"] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <div style={{ transformStyle: "preserve-3d", transform: "rotateX(-20deg) rotateY(30deg)" }}>
            <Cube size={140} duration={22} />
          </div>
        </motion.div>

        {/* Orbiting secondary cubes / geometry */}
        <motion.div
          style={{ x: pAX, y: pAY }}
          className="absolute left-[8%] top-[14%]"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{ transformStyle: "preserve-3d", transform: "rotateX(-15deg) rotateY(25deg)" }}>
            <Cube size={70} duration={14} color="rgba(56,224,208,0.9)" />
          </div>
        </motion.div>

        <motion.div
          style={{ x: pBX, y: pBY }}
          className="absolute right-[6%] top-[22%]"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateY(-30deg)" }}>
            <Cube size={54} duration={18} reverse color="rgba(180,200,255,0.8)" face="rgba(180,200,255,0.12)" />
          </div>
        </motion.div>

        <motion.div
          style={{ x: pCX, y: pCY }}
          className="absolute bottom-[12%] left-[14%]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div style={{ transformStyle: "preserve-3d", transform: "rotateX(30deg) rotateY(15deg)" }}>
            <Cube size={44} duration={20} color="rgba(56,224,208,0.7)" />
          </div>
        </motion.div>

        <motion.div
          style={{ x: pDX, y: pDY }}
          className="absolute bottom-[16%] right-[12%]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div style={{ transformStyle: "preserve-3d", transform: "rotateX(-25deg) rotateY(45deg)" }}>
            <Cube size={62} duration={16} reverse />
          </div>
        </motion.div>

        {/* Tiny sparkle points */}
        <motion.div
          className="absolute right-[28%] top-[8%] h-2 w-2 rounded-full bg-teal shadow-[0_0_18px_rgba(56,224,208,0.9)]"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[30%] bottom-[8%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]"
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.div
          className="absolute left-[52%] top-[18%] h-1 w-1 rounded-full bg-teal-glow shadow-[0_0_10px_rgba(56,224,208,0.9)]"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </motion.div>
    </div>
  );
}
