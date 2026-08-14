import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { INTRO_SCRIPT } from "@/lib/intro";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://www.manthargbpfix.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Manthar Ali — Google Business Profile Expert & Local SEO Specialist",
    template: "%s — Manthar Ali",
  },
  description:
    "Google Business Profile optimization, GBP suspension reinstatement, and local SEO that puts businesses at the top of the Google Maps pack. 600+ five-star reviews, Top Rated on Fiverr since 2018.",
  keywords: [
    "Google Business Profile expert",
    "GBP optimization service",
    "Google Business Profile reinstatement",
    "GBP suspended help",
    "local SEO specialist",
    "Google Maps ranking",
    "map pack ranking service",
    "Manthar Ali",
  ],
  authors: [{ name: "Manthar Ali", url: SITE_URL }],
  creator: "Manthar Ali",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Manthar Ali — GBP Studio",
    title: "Manthar Ali — Google Business Profile Expert & Local SEO",
    description:
      "Rank at the top of the Google Maps pack. GBP optimization, suspension reinstatement, and local SEO — 600+ five-star reviews, Top Rated on Fiverr.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthar Ali — Google Business Profile Expert & Local SEO",
    description:
      "Rank at the top of the Google Maps pack. GBP optimization, reinstatement, and local SEO — 600+ five-star reviews on Fiverr.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1f1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="grain bg-paper text-ink min-h-screen">
        {/* Runs before paint: opts into the intro overlay once per session */}
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
