import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <FadeIn>
        <SectionHeading
          title="Projects"
          subtitle="Things I've built in my own time."
        />
      </FadeIn>

      {/* Featured projects */}
      <div className="mb-12">
        <FadeIn>
          <p className="mb-6 text-xs font-mono uppercase tracking-widest text-accent/60">
            Featured
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Other projects */}
      <div>
        <FadeIn>
          <p className="mb-6 text-xs font-mono uppercase tracking-widest text-muted/40">
            Other
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {other.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
