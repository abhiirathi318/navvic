import { ImageResponse } from "next/og";

export const alt =
  "Navvic — Import-Export, Freight & Free Trade Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1000px 500px at 75% -10%, #0e8bb0, transparent), linear-gradient(135deg, #06192c 0%, #0a2540 55%, #03111f 100%)",
          color: "#eaf6fb",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #22a7c9, #0a2540)",
              boxShadow: "0 20px 60px rgba(34,167,201,0.4)",
            }}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="3" />
              <line x1="12" y1="22" x2="12" y2="8" />
              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
            <span style={{ color: "#ffffff" }}>Nav</span>
            <span style={{ color: "#57c6e0" }}>vic</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
            Import-Export, Freight &amp; Free Trade Tools
          </div>
          <div style={{ fontSize: 30, color: "#8fb3c9", maxWidth: 900 }}>
            HS code lookup · Import duty &amp; landed-cost · Incoterms · Freight &amp; container calculator
          </div>
        </div>

        {/* chips */}
        <div style={{ display: "flex", gap: 16 }}>
          {["40+ countries", "Ocean & air freight", "Customs cleared", "navvic.com"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                color: "#cfe7f2",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(87,198,224,0.35)",
                background: "rgba(34,167,201,0.10)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
