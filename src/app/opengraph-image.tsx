import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the link is shared on LinkedIn, Messenger or Slack.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", width: "100%", height: "100%", padding: "72px 80px", background: "#14100E" }}>
        <div style={{ fontSize: 26, color: "#E2703A", letterSpacing: 6, marginBottom: 26 }}>{SITE.tagline.toUpperCase()}</div>
        <div style={{ fontSize: 112, fontWeight: 800, color: "#F4EDE5", letterSpacing: -4, lineHeight: 1 }}>{SITE.name}</div>
        <div style={{ marginTop: 26, fontSize: 36, color: "#C9B8A8" }}>Everything here meets the fire first.</div>
      </div>
    ),
    size,
  );
}
