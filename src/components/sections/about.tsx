"use client";

import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, container, staggerItem } from "@/components/motion/primitives";
import { motion } from "motion/react";

const facts: { label: string; value: string }[] = [
  { label: "Now", value: profile.now },
  { label: "Focus", value: "Systems & tooling · ML · game tech · Fallout 4" },
  { label: "Studied", value: "B.S. Computer Science, UW Bothell" },
  { label: "Previously", value: "AWS · 2× software engineer intern" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading title="About" subtitle="A bit about how I work." />

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="max-w-[68ch] space-y-5">
          <p className="text-xl leading-relaxed text-ink">{profile.about[0]}</p>
          <p className="text-lg leading-relaxed text-muted">
            {profile.about[1]}
          </p>
        </Reveal>

        <motion.dl
          data-reveal
          className="divide-y divide-line border-t border-line"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
          variants={container(0.09)}
        >
          {facts.map((fact) => (
            <motion.div
              key={fact.label}
              variants={staggerItem}
              className="grid grid-cols-[92px_1fr] gap-4 py-4"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                {fact.label}
              </dt>
              <dd className="text-sm leading-relaxed text-ink">{fact.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
