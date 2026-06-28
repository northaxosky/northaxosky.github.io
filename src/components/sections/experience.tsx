"use client";

import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { container, staggerItem, Rule, EASE } from "@/components/motion/primitives";
import { motion, useReducedMotion } from "motion/react";

export function Experience() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading
        title="Experience"
        subtitle="Where I've worked and studied."
      />

      <div className="relative">
        <Rule axis="y" className="absolute left-0 top-1 h-[calc(100%-1.5rem)] w-px" />
        <motion.ol
          data-reveal
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
          variants={container(0.12)}
        >
          {experiences.map((exp) => (
            <motion.li
              key={`${exp.company}-${exp.title}`}
              variants={staggerItem}
              className="relative mb-10 pl-8 last:mb-0"
            >
              <motion.span
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
                aria-hidden="true"
                initial={reduced ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: EASE }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {exp.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-faint">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink/80">
                {exp.company}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
