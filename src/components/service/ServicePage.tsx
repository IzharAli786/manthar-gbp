import Link from "next/link";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { SERVICES, SITE_URL, type ServiceDef } from "@/lib/services";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import Magnetic from "@/components/Magnetic";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { GoogleG } from "@/components/brand/GoogleLogo";

export default function ServicePage({ s }: { s: ServiceDef }) {
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <SmoothScroll>
      <ScrollProgress />
      <Cursor />
      <Nav onHome={false} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.metaTitle,
          serviceType: s.serviceType,
          description: s.metaDescription,
          url: `${SITE_URL}/${s.slug}`,
          areaServed: "Worldwide",
          provider: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Manthar Ali",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Manthar Ali",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: s.nav,
              item: `${SITE_URL}/${s.slug}`,
            },
          ],
        }}
      />

      <main className="relative">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 md:pt-44 pb-16 md:pb-24">
          <div className="absolute inset-0 -z-10 grid-dots" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(176,141,87,0.16),transparent_55%)]" />

          <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-line-strong" />
                {s.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="display mt-6 text-[11.5vw] md:text-[7.2vw] xl:text-[104px] leading-[0.94] max-w-5xl">
                {s.h1Top}
                <br />
                <span className="italic text-brass-shine">{s.h1Italic}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 md:mt-9 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-ink-soft">
                {s.intro}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="btn-ink group inline-flex w-full sm:w-auto items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium"
                  >
                    Start a Project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href={s.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex w-full sm:w-auto items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase"
                  >
                    {s.fiverrLabel}
                    <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-9 flex items-center gap-4 text-[12px] text-ink-mute">
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
                  5.0 · 600+ five-star reviews · Top Rated on Fiverr
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Deliverables */}
        <section className="relative py-20 md:py-28 mx-auto max-w-[1400px] px-5 md:px-10 hairline-t">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-12 md:mb-16">
              <span className="inline-block h-px w-8 bg-line-strong" />
              What&apos;s included
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line hairline">
            {s.bullets.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="group bg-paper h-full p-7 md:p-9 transition-colors duration-500 hover:bg-paper-soft">
                  <span className="grid place-items-center h-9 w-9 rounded-full hairline-strong bg-paper-soft text-brass-deep group-hover:bg-ink group-hover:text-paper transition-colors duration-500">
                    <Check size={15} strokeWidth={2} />
                  </span>
                  <h2 className="display text-2xl md:text-[28px] mt-5 leading-tight">
                    {b.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-mute">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="relative py-20 md:py-28 mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-10 md:mb-14">
              <span className="inline-block h-px w-8 bg-line-strong" />
              How it runs
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {s.approach.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.08}>
                <div className="hairline-t pt-6">
                  <span className="display text-4xl md:text-5xl text-ink/30">
                    {a.n}
                  </span>
                  <h2 className="display italic text-3xl md:text-4xl mt-3">
                    {a.title}
                  </h2>
                  <p className="mt-3.5 text-[14px] leading-relaxed text-ink-mute max-w-sm">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Real proof (only where real quotes exist) */}
        {s.quotes && (
          <section className="relative py-20 md:py-28 mx-auto max-w-[1400px] px-5 md:px-10 hairline-t">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 mb-10 md:mb-14">
                <span className="inline-block h-px w-8 bg-line-strong" />
                Verified Fiverr reviews
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line hairline">
              {s.quotes.map((q, i) => (
                <Reveal key={q.name} delay={i * 0.08}>
                  <figure className="bg-paper h-full p-7 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
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
                      <blockquote className="text-[15px] md:text-[16px] leading-relaxed text-ink-soft">
                        &ldquo;{q.body}&rdquo;
                      </blockquote>
                    </div>
                    <figcaption className="mt-6 text-[13px] text-ink-mute">
                      <span className="text-ink font-medium">{q.name}</span> ·{" "}
                      {q.where}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <Faq
          items={s.faqs}
          eyebrow={`FAQ — ${s.nav}`}
          titleTop="Asked before"
          titleItalic="you hire."
        />

        {/* Contact */}
        <section
          id="contact"
          className="relative py-20 md:py-32 mx-auto max-w-[1400px] px-5 md:px-10 hairline-t"
        >
          <Reveal>
            <h2 className="display text-[12vw] md:text-[8vw] xl:text-[120px] leading-[0.92]">
              {s.ctaTitle}
              <br />
              <span className="italic text-brass-shine">{s.ctaItalic}</span>
            </h2>
          </Reveal>
          <div className="mt-12 md:mt-16 grid grid-cols-12 gap-8 md:gap-10">
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="card p-6 md:p-8">
                  <p className="display text-2xl leading-tight">
                    Free audit first.
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-mute">
                    Every engagement starts with a free look at your profile
                    or site — you get the findings either way. Tell me what
                    you&apos;re dealing with and I&apos;ll reply within 24
                    hours, weekdays.
                  </p>
                  <div className="mt-6 pt-5 hairline-t flex items-center justify-between">
                    <p className="eyebrow !text-[10px]">Status</p>
                    <p className="text-[12px] text-ink-soft flex items-center gap-1.5">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-g-green" />
                      Available · Q2 slots open
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
              <Reveal delay={0.15}>
                <ContactForm defaultService={s.formService} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="relative py-16 md:py-20 mx-auto max-w-[1400px] px-5 md:px-10 hairline-t">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 mb-8">
              <span className="inline-block h-px w-8 bg-line-strong" />
              Also from the studio
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.06}>
                <Link
                  href={`/${o.slug}`}
                  className="group flex items-center justify-between gap-6 hairline-strong rounded-md px-6 py-6 md:py-7 transition-colors duration-500 hover:bg-ink hover:text-paper hover:border-ink"
                >
                  <div>
                    <p className="display text-2xl md:text-3xl">{o.nav}</p>
                    <p className="mt-1.5 text-[13px] text-ink-mute group-hover:text-paper/60 transition-colors">
                      {o.h1Top} {o.h1Italic}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.25}
                    className="shrink-0 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </SmoothScroll>
  );
}
