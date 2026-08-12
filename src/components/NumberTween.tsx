"use client";

import { useEffect, useRef, useState } from "react";

/** Tweens to a new value whenever it changes. */
export default function NumberTween({
  value,
  decimals = 0,
  duration = 700,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const [n, setN] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const from = prev.current;
    prev.current = value;
    if (from === value) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(from + (value - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <>{decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString()}</>;
}
