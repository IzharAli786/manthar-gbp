import Reveal from "./Reveal";
import { ArrowUpRight, MapPin, Star, Megaphone, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  n: string;
  icon: LucideIcon;
  title: string;
  sub: string;
  body: string;
  chips: string[];
};

const services: Service[] = [
  {
    n: "01",
    icon: MapPin,
    title: "Google Business Profile",
    sub: "Map-pack engineering",
    body: "Full-stack GBP optimization — geo-grid audits, category architecture, photo & post cadence, Q&A seeding, service-area expansion, and ranking diagnostics. Built to outrank, not to tick boxes.",
    chips: ["Geo-grid audit", "Citations", "Posts & Media", "Schema"],
  },
  {
    n: "02",
    icon: Star,
    title: "Reputation Systems",
    sub: "Review velocity, on autopilot",
    body: "Review acquisition funnels, sentiment monitoring, response frameworks, and recovery protocols. Turn happy customers into compounding social proof — measured in stars, not hopes.",
    chips: ["Funnels", "Templates", "Recovery", "Monitoring"],
  },
  {
    n: "03",
    icon: Megaphone,
    title: "Digital Media Strategy",
    sub: "Content that converts",
    body: "Brand operating systems for creators and local businesses — content pillars, weekly cadence, repurposing engines, and platform-native creative direction. From blank slate to brand machine.",
    chips: ["Strategy", "Content", "Cadence", "Direction"],
  },
  {
    n: "04",
    icon: Target,
    title: "Paid & Performance",
    sub: "Acquisition without the bloat",
    body: "Lean Meta and Google campaign architectures, creative testing rigs, and conversion-tracked landing systems. Spend less, learn faster, scale only what works.",
    chips: ["Meta Ads", "Google Ads", "Tracking", "CRO"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-5 md:px-10"
    >
      <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-line-strong" />
              Services — 03
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-5xl md:text-7xl mt-5 leading-[0.95]">
              Four disciplines.
              <br />
              <span className="italic text-brass">One operator.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="text-sm text-ink-mute max-w-xs">
            Each engagement is scoped, measured, and reported weekly. No
            agency theater, no junior hand-offs.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 hairline-t hairline">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.n} delay={i * 0.08}>
              <article
                className={`group relative h-full p-8 md:p-12 transition-colors duration-500 hover:bg-ink hover:text-paper border-b border-line md:border-b-0 last:border-b-0 ${
                  i % 2 === 0 ? "md:border-r md:border-line" : ""
                } ${i < 2 ? "md:border-b md:border-line" : ""}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center h-10 w-10 rounded-full hairline-strong group-hover:border-paper/30 transition-colors bg-paper-soft group-hover:bg-paper/10">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-ink group-hover:text-paper transition-colors"
                      />
                    </span>
                    <span className="eyebrow !text-[11px] group-hover:text-paper/60 transition-colors">
                      {s.n} / 04
                    </span>
                  </div>
                  <ArrowUpRight
                    size={28}
                    strokeWidth={1.25}
                    className="opacity-30 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <h3 className="display text-4xl md:text-5xl leading-[0.95]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm tracking-wide text-ink-mute italic group-hover:text-paper/60 transition-colors">
                  {s.sub}
                </p>

                <p className="mt-7 text-[15px] leading-relaxed text-ink-soft group-hover:text-paper/80 transition-colors max-w-md">
                  {s.body}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <li
                      key={c}
                      className="text-[11px] uppercase tracking-[0.18em] hairline-strong group-hover:border-paper/25 px-3 py-1.5 transition-colors"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
