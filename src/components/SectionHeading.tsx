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
    <h2
      className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-2 border-b-2 border-border pb-3 scroll-mt-6"
      id={id}
    >
      <span className="bg-accent px-2 py-1 font-mono text-xs font-bold text-accent-foreground">
        {index}
      </span>
      <span className="text-2xl font-bold">{title}</span>
      <span className="font-mono text-xs font-medium tracking-widest uppercase">
        {english}
      </span>
    </h2>
  );
}
