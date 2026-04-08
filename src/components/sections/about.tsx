import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, GraduationCap, Gamepad2 } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "sde@microsoft",
    detail: "Previously interned at AWS",
  },
  {
    icon: GraduationCap,
    label: "cs_graduate",
    detail: "University of Washington Bothell",
  },
  {
    icon: Gamepad2,
    label: "game_modder",
    detail: "Fallout 4 plugins & reverse engineering",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
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
          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-xl glass p-4 transition-all duration-300 hover:bg-glass-highlight glow-accent-hover"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="font-mono font-medium text-foreground">
                    <span className="text-accent/50">_</span>{item.label}
                  </p>
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
