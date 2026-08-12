"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Brass line that draws itself down the left edge as the steps scroll by. */
export default function ProcessRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative">
      <motion.span
        style={{ scaleY, transformOrigin: "50% 0%" }}
        className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brass via-brass to-brass-soft z-10"
        aria-hidden
      />
      {children}
    </div>
  );
}
