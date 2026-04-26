"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections: { id: string; label: string; n: string }[] = [
  { id: "top", label: "Manthar Ali", n: "01" },
  { id: "about", label: "About", n: "02" },
  { id: "services", label: "Services", n: "03" },
  { id: "process", label: "Process", n: "04" },
  { id: "work", label: "Proof", n: "05" },
  { id: "contact", label: "Contact", n: "06" },
];

export default function SectionIndicator() {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id;
          const found = sections.find((s) => s.id === id);
          if (found) setActive(found);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="hidden md:flex fixed left-5 lg:left-8 bottom-7 z-40 items-center gap-3 pointer-events-none"
      aria-hidden
    >
      <span className="grid place-items-center h-9 w-9 rounded-full bg-ink/90 text-paper font-mono text-[11px] tracking-wide backdrop-blur">
        {active.n}
      </span>
      <div className="hairline-strong bg-paper/85 backdrop-blur px-3.5 py-2 rounded-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={active.id}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] tracking-[0.22em] uppercase text-ink inline-block"
          >
            {active.label}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
