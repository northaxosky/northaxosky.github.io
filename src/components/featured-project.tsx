import type { Project } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col border border-line bg-surface/30 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8"
    >
      <div className="flex items-center justify-between font-mono text-xs text-faint">
        <span>{project.lane}</span>
        <span className="flex items-center gap-3">
          {project.stars != null && <span className="tnum">★ {project.stars}</span>}
          <ArrowUpRight
            size={16}
            className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
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
    </a>
  );
}
