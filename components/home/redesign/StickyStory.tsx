"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll, type MotionValue } from "motion/react";

export type Scene = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  body: string;
};

type Props = {
  scenes: Scene[];
  align?: "media-left" | "media-right";
  className?: string;
};

/**
 * Scroll-driven story with a pinned media pane.
 *
 *  - The section is `N × 100vh` tall (N = scenes.length) so the sticky pane has
 *    enough scroll room to swap through every scene.
 *  - `useScroll` gives a 0→1 progress over the whole section.
 *  - Each scene owns a slice of that progress; a small window around each slice
 *    fades its image in, everything else fades out — a scroll-driven crossfade.
 *  - Media also carries a subtle parallax scale/translate so it reads as living
 *    material, not a static poster.
 *
 * Implementation note: we subscribe to `scrollYProgress` via
 * `useMotionValueEvent` and write directly to `ref.style` instead of piping
 * MotionValues into `motion.div`. This avoids motion@13's brittle validation
 * around style-attached MotionValues and stays perfectly smooth (one write per
 * animation frame — same as motion.div does internally).
 */
export default function StickyStory({ scenes, align = "media-left", className = "" }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const mediaOrder = align === "media-left" ? "lg:order-1" : "lg:order-2";
  const copyOrder = align === "media-left" ? "lg:order-2" : "lg:order-1";

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{ height: `${scenes.length * 100}vh`, position: "relative" }}
    >
      {/* Pinned viewport — sticks for the full section height */}
      <div
        className="tk-container-wide"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full">
          {/* MEDIA PANE */}
          <div className={`lg:col-span-7 ${mediaOrder} relative`}>
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "var(--tk-radius-shell)",
                background: "var(--tk-canvas-elev)",
                boxShadow: "var(--tk-glass-shadow-lg)",
              }}
            >
              {scenes.map((scene, i) => (
                <MediaLayer
                  key={`${scene.image}-${i}`}
                  scene={scene}
                  index={i}
                  total={scenes.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* COPY PANE */}
          <div className={`lg:col-span-5 ${copyOrder} relative flex flex-col justify-center`}>
            {scenes.map((scene, i) => (
              <CopyLayer
                key={`${scene.title}-${i}`}
                scene={scene}
                index={i}
                total={scenes.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Linear ramp — value goes 0 → 1 as x moves through [from, to].
 * Outside the range it clamps to 0 or 1.
 */
function ramp(x: number, from: number, to: number): number {
  if (from === to) return x >= to ? 1 : 0;
  const t = (x - from) / (to - from);
  return t <= 0 ? 0 : t >= 1 ? 1 : t;
}

/**
 * Trapezoidal opacity envelope:
 *   0 outside [fadeIn - fadeSlop, fadeOut + fadeSlop]
 *   linear ramp up over [fadeIn - fadeSlop, fadeIn]
 *   1 across [fadeIn, fadeOut]
 *   linear ramp down over [fadeOut, fadeOut + fadeSlop]
 */
function envelope(x: number, fadeIn: number, fadeOut: number, slop: number): number {
  return ramp(x, fadeIn - slop, fadeIn) * (1 - ramp(x, fadeOut, fadeOut + slop));
}

function MediaLayer({
  scene,
  index,
  total,
  progress,
}: {
  scene: Scene;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const win = 1 / total;
  const center = (index + 0.5) * win;
  const fadeIn = center - win * 0.55;
  const fadeOut = center + win * 0.55;
  const slop = win * 0.15;

  const apply = (v: number) => {
    const el = ref.current;
    if (!el) return;
    const opacity = envelope(v, fadeIn, fadeOut, slop);
    const t = ramp(v, fadeIn, fadeOut);
    const y = 12 + (-12 - 12) * t; // 12 → -12
    const scale = 1.02 + (0.99 - 1.02) * t; // 1.02 → 0.99
    el.style.opacity = opacity.toFixed(3);
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
  };

  // Prime on mount (SSR ships opacity: 0 so nothing flashes before the first
  // scroll event fires).
  useEffect(() => {
    apply(progress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(progress, "change", apply);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0,
        willChange: "opacity, transform",
      }}
    >
      <Image
        src={scene.image}
        alt={scene.imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        style={{ objectFit: "cover" }}
        priority={index === 0}
      />
    </div>
  );
}

function CopyLayer({
  scene,
  index,
  total,
  progress,
}: {
  scene: Scene;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const win = 1 / total;
  const center = (index + 0.5) * win;
  const fadeIn = center - win * 0.5;
  const fadeOut = center + win * 0.5;
  const slop = win * 0.2;

  const apply = (v: number) => {
    const el = ref.current;
    if (!el) return;
    const opacity = envelope(v, fadeIn, fadeOut, slop);
    const t = ramp(v, fadeIn, fadeOut);
    const y = 20 + (-20 - 20) * t; // 20 → -20
    el.style.opacity = opacity.toFixed(3);
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
  };

  useEffect(() => {
    apply(progress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(progress, "change", apply);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        willChange: "opacity, transform",
      }}
    >
      {scene.eyebrow ? (
        <span className="tk-eyebrow mb-4" style={{ color: "var(--tk-accent)" }}>
          {scene.eyebrow}
        </span>
      ) : null}
      <h3
        className="tk-headline"
        style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)", color: "var(--tk-ink)" }}
      >
        {scene.title}
      </h3>
      <p
        className="mt-5 max-w-md"
        style={{
          color: "var(--tk-ink-muted)",
          fontSize: "1.0625rem",
          lineHeight: 1.6,
        }}
      >
        {scene.body}
      </p>
    </div>
  );
}
