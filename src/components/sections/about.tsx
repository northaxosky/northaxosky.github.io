import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap, Gamepad2 } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "SDE at Microsoft",
    detail: "Previously interned at AWS",
  },
  {
    icon: GraduationCap,
    label: "CS Graduate",
    detail: "University of Washington Bothell",
  },
  {
    icon: Gamepad2,
    label: "Game Modder",
    detail: "Fallout 4 plugins & reverse engineering",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <SectionHeading title="About" subtitle="A bit about me." />
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="text-lg leading-relaxed text-muted">
            {profile.about}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="space-y-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
