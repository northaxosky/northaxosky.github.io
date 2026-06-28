"use client";

import { projects, lanes } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedProject } from "@/components/featured-project";
import { ProjectRow } from "@/components/project-row";
import { motion } from "motion/react";
import { container, Rule, CountUp } from "@/components/motion/primitives";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading
        title="Work"
        subtitle="Things I build in my own time: Rust tooling, ML systems from scratch, game tech, and Fallout 4 reverse-engineering."
        marker={<CountUp value={projects.length} suffix=" projects" />}
      />

      {/* Featured */}
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project, index) => (
          <FeaturedProject key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Index, grouped by lane */}
      <div className="mt-16 space-y-14">
        {lanes.map((lane) => {
          const items = rest.filter((project) => project.lane === lane);
          if (items.length === 0) return null;

          return (
            <div key={lane}>
              <div className="mb-2 flex items-center gap-4">
                <h3 className="shrink-0 font-mono text-sm font-medium text-accent">
                  {lane}
                </h3>
                <Rule className="h-px flex-1" />
                <span className="shrink-0 font-mono text-xs text-faint">
                  <CountUp
                    value={items.length}
                    prefix={items.length < 10 ? "0" : ""}
                  />
                </span>
              </div>
              <motion.div
                data-reveal
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
                variants={container(0.07)}
              >
                {items.map((project) => (
                  <ProjectRow key={project.title} project={project} />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
