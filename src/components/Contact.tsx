import Image from "next/image";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { GoogleG } from "./brand/GoogleLogo";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const EMAIL = "balochmanthar15@gmail.com";
const FIVERR = "https://www.fiverr.com/";
const WHATSAPP =
  "https://wa.me/923083106882?text=" +
  encodeURIComponent(
    "Hi Manthar — I'd like to discuss a GBP / digital media project."
  );

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 mx-auto max-w-[1400px] px-5 md:px-10"
    >
      <Reveal>
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-line-strong" />
          Contact — 06
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="display text-[14vw] md:text-[10vw] xl:text-[160px] leading-[0.9] mt-6">
          Let&apos;s
          <br />
          <span className="italic">build something</span>
          <br />
          <span className="text-brass-shine">unmissable.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-12 gap-8 md:gap-10 mt-14 md:mt-20">
        {/* Left — identity card */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4">
          <Reveal delay={0.15}>
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full hairline-strong">
                  <Image
                    src="/manthar.jpeg"
                    alt="Manthar Ali"
                    fill
                    sizes="64px"
                    className="object-cover object-center grayscale-[0.15]"
                  />
                </div>
                <div className="min-w-0">
                  <p className="display text-2xl md:text-[26px] leading-tight">
                    Manthar Ali
                  </p>
                  <p className="text-[12px] text-ink-mute mt-0.5 flex items-center gap-1.5">
                    <GoogleG size={12} />
                    Google Business Profile Expert
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">
                Reach out directly — I personally read every message. Replies
                within 24 hours, weekdays.
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={`mailto:${EMAIL}?subject=Project%20Enquiry%20—%20Manthar%20Ali`}
                  className="group flex items-center gap-3 hairline-strong rounded-md px-3.5 py-3 transition-colors hover:bg-ink hover:text-paper hover:border-ink"
                >
                  <Mail size={16} strokeWidth={1.5} className="shrink-0" />
                  <span className="text-[13px] truncate flex-1">{EMAIL}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hairline-strong rounded-md px-3.5 py-3 transition-colors hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0"
                  />
                  <span className="text-[13px] flex-1">
                    WhatsApp · +92 308 3106882
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                </a>

                <a
                  href={FIVERR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hairline-strong rounded-md px-3.5 py-3 transition-colors hover:bg-ink hover:text-paper hover:border-ink"
                >
                  <span className="font-mono text-[11px] tracking-wider shrink-0">
                    fvr
                  </span>
                  <span className="text-[13px] flex-1">
                    Browse on Fiverr · 600+ reviews
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                </a>
              </div>

              <div className="mt-7 pt-6 hairline-t flex items-center justify-between">
                <p className="eyebrow !text-[10px]">Status</p>
                <p className="text-[12px] text-ink-soft flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-g-green" />
                  Available · Q2 slots open
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
