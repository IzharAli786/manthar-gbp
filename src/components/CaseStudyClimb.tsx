"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Star } from "lucide-react";
import { GoogleMapsWordmark } from "./brand/GoogleLogo";
import NumberTween from "./NumberTween";
import Reveal from "./Reveal";

/*
 * PLACEHOLDER DATA — illustrative sample scenario, labeled as such
 * on-page. Swap for a real client case study when numbers arrive,
 * then remove the "Sample data" chips below.
 */

type Row = { id: string; name: string; rank: number; you?: boolean };

type Stage = {
  week: string;
  title: string;
  body: string;
  youRank: number;
  rows: Row[];
  reviews: number;
  rating: number;
  calls: number;
  /** 0 = red, 1 = amber, 2 = green for the 5×5 geo-grid */
  grid: number[];
};

const YOU = "Summit Heating & Air";

const STAGES: Stage[] = [
  {
    week: "Week 0",
    title: "The audit",
    body: "Buried at #7 — invisible past the scroll. Wrong categories, thin citations, review velocity flat. The geo-grid is red in every cell that matters.",
    youRank: 7,
    rows: [
      { id: "a", name: "ProAir Comfort", rank: 1 },
      { id: "b", name: "CityWide HVAC", rank: 2 },
      { id: "c", name: "Metro Climate Co.", rank: 3 },
      { id: "you", name: YOU, rank: 7, you: true },
    ],
    reviews: 41,
    rating: 4.3,
    calls: 17,
    grid: [0,0,0,1,0, 0,0,1,0,0, 0,1,0,0,0, 0,0,0,0,1, 1,0,0,0,0],
  },
  {
    week: "Week 3",
    title: "The climb",
    body: "Categories rebuilt. Citations cleaned and multiplied. Review velocity switched on. The grid starts turning green — and the phone notices first.",
    youRank: 3,
    rows: [
      { id: "a", name: "ProAir Comfort", rank: 1 },
      { id: "b", name: "CityWide HVAC", rank: 2 },
      { id: "you", name: YOU, rank: 3, you: true },
      { id: "c", name: "Metro Climate Co.", rank: 4 },
    ],
    reviews: 118,
    rating: 4.7,
    calls: 34,
    grid: [1,1,2,1,0, 1,2,2,1,1, 2,2,1,1,0, 1,1,2,2,1, 0,1,1,2,2],
  },
  {
    week: "Week 6",
    title: "The takeover",
    body: "#1 in the map pack across the service area. Calls up 241%. The competitors who out-ranked you are now studying your profile.",
    youRank: 1,
    rows: [
      { id: "you", name: YOU, rank: 1, you: true },
      { id: "a", name: "ProAir Comfort", rank: 2 },
      { id: "b", name: "CityWide HVAC", rank: 3 },
      { id: "c", name: "Metro Climate Co.", rank: 4 },
    ],
    reviews: 263,
    rating: 4.9,
    calls: 58,
    grid: [2,2,2,2,1, 2,2,2,2,2, 2,2,2,2,2, 1,2,2,2,2, 2,2,1,2,2],
  },
];

const GRID_COLOR = ["bg-g-red/70", "bg-g-yellow", "bg-g-green"];

function SampleChip({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-ink-mute hairline-strong bg-paper-soft px-2.5 py-1 rounded-full ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-g-yellow" />
      Sample data · illustrative
    </span>
  );
}

/** The Maps-style card at a given stage. */
function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className="card relative w-full max-w-[440px] p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <GoogleMapsWordmark size={13} />
        <span className="text-[11px] text-ink-mute">
          HVAC · Austin, TX
        </span>
      </div>

      {/* Listings — layout animations handle the reorder */}
      <ul className="space-y-2.5">
        {stage.rows.map((r) => (
          <motion.li
            key={r.id}
            layout
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md ${
              r.you ? "bg-ink text-paper" : "hairline"
            }`}
          >
            <span
              className={`grid place-items-center h-6 w-6 rounded-full text-[11px] font-medium shrink-0 ${
                r.you ? "bg-brass text-ink" : "bg-ink/8 text-ink"
              }`}
            >
              {r.rank}
            </span>
            <p className="flex-1 min-w-0 text-[13px] font-medium truncate">
              {r.name}
              {r.you && (
                <span className="ml-2 text-[10px] uppercase tracking-wider text-brass">
                  You
                </span>
              )}
            </p>
            {r.you && r.rank > 4 && (
              <span className="text-[10px] uppercase tracking-wider text-g-red shrink-0">
                Off the pack
              </span>
            )}
            {r.you && r.rank === 1 && (
              <span className="text-[11px] text-g-green font-medium shrink-0">
                #1
              </span>
            )}
          </motion.li>
        ))}
      </ul>

      {/* Metrics */}
      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        <div className="hairline rounded-md py-3">
          <p className="display text-2xl md:text-3xl leading-none">
            <NumberTween value={stage.reviews} />
          </p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-mute">
            Reviews
          </p>
        </div>
        <div className="hairline rounded-md py-3">
          <p className="display text-2xl md:text-3xl leading-none inline-flex items-center gap-1.5">
            <Star size={14} className="fill-g-yellow text-g-yellow" />
            <NumberTween value={stage.rating} decimals={1} />
          </p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-mute">
            Rating
          </p>
        </div>
        <div className="hairline rounded-md py-3">
          <p className="display text-2xl md:text-3xl leading-none inline-flex items-center gap-1.5">
            <Phone size={13} className="text-g-green" />
            <NumberTween value={stage.calls} />
          </p>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-mute">
            Calls / wk
          </p>
        </div>
      </div>

      {/* Geo-grid */}
      <div className="mt-5 pt-4 hairline-t flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-ink-mute mb-2">
            Geo-grid · 5×5
          </p>
          <div className="grid grid-cols-5 gap-1.5 w-max">
            {stage.grid.map((g, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-700 ${GRID_COLOR[g]}`}
              />
            ))}
          </div>
        </div>
        <SampleChip />
      </div>
    </div>
  );
}

/** Desktop: pinned scene, scroll drives the stages. */
function PinnedScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStage(Math.min(STAGES.length - 1, Math.floor(v * STAGES.length)));
  });

  const s = STAGES[stage];

  return (
    <div ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-10">
          <div className="grid grid-cols-12 gap-10 items-center">
            {/* Narrative */}
            <div className="col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="eyebrow flex items-center gap-3">
                    <span className="inline-block h-px w-8 bg-line-strong" />
                    {s.week}
                  </p>
                  <div className="mt-5 flex items-end gap-6">
                    <span className="display text-[9vw] leading-[0.85] text-brass-shine select-none">
                      #{s.youRank}
                    </span>
                    <h3 className="display italic text-4xl lg:text-5xl pb-2">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-6 max-w-md text-[15px] lg:text-[16px] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stage dots */}
              <div className="mt-9 flex items-center gap-2.5">
                {STAGES.map((st, i) => (
                  <span
                    key={st.week}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === stage ? "w-8 bg-brass" : "w-1.5 bg-ink/20"
                    }`}
                  />
                ))}
                <span className="ml-3 text-[11px] tracking-[0.2em] uppercase text-ink-mute">
                  Scroll to advance
                </span>
              </div>
            </div>

            {/* Card */}
            <div className="col-span-6 flex justify-end">
              <StageCard stage={s} />
            </div>
          </div>
        </div>

        {/* Scene progress */}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brass/60"
        />
      </div>
    </div>
  );
}

export default function CaseStudyClimb() {
  return (
    <section id="case-study" className="relative hairline-t bg-paper-deep/40">
      {/* Heading */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-24 md:pt-36 pb-4 md:pb-0">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-line-strong" />
            Case Study — 03
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl mt-5 leading-[0.95] max-w-3xl">
            From invisible
            <br />
            <span className="italic text-brass">to inevitable.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <p className="text-[14px] text-ink-mute max-w-md">
              A six-week engagement, compressed into one scroll.
            </p>
            <SampleChip />
          </div>
        </Reveal>
      </div>

      {/* Desktop: pinned scroll scene */}
      <div className="hidden md:block">
        <PinnedScene />
      </div>

      {/* Mobile: stacked stages + final card */}
      <div className="md:hidden px-5 pb-20 pt-8 space-y-8">
        {STAGES.map((s, i) => (
          <Reveal key={s.week} delay={i * 0.05}>
            <div className="hairline-t pt-6 flex gap-5">
              <span className="display text-4xl text-brass-shine shrink-0 leading-none">
                #{s.youRank}
              </span>
              <div>
                <p className="eyebrow !text-[10px]">{s.week}</p>
                <h3 className="display italic text-2xl mt-1">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-mute">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.1}>
          <div className="pt-2 flex justify-center">
            <StageCard stage={STAGES[STAGES.length - 1]} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
