import { ExternalLink } from './ExternalLink';

type HeroProps = {
  name: string;
  title: string;
  email: string;
  github: string;
  blog: string;
  summary: string;
};

export function Hero({ name, title, email, github, blog, summary }: HeroProps) {
  return (
    <header className="mb-10 border-4 border-border bg-card p-4 shadow-brutal sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <p className="inline-block w-fit border-4 border-border bg-accent px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">
          {title}
        </p>
        <nav aria-label="联系方式">
          <ul className="flex flex-col gap-2 font-mono text-sm break-all">
            <li>
              <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
            </li>
            <li>
              <ExternalLink href={github}>{github}</ExternalLink>
            </li>
            <li>
              <ExternalLink href={blog}>{blog}</ExternalLink>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="mt-6 max-w-full text-5xl leading-none tracking-tight break-words sm:text-7xl lg:text-8xl">
        {name}
      </h1>
      <div className="mt-4 h-2 w-2/3 max-w-full bg-primary sm:w-1/2" />
      <p className="mt-6 max-w-3xl text-base leading-normal sm:text-lg">
        {summary}
      </p>
    </header>
  );
}
