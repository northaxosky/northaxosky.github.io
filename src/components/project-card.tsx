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
      className="group relative flex flex-col rounded-2xl glass p-6 transition-all duration-300 glow-accent-hover shimmer-border hover:translate-y-[-2px]"
    >
      {/* Top row */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-mono text-lg font-bold text-foreground transition-colors group-hover:text-accent">
          <span className="text-accent/40 font-normal">_</span>{project.title}
        </h3>
        <ExternalLink
          size={16}
          className="text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/8 border border-accent/15 px-3 py-1 text-xs font-mono font-medium text-accent/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
