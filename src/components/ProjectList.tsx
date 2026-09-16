import type { Project } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="mb-10" aria-labelledby="projects-heading">
      <SectionHeading
        english="Projects"
        id="projects-heading"
        index="03"
        title="项目"
      />
      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            className="border-4 border-border bg-card p-4 shadow-brutal"
            key={project.name}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl">{project.name}</h3>
              <p className="font-mono text-xs font-bold tracking-widest uppercase">
                {project.start}–{project.end}
              </p>
            </div>
            <p className="mt-1 font-mono text-sm">{project.role}</p>
            <BulletList items={project.bullets} />
          </article>
        ))}
      </div>
    </section>
  );
}
