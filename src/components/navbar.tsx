"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-bg/90 backdrop-blur-sm"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="group inline-flex items-center gap-2.5" aria-label="Home">
          <span className="h-2.5 w-2.5 bg-accent transition-transform duration-300 ease-out group-hover:rotate-45" />
          <span className="font-display text-base font-bold tracking-tight text-ink">
            Kuzey Gök
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>

        <button
          className="text-muted transition-colors hover:text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-bg/95 backdrop-blur-sm transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-72 border-b border-line opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 font-mono text-sm text-muted transition-colors last:border-0 hover:text-ink"
            >
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
