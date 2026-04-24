"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/**
 * RevealBlur — Wrapper, der seine Kinder beim Sichtbarwerden von unten
 * reinfliegen lässt und während der Bewegung unscharf ist.
 * Sobald das Element sichtbar wird, wird es scharf (blur 0) und rutscht
 * an seine Endposition.
 *
 * - respektiert prefers-reduced-motion
 * - triggert nur einmal (once)
 */
type Props = {
  children: ReactNode;
  /** Startversatz nach unten in px (default 80) */
  offset?: number;
  /** Start-Blur in px (default 20) */
  blur?: number;
  /** Verzögerung in ms (default 0) */
  delay?: number;
  /** Dauer in ms (default 1100) */
  duration?: number;
  className?: string;
  /** Wie groß muss der sichtbare Anteil sein, damit ausgelöst wird (0-1) */
  threshold?: number;
};

export default function RevealBlur({
  children,
  offset = 80,
  blur = 20,
  delay = 0,
  duration = 1100,
  className = "",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    // Reduced motion: sofort sichtbar, ohne Animation
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const style: React.CSSProperties = visible
    ? {
        transform: "translate3d(0, 0, 0)",
        filter: "blur(0px)",
        opacity: 1,
        transition: `transform ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, filter ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, opacity ${Math.round(
          duration * 0.9
        )}ms ease-out ${delay}ms`,
        willChange: "transform, filter, opacity",
      }
    : {
        transform: `translate3d(0, ${offset}px, 0)`,
        filter: `blur(${blur}px)`,
        opacity: 0,
        willChange: "transform, filter, opacity",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
