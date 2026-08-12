import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Manthar Ali — Google Business Profile Expert & Local SEO Specialist";

const PAPER = "#f2eee5";
const INK = "#0e1f1c";
const BRASS = "#b08d57";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          color: PAPER,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            {/* Brass map-pin mark */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 999,
                background: BRASS,
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: INK,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "rgba(242,238,229,0.75)",
              }}
            >
              GBP Studio
            </div>
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "rgba(242,238,229,0.55)",
            }}
          >
            manthargbpfix.com
          </div>
        </div>

        {/* Name + line */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 118,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.02,
            }}
          >
            Manthar Ali
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 34,
              color: BRASS,
            }}
          >
            Google Business Profile · Local SEO · #1 in the map pack
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(242,238,229,0.22)",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", fontSize: 26 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#fbbc04"
                >
                  <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ marginLeft: 16, color: "rgba(242,238,229,0.8)" }}>
              5.0 · 600+ reviews · Top Rated on Fiverr
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: BRASS }}>
            First place. That&apos;s the job.
          </div>
        </div>
      </div>
    ),
    size
  );
}
