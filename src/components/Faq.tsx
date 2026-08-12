"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

export type FaqItem = { q: string; a: string };

/**
 * FAQ accordion + FAQPage structured data. The visible answers and the
 * schema text are the same strings — quotable by AI engines, honest to
 * readers.
 */
export default function Faq({
  id = "faq",
  eyebrow = "FAQ",
  titleTop = "Questions,",
  titleItalic = "answered straight.",
  items,
}: {
  id?: string;
  eyebrow?: string;
  titleTop?: string;
  titleItalic?: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <section
      id={id}
      className="relative py-24 md:py-36 mx-auto max-w-[1400px] px-5 md:px-10"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="grid grid-cols-12 gap-y-10 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-line-strong" />
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-5xl md:text-6xl mt-5 leading-[0.95]">
                {titleTop}
                <br />
                <span className="italic text-brass">{titleItalic}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 text-[14px] text-ink-mute max-w-xs">
                No hedging, no jargon. If your question isn&apos;t here, ask
                me directly — I reply within 24 hours.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="hairline-t">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.04}>
                  <div className="hairline-b">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left transition-colors hover:bg-paper-soft px-1 md:px-3"
                    >
                      <span className="display text-xl md:text-[26px] leading-snug">
                        {item.q}
                      </span>
                      <span
                        className={`grid place-items-center h-9 w-9 shrink-0 rounded-full hairline-strong transition-all duration-500 ${
                          isOpen
                            ? "bg-ink text-paper rotate-45 border-ink"
                            : "group-hover:border-ink"
                        }`}
                      >
                        <Plus size={16} strokeWidth={1.5} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-7 px-1 md:px-3 max-w-2xl text-[15px] leading-relaxed text-ink-mute">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
