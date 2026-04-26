import Reveal from "./Reveal";
import { Star } from "lucide-react";
import { GoogleG } from "./brand/GoogleLogo";

const reviews = [
  {
    body: "Manthar got our clinic into the 3-pack in eight weeks. We added two chairs to keep up with the calls. He explains everything, ships on time, and never over-promises.",
    name: "Dr. R. Almeida",
    role: "Dental Practice · Ontario",
    initials: "RA",
  },
  {
    body: "I've worked with three agencies. None of them moved the needle the way one quiet operator on Fiverr did. Manthar is the real deal — measured, sharp, almost surgical.",
    name: "Yousef A.",
    role: "Restaurant Group · Dubai",
    initials: "YA",
  },
  {
    body: "The reporting alone was worth it. Weekly geo-grids, plain-English notes on what's working. Our calls 4x'd inside one quarter.",
    name: "Priya N.",
    role: "Wellness Studio · London",
    initials: "PN",
  },
  {
    body: "Hired him for a single GBP fix. Ended up handing him our whole digital media stack. He thinks like an owner, not a freelancer.",
    name: "Marco T.",
    role: "Auto Detailing · Sydney",
    initials: "MT",
  },
];

export default function Testimonials() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-5 md:px-10"
    >
      <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-line-strong" />
              Proof — 05
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-5xl md:text-7xl mt-5 leading-[0.95]">
              Words from
              <br />
              <span className="italic text-brass">people who paid.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="flex items-center gap-3 hairline-strong px-4 py-2.5 bg-paper-soft rounded-full">
            <GoogleG size={16} />
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-g-yellow text-g-yellow"
                />
              ))}
            </div>
            <span className="text-[12px] tracking-wider text-ink">
              5.0 · 600+ reviews
            </span>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08}>
            <figure className="bg-paper p-7 md:p-12 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={13}
                        className="fill-g-yellow text-g-yellow"
                      />
                    ))}
                  </div>
                  <GoogleG size={14} />
                </div>
                <span className="display text-7xl md:text-8xl leading-none text-brass/40 block -mb-6">
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-lg md:text-xl leading-relaxed text-ink-soft">
                  {r.body}
                </blockquote>
              </div>
              <figcaption className="mt-9 flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-ink text-paper text-[12px] font-medium tracking-wider">
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm text-ink font-medium">{r.name}</p>
                  <p className="text-[12px] text-ink-mute mt-0.5">
                    {r.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
