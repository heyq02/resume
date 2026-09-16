type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="mt-4 list-none space-y-2">
      {items.map((item) => (
        <li
          className="border-l-2 border-border pl-3 text-base leading-normal break-words"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
