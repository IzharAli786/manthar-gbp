import type { Metadata } from "next";
import {
  MonitorUp,
  Stethoscope,
  ListChecks,
  CalendarClock,
  Video,
  BadgeCheck,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ConsultForm from "@/components/consult/ConsultForm";
import { SITE_URL } from "@/lib/services";
import { CONSULT_MINUTES, CONSULT_PRICE_USD } from "@/lib/consult";

export const metadata: Metadata = {
  title: `Book a $${CONSULT_PRICE_USD} Video Consultation`,
  description: `A ${CONSULT_MINUTES}-minute 1:1 video call with Manthar Ali — live review of your Google Business Profile, suspension diagnosis, and a clear action plan. $${CONSULT_PRICE_USD} flat, booked in two minutes.`,
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: `Book a $${CONSULT_PRICE_USD} Video Consultation — Manthar Ali`,
    description: `${CONSULT_MINUTES}-minute 1:1 video call — live GBP review, diagnosis, action plan.`,
    url: "/consultation",
  },
};

const AGENDA = [
  {
    icon: MonitorUp,
    title: "Live screen-share review",
    body: "We open your Google Business Profile together and walk through it the way Google's reviewers do — categories, services, photos, reviews, landing page.",
  },
  {
    icon: Stethoscope,
    title: "Straight diagnosis",
    body: "Suspended, denied, or invisible in the map pack — you leave knowing exactly what's wrong and why, in plain language.",
  },
  {
    icon: ListChecks,
    title: "A written action plan",
    body: "You get the prioritized next steps during the call — whether you fix it yourself or hand it to Manthar afterwards.",
  },
];

const STEPS = [
  {
    icon: CalendarClock,
    title: "Pick a time",
    body: "Choose the slot that suits you. Manthar confirms it by email or WhatsApp — usually within a few hours.",
  },
  {
    icon: BadgeCheck,
    title: "Get confirmed",
    body: `The $${CONSULT_PRICE_USD} fee is settled on confirmation. No online payment, no account, nothing to install.`,
  },
  {
    icon: Video,
    title: "Join your room",
    body: "Your booking creates a private video room on this site. Add it to Google Calendar and just click the link at call time.",
  },
];

export default function ConsultationPage() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Cursor />
      <Nav onHome={false} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "1:1 GBP Video Consultation",
          serviceType: "Google Business Profile consultation",
          description: `${CONSULT_MINUTES}-minute one-on-one video consultation: live Google Business Profile review, suspension diagnosis, and action plan.`,
          url: `${SITE_URL}/consultation`,
          provider: { "@id": `${SITE_URL}/#person` },
          offers: {
            "@type": "Offer",
            price: String(CONSULT_PRICE_USD),
            priceCurrency: "USD",
            url: `${SITE_URL}/consultation`,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Manthar Ali", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Consultation", item: `${SITE_URL}/consultation` },
          ],
        }}
      />

      <main className="relative">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 md:pt-44 pb-10 md:pb-14">
          <div className="absolute inset-0 -z-10 grid-dots" />
          <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-line-strong" />
                1:1 Video Consultation
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display mt-6 text-4xl md:text-6xl leading-[1.02] max-w-3xl">
                Forty-five minutes.
                <br />
                <span className="italic text-brass-shine">
                  Every answer you need.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-ink-soft max-w-xl">
                A live video call with Manthar — your profile on screen, your
                questions answered, and a concrete plan before we hang up.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="card-deep px-5 py-3 text-[13px]">
                  <span className="display text-2xl mr-2 text-ink">
                    ${CONSULT_PRICE_USD}
                  </span>
                  flat — no upsells
                </span>
                <span className="card-deep px-5 py-3 text-[13px]">
                  <span className="display text-2xl mr-2 text-ink">
                    {CONSULT_MINUTES}
                  </span>
                  minutes, 1:1
                </span>
                <span className="card-deep px-5 py-3 text-[13px]">
                  Video call — right on this site
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Content + form */}
        <section
          id="contact"
          className="mx-auto w-full max-w-[1400px] px-5 md:px-10 pb-20 md:pb-28"
        >
          <div className="grid grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="col-span-12 lg:col-span-6 space-y-12">
              <div>
                <Reveal>
                  <p className="eyebrow flex items-center gap-3 mb-7">
                    <span className="inline-block h-px w-8 bg-line-strong" />
                    What happens on the call
                  </p>
                </Reveal>
                <div className="space-y-6">
                  {AGENDA.map((a, i) => (
                    <Reveal key={a.title} delay={i * 0.07}>
                      <div className="flex gap-5 hairline-t pt-6 first:hairline-t first:pt-6">
                        <span className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-ink text-paper">
                          <a.icon size={18} strokeWidth={1.5} />
                        </span>
                        <div>
                          <h3 className="display text-xl md:text-2xl leading-snug">
                            {a.title}
                          </h3>
                          <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-ink-soft">
                            {a.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div>
                <Reveal>
                  <p className="eyebrow flex items-center gap-3 mb-7">
                    <span className="inline-block h-px w-8 bg-line-strong" />
                    How booking works
                  </p>
                </Reveal>
                <div className="space-y-6">
                  {STEPS.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.07}>
                      <div className="flex gap-5 hairline-t pt-6">
                        <span className="grid place-items-center h-11 w-11 shrink-0 rounded-full hairline-strong text-brass-deep">
                          <s.icon size={18} strokeWidth={1.5} />
                        </span>
                        <div>
                          <h3 className="display text-xl md:text-2xl leading-snug">
                            {i + 1}. {s.title}
                          </h3>
                          <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-ink-soft">
                            {s.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal>
                <div className="card-deep border-l-2 border-l-brass px-5 py-4 md:px-6 md:py-5">
                  <p className="text-[14px] leading-relaxed text-ink">
                    If your case turns into a full engagement, the $
                    {CONSULT_PRICE_USD} is credited toward the project — the
                    consultation effectively becomes free.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:sticky lg:top-28">
              <Reveal delay={0.1}>
                <ConsultForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </SmoothScroll>
  );
}
