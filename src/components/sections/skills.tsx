import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <SectionHeading title="Skills" subtitle="Technologies I work with." />
      </FadeIn>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.name} delay={index * 100}>
            <div className="rounded-xl border border-card-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-background px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
