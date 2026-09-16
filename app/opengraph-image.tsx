import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Default Open Graph / social share image (1200x630), brand-colored.
export const alt = `${site.name} — Commercial Cleaning & Janitorial Services`;
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
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 600px at 85% -10%, rgba(59,158,255,0.25), transparent 60%), linear-gradient(135deg, #0A1B3D 0%, #12264F 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span style={{ fontSize: 56, fontWeight: 800 }}>CLO</span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 8,
              color: "#3B9EFF",
            }}
          >
            JANITORIAL
          </span>
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            marginTop: 40,
            maxWidth: 900,
          }}
        >
          A Cleaner Workplace Starts Here.
        </div>
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.75)",
            marginTop: 28,
            maxWidth: 850,
          }}
        >
          Reliable, fully-insured commercial cleaning & janitorial services.
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 44,
            fontSize: 24,
            color: "#3B9EFF",
            fontWeight: 600,
          }}
        >
          <span>Insured &amp; Bonded</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
          <span>Background-Checked Staff</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
          <span>{site.region}</span>
        </div>
      </div>
    ),
    size,
  );
}
