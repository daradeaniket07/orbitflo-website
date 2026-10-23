import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "nodejs";
export const alt = "OrbitFlo — We Don't Just Build Websites — We Build Digital Ecosystems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [background, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/images/og-background.jpg")),
    readFile(join(process.cwd(), "public/brand/orbitflo-wordmark.png")),
  ]);
  const backgroundSrc = `data:image/jpeg;base64,${background.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#05070D",
          backgroundImage: `linear-gradient(90deg, rgba(5,7,13,0.32) 0%, rgba(5,7,13,0.04) 100%), url(${backgroundSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "58px 72px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img alt="OrbitFlo" src={logoSrc} width="249" height="64" />
        <div
          style={{
            display: "flex",
            width: "530px",
            marginTop: "78px",
            color: "#F5F7FA",
            fontFamily: "Arial, sans-serif",
            fontSize: "56px",
            fontWeight: 600,
            letterSpacing: "-2px",
            lineHeight: 1.08,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}
