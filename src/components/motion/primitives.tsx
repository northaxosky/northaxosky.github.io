"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  animate,
  type Variants,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Shared variants. Parent uses `container`, children use `staggerItem`. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function container(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  };
}

const viewport = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" } as const;

/** Generic scroll reveal. `data-reveal` lets the no-JS fallback force it visible. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** A hairline that draws itself when scrolled into view. */
export function Rule({
  className = "",
  axis = "x",
}: {
  className?: string;
  axis?: "x" | "y";
}) {
  const reduced = useReducedMotion();
  const initial = axis === "x" ? { scaleX: 0 } : { scaleY: 0 };
  const shown = axis === "x" ? { scaleX: 1 } : { scaleY: 1 };
  return (
    <motion.span
      data-reveal
      className={`block bg-line ${className}`}
      style={{ transformOrigin: axis === "x" ? "left" : "top" }}
      initial={reduced ? false : initial}
      whileInView={shown}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: EASE }}
    />
  );
}

/** Counts up to `value` once, when scrolled into view. SSR renders the final value. */
export function CountUp({
  value,
  className,
  suffix = "",
  prefix = "",
}: {
  value: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  // Pre-set to 0 while off-screen so the count starts clean, with no flash.
  useEffect(() => {
    const el = ref.current;
    if (el && reduced === false) el.textContent = `${prefix}0${suffix}`;
  }, [reduced, prefix, suffix]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !inView) return;
    const controls = animate(0, value, {
      duration: 0.9,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduced, value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/**
 * Briefly cycles random monospace characters, then settles on `text` —
 * the "register loading" tick for the hero spec values. SSR renders `text`.
 */
export function Scramble({
  text,
  className,
  play,
}: {
  text: string;
  className?: string;
  play: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced || !play) {
      el.textContent = text;
      return;
    }
    const glyphs = "ABCDEFGHIJKLMNPRSTUVWXYZ0123456789/.·-+";
    const steps = 9;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const settled = (frame / steps) * text.length;
      el.textContent = text
        .split("")
        .map((ch, i) =>
          ch === " " || i < settled
            ? ch
            : glyphs[Math.floor(Math.random() * glyphs.length)]
        )
        .join("");
      if (frame >= steps) {
        clearInterval(id);
        el.textContent = text;
      }
    }, 45);
    return () => clearInterval(id);
  }, [text, play, reduced]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
