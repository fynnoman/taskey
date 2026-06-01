import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taskey – Gebäudereinigungssoftware",
    short_name: "Taskey",
    description:
      "All-in-One Reinigungssoftware mit NFC-Zeiterfassung, Einsatzplanung, Live-Margen und DATEV-Export. DSGVO-konform, Made in Germany.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#1d4ed8",
    lang: "de",
    dir: "ltr",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/logobittt.png",
        sizes: "800x800",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo_transparent.png",
        sizes: "886x886",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
