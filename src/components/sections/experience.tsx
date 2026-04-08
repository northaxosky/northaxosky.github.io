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
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <FadeIn>
        <SectionHeading title="Experience" subtitle="Where I've worked and studied." />
      </FadeIn>

      <div className="relative ml-4 border-l border-glass-border pl-8">
        {experiences.map((exp, index) => {
          const Icon = typeIcon[exp.type];
          return (
            <FadeIn key={`${exp.company}-${exp.title}`} delay={index * 120}>
              <div className="relative mb-12 last:mb-0">
                {/* Timeline dot with glow */}
                <div className="absolute -left-[calc(2rem+0.5625rem)] flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full border-2 border-accent/60 bg-background shadow-[0_0_12px_rgba(0,220,130,0.3)]">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <div className="group rounded-2xl glass p-6 transition-all duration-300 hover:bg-glass-highlight glow-accent-hover">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon size={16} className="text-accent" />
                    <span className="text-xs font-mono font-medium uppercase tracking-wider text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-mono font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm font-mono font-medium text-muted">
                    <span className="text-accent/40">@</span>{exp.company.toLowerCase().replace(/\s+/g, "_")}
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
