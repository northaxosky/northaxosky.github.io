"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Rule, EASE } from "@/components/motion/primitives";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  marker?: ReactNode;
}

export function SectionHeading({ title, subtitle, marker }: SectionHeadingProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex items-end justify-between gap-4 pb-4">
        <motion.h2
          data-reveal
          className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {title}
        </motion.h2>
        {marker && (
          <span className="shrink-0 pb-1 font-mono text-xs text-faint">
            {marker}
          </span>
        )}
      </div>

      <Rule className="h-px w-full" />

      {subtitle && (
        <motion.p
          data-reveal
          className="mt-4 max-w-2xl leading-relaxed text-muted"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
