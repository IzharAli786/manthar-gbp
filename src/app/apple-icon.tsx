import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #142a25 0%, #0a1815 100%)",
          borderRadius: 36,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c9a87c" />
              <stop offset="55%" stopColor="#b08d57" />
              <stop offset="100%" stopColor="#8a6b3d" />
            </linearGradient>
          </defs>
          <path
            d="M16 6.5c-3.6 0-6.5 2.9-6.5 6.4 0 4.8 6.5 12.6 6.5 12.6s6.5-7.8 6.5-12.6c0-3.5-2.9-6.4-6.5-6.4z"
            fill="url(#brass)"
          />
          <circle cx="16" cy="13" r="2.4" fill="#f4eddc" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
