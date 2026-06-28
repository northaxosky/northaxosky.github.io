"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { Scramble, EASE, container, staggerItem } from "@/components/motion/primitives";

const spec: { label: string; value: string }[] = [
  { label: "ROLE", value: "SDE · Microsoft" },
  { label: "BASED", value: profile.location },
  { label: "FOCUS", value: "systems · ML · game tech" },
  { label: "STACK", value: "Rust · C++ · TS · Python" },
  { label: "NOW", value: "Overseer + Sky-AI" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), reduced ? 0 : 720);
    return () => clearTimeout(t);
  }, [reduced]);

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay: reduced ? 0 : delay },
  });

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92svh] max-w-5xl flex-col justify-center px-6 pb-16 pt-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
        {/* Left — statement */}
        <div>
          <motion.p className="font-mono text-sm text-faint" {...rise(0.05)}>
            <span className="text-accent">Kuzey Gök</span> · Software Engineer
          </motion.p>

          <motion.h1
            className="mt-6 font-display text-5xl font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            {...rise(0.14)}
          >
            I build close to <span className="text-accent">the metal</span>.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            {...rise(0.28)}
          >
            Rust tooling, machine learning from scratch, a C++ game engine, and
            years of reverse-engineering Fallout&nbsp;4.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            {...rise(0.85)}
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
          </motion.div>
        </div>

        {/* Right — spec panel that boots */}
        <motion.div
          className="lg:justify-self-end"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: reduced ? 0 : 0.2 }}
        >
          <div className="w-full max-w-sm border border-line bg-surface/40">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-xs tracking-wider text-faint">
                {booted ? "// online" : "// boot"}
              </span>
              <span className="flex gap-1" aria-hidden="true">
                <motion.span
                  className="h-1.5 w-1.5 bg-accent"
                  initial={reduced ? false : { opacity: 0.2 }}
                  animate={
                    reduced
                      ? { opacity: 1 }
                      : { opacity: [0.2, 1, 0.3, 1] }
                  }
                  transition={{ duration: 0.7, delay: 0.5, times: [0, 0.4, 0.7, 1] }}
                />
                <span className="h-1.5 w-1.5 bg-line-strong" />
                <span className="h-1.5 w-1.5 bg-line-strong" />
              </span>
            </div>

            <motion.dl
              className="divide-y divide-line"
              initial={reduced ? false : "hidden"}
              animate="show"
              variants={container(0.09, 0.34)}
            >
              {spec.map((row) => (
                <motion.div
                  key={row.label}
                  className="flex items-baseline gap-4 px-4 py-3"
                  variants={staggerItem}
                >
                  <dt className="w-16 shrink-0 font-mono text-xs text-faint">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-sm text-ink">
                    <Scramble text={row.value} play={booted} />
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-faint transition-colors hover:text-accent sm:block"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: reduced ? 0 : 1.1 }}
        aria-label="Scroll to about"
      >
        scroll ↓
      </motion.a>
    </section>
  );
}
