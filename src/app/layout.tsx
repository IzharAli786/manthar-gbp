import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Manthar Ali — Google Business Profile & Digital Media Strategist",
  description:
    "I rank, optimize, and scale Google Business Profiles for local brands. Top-rated on Fiverr. Available for select engagements.",
  openGraph: {
    title: "Manthar Ali — GBP & Digital Media Expert",
    description:
      "Rank higher on Google Maps. Win more customers. Built by Manthar Ali — top-rated on Fiverr.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="grain bg-paper text-ink min-h-screen">{children}</body>
    </html>
  );
}
