type ExternalLinkProps = {
  href: string;
  children: string;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  const isMail = href.startsWith('mailto:');

  return (
    <a
      className="cursor-pointer underline decoration-2 underline-offset-4 transition-colors duration-200 ease-out-quart hover:bg-accent motion-reduce:transition-none"
      href={href}
      rel={isMail ? undefined : 'noopener noreferrer'}
      target={isMail ? undefined : '_blank'}
    >
      {children}
    </a>
  );
}
