import { profile } from "@/data/portfolio";

const spec: { label: string; value: string }[] = [
  { label: "ROLE", value: "SDE · Microsoft" },
  { label: "BASED", value: profile.location },
  { label: "FOCUS", value: "systems · ML · game tech" },
  { label: "STACK", value: "Rust · C++ · TS · Python" },
  { label: "NOW", value: "Overseer + Sky-AI" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pb-16 pt-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
        {/* Left — statement */}
        <div>
          <p
            className="animate-rise font-mono text-sm text-faint"
            style={{ animationDelay: "0ms" }}
          >
            <span className="text-accent">Kuzey Gök</span> · Software Engineer
          </p>

          <h1
            className="animate-rise mt-6 font-display text-5xl font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            I build close to{" "}
            <span className="text-accent">the metal</span>.
          </h1>

          <p
            className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "200ms" }}
          >
            Rust tooling, machine learning from scratch, a C++ game engine, and
            years of reverse-engineering Fallout&nbsp;4.
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#work"
              className="inline-flex h-11 items-center gap-2 bg-accent px-6 text-sm font-semibold text-bg transition-colors hover:bg-accent-bright"
            >
              View work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right — spec panel */}
        <div
          className="animate-rise lg:justify-self-end"
          style={{ animationDelay: "240ms" }}
        >
          <div className="w-full max-w-sm border border-line bg-surface/40">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-xs tracking-wider text-faint">
                {"// spec"}
              </span>
              <span className="flex gap-1" aria-hidden="true">
                <span className="h-1.5 w-1.5 bg-accent/80" />
                <span className="h-1.5 w-1.5 bg-line-strong" />
                <span className="h-1.5 w-1.5 bg-line-strong" />
              </span>
            </div>
            <dl className="divide-y divide-line">
              {spec.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline gap-4 px-4 py-3"
                >
                  <dt className="w-16 shrink-0 font-mono text-xs text-faint">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-sm text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="animate-rise absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-faint transition-colors hover:text-accent sm:block"
        style={{ animationDelay: "500ms" }}
        aria-label="Scroll to about"
      >
        scroll ↓
      </a>
    </section>
  );
}
