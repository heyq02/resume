import type { Project } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section
      className="mb-16 animate-rise delay-150"
      aria-labelledby="projects-heading"
    >
      <SectionHeading
        english="Projects"
        id="projects-heading"
        index="03"
        title="项目"
      />
      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            className="border-4 border-border bg-card p-5 shadow-brutal sm:p-6"
            key={project.name}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="min-w-0 text-xl font-bold break-words">
                {project.name}
              </h3>
              <p className="font-mono text-xs font-medium tracking-widest uppercase tabular-nums">
                {project.start}–{project.end}
              </p>
            </div>
            <p className="mt-1 font-mono text-sm font-medium">{project.role}</p>
            <BulletList items={project.bullets} />
          </article>
        ))}
      </div>
    </section>
  );
}
