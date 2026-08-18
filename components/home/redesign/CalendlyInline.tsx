"use client";

import { useEffect } from "react";

type Props = {
  url: string;
  height?: number | string;
  className?: string;
};

/**
 * Inline Calendly widget. Loads their external widget script once per page,
 * then Calendly hydrates any `.calendly-inline-widget[data-url]` node it finds.
 */
export default function CalendlyInline({ url, height = 720, className }: Props) {
  useEffect(() => {
    const SRC = "https://assets.calendly.com/assets/external/widget.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const src = url.includes("?")
    ? `${url}&hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=2563eb`
    : `${url}?hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=2563eb`;

  return (
    <div
      className={`calendly-inline-widget ${className ?? ""}`.trim()}
      data-url={src}
      style={{ minWidth: 300, width: "100%", height }}
    />
  );
}
