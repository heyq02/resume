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
    <header className="mb-16 animate-rise border-4 border-border bg-card p-5 shadow-brutal sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <p className="inline-block w-fit border-2 border-border bg-accent px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-accent-foreground uppercase">
          {title}
        </p>
        <nav aria-label="联系方式" className="min-w-0">
          <ul className="flex flex-col gap-2 font-mono text-sm font-medium break-all">
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
      <h1 className="mt-8 max-w-full text-4xl leading-none font-bold tracking-tight text-balance break-words sm:text-6xl lg:text-7xl">
        {name}
      </h1>
      <div
        aria-hidden="true"
        className="mt-5 h-1 w-1/2 origin-left animate-rule bg-primary delay-150 motion-reduce:animate-none sm:w-2/5"
      />
      <p className="mt-6 max-w-3xl text-base leading-normal text-pretty sm:text-lg">
        {summary}
      </p>
    </header>
  );
}
