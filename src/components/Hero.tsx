"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { GoogleG } from "./brand/GoogleLogo";
import MapPackCard from "./MapPackCard";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yMap = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"
    >
      {/* Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -z-10 grid-dots"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(176,141,87,0.18),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,31,28,0.06),transparent_55%)]" />

      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        {/* Top trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 md:mb-10 text-[12px] md:text-[13px]"
        >
          <span className="inline-flex items-center gap-2 hairline-strong px-3 py-1.5 rounded-full bg-paper-soft">
            <GoogleG size={14} />
            <span className="tracking-wide">
              Google Business Profile Specialist
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-ink-mute">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-g-green" />
            Available · Q2 slots open
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-y-12 md:gap-10 items-end">
          {/* Headline + body */}
          <div className="col-span-12 md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="eyebrow flex items-center gap-3"
            >
              <span className="inline-block h-px w-8 bg-line-strong" />
              GBP · Local SEO · Digital Media
            </motion.p>

            <h1 className="display mt-5 text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[8.2vw] xl:text-[136px] leading-[0.92]">
              <SplitWord text="Manthar" />
              <br />
              <span className="italic">
                <span className="text-brass-shine">
                  <SplitWord text="Ali." delay={0.2} />
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="mt-6 md:mt-8 max-w-xl text-[15px] md:text-[17px] leading-relaxed text-ink-soft"
            >
              I rank Google Business Profiles to the top of the map pack,
              architect digital media that converts, and turn local brands
              into the obvious choice in their city. Quietly. Repeatedly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="btn-ink group inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium"
              >
                Start a Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="https://www.fiverr.com/mantharbaloc190"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase"
              >
                View on Fiverr
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.05 }}
              className="mt-8 md:mt-10 flex items-center gap-4 text-[12px] text-ink-mute"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-g-yellow text-g-yellow"
                  />
                ))}
              </div>
              <span className="tracking-wider">
                5.0 · 600+ five-star reviews on Fiverr
              </span>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            style={{ y: yPortrait }}
            className="col-span-12 md:col-span-5 relative order-first md:order-none"
          >
            <div className="relative mx-auto md:ml-auto w-[82%] sm:w-[68%] md:w-full max-w-[460px] aspect-[3/4]">
              {/* Brass halo */}
              <div className="absolute -inset-6 -z-10 rounded-full bg-brass/25 blur-3xl animate-halo" />
              {/* Frame */}
              <div className="absolute -inset-1.5 hairline-strong rounded-[2px]" />
              <motion.div
                initial={{ scale: 1.05, opacity: 0, filter: "blur(12px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full overflow-hidden bg-paper-deep"
              >
                <Image
                  src="/manthar.jpeg"
                  alt="Portrait of Manthar Ali"
                  fill
                  priority
                  sizes="(max-width: 768px) 82vw, 460px"
                  className="object-cover object-center grayscale-[0.15] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/35 via-transparent to-transparent" />
              </motion.div>

              {/* Top-left credential */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.0 }}
                className="absolute top-3 left-3 md:-top-5 md:-left-8 card px-3.5 py-2.5 animate-floaty"
              >
                <p className="eyebrow !text-[9px]">Top Rated · Fiverr</p>
                <p className="display text-xl mt-0.5">Tier 1 Pro</p>
              </motion.div>

              {/* Bottom-right rating chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.15 }}
                className="absolute bottom-3 right-3 md:-bottom-5 md:-right-6 card px-3.5 py-2.5 max-w-[180px]"
              >
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className="fill-g-yellow text-g-yellow"
                    />
                  ))}
                  <span className="ml-1 text-[10px] font-medium">5.0</span>
                </div>
                <p className="text-[11px] text-ink-mute leading-snug">
                  600+ five-star
                  <br />
                  client reviews
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Map Pack Card row */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7">
            <motion.div style={{ y: yMap }}>
              <MapPackCard />
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="hairline-t pt-6"
            >
              <p className="eyebrow">Live snapshot</p>
              <p className="display text-3xl md:text-4xl mt-3 leading-tight">
                This is what dominating the map pack actually looks like —
                <span className="italic text-brass"> first place</span>, more
                reviews, more calls.
              </p>
              <p className="mt-4 text-[14px] text-ink-mute max-w-md">
                Every engagement is engineered toward this view: your brand
                at #1, with the social proof to keep it there.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 md:mt-20 flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.28em] uppercase text-ink-mute"
        >
          <span>Scroll</span>
          <span className="hidden md:inline">
            Est. 2018 · Karachi → Worldwide
          </span>
          <span>01 / 06</span>
        </motion.div>
      </div>
    </section>
  );
}

function SplitWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-baseline pb-[0.04em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}
