"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, ExternalLink } from "lucide-react";
import { GoogleMapsPin } from "../brand/GoogleLogo";

const JITSI_DOMAIN = "meet.jit.si";

type JitsiApi = { dispose: () => void };

declare global {
  interface Window {
    JitsiMeetExternalAPI?: new (
      domain: string,
      options: Record<string, unknown>
    ) => JitsiApi;
  }
}

export default function VideoRoom({ room }: { room: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let api: JitsiApi | undefined;
    let cancelled = false;

    const init = () => {
      if (cancelled || !frameRef.current || !window.JitsiMeetExternalAPI) return;
      frameRef.current.innerHTML = "";
      api = new window.JitsiMeetExternalAPI(JITSI_DOMAIN, {
        roomName: room,
        parentNode: frameRef.current,
        width: "100%",
        height: "100%",
        configOverwrite: {
          prejoinConfig: { enabled: true },
          disableDeepLinking: true,
          subject: "Consultation — Manthar Ali",
        },
      });
    };

    if (window.JitsiMeetExternalAPI) {
      init();
    } else {
      const s = document.createElement("script");
      s.src = `https://${JITSI_DOMAIN}/external_api.js`;
      s.async = true;
      s.onload = init;
      s.onerror = () => setFailed(true);
      document.head.appendChild(s);
    }

    return () => {
      cancelled = true;
      api?.dispose();
    };
  }, [room]);

  return (
    <div className="flex h-dvh flex-col bg-ink">
      <header className="flex items-center justify-between gap-4 px-4 md:px-6 py-3">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-ink transition-transform group-hover:rotate-12 duration-500">
            <GoogleMapsPin size={14} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-medium tracking-tight text-paper">
              Manthar Ali
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-paper/50">
              Consultation room
            </span>
          </span>
        </Link>
        <a
          href={`https://wa.me/923083106882?text=${encodeURIComponent(
            "Hi Manthar — I'm in the consultation room, waiting for you."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[12px] text-paper/70 hover:text-paper transition-colors"
        >
          <MessageCircle size={14} />
          <span className="hidden sm:inline">Trouble joining? WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </header>

      <div className="relative flex-1 overflow-hidden">
        {failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-paper/80 text-[15px] max-w-sm leading-relaxed">
              The embedded room couldn&apos;t load — no problem, the same call
              works in its own tab:
            </p>
            <a
              href={`https://${JITSI_DOMAIN}/${room}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-paper px-6 py-3.5 text-[12px] tracking-[0.2em] uppercase font-medium text-ink"
            >
              Open the call
              <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <div ref={frameRef} className="h-full w-full" />
        )}
      </div>

      <p className="px-4 md:px-6 py-2.5 text-center text-[11px] text-paper/40">
        If the room says it&apos;s waiting for a moderator, hang tight — Manthar
        is signing in.
      </p>
    </div>
  );
}
