type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="mt-3 list-none space-y-2">
      {items.map((item) => (
        <li
          className="border-l-4 border-border pl-3 text-base leading-normal"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
