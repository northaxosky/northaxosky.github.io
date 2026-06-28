"use client";

import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { container, staggerItem, EASE } from "@/components/motion/primitives";
import { motion } from "motion/react";

export function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading title="Stack" subtitle="Technologies I reach for." />

      <dl className="divide-y divide-line border-y border-line">
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            data-reveal
            className="grid gap-3 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <dt className="font-mono text-sm font-medium text-accent">
              {category.name}
            </dt>
            <motion.dd
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={container(0.04)}
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={staggerItem}
                  className="border border-line px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
