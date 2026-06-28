import { projects, lanes } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedProject } from "@/components/featured-project";
import { ProjectRow } from "@/components/project-row";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <FadeIn>
        <SectionHeading
          title="Work"
          subtitle="Things I build in my own time — Rust tooling, ML systems from scratch, game tech, and Fallout 4 reverse-engineering."
          marker={`${projects.length} projects`}
        />
      </FadeIn>

      {/* Featured */}
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project, index) => (
          <FadeIn key={project.title} delay={index * 100}>
            <FeaturedProject project={project} />
          </FadeIn>
        ))}
      </div>

      {/* Index, grouped by lane */}
      <div className="mt-16 space-y-14">
        {lanes.map((lane) => {
          const items = rest.filter((project) => project.lane === lane);
          if (items.length === 0) return null;

          return (
            <div key={lane}>
              <FadeIn>
                <div className="mb-2 flex items-center gap-4">
                  <h3 className="font-mono text-sm font-medium text-accent">
                    {lane}
                  </h3>
                  <span className="h-px flex-1 bg-line" />
                  <span className="tnum font-mono text-xs text-faint">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
              </FadeIn>
              <div>
                {items.map((project, index) => (
                  <FadeIn key={project.title} delay={index * 70}>
                    <ProjectRow project={project} />
                  </FadeIn>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
