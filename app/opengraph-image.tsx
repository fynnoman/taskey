import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Taskey – Gebäudereinigungssoftware mit NFC-Zeiterfassung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #eff6ff 50%, #f8fafc 100%)",
          color: "#0f172a",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2563eb",
              boxShadow: "0 0 24px rgba(37,99,235,0.45)",
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#1d4ed8",
            }}
          >
            Taskey
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: 1000,
            }}
          >
            Gebäudereinigungs­software
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#475569",
              margin: 0,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            NFC-Zeiterfassung · Einsatzplanung · Live-Margen · DSGVO-konform · Made in Germany
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 700 }}>
            taskeyapp.com
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#64748b",
            }}
          >
            30 Tage kostenlos testen
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
