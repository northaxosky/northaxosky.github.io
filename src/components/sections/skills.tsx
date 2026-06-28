import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <FadeIn>
        <SectionHeading title="Stack" subtitle="Technologies I reach for." />
      </FadeIn>

      <dl className="divide-y divide-line border-y border-line">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.name} delay={index * 80}>
            <div className="grid gap-3 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
              <dt className="font-mono text-sm font-medium text-accent">
                {category.name}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-line px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}
