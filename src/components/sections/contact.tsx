"use client";

import { profile } from "@/data/portfolio";
import { Reveal, container, staggerItem } from "@/components/motion/primitives";
import { motion } from "motion/react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

type ContactLink = {
  label: string;
  handle: string;
  href: string;
  Icon?: (props: { size?: number; className?: string }) => React.ReactElement;
};

const links: ContactLink[] = [
  { label: "GitHub", handle: "northaxosky", href: profile.social.github, Icon: GitHubIcon },
  { label: "LinkedIn", handle: "kuzeygok", href: profile.social.linkedin, Icon: LinkedInIcon },
  { label: "X", handle: "MuteBusterr", href: profile.social.twitter, Icon: XIcon },
  { label: "NexusMods", handle: "MuteBustNut", href: profile.social.nexusmods },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <Reveal>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="text-accent">load-bearing</span>.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Always up for a good systems problem, a modding question, or a chat.
          Find me here:
        </p>
      </Reveal>

      <motion.div
        data-reveal
        className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
        variants={container(0.07)}
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            variants={staggerItem}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-bg px-5 py-4 transition-colors hover:bg-surface"
          >
            <span className="flex items-center gap-3">
              {link.Icon ? (
                <link.Icon
                  size={18}
                  className="text-muted transition-colors group-hover:text-accent"
                />
              ) : (
                <span className="font-mono text-sm font-bold text-muted transition-colors group-hover:text-accent">
                  NM
                </span>
              )}
              <span className="font-mono text-sm text-ink">{link.label}</span>
            </span>
            <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent">
              {link.handle} ↗
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
