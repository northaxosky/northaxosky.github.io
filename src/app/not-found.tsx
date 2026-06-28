import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-wider text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-ink sm:text-6xl">
        Signal lost.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        That page isn&apos;t on the board. Let&apos;s get you back online.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center gap-2 bg-accent px-6 text-sm font-semibold text-bg transition-colors hover:bg-accent-bright"
      >
        Back to start <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
