import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const alt = "Gaby — Jean Gabriel Goudiaby, Software Engineer / Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 64, background: "#f7f3eb", color: "#24231f" }}>
      <div style={{ display: "flex", fontSize: 28 }}>JG / {profile.signature}</div>
      <div style={{ display: "flex", fontSize: 100 }}>Gaby<span style={{ color: "#f4652b" }}>.</span></div>
      <div style={{ display: "flex", fontSize: 32 }}>{profile.name}</div>
      <div style={{ display: "flex", fontSize: 28 }}>{profile.role}</div>
    </div>, size,
  );
}
