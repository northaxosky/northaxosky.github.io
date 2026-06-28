import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 py-10 sm:flex-row sm:items-center">
        <p className="font-mono text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4 font-mono text-xs text-faint">
          <span>Next.js · Tailwind · GitHub Pages</span>
          <a
            href="https://github.com/northaxosky/northaxosky.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            source ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
