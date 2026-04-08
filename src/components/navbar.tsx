"use client";

import { useState, useEffect } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-base font-mono font-bold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          <span className="text-accent/50">~/</span>{profile.name.toLowerCase().replace(" ", "_")}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-mono text-muted transition-all hover:text-foreground hover:bg-glass-highlight"
            >
              <span className="text-accent/40">_</span>{link.label.toLowerCase()}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="text-muted hover:text-foreground transition-colors md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-glass-border px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-lg py-3 px-4 text-sm font-mono text-muted transition-all hover:text-foreground hover:bg-glass-highlight"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-accent/40">_</span>{link.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
