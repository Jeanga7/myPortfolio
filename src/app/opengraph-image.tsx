import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const accent = "#00F2FF";
const warm = "#FFB000";
const magenta = "#FF007F";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,242,255,0.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(255,0,127,0.18), transparent 24%), linear-gradient(135deg, #05070A 0%, #09111B 55%, #05070A 100%)",
          color: "#F8FAFC",
          padding: "56px",
          fontFamily:
            'Nunito, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.03)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "74px",
            right: "84px",
            width: "210px",
            height: "210px",
            borderRadius: "999px",
            border: `1px solid ${accent}55`,
            boxShadow: `0 0 80px ${accent}30`,
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "104px",
            right: "114px",
            width: "150px",
            height: "150px",
            borderRadius: "999px",
            border: `1px solid ${warm}55`,
            boxShadow: `0 0 60px ${warm}22`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "86px",
            right: "126px",
            display: "flex",
            gap: "12px",
          }}
        >
          {["GO", "RUST", "REACT", "CLOUD"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 20,
                letterSpacing: "0.18em",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: accent,
              fontSize: 24,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                background: accent,
                boxShadow: `0 0 20px ${accent}`,
              }}
            />
            Portfolio interactif 3D
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "720px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              <span>Jean-Gabriel</span>
              <span style={{ color: "#E2E8F0" }}>Goudiaby</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: 30,
                color: "#CBD5E1",
              }}
            >
              <span style={{ color: warm }}>Ingénieur Full-Stack</span>
              <span style={{ color: "#475569" }}>•</span>
              <span style={{ color: magenta }}>Entrepreneur</span>
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: "760px",
                fontSize: 28,
                lineHeight: 1.35,
                color: "#94A3B8",
              }}
            >
              Architectures cloud, systèmes distribués, expériences web immersives
              et produits logiciels orientés impact.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 22,
              color: "#94A3B8",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <span>CV disponible</span>
              <span style={{ color: "#334155" }}>•</span>
              <span>jean-gabriel-goudiaby.vercel.app</span>
            </div>
            <div style={{ color: accent }}>Go • Rust • React • Next.js</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
