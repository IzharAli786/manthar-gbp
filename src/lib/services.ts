import type { FaqItem } from "@/components/Faq";

export const SITE_URL = "https://www.manthargbpfix.com";
export const FIVERR_PROFILE = "https://www.fiverr.com/mantharbaloc190";
export const FIVERR_GBP_GIG = "https://www.fiverr.com/s/zWDoVRR";
export const FIVERR_SEO_GIG = "https://www.fiverr.com/s/5rzd3p6";

export type ServiceDef = {
  slug: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1Top: string;
  h1Italic: string;
  intro: string;
  bullets: { title: string; body: string }[];
  approach: { n: string; title: string; body: string }[];
  faqs: FaqItem[];
  quotes?: { body: string; name: string; where: string }[];
  fiverr: string;
  fiverrLabel: string;
  formService: string;
  serviceType: string;
  ctaTitle: string;
  ctaItalic: string;
};

export const SERVICES: ServiceDef[] = [
  {
    slug: "gbp-optimization",
    nav: "GBP Optimization",
    metaTitle: "Google Business Profile Optimization Service",
    metaDescription:
      "Full-stack Google Business Profile optimization — geo-grid audits, category architecture, citations, review velocity, and content cadence — engineered to rank in the Google Maps 3-pack. Top Rated on Fiverr with 600+ five-star reviews.",
    keywords: [
      "Google Business Profile optimization",
      "GBP optimization service",
      "Google Maps ranking service",
      "map pack ranking",
      "Google Business Profile expert",
      "optimize Google Business Profile",
    ],
    eyebrow: "Service — GBP Optimization",
    h1Top: "Google Business Profile",
    h1Italic: "engineered to rank.",
    intro:
      "The map pack is the only piece of Google real estate that prints phone calls. I optimize Google Business Profiles as a complete ranking system — categories, citations, reviews, content, and proximity signals tuned together — not as a checklist of toggles.",
    bullets: [
      {
        title: "Geo-grid audit",
        body: "A 7×7 scan of your real ranking position across your service area, plus a decomposition of exactly why the current top 3 outrank you.",
      },
      {
        title: "Category & attribute architecture",
        body: "Primary and secondary categories are the single strongest GBP ranking lever. I set them from competitor data, not guesswork.",
      },
      {
        title: "Citations & NAP cleanup",
        body: "Consistent name-address-phone across the directories Google actually trusts — built where missing, corrected where wrong.",
      },
      {
        title: "Review velocity system",
        body: "A repeatable flow that turns happy customers into a steady stream of keyword-rich reviews — the social proof Google rewards.",
      },
      {
        title: "Posts, photos & Q&A cadence",
        body: "Fresh signals every week: geo-tagged photos, offer posts, and seeded Q&A that answer what buyers actually search.",
      },
      {
        title: "Ranking reports",
        body: "Geo-grid re-scans and call tracking on a schedule. You see the climb — or I see the problem early.",
      },
    ],
    approach: [
      {
        n: "01",
        title: "Audit",
        body: "Geo-grid scan, competitor decomposition, profile health check. You get the findings whether or not we continue.",
      },
      {
        n: "02",
        title: "Rebuild",
        body: "Categories, attributes, services, description, citations — the foundation set right once, documented.",
      },
      {
        n: "03",
        title: "Compound",
        body: "Weekly content and review cycles that keep the profile the freshest in its market. Rankings follow freshness.",
      },
    ],
    faqs: [
      {
        q: "What does Google Business Profile optimization actually include?",
        a: "A complete GBP optimization covers category and attribute architecture, business description and services, citation building with consistent NAP data, review velocity, weekly posts and geo-tagged photos, Q&A seeding, and geo-grid rank tracking. Manthar Ali treats these as one ranking system tuned together — categories alone are the strongest lever, but they compound with reviews and freshness signals.",
      },
      {
        q: "How long does it take to rank in the Google Maps 3-pack?",
        a: "For most local businesses, meaningful map-pack movement shows in 4–8 weeks, with competitive markets taking up to 90 days. The first movements usually appear in the geo-grid cells closest to your address, then spread outward as citations and review velocity compound.",
      },
      {
        q: "Can you guarantee a #1 ranking on Google Maps?",
        a: "No — and no honest provider can, because Google controls the algorithm. What can be guaranteed is the process: correct category architecture, clean citations, steady review velocity, and weekly freshness signals, measured with geo-grid scans. Across 600+ engagements this system has consistently moved profiles into the map pack.",
      },
      {
        q: "What do you need from me to start?",
        a: "Manager access to your Google Business Profile (you keep ownership), your service list and service area, and 30 minutes to align on your priority keywords. Everything else — audit, rebuild, content cadence — runs from my side with weekly reports.",
      },
      {
        q: "How much does GBP optimization cost?",
        a: "Every engagement is scoped after a free profile audit, because a profile that needs a category fix and one that needs a full citation rebuild are different projects. The audit tells us both what's broken and what it's worth to fix.",
      },
    ],
    fiverr: FIVERR_GBP_GIG,
    fiverrLabel: "View the GBP gig on Fiverr",
    formService: "GBP Setup & Optimization",
    serviceType: "Google Business Profile optimization",
    ctaTitle: "Ready to own",
    ctaItalic: "your map pack?",
  },
  {
    slug: "gbp-reinstatement",
    nav: "GBP Reinstatement",
    metaTitle: "Google Business Profile Reinstatement — Fix a Suspended GBP",
    metaDescription:
      "Google Business Profile suspended? I diagnose the suspension, build the evidence pack, and file appeals that get profiles reinstated — with reviews intact. Recovered profiles other providers had given up on. 600+ five-star reviews on Fiverr.",
    keywords: [
      "Google Business Profile suspended",
      "GBP reinstatement service",
      "Google Business Profile reinstatement",
      "fix suspended Google Business Profile",
      "GBP appeal help",
      "recover Google Business Profile",
    ],
    eyebrow: "Service — GBP Reinstatement",
    h1Top: "Suspended?",
    h1Italic: "Let's get you back.",
    intro:
      "A suspended profile is your business erased from the map — every review, every ranking, every call, gone overnight. I diagnose why Google pulled it, build the evidence pack Google's reviewers actually accept, and file appeals that bring profiles back with their reviews intact. Including profiles where previous appeals had already failed.",
    bullets: [
      {
        title: "Suspension diagnosis",
        body: "Hard or soft suspension, and the exact trigger — address issues, category conflicts, guideline edge cases, or a bad edit. The appeal strategy depends on getting this right.",
      },
      {
        title: "Evidence pack preparation",
        body: "Business licenses, utility bills, storefront and signage photos, formatted the way Google's review team expects. Weak evidence is why most self-filed appeals fail.",
      },
      {
        title: "Appeal filing & escalation",
        body: "The appeal written and filed correctly the first time — and when the standard queue stalls, escalated through the channels most owners never reach.",
      },
      {
        title: "Duplicate profile resolution",
        body: "Duplicate listings merged, not deleted — so the reviews from both end up on your restored profile.",
      },
      {
        title: "Review retention",
        body: "Reinstatement done right restores your profile with its review history. Recreating from scratch loses everything — the last resort, not the first move.",
      },
      {
        title: "Post-reinstatement hardening",
        body: "The vulnerabilities that triggered the suspension get fixed so it doesn't happen twice.",
      },
    ],
    approach: [
      {
        n: "01",
        title: "Diagnose",
        body: "Suspension type, trigger, and profile history — before anything is filed. A wrong first appeal makes every later one harder.",
      },
      {
        n: "02",
        title: "Document",
        body: "The evidence pack, assembled and formatted for Google's reviewers. This is where reinstatements are won.",
      },
      {
        n: "03",
        title: "Appeal & escalate",
        body: "Filed, tracked, and escalated until there's an outcome. You get status updates at every step, not silence.",
      },
    ],
    faqs: [
      {
        q: "Why was my Google Business Profile suspended?",
        a: "The most common triggers are address problems (virtual offices, PO boxes, or service-area conflicts), category choices that clash with the business model, recent bulk edits, duplicate listings, and guideline edge cases in regulated industries. Google rarely tells you which one it was — correctly diagnosing the trigger is the first step of every reinstatement, because the appeal has to answer the actual problem.",
      },
      {
        q: "How long does GBP reinstatement take?",
        a: "Straightforward cases with clean evidence can come back in days; contested cases involving failed prior appeals or duplicates typically take 3 weeks to 3 months. Anyone quoting a guaranteed fast turnaround for every case is guessing — the honest variable is how complicated your suspension history is.",
      },
      {
        q: "Will my reviews come back after reinstatement?",
        a: "Yes — a proper reinstatement restores the profile with its full review history. That's the core reason to reinstate rather than create a new profile, which starts from zero reviews and zero ranking history. In duplicate situations, reviews from merged listings can be consolidated onto the restored profile.",
      },
      {
        q: "My appeals already failed. Is it hopeless?",
        a: "No. Failed self-filed appeals are the most common starting point for my reinstatement work — most fail on weak or wrongly formatted evidence, not on the merits. A rebuilt evidence pack and escalation beyond the standard queue has recovered profiles whose owners had been rejected twice before.",
      },
      {
        q: "How much does reinstatement cost?",
        a: "Scoped after a free review of your suspension notice and profile history, because a first-time soft suspension and a twice-appealed hard suspension are very different projects. You'll know the diagnosis before you commit to anything.",
      },
    ],
    quotes: [
      {
        body: "Was in a tough situation with a client's GBP getting suspended — both appeals failed. Glad I made the decision to hire Manthar to go to bat with Google. His knowledge led us to a full restore of the profile with all of the hard-earned reviews we had.",
        name: "neverpeakmedia",
        where: "United States",
      },
      {
        body: "Even after I accidentally created a duplicate listing, he managed to reinstate my original business and merge the duplicate with all of its reviews. The level of service was exceptional.",
        name: "georgiafrances0",
        where: "United Kingdom",
      },
    ],
    fiverr: FIVERR_PROFILE,
    fiverrLabel: "See reinstatement reviews on Fiverr",
    formService: "GBP Reinstatement",
    serviceType: "Google Business Profile reinstatement",
    ctaTitle: "Every day suspended",
    ctaItalic: "is revenue lost.",
  },
  {
    slug: "local-seo",
    nav: "Local SEO",
    metaTitle: "Local SEO Service — Rank Where Your Customers Search",
    metaDescription:
      "Local SEO engineered around the Google Maps pack: technical audits, location pages, citations, review strategy, and geo-grid tracking. The website and the profile optimized as one system. Top Rated on Fiverr, 600+ five-star reviews.",
    keywords: [
      "local SEO service",
      "local SEO specialist",
      "rank in Google map pack",
      "local search optimization",
      "local SEO expert",
      "Google Maps SEO",
    ],
    eyebrow: "Service — Local SEO",
    h1Top: "Local SEO that",
    h1Italic: "prints customers.",
    intro:
      "Local search is won twice: once in the map pack, once in the organic results under it. I optimize your website and your Google Business Profile as one system — because Google reads them as one — and measure the result in calls, not vanity metrics.",
    bullets: [
      {
        title: "Technical & on-page audit",
        body: "Crawlability, speed, schema, internal links, and the on-page signals that feed your map ranking. Fixed in priority order, not alphabetical.",
      },
      {
        title: "Location & service pages",
        body: "One intent, one page: dedicated pages for each service and area you want to win, written for buyers and structured for crawlers.",
      },
      {
        title: "Local schema markup",
        body: "LocalBusiness, Service, and FAQ structured data that makes your pages machine-readable — for Google today and AI search engines tomorrow.",
      },
      {
        title: "Citations & local links",
        body: "The directory and community links that anchor your business to its geography — quality over volume, always.",
      },
      {
        title: "GBP integration",
        body: "Website and profile pointing at the same keywords, categories, and landing pages. Most providers optimize one and starve the other.",
      },
      {
        title: "Geo-grid & call tracking",
        body: "Position tracked across the map, calls tracked to source. The report answers the only question that matters: is the phone ringing more?",
      },
    ],
    approach: [
      {
        n: "01",
        title: "Map the market",
        body: "Keyword and competitor mapping across your service area — what's winnable now, what needs building.",
      },
      {
        n: "02",
        title: "Fix the foundation",
        body: "Technical debt, on-page gaps, schema, citations — cleared in the order that moves rankings fastest.",
      },
      {
        n: "03",
        title: "Build & measure",
        body: "Location pages, content, and links shipped on cadence, geo-grid scans confirming movement — or catching stalls early.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between local SEO and GBP optimization?",
        a: "GBP optimization tunes your Google Business Profile — categories, reviews, posts, citations. Local SEO is the wider system: your website's technical health, location pages, schema markup, and links, working together with the profile. Google reads both as one entity, so optimizing one while ignoring the other leaves rankings on the table.",
      },
      {
        q: "How long does local SEO take to show results?",
        a: "Profile-side changes can move map rankings in 4–8 weeks. Website-side work — location pages, technical fixes, links — typically compounds over 3–6 months. The honest sequencing: quick wins from the profile first, durable wins from the site behind them.",
      },
      {
        q: "What is a geo-grid scan?",
        a: "A geo-grid scan checks your Google Maps ranking from dozens of points across your service area — say a 7×7 grid — instead of one location. Rankings change street by street with proximity, so a single check hides the truth. The grid shows exactly where you win, where you lose, and whether the work is moving the map.",
      },
      {
        q: "Do I need a website to rank locally, or is a GBP enough?",
        a: "You can crack the map pack with a strong profile alone in low-competition markets. But the profile's landing page is a ranking factor, and organic results below the pack are a second bite at every search — in competitive markets, businesses with an optimized site and profile consistently beat profile-only competitors.",
      },
      {
        q: "How much does local SEO cost?",
        a: "Scoped after a free audit of your site and profile. The audit shows what's actually broken — sometimes the honest answer is a small profile fix, not a six-month retainer, and you'll be told which.",
      },
    ],
    fiverr: FIVERR_SEO_GIG,
    fiverrLabel: "View the SEO gig on Fiverr",
    formService: "Local SEO & Map-Pack Ranking",
    serviceType: "Local search engine optimization",
    ctaTitle: "Ready to rank",
    ctaItalic: "where it counts?",
  },
];

export function getService(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
