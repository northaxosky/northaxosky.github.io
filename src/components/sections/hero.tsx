import { profile } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          {profile.title}
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          {profile.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="inline-flex h-12 items-center rounded-full bg-accent px-8 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border border-card-border px-8 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-muted transition-colors hover:text-foreground animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
