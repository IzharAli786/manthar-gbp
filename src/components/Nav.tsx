"use client";

import { useEffect, useState } from "react";
import { GoogleMapsPin } from "./brand/GoogleLogo";
import Magnetic from "./Magnetic";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Proof" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

/**
 * `onHome`: on the one-pager, links are in-page anchors (Lenis-smooth).
 * On service pages, section links point back home ("/#about") while
 * Contact stays on-page (each service page has its own #contact form).
 */
export default function Nav({ onHome = true }: { onHome?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolve = (href: string) => {
    if (!href.startsWith("#")) return href; // route links pass through
    return onHome || href === "#contact" ? href : `/${href}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-paper/80 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a
          href={onHome ? "#top" : "/"}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-12 duration-500">
            <GoogleMapsPin size={16} />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[14px] font-medium tracking-tight">
              Manthar Ali
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-ink-mute">
              GBP Studio
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={resolve(l.href)}
              className="group relative text-[13px] tracking-wide text-ink/70 hover:text-ink transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <Magnetic strength={0.25}>
          <a
            href="#contact"
            className="btn-ink inline-block px-4 py-2.5 text-[11px] md:text-[12px] tracking-[0.18em] uppercase"
          >
            Hire&nbsp;me
          </a>
        </Magnetic>
      </div>
    </header>
  );
}
