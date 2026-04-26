import Reveal from "./Reveal";
import { GoogleG } from "./brand/GoogleLogo";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-5 md:px-10"
    >
      <div className="grid grid-cols-12 gap-y-10 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-line-strong" />
              About — 02
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-5xl md:text-6xl mt-5 leading-[0.95]">
              Quiet operator.
              <br />
              <span className="italic text-brass">Loud results.</span>
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-7">
          <Reveal delay={0.15}>
            <p className="text-lg md:text-xl leading-relaxed text-ink-soft">
              I&apos;m{" "}
              <span className="text-ink font-medium">Manthar Ali</span> — a
              Google Business Profile specialist and digital media
              strategist. For seven years I&apos;ve helped local businesses
              and creator brands dominate the only piece of search real
              estate that actually prints customers: the map pack.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-base leading-relaxed text-ink-mute">
              I treat your GBP like a product, not a checklist. Geo-grid
              audits, citation architecture, review velocity engineering,
              category schema, and content cadence — engineered as one
              system, measured weekly, tuned until your phone won&apos;t
              stop ringing. On Fiverr I&apos;ve delivered 600+ engagements
              at five stars, and now I&apos;m taking on a small number of
              long-term partners.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 hairline-t">
              <div className="flex gap-4">
                <span className="grid place-items-center h-10 w-10 rounded-full hairline-strong bg-paper-soft shrink-0">
                  <GoogleG size={18} />
                </span>
                <div>
                  <p className="eyebrow !text-[10px]">Discipline</p>
                  <p className="display text-2xl md:text-3xl mt-1.5">
                    Local SEO
                  </p>
                  <p className="text-[13px] text-ink-mute mt-1">
                    GBP, citations, reviews, schema.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-ink text-paper shrink-0">
                  ✦
                </span>
                <div>
                  <p className="eyebrow !text-[10px]">Discipline</p>
                  <p className="display text-2xl md:text-3xl mt-1.5">
                    Digital Media
                  </p>
                  <p className="text-[13px] text-ink-mute mt-1">
                    Content, paid, social systems.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
