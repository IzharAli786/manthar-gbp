"use client";

import { useEffect, useState } from "react";

const NUMBER = "923083106882";
const MESSAGE =
  "Hi Manthar — I came across your website and would like to discuss a project.";
const HREF = `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group transition-all duration-700 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center">
        {/* Tooltip — desktop only */}
        <span
          className="hidden md:inline-block mr-3 px-4 py-2 rounded-full bg-ink text-paper text-[12px] tracking-wide whitespace-nowrap shadow-lg
                     opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        >
          Chat with Manthar
        </span>

        {/* Pulsing ring */}
        <span className="absolute inset-0 m-auto h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <span className="absolute inset-0 m-auto h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] opacity-50 blur-md" />

        {/* Button */}
        <span
          className="relative grid place-items-center h-14 w-14 md:h-16 md:w-16 rounded-full
                     bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.65)]
                     ring-4 ring-white/30
                     transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
        >
          <WhatsAppIcon />
        </span>
      </div>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="currentColor"
      aria-hidden="true"
      className="md:w-8 md:h-8"
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.094c-.728-.364-1.4-.679-2.105-1.367-.342-.339-.844-.785-1.105-1.215a.49.49 0 0 1-.067-.245c0-.49.978-1.022.978-1.486 0-.197-.03-.275-.097-.397-.116-.21-.85-1.992-1.108-2.502-.205-.405-.301-.467-.685-.485-.097-.005-.197-.005-.295-.005a1.27 1.27 0 0 0-.917.404c-.366.366-1.225 1.21-1.225 2.948s1.275 3.405 1.45 3.65c.235.318 2.272 3.59 5.567 4.927 2.717 1.105 3.445 1.05 3.972.952.768-.143 2.394-.969 2.732-1.953.336-.984.336-1.823.234-1.954-.097-.121-.32-.21-.683-.378-.366-.165-2.114-1.102-2.448-1.227-.336-.123-.554-.193-.802-.193l-.116.001-.001.001zM16.5 4.998c-6.34 0-11.502 5.16-11.502 11.5 0 2.17.605 4.298 1.747 6.155l-1.836 6.694 6.85-1.797c1.79 1.061 3.812 1.617 5.872 1.617 6.34 0 11.502-5.158 11.502-11.5 0-6.34-5.162-11.499-11.502-11.499v-.17h-1.131z" />
      <path d="M16.55 28.5c-2.038 0-4.034-.532-5.789-1.54l-6.412 1.683 1.717-6.27c-1.108-1.852-1.69-3.978-1.69-6.158 0-6.617 5.385-12 12-12 6.617 0 12 5.383 12 12s-5.383 12-12 12c-.014 0-.028 0-.042 0l.216-.715zM10.84 25.005l.39.235c1.51.93 3.245 1.402 5.05 1.402 5.46 0 9.9-4.44 9.9-9.9 0-5.46-4.44-9.9-9.9-9.9-5.458 0-9.9 4.44-9.9 9.9 0 1.928.55 3.797 1.582 5.41l.27.422-.99 3.62 3.598-.94v-.249z" />
    </svg>
  );
}
