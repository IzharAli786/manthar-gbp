"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Loader2,
  CalendarPlus,
  Video,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import Magnetic from "../Magnetic";
import {
  CONSULT_MINUTES,
  CONSULT_PRICE_USD,
  googleCalendarUrl,
  makeRoomSlug,
  roomPath,
  roomUrl,
} from "@/lib/consult";

const ENDPOINT = "https://formsubmit.co/ajax/balochmanthar15@gmail.com";
const WHATSAPP = "923083106882";

type Status = "idle" | "loading" | "error";
type Booking = { start: Date; slug: string };

export default function ConsultForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [booking, setBooking] = useState<Booking | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots fill this, humans don't
    if (fd.get("_honey")) {
      setBooking({ start: new Date(), slug: makeRoomSlug() });
      return;
    }

    const start = new Date(String(fd.get("preferred")));
    if (Number.isNaN(start.getTime()) || start.getTime() < Date.now()) {
      setStatus("error");
      setErrorMsg("Please pick a date and time in the future.");
      return;
    }

    setStatus("loading");
    const slug = makeRoomSlug();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const when = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(start);

    const payload = {
      Name: fd.get("name"),
      Email: fd.get("email"),
      "Mobile / WhatsApp": fd.get("phone"),
      "Requested time": `${when} (${tz})`,
      "What they need": fd.get("message") || "—",
      "Meeting room": roomUrl(slug),
      Session: `$${CONSULT_PRICE_USD} · ${CONSULT_MINUTES} min video consultation`,
      _subject: `New $${CONSULT_PRICE_USD} consultation booking — ${fd.get("name")}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("idle");
        setBooking({ start, slug });
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Could not send. Please try email or WhatsApp."
      );
    }
  }

  if (booking) {
    const when = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(booking.start);
    const waText = encodeURIComponent(
      `Hi Manthar — I just booked a $${CONSULT_PRICE_USD} video consultation for ${when}. My meeting room: ${roomUrl(
        booking.slug
      )}`
    );

    return (
      <div className="card p-8 md:p-10 text-center flex flex-col items-center">
        <div className="grid place-items-center h-14 w-14 rounded-full bg-g-green/15 text-g-green mb-5">
          <CheckCircle2 size={28} strokeWidth={1.5} />
        </div>
        <h3 className="display text-3xl md:text-4xl">Booking request sent.</h3>
        <p className="mt-3 text-ink-mute max-w-sm text-[14px] leading-relaxed">
          Requested for <span className="text-ink font-medium">{when}</span>.
          Manthar will confirm your slot by email or WhatsApp — the ${CONSULT_PRICE_USD} fee
          is settled on confirmation, nothing to pay online.
        </p>

        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <Magnetic>
            <a
              href={googleCalendarUrl(booking.start, booking.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink inline-flex w-full items-center justify-center gap-3 px-6 py-4 text-[12px] tracking-[0.2em] uppercase font-medium"
            >
              <CalendarPlus size={16} />
              Add to Google Calendar
            </a>
          </Magnetic>
          <Magnetic>
            <Link
              href={roomPath(booking.slug)}
              className="btn-ghost inline-flex w-full items-center justify-center gap-3 px-6 py-4 text-[12px] tracking-[0.2em] uppercase"
            >
              <Video size={16} />
              Your meeting room
            </Link>
          </Magnetic>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-2 text-[13px] text-ink-soft hover:text-brass-deep transition-colors"
          >
            <MessageCircle size={15} />
            Confirm faster on WhatsApp
            <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="mt-6 text-[12px] text-ink-mute max-w-xs leading-relaxed">
          Keep the meeting-room link — it&apos;s private to your booking, and
          it&apos;s where the call happens. The calendar invite has it too.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8 space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field label="Full name" name="name" required autoComplete="name" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          label="Mobile / WhatsApp"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          pattern="[+()0-9\-\s]{7,20}"
          placeholder="+1 555 000 0000"
        />
      </div>

      <label className="block">
        <span className="eyebrow !text-[10px] block mb-1.5">
          Preferred date &amp; time <span className="text-brass">*</span>
        </span>
        <input
          type="datetime-local"
          name="preferred"
          required
          step={900}
          className={`${inputBase} cursor-pointer`}
        />
        <span className="mt-1.5 block text-[11px] text-ink-mute">
          Your local time — {CONSULT_MINUTES} minutes. Manthar confirms or
          proposes the nearest slot.
        </span>
      </label>

      <label className="block">
        <span className="eyebrow !text-[10px] block mb-1.5">
          What should we dig into?
        </span>
        <textarea
          name="message"
          rows={3}
          placeholder="Business name, city, and the problem — suspension, ranking, reviews…"
          className={`${inputBase} resize-none py-3`}
        />
      </label>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <p className="text-[12px] text-ink-mute leading-snug max-w-xs">
          ${CONSULT_PRICE_USD} flat · {CONSULT_MINUTES} min. No online payment —
          you pay once Manthar confirms.
        </p>
        <Magnetic strength={0.25}>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-ink inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Booking
              </>
            ) : (
              <>
                Book the call
                <Video size={15} />
              </>
            )}
          </button>
        </Magnetic>
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2.5 p-3 hairline-strong bg-g-red/8 text-[13px] text-g-red rounded-md">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}
    </form>
  );
}

/* ─── Field primitives (match ContactForm) ─────────────────── */

const inputBase =
  "w-full bg-transparent text-ink placeholder:text-ink-mute/70 " +
  "border-0 border-b border-line-strong " +
  "focus:border-ink focus:outline-none focus:ring-0 " +
  "py-2.5 transition-colors";

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  pattern,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  pattern?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow !text-[10px] block mb-1.5">
        {label} {required && <span className="text-brass">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
        placeholder={placeholder}
        className={inputBase}
      />
    </label>
  );
}
