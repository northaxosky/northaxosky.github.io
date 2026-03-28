import type { Project } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/40 hover:bg-card/80"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <ExternalLink
          size={16}
          className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
