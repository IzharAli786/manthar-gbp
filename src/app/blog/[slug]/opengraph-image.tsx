import { ImageResponse } from "next/og";
import { getPost, POSTS } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Field Notes — Manthar Ali";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

const PAPER = "#f2eee5";
const INK = "#0e1f1c";
const BRASS = "#b08d57";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  const title = post?.title ?? "Field Notes";

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
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 999,
                background: BRASS,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: INK,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "rgba(242,238,229,0.7)",
              }}
            >
              Field Notes · Manthar Ali
            </div>
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 3,
              color: BRASS,
            }}
          >
            GBP · Local SEO
          </div>
        </div>

        <div
          style={{
            fontSize: title.length > 55 ? 56 : 64,
            fontWeight: 700,
            letterSpacing: -1.5,
            lineHeight: 1.12,
            maxWidth: 1020,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(242,238,229,0.22)",
            paddingTop: 28,
            fontSize: 24,
          }}
        >
          <span style={{ color: "rgba(242,238,229,0.8)" }}>
            manthargbpfix.com/blog
          </span>
          <span style={{ color: BRASS }}>
            Written from real cases — not theory.
          </span>
        </div>
      </div>
    ),
    size
  );
}
