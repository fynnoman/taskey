"use client";

import { useEffect, useRef } from "react";

/**
 * useRevealOnScroll — Blur-Reveal beim ersten Sichtbar-Werden.
 * Fügt `is-revealed` hinzu, sobald das Element zu X% im Viewport ist.
 * Das eigentliche Styling passiert in globals.css (Klasse `.reveal-blur`).
 *
 * Usage:
 *   const ref = useRevealOnScroll<HTMLDivElement>();
 *   <div ref={ref} className="reveal-blur">...</div>
 */
export function useRevealOnScroll<T extends HTMLElement>(threshold: number = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion → sofort sichtbar, keine Animation
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      el.classList.add("is-revealed");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-revealed");
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}
