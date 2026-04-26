"use client";

import { Star, TrendingUp } from "lucide-react";
import { GoogleMapsPin, GoogleMapsWordmark } from "./brand/GoogleLogo";
import { motion } from "framer-motion";

const listings = [
  { name: "Your Brand", reviews: 487, rating: 5.0, you: true, dist: "0.4 mi" },
  { name: "Competitor Co.", reviews: 132, rating: 4.6, dist: "0.6 mi" },
  { name: "Local Place", reviews: 89, rating: 4.4, dist: "1.1 mi" },
];

export default function MapPackCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="card relative w-full max-w-[420px] p-5 md:p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <GoogleMapsWordmark size={13} />
        <div className="flex items-center gap-1.5 text-[11px] text-ink-mute">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-g-green" />
          Live · Map Pack
        </div>
      </div>

      {/* Map preview */}
      <div className="relative h-32 rounded-md overflow-hidden hairline mb-4 bg-[#e8eadd]">
        {/* Faux map tiles */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 130"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="roads"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <rect width="60" height="60" fill="#e8eadd" />
              <path d="M0 30 H60" stroke="#fff" strokeWidth="3" />
              <path d="M30 0 V60" stroke="#fff" strokeWidth="3" />
            </pattern>
          </defs>
          <rect width="400" height="130" fill="url(#roads)" />
          <path
            d="M0 65 C 80 40, 160 90, 240 60 S 380 50, 400 70"
            stroke="#c8d4a3"
            strokeWidth="14"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M0 100 H400"
            stroke="#a4caf5"
            strokeWidth="6"
            opacity="0.5"
          />
          {/* Competitors */}
          <circle cx="80" cy="92" r="5" fill="#0e1f1c" opacity="0.45" />
          <circle cx="310" cy="40" r="5" fill="#0e1f1c" opacity="0.35" />
        </svg>
        {/* Primary pin */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 -z-10 m-auto h-6 w-6 rounded-full bg-g-red animate-pin-pulse" />
          <span className="absolute inset-0 -z-10 m-auto h-6 w-6 rounded-full bg-g-red animate-pin-pulse [animation-delay:1.2s]" />
          <GoogleMapsPin size={30} />
        </div>
      </div>

      {/* Listings */}
      <ul className="space-y-2.5">
        {listings.map((l, i) => (
          <li
            key={l.name}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
              l.you
                ? "bg-ink text-paper"
                : "hairline hover:bg-paper-deep"
            }`}
          >
            <span
              className={`grid place-items-center h-6 w-6 rounded-full text-[11px] font-medium ${
                l.you ? "bg-brass text-ink" : "bg-ink/8 text-ink"
              }`}
            >
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium truncate">
                {l.name}
                {l.you && (
                  <span className="ml-2 text-[10px] uppercase tracking-wider text-brass">
                    You
                  </span>
                )}
              </p>
              <p
                className={`text-[11px] flex items-center gap-1.5 mt-0.5 ${
                  l.you ? "text-paper/70" : "text-ink-mute"
                }`}
              >
                <span className="inline-flex items-center gap-0.5">
                  <Star
                    size={10}
                    className="fill-g-yellow text-g-yellow"
                  />
                  {l.rating.toFixed(1)}
                </span>
                <span>·</span>
                <span>{l.reviews} reviews</span>
                <span>·</span>
                <span>{l.dist}</span>
              </p>
            </div>
            {l.you && (
              <span className="flex items-center gap-1 text-[11px] text-g-green font-medium">
                <TrendingUp size={12} />
                #1
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Footer note */}
      <div className="mt-4 pt-4 hairline-t flex items-center justify-between text-[11px] text-ink-mute">
        <span>Geo-grid: 7×7 · Avg position 1.2</span>
        <span className="text-g-green font-medium">▲ +312% in 60 days</span>
      </div>
    </motion.div>
  );
}
