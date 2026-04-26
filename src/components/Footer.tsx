import { GoogleMapsPin } from "./brand/GoogleLogo";

const EMAIL = "balochmanthar15@gmail.com";
const WHATSAPP = "https://wa.me/923083106882";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-t mt-10 bg-paper-soft">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-10 md:py-14 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink">
              <GoogleMapsPin size={18} />
            </span>
            <p className="display text-3xl md:text-4xl leading-none">
              Manthar Ali
            </p>
          </div>
          <p className="mt-3 text-[12px] tracking-[0.22em] uppercase text-ink-mute">
            GBP · Local SEO · Digital Media
          </p>
        </div>
        <div className="col-span-6 md:col-span-3 text-[13px] text-ink-soft space-y-1">
          <p className="eyebrow !text-[10px] mb-2">Reach</p>
          <a
            href={`mailto:${EMAIL}`}
            className="block hover:text-brass transition-colors break-all"
          >
            {EMAIL}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-brass transition-colors"
          >
            WhatsApp · +92 308 3106882
          </a>
          <a
            href="https://www.fiverr.com/mantharbaloc190"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-brass transition-colors"
          >
            Fiverr ↗
          </a>
        </div>
        <div className="col-span-6 md:col-span-3 text-right text-[12px] tracking-wider text-ink-mute">
          © {year} Manthar Ali.
          <br />
          All rights reserved.
        </div>
      </div>
      <div className="hairline-t">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-5 flex items-center justify-between text-[11px] tracking-[0.28em] uppercase text-ink-mute">
          <span>Karachi → Worldwide</span>
          <span className="hidden sm:inline">Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
