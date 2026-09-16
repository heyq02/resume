import type { Experience } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

type ExperienceListProps = {
  experiences: Experience[];
};

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <section className="mb-10" aria-labelledby="experience-heading">
      <SectionHeading
        english="Experience"
        id="experience-heading"
        index="02"
        title="经历"
      />
      <div className="grid gap-6">
        {experiences.map((experience) => (
          <article
            className="border-4 border-border bg-card p-4 shadow-brutal"
            key={`${experience.company}-${experience.start}`}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl">{experience.company}</h3>
              <p className="font-mono text-xs font-bold tracking-widest uppercase">
                {experience.start}–{experience.end}
              </p>
            </div>
            <p className="mt-1 font-mono text-sm">{experience.role}</p>
            <BulletList items={experience.bullets} />
          </article>
        ))}
      </div>
    </section>
  );
}
