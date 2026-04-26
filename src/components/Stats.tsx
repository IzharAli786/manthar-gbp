"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 mx-auto max-w-[1400px] px-5 md:px-10 hairline-t hairline-b">
      <div className="grid grid-cols-2 md:grid-cols-4">
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
            className={`p-6 md:p-10 ${
              i < stats.length - 1 ? "md:border-r md:border-line" : ""
            } ${
              i % 2 === 0 ? "border-r border-line md:border-r" : ""
            } ${i < 2 ? "border-b border-line md:border-b-0" : ""}`}
          >
            <p
              className={`display text-5xl md:text-7xl leading-none ${
                s.accent ?? "text-shimmer"
              }`}
            >
              <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
            </p>
            <p className="mt-4 md:mt-6 text-sm tracking-wide text-ink">
              {s.label}
            </p>
            {s.caption && (
              <p className="mt-1.5 text-[12px] text-ink-mute leading-snug">
                {s.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
