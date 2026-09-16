import { ImageResponse } from "next/og";

// Apple touch icon (180x180).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A1B3D 0%, #12264F 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1 }}>CLO</div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#3B9EFF",
            marginTop: 6,
          }}
        >
          JANITORIAL
        </div>
      </div>
    ),
    size,
  );
}
