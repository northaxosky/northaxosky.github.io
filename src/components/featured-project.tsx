"use client";

import type { Project } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CountUp, EASE } from "@/components/motion/primitives";

export function FeaturedProject({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.a
      data-reveal
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col border border-line bg-surface/30 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8"
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
    >
      {/* module-mounted accent line */}
      <motion.span
        className="mb-5 block h-px w-10 origin-left bg-accent/60"
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 + 0.15 }}
      />

      <div className="flex items-center justify-between font-mono text-xs text-faint">
        <span>{project.lane}</span>
        <span className="flex items-center gap-3">
          {project.stars != null && (
            <CountUp value={project.stars} prefix="★ " />
          )}
          <ArrowUpRight
            size={16}
            className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 font-mono text-sm text-muted">{project.summary}</p>
      {project.description && (
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors group-hover:border-line-strong"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
