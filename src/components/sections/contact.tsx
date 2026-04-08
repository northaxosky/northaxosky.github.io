import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const socialLinks = [
  {
    label: "github",
    href: profile.social.github,
    icon: GitHubIcon,
  },
  {
    label: "linkedin",
    href: profile.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "x_twitter",
    href: profile.social.twitter,
    icon: XIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
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
              className="group inline-flex items-center gap-3 rounded-2xl glass px-6 py-4 transition-all duration-300 hover:bg-glass-highlight glow-accent-hover shimmer-border hover:translate-y-[-2px]"
            >
              <link.icon
                size={20}
                className="text-muted transition-colors group-hover:text-accent"
              />
              <span className="text-sm font-mono font-medium text-foreground">
                <span className="text-accent/40">_</span>{link.label}
              </span>
            </a>
          ))}

          <a
            href={profile.social.nexusmods}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl glass px-6 py-4 transition-all duration-300 hover:bg-glass-highlight glow-accent-hover shimmer-border hover:translate-y-[-2px]"
          >
            <span className="text-sm font-bold font-mono text-muted transition-colors group-hover:text-accent">
              NM
            </span>
            <span className="text-sm font-mono font-medium text-foreground">
              <span className="text-accent/40">_</span>nexusmods
            </span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
