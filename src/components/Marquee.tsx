import { GoogleMapsPin } from "./brand/GoogleLogo";

const items = [
  "Google Business Profile",
  "Local SEO",
  "Map Pack Ranking",
  "Reputation Engineering",
  "Digital Media Strategy",
  "Content Systems",
  "Paid Acquisition",
  "Brand Operating System",
];

export default function Marquee() {
  return (
    <div className="marquee-host hairline-t hairline-b py-5 md:py-7 overflow-hidden bg-paper-soft relative">
      <div className="flex w-max animate-marquee whitespace-nowrap items-center">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="display text-[8vw] md:text-[5vw] mx-8 md:mx-10 text-ink/85 flex items-center"
          >
            {it}
            <span className="mx-6 md:mx-10 inline-flex items-center align-middle">
              <GoogleMapsPin size={28} />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
