import type { Project } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-5 transition-colors duration-300 hover:border-accent/40"
    >
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
            {project.title}
          </h4>
          <span className="hidden truncate font-mono text-xs text-faint sm:inline">
            {project.tags.join(" · ")}
          </span>
        </div>
        <p className="mt-1 truncate text-sm text-muted">{project.summary}</p>
      </div>

      <div className="flex shrink-0 items-center gap-3 font-mono text-xs text-faint">
        {project.stars != null && <span className="tnum">★ {project.stars}</span>}
        <ArrowUpRight
          size={15}
          className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
    </a>
  );
}
