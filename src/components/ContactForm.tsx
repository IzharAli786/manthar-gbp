"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

const ENDPOINT = "https://formsubmit.co/ajax/balochmanthar15@gmail.com";

const services = [
  "GBP Setup & Optimization",
  "GBP Reinstatement",
  "Local SEO & Map-Pack Ranking",
  "Google Local Ads",
  "Reputation & Reviews",
  "Digital Media Strategy",
  "Website Development",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots fill this, humans don't
    if (fd.get("_honey")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: `${fd.get("firstName")} ${fd.get("lastName")}`.trim(),
      email: fd.get("email"),
      service: fd.get("service"),
      message: fd.get("message"),
      _subject: `New project enquiry — ${fd.get("service") || "general"}`,
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
        setStatus("success");
        form.reset();
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

  if (status === "success") {
    return (
      <div className="card p-8 md:p-10 text-center min-h-[420px] flex flex-col items-center justify-center">
        <div className="grid place-items-center h-14 w-14 rounded-full bg-g-green/15 text-g-green mb-5">
          <CheckCircle2 size={28} strokeWidth={1.5} />
        </div>
        <h3 className="display text-3xl md:text-4xl">Message received.</h3>
        <p className="mt-3 text-ink-mute max-w-sm">
          Thanks — I&apos;ll get back to you within 24 hours, weekdays. For
          anything urgent, ping me on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 btn-ghost px-6 py-3 text-[12px] tracking-[0.2em] uppercase"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="card p-6 md:p-8 space-y-5"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />

      <SelectField label="Service" name="service" options={services} required />

      <TextareaField
        label="Tell me about your project"
        name="message"
        rows={4}
        placeholder="Business name, location, what you're trying to fix or grow…"
      />

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <p className="text-[12px] text-ink-mute leading-snug max-w-xs">
          By sending, you agree I may reply by email or WhatsApp. No spam, ever.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-ink inline-flex items-center justify-center gap-3 px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message
              <Send size={15} />
            </>
          )}
        </button>
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

/* ─── Field primitives ─────────────────────────────────────── */

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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
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
        className={inputBase}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow !text-[10px] block mb-1.5">
        {label} {required && <span className="text-brass">*</span>}
      </span>
      <div className="relative">
        <select
          name={name}
          required={required}
          defaultValue=""
          className={`${inputBase} appearance-none pr-8 cursor-pointer`}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink-mute">
          ▾
        </span>
      </div>
    </label>
  );
}

function TextareaField({
  label,
  name,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow !text-[10px] block mb-1.5">{label}</span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={`${inputBase} resize-none py-3`}
      />
    </label>
  );
}
