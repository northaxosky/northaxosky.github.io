import { experiences } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <FadeIn>
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and studied."
        />
      </FadeIn>

      <ol className="border-l border-line">
        {experiences.map((exp, index) => (
          <FadeIn key={`${exp.company}-${exp.title}`} delay={index * 100}>
            <li className="relative pb-10 pl-8 last:pb-0">
              <span
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {exp.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-faint">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-ink/80">
                {exp.company}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
