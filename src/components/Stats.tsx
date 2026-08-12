"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NumberTween from "./NumberTween";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption?: string;
  accent?: string;
};

const stats: Stat[] = [
  {
    value: 600,
    suffix: "+",
    label: "Engagements delivered",
    caption: "Across Fiverr & private clients",
  },
  {
    value: 5.0,
    label: "Average rating",
    caption: "Maintained for 5 consecutive years",
    accent: "text-g-yellow",
  },
  {
    value: 312,
    suffix: "%",
    label: "Avg. map-pack lift",
    caption: "In qualified searches, 60-day window",
    accent: "text-g-green",
  },
  {
    value: 47,
    suffix: "+",
    label: "Industries served",
    caption: "Local, e-com, B2B, hospitality",
  },
];

function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  const isFloat = !Number.isInteger(to);
  return (
    <span ref={ref}>
      {prefix}
      {isFloat ? n.toFixed(1) : Math.round(n).toLocaleString()}
      {suffix}
    </span>
  );
}

/** Desktop: dark pinned scene — one giant stat per scroll segment. */
function PinnedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStage(Math.min(stats.length - 1, Math.floor(v * stats.length)));
  });

  const s = stats[stage];
  const isFloat = !Number.isInteger(s.value);

  return (
    <div ref={ref} className="relative h-[380vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-ink text-paper flex flex-col items-center justify-center">
        {/* Faint grid backdrop */}
        <div className="absolute inset-0 opacity-[0.06] grid-dots invert" />

        <p className="eyebrow !text-paper/50 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-paper/30" />
          By the numbers
          <span className="inline-block h-px w-8 bg-paper/30" />
        </p>

        <div className="relative mt-4 flex items-center justify-center min-h-[24vw]">
          <AnimatePresence mode="wait">
            <motion.p
              key={stage}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -60, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="display leading-none text-[20vw] select-none"
            >
              {s.prefix}
              <NumberTween
                value={s.value}
                decimals={isFloat ? 1 : 0}
                duration={600}
              />
              <span className={s.accent ?? "text-brass-shine"}>
                {s.suffix ?? ""}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${stage}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-lg tracking-wide">{s.label}</p>
            {s.caption && (
              <p className="mt-1.5 text-[13px] text-paper/50">{s.caption}</p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stage dots */}
        <div className="absolute bottom-10 flex items-center gap-2.5">
          {stats.map((st, i) => (
            <span
              key={st.label}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === stage ? "w-8 bg-brass" : "w-1.5 bg-paper/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <>
      {/* Desktop: cinematic pinned takeover */}
      <section className="hidden md:block">
        <PinnedStats />
      </section>

      {/* Mobile: fast, light grid */}
      <section className="md:hidden relative py-20 mx-auto max-w-[1400px] px-5 hairline-t hairline-b">
        <div className="grid grid-cols-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`p-6 ${i % 2 === 0 ? "border-r border-line" : ""} ${
                i < 2 ? "border-b border-line" : ""
              }`}
            >
              <p
                className={`display text-5xl leading-none ${
                  s.accent ?? "text-shimmer"
                }`}
              >
                <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="mt-4 text-sm tracking-wide text-ink">{s.label}</p>
              {s.caption && (
                <p className="mt-1.5 text-[12px] text-ink-mute leading-snug">
                  {s.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
