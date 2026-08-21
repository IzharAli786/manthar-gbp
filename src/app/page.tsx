import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import CaseStudyClimb from "@/components/CaseStudyClimb";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Faq, { type FaqItem } from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import SectionIndicator from "@/components/SectionIndicator";
import Preloader from "@/components/Preloader";
import JsonLd from "@/components/JsonLd";
import { FIVERR_PROFILE, SERVICES, SITE_URL } from "@/lib/services";

const homeFaqs: FaqItem[] = [
  {
    q: "Who is Manthar Ali?",
    a: "Manthar Ali is a Google Business Profile expert and local SEO specialist, active since 2018 and based in Karachi, working with clients worldwide. He is Top Rated on Fiverr with 285+ reviews and a 4.9 rating, specializing in GBP optimization, suspension reinstatement, and map-pack ranking.",
  },
  {
    q: "How do I rank higher in the Google Maps 3-pack?",
    a: "Map-pack ranking is driven by relevance, distance, and prominence. In practice that means: exact-fit primary and secondary categories, a complete profile with weekly activity, consistent citations across trusted directories, steady review velocity with keyword-rich reviews, and a website that reinforces the same services. Category architecture is the single strongest lever most businesses get wrong.",
  },
  {
    q: "My Google Business Profile was suspended. Can it be recovered?",
    a: "Usually, yes — including cases where previous appeals have failed. Recovery depends on diagnosing the suspension trigger correctly and submitting an evidence pack formatted the way Google's reviewers expect. Done properly, the profile returns with its full review history intact.",
  },
  {
    q: "How long until local SEO shows results?",
    a: "Profile-side optimization typically moves map rankings within 4–8 weeks; website-side work compounds over 3–6 months. Competitive markets sit at the longer end. Progress is measured with geo-grid scans, so movement is visible week by week rather than taken on faith.",
  },
  {
    q: "What does an engagement cost?",
    a: "Every engagement is scoped after a free profile audit — a category fix and a full citation rebuild are very different projects, and the audit shows which one you actually need. You get the findings either way.",
  },
  {
    q: "Do you work with businesses outside Pakistan?",
    a: "Yes — the majority of the 600+ delivered engagements are for businesses in the United States, United Kingdom, Australia, and Europe. Local SEO work is remote by nature; what matters is the market data, not the time zone.",
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <ScrollProgress />
      <Cursor />
      <Nav />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: "Manthar Ali",
              url: SITE_URL,
              image: `${SITE_URL}/manthar.jpeg`,
              jobTitle:
                "Google Business Profile Expert & Local SEO Specialist",
              description:
                "Google Business Profile optimization, GBP suspension reinstatement, and local SEO. Top Rated on Fiverr with 285+ reviews and a 4.9 rating since 2018.",
              sameAs: [FIVERR_PROFILE],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              knowsAbout: [
                "Google Business Profile optimization",
                "Google Business Profile reinstatement",
                "Local SEO",
                "Google Maps ranking",
                "Citation building",
                "Review management",
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#service`,
              name: "Manthar Ali — GBP Studio",
              url: SITE_URL,
              founder: { "@id": `${SITE_URL}/#person` },
              areaServed: "Worldwide",
              description:
                "Google Business Profile optimization, reinstatement, and local SEO services for businesses worldwide.",
              sameAs: [FIVERR_PROFILE],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: SERVICES.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.nav,
                    serviceType: s.serviceType,
                    url: `${SITE_URL}/${s.slug}`,
                  },
                })),
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "Manthar Ali — GBP Studio",
              url: SITE_URL,
              publisher: { "@id": `${SITE_URL}/#person` },
            },
          ],
        }}
      />

      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <CaseStudyClimb />
        <Services />
        <Stats />
        <Process />
        <Testimonials />
        <Faq id="faq" eyebrow="FAQ — 07" items={homeFaqs} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <SectionIndicator />
    </SmoothScroll>
  );
}
