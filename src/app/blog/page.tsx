import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/services";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { formatPostDate } from "./date";

export const metadata: Metadata = {
  title: "Field Notes — GBP & Local SEO Blog",
  description:
    "Practical, no-fluff guides on Google Business Profile suspensions, reinstatement, and map-pack ranking — written from real cases by Manthar Ali.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field Notes — GBP & Local SEO Blog by Manthar Ali",
    description:
      "Practical guides on GBP suspensions, reinstatement, and map-pack ranking — from real cases.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Cursor />
      <Nav onHome={false} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${SITE_URL}/blog`,
          name: "Field Notes — GBP & Local SEO Blog",
          url: `${SITE_URL}/blog`,
          author: { "@type": "Person", "@id": `${SITE_URL}/#person` },
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />

      <main className="relative">
        <section className="relative isolate overflow-hidden pt-32 md:pt-44 pb-14 md:pb-20">
          <div className="absolute inset-0 -z-10 grid-dots" />
          <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-line-strong" />
                Field Notes
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display mt-6 text-[12vw] md:text-[7.5vw] xl:text-[110px] leading-[0.94]">
                Notes from
                <br />
                <span className="italic text-brass-shine">the map pack.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[15px] md:text-[17px] leading-relaxed text-ink-soft">
                What actually happens inside suspensions, appeals, and
                rankings — written from real cases, not theory. No fluff, no
                recycled checklists.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative pb-24 md:pb-32 mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="hairline-t">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group hairline-b grid grid-cols-12 gap-4 md:gap-10 py-8 md:py-12 items-baseline transition-colors hover:bg-paper-soft px-1 md:px-3"
                >
                  <p className="col-span-12 md:col-span-2 text-[12px] tracking-[0.18em] uppercase text-ink-mute">
                    {formatPostDate(p.date)}
                    <span className="block mt-1 normal-case tracking-normal">
                      {p.minutes} min read
                    </span>
                  </p>
                  <div className="col-span-11 md:col-span-9">
                    <h2 className="display text-3xl md:text-5xl leading-[1.02] group-hover:text-brass-deep transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-3.5 text-[14px] md:text-[15px] leading-relaxed text-ink-mute max-w-2xl">
                      {p.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={26}
                    strokeWidth={1.25}
                    className="col-span-1 justify-self-end opacity-30 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-10 text-[13px] text-ink-mute">
              New notes ship regularly — the queue is built from questions
              real clients ask.
            </p>
          </Reveal>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </SmoothScroll>
  );
}
