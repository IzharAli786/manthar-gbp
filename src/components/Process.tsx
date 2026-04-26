import Reveal from "./Reveal";

const steps = [
  {
    n: "I",
    title: "Diagnose",
    body: "Geo-grid scan, competitor decomposition, profile health audit. We find the exact reasons you're being out-ranked — and the levers to flip it.",
  },
  {
    n: "II",
    title: "Architect",
    body: "Category strategy, schema, citation map, review velocity plan, content cadence. A single document. Signed off before a finger touches the dashboard.",
  },
  {
    n: "III",
    title: "Execute",
    body: "Weekly cycles. Posts, photos, Q&A, citations, reviews, geotags — shipped on rhythm. Every action logged. Every metric tracked.",
  },
  {
    n: "IV",
    title: "Compound",
    body: "Once you're ranking, we double down: content systems, paid amplification, brand operating system. Local dominance is a moat, not a milestone.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-5 md:px-10"
    >
      <div className="mb-14 md:mb-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-line-strong" />
            Process — 04
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-5xl md:text-7xl mt-5 leading-[0.95] max-w-3xl">
            How a project
            <br />
            <span className="italic text-brass">actually unfolds.</span>
          </h2>
        </Reveal>
      </div>

      <ol className="relative">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06}>
            <li className="group hairline-t py-7 md:py-12 grid grid-cols-12 gap-4 md:gap-10 items-baseline transition-colors hover:bg-paper-soft">
              <span className="display text-3xl md:text-5xl text-ink/35 group-hover:text-brass transition-colors col-span-2 md:col-span-1">
                {s.n}
              </span>
              <h3 className="display italic text-3xl md:text-5xl col-span-10 md:col-span-4">
                {s.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-ink-mute col-span-12 md:col-span-7">
                {s.body}
              </p>
            </li>
          </Reveal>
        ))}
        <div className="hairline-t" />
      </ol>
    </section>
  );
}
