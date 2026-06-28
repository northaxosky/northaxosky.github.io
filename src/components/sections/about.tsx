import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

const facts: { label: string; value: string }[] = [
  { label: "Now", value: profile.now },
  { label: "Focus", value: "Systems & tooling · ML · game tech · Fallout 4" },
  { label: "Studied", value: "B.S. Computer Science — UW Bothell" },
  { label: "Previously", value: "AWS · 2× software engineer intern" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <FadeIn>
        <SectionHeading title="About" subtitle="A bit about how I work." />
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <FadeIn>
          <div className="max-w-[68ch] space-y-5">
            <p className="text-xl leading-relaxed text-ink">
              {profile.about[0]}
            </p>
            <p className="text-lg leading-relaxed text-muted">
              {profile.about[1]}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <dl className="divide-y divide-line border-t border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[92px_1fr] gap-4 py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-relaxed text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
