"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { INTRO_SEEN_KEY } from "@/lib/intro";

/**
 * Rank-counter intro: #9 → #1, tagline beat, curtain wipe.
 * Runs once per session. An inline <head> script sets
 * `data-intro="1"` on <html> (skipping repeat visits and
 * prefers-reduced-motion) so the overlay is visible before paint
 * with zero hydration flash — CSS hides it otherwise.
 */

const RANKS = [9, 7, 4, 2, 1];

/** Extra delay for entrance animations while the intro plays. */
export function useIntroOffset(): number {
  const [off] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.dataset.intro === "1"
      ? 1.2
      : 0
  );
  return off;
}

export default function Preloader() {
  const [step, setStep] = useState(0); // index into RANKS
  const [phase, setPhase] = useState<"count" | "tagline" | "wipe" | "done">(
    "count"
  );

  useEffect(() => {
    if (document.documentElement.dataset.intro !== "1") {
      // Not running this session — drop the (CSS-hidden) shell from the DOM
      const t = setTimeout(() => setPhase("done"), 0);
      return () => clearTimeout(t);
    }

    // Mobile gets a tighter cut of the same sequence
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const tick = mobile ? 110 : 150;
    const holdTagline = mobile ? 500 : 750;

    const el = document.documentElement;
    const prevOverflow = el.style.overflow;
    el.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    RANKS.forEach((_, i) => {
      if (i === 0) return;
      timers.push(setTimeout(() => setStep(i), i * tick));
    });
    const tCount = RANKS.length * tick;
    timers.push(setTimeout(() => setPhase("tagline"), tCount));
    timers.push(setTimeout(() => setPhase("wipe"), tCount + holdTagline));

    return () => {
      timers.forEach(clearTimeout);
      el.style.overflow = prevOverflow;
    };
  }, []);

  function finish() {
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {
      /* private mode */
    }
    delete document.documentElement.dataset.intro;
    document.documentElement.style.overflow = "";
    setPhase("done");
  }

  if (phase === "done") return null;

  const rank = RANKS[step];
  const progress = (step + 1) / RANKS.length;

  return (
    <motion.div
      className="preloader fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink text-paper"
      initial={false}
      animate={phase === "wipe" ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      onAnimationComplete={() => {
        if (phase === "wipe") finish();
      }}
      aria-hidden
    >
      <p className="eyebrow !text-paper/50 mb-6 md:mb-8">
        Manthar Ali — GBP Studio
      </p>

      <div className="relative flex items-baseline justify-center">
        <span className="display text-[26vw] md:text-[13vw] leading-none text-brass-shine select-none">
          #
        </span>
        <motion.span
          key={rank}
          initial={rank === 1 ? { scale: 0.86, opacity: 0.6 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
          className="display text-[26vw] md:text-[13vw] leading-none select-none tabular-nums"
        >
          {rank}
        </motion.span>
      </div>

      <div className="mt-8 md:mt-10 h-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={
            phase !== "count" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12px] md:text-[13px] tracking-[0.3em] uppercase text-paper/70"
        >
          First place. That&apos;s the job.
        </motion.p>
      </div>

      {/* Progress hairline */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 md:w-56 h-px bg-paper/15 overflow-hidden">
        <motion.div
          animate={{ scaleX: progress }}
          initial={{ scaleX: 1 / RANKS.length }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "0% 50%" }}
          className="h-full w-full bg-brass"
        />
      </div>
    </motion.div>
  );
}
