interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  marker?: string;
}

export function SectionHeading({ title, subtitle, marker }: SectionHeadingProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {marker && (
          <span className="tnum shrink-0 pb-1 font-mono text-xs text-faint">
            {marker}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{subtitle}</p>
      )}
    </header>
  );
}
