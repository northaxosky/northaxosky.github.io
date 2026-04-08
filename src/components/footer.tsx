import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-glass-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm font-mono text-muted">
          <span className="text-accent/40">&copy;</span> {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-xs font-mono text-muted/40">
          next.js <span className="text-accent/30">&middot;</span> tailwind <span className="text-accent/30">&middot;</span> gh-pages
        </p>
      </div>
    </footer>
  );
}
