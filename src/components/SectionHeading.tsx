type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
  english: string;
};

export function SectionHeading({
  id,
  index,
  title,
  english,
}: SectionHeadingProps) {
  return (
    <h2 className="mb-4 flex flex-wrap items-stretch" id={id}>
      <span className="bg-accent px-3 py-2 font-mono text-sm font-bold text-accent-foreground">
        {index}
      </span>
      <span className="bg-primary px-4 py-2 text-lg font-bold text-primary-foreground">
        {title}
      </span>
      <span className="border-4 border-border px-3 py-2 font-mono text-xs font-bold uppercase tracking-widest">
        {english}
      </span>
    </h2>
  );
}
