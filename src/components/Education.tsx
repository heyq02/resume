import type { Education as EducationData } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

type EducationProps = {
  education: EducationData;
};

export function Education({ education }: EducationProps) {
  return (
    <section className="mb-10" aria-labelledby="education-heading">
      <SectionHeading
        english="Education"
        id="education-heading"
        index="04"
        title="教育"
      />
      <article className="border-4 border-border bg-card p-4 shadow-brutal">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-xl">{education.school}</h3>
          <p className="font-mono text-xs font-bold tracking-widest uppercase">
            {education.start}–{education.end}
          </p>
        </div>
        <p className="mt-1 font-mono text-sm">
          {education.degree} · {education.major}
        </p>
        <h4 className="mt-4 font-mono text-xs font-bold tracking-widest uppercase">
          资格证书
        </h4>
        <BulletList items={education.certificates} />
      </article>
    </section>
  );
}
