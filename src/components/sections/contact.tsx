import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.social.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: profile.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "X / Twitter",
    href: profile.social.twitter,
    icon: XIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          title="Contact"
          subtitle="Want to connect? Find me here."
        />
      </FadeIn>

      <FadeIn delay={100}>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-card-border bg-card px-6 py-4 transition-all hover:border-accent/40 hover:bg-card/80"
            >
              <link.icon
                size={20}
                className="text-muted transition-colors group-hover:text-accent"
              />
              <span className="text-sm font-medium text-foreground">
                {link.label}
              </span>
            </a>
          ))}

          <a
            href={profile.social.nexusmods}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-card-border bg-card px-6 py-4 transition-all hover:border-accent/40 hover:bg-card/80"
          >
            <span className="text-sm font-bold text-muted transition-colors group-hover:text-accent">
              NM
            </span>
            <span className="text-sm font-medium text-foreground">
              NexusMods
            </span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
