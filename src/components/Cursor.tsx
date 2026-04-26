"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const stateRef = useRef<"default" | "hover" | "press">("default");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // touch
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const setHover = (on: boolean) => {
      stateRef.current = on ? "hover" : "default";
      if (ring.current) {
        ring.current.dataset.state = stateRef.current;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest(
          "a, button, [role='button'], input, textarea, select, label, .cursor-hover"
        )
      ) {
        setHover(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest(
          "a, button, [role='button'], input, textarea, select, label, .cursor-hover"
        )
      ) {
        setHover(false);
      }
    };
    const onDown = () => {
      stateRef.current = "press";
      if (ring.current) ring.current.dataset.state = "press";
    };
    const onUp = () => {
      stateRef.current = "default";
      if (ring.current) ring.current.dataset.state = "default";
    };

    let raf = 0;
    const tick = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        data-state="default"
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 -ml-[18px] -mt-[18px] rounded-full border border-ink/60 mix-blend-difference transition-[width,height,opacity,background] duration-300 will-change-transform"
        aria-hidden
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-ink mix-blend-difference will-change-transform"
        aria-hidden
      />
    </>
  );
}
