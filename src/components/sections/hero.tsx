"use client";

import { profile } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Ambient glow behind heading */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(0,220,130,0.1)_0%,_rgba(0,220,130,0.04)_40%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl">
        {/* Role badge */}
        <div
          className={`transition-all duration-700 ease-out ${
            loaded
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-4 blur-sm"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs font-mono uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {profile.title} @ {profile.company}
          </span>
        </div>

        {/* Name */}
        <h1
          className={`mt-8 font-mono text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl transition-all duration-1000 ease-out delay-200 ${
            loaded
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          <span className="text-accent/40 font-normal">_</span>
          <span className="text-gradient">{profile.name}</span>
          <span className="text-accent cursor-blink">|</span>
        </h1>

        {/* Tagline */}
        <p
          className={`mx-auto mt-8 max-w-xl text-lg font-mono leading-relaxed text-muted sm:text-xl transition-all duration-700 ease-out delay-500 ${
            loaded
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-4 blur-sm"
          }`}
        >
          {profile.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-700 ease-out delay-700 ${
            loaded
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-4 blur-sm"
          }`}
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center rounded-full bg-accent px-8 text-sm font-mono font-medium text-background transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(0,220,130,0.3)]"
          >
            ./view_projects
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full glass px-8 text-sm font-mono font-medium text-foreground transition-all hover:bg-glass-highlight glow-accent-hover"
          >
            ./get_in_touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 text-muted transition-all hover:text-accent duration-700 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to about"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest">
            scroll
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </a>
    </section>
  );
}
