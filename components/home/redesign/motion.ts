import type { Transition } from "motion/react";

/**
 * Apple-style spring presets.
 * Default is critically damped (no overshoot) — reserve bounce for
 * momentum-driven interactions (flick, snap, release).
 */
export const springs = {
  base:     { type: "spring", bounce: 0,    duration: 0.5 } satisfies Transition,
  snappy:   { type: "spring", bounce: 0,    duration: 0.35 } satisfies Transition,
  soft:     { type: "spring", bounce: 0,    duration: 0.8 } satisfies Transition,
  momentum: { type: "spring", bounce: 0.18, duration: 0.5 } satisfies Transition,
  drawer:   { type: "spring", bounce: 0.15, duration: 0.4 } satisfies Transition,
} as const;

/**
 * Named viewport-enter animation used across sections.
 * Uses `whileInView` triggers so it plays once when the element enters.
 */
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: springs.base,
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: springs.soft,
} as const;

/**
 * Stagger container helper — apply to a parent, wrap children in
 * `motion.div` with `variants={staggerChild}` to get an even cascade.
 */
export const staggerParent = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  viewport: { once: true, amount: 0.2 },
} as const;

export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: springs.base },
} as const;
