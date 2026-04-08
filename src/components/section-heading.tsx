interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-8 bg-accent/50" />
        <span className="text-xs font-mono uppercase tracking-widest text-accent">
          _{title.toLowerCase()}
        </span>
      </div>
      <h2 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}<span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base font-mono text-muted">{subtitle}</p>
      )}
    </div>
  );
}
