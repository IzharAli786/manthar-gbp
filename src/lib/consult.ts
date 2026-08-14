import { SITE_URL } from "./services";

export const CONSULT_PRICE_USD = 50;
export const CONSULT_MINUTES = 45;
export const CONSULT_TITLE = "1:1 GBP Video Consultation — Manthar Ali";

/** Unguessable room slug — the link is only shared with the two parties. */
export function makeRoomSlug(): string {
  const hex = crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  return `manthar-gbp-${hex}`;
}

export const roomPath = (slug: string) => `/consultation/room/${slug}`;
export const roomUrl = (slug: string) => `${SITE_URL}${roomPath(slug)}`;

/** YYYYMMDDTHHMMSSZ — the UTC format Google Calendar's template URL expects. */
const fmtGCal = (d: Date) =>
  d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function googleCalendarUrl(start: Date, slug: string): string {
  const end = new Date(start.getTime() + CONSULT_MINUTES * 60_000);
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: CONSULT_TITLE,
    dates: `${fmtGCal(start)}/${fmtGCal(end)}`,
    details:
      `${CONSULT_MINUTES}-minute video consultation ($${CONSULT_PRICE_USD}) with Manthar Ali.\n\n` +
      `Join the call: ${roomUrl(slug)}\n\n` +
      `Booked on manthargbpfix.com`,
    location: roomUrl(slug),
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}
