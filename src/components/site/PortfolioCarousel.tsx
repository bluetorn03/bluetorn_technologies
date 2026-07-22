import { useState } from "react";
import { motion } from "motion/react";

export type PortfolioSlide = { img: string; title: string; tag: string };

/**
 * Cover-flow style 3D rotating carousel. Cards fan out around a central card
 * with soft reflections and depth. Click a card to bring it to center.
 */
export function PortfolioCarousel({ slides }: { slides: PortfolioSlide[] }) {
  const [active, setActive] = useState(0);
  const n = slides.length;

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-6xl [perspective:1600px] md:h-[560px]">
      <div className="relative h-full w-full [transform-style:preserve-3d]">
        {slides.map((s, i) => {
          // shortest offset around the ring
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const abs = Math.abs(offset);
          const hidden = abs > 3;
          const x = offset * 200;
          const rotY = offset * -22;
          const z = -abs * 140;
          const scale = 1 - abs * 0.08;
          const opacity = hidden ? 0 : abs === 0 ? 1 : 0.85 - abs * 0.15;
          return (
            <motion.button
              key={s.title + i}
              type="button"
              onClick={() => setActive(i)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform focus:outline-none"
              style={{ zIndex: 100 - abs }}
              animate={{ x, rotateY: rotY, z, scale, opacity }}
              transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.9 }}
            >
              <div className="relative">
                <div className="h-[320px] w-[260px] overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_40px_80px_-30px_oklch(0_0_0/0.5)] md:h-[380px] md:w-[300px]">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-ink">
                    {s.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5">
                    <div className="font-display text-lg font-semibold text-white">{s.title}</div>
                  </div>
                </div>
                {/* Reflection */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 top-full h-24 overflow-hidden rounded-b-3xl"
                  style={{
                    background: `linear-gradient(to bottom, oklch(1 0 0 / 0.14), transparent 80%)`,
                    transform: "scaleY(-1)",
                    transformOrigin: "top",
                    maskImage: "linear-gradient(to bottom, black, transparent 70%)",
                  }}
                >
                  <img src={s.img} alt="" aria-hidden className="h-full w-full object-cover opacity-30" />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-teal" : "w-2 bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
