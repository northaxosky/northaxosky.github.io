import { experiences } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap } from "lucide-react";

const typeIcon = {
  work: Briefcase,
  internship: Briefcase,
  education: GraduationCap,
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <SectionHeading title="Experience" subtitle="Where I've worked and studied." />
      </FadeIn>

      <div className="relative ml-4 border-l border-card-border pl-8">
        {experiences.map((exp, index) => {
          const Icon = typeIcon[exp.type];
          return (
            <FadeIn key={`${exp.company}-${exp.title}`} delay={index * 100}>
              <div className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[calc(2rem+0.5625rem)] flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full border-2 border-accent bg-background">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <div className="rounded-xl border border-card-border bg-card p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <Icon size={18} className="text-accent" />
                    <span className="text-sm font-medium text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
