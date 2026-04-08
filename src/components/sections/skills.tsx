import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <FadeIn>
        <SectionHeading title="Skills" subtitle="Technologies I work with." />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.name} delay={index * 100}>
            <div className="rounded-2xl glass p-6 transition-all duration-300 hover:bg-glass-highlight glow-accent-hover">
              <h3 className="mb-5 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
                <span className="text-accent/40">_</span>{category.name.toLowerCase().replace(/\s+&\s+/g, "_")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-sm font-mono text-muted transition-colors hover:text-accent hover:border-accent/20 hover:bg-accent/5"
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
