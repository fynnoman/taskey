"use client";

import { useEffect, useRef } from "react";

/**
 * useParallax — sehr günstige Scroll-Parallax für Bilder.
 * Der Ref-Container wird beim Scroll um `strength` Prozent langsamer bewegt
 * als der Rest der Seite. `strength` = 0.15 → 15% langsamer.
 * Nutzt ein rAF + nur aktiv, wenn Element im Viewport ist.
 */
export function useParallax<T extends HTMLElement>(strength: number = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect user preference
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    let inView = false;
    let ticking = false;
    let rafId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (inView = e.isIntersecting));
      },
      { threshold: 0, rootMargin: "200px 0px" }
    );
    observer.observe(el);

    const update = () => {
      ticking = false;
      if (!inView || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress von -1 (noch unten) bis +1 (oben raus), 0 = zentriert
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      // 15% langsamer bedeutet: verschiebe image um -progress * strength * rect.height
      const offset = -progress * strength * rect.height;
      ref.current.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return ref;
}
