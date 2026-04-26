import Reveal from "./Reveal";
import { Star } from "lucide-react";
import { GoogleG } from "./brand/GoogleLogo";

type Review = {
  body: string;
  name: string;
  role: string;
  flag: string;
  initials: string;
  duration: string;
  repeat?: boolean;
};

const reviews: Review[] = [
  {
    body: "Big shoutout to Manthar! Was in a tough situation with a client's GBP getting suspended — both appeals failed. Honestly was feeling pretty hopeless. Glad I made the decision to hire Manthar to go to bat with Google. His knowledge led us to a full restore of the profile with all of the hard-earned reviews we had. Really appreciate the work he did. Highly recommend!",
    name: "neverpeakmedia",
    role: "United States",
    flag: "🇺🇸",
    initials: "NP",
    duration: "GBP Reinstatement · 7 weeks",
  },
  {
    body: "Manthar went above and beyond, dedicating three months to resolving issues with my suspended business. Even after I accidentally created a duplicate listing, he managed to reinstate my original business and merge the duplicate with all of its reviews. The level of service was exceptional and I couldn't be more grateful.",
    name: "georgiafrances0",
    role: "United Kingdom",
    flag: "🇬🇧",
    initials: "GF",
    duration: "GBP Reinstatement · 3 months",
  },
  {
    body: "It was great working with Manthar. I was almost giving up on recovering my Google profile, but that's when I met Manthar — he was incredibly attentive to detail. In less than a month, he managed to recover my profile. You can hire his services without fear; he's a great professional.",
    name: "marcelo_2258",
    role: "Brazil",
    flag: "🇧🇷",
    initials: "M",
    duration: "GBP Recovery · 4 weeks",
  },
  {
    body: "Manthar Ali is a great service provider on Fiverr if you need Google Business Profile help. He knows the proper steps to take in order to get a suspended Google Business Profile out of suspension. His communication is clear and he is easy to work with.",
    name: "davidbreth",
    role: "Philippines",
    flag: "🇵🇭",
    initials: "DB",
    duration: "GBP Reinstatement · 1 day",
    repeat: true,
  },
  {
    body: "I had a very positive experience working with Manthar. He handled my Google Business reinstatement professionally and kept me informed throughout the entire process. He was patient, detail-oriented, and clearly experienced in dealing with Google issues. The outcome was successful, and I truly appreciate his dedication and support. I would confidently recommend him to anyone needing help with Google Business matters.",
    name: "jackhu770",
    role: "United States",
    flag: "🇺🇸",
    initials: "JH",
    duration: "GBP Reinstatement · 4 months",
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
          <Reveal delay={0.18}>
            <p className="mt-5 text-[14px] text-ink-mute max-w-md">
              Real, verified Fiverr reviews — every one a five-star.
            </p>
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
          <Reveal key={r.name} delay={i * 0.06}>
            <figure
              className={`bg-paper p-7 md:p-12 h-full flex flex-col justify-between ${
                i === reviews.length - 1 && reviews.length % 2 === 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={13}
                          className="fill-g-yellow text-g-yellow"
                        />
                      ))}
                    </div>
                    {r.repeat && (
                      <span className="text-[10px] uppercase tracking-[0.18em] text-brass border border-brass/40 px-2 py-0.5 rounded-full">
                        Repeat client
                      </span>
                    )}
                  </div>
                  <GoogleG size={14} />
                </div>
                <span className="display text-7xl md:text-8xl leading-none text-brass/40 block -mb-6">
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-[15px] md:text-[17px] leading-relaxed text-ink-soft">
                  {r.body}
                </blockquote>
              </div>
              <figcaption className="mt-9 flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-ink text-paper text-[12px] font-medium tracking-wider">
                  {r.initials}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-ink font-medium truncate">
                    {r.name}
                  </p>
                  <p className="text-[12px] text-ink-mute mt-0.5 flex items-center gap-1.5">
                    <span aria-hidden="true">{r.flag}</span>
                    {r.role}
                  </p>
                </div>
                <p className="text-[10px] tracking-[0.16em] uppercase text-ink-mute hidden sm:block text-right">
                  {r.duration}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <div className="mt-12 text-center">
          <a
            href="https://www.fiverr.com/mantharbaloc190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-ink hover:text-brass transition-colors"
          >
            Read all reviews on Fiverr
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
