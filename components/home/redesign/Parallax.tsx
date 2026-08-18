"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

type Props = {
  src: string;
  alt: string;
  height?: string;
  strength?: number;
  overlay?: string;
  radius?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  priority?: boolean;
  objectPosition?: string;
};

/**
 * Big media pane with a scroll-driven parallax translate on the inner image.
 * The container defines the visible frame; the image inside is oversized and
 * shifted vertically as the frame moves through the viewport.
 *
 * Writes `transform` directly (bypasses motion@13 style-attach quirks and stays
 * on the compositor — one write per frame).
 */
export default function Parallax({
  src,
  alt,
  height = "80vh",
  strength = 120,
  overlay,
  radius,
  className = "",
  style,
  children,
  priority = false,
  objectPosition = "center",
}: Props) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });

  const apply = (v: number) => {
    const el = imgRef.current;
    if (!el) return;
    const y = (v - 0.5) * strength * 2;
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.18)`;
  };

  useEffect(() => {
    apply(scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(scrollYProgress, "change", apply);

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden ${className}`.trim()}
      style={{ height, borderRadius: radius, ...style }}
    >
      <div
        ref={imgRef}
        style={{
          position: "absolute",
          inset: "-9%",
          willChange: "transform",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition }}
        />
      </div>
      {overlay ? (
        <div
          aria-hidden
          style={{ position: "absolute", inset: 0, background: overlay, pointerEvents: "none" }}
        />
      ) : null}
      {children ? (
        <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
