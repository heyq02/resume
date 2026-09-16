import type { Education as EducationData } from '../types';
import { BulletList } from './BulletList';
import { SectionHeading } from './SectionHeading';

type EducationProps = {
  education: EducationData;
};

export function Education({ education }: EducationProps) {
  return (
    <section
      className="mb-16 animate-rise delay-200"
      aria-labelledby="education-heading"
    >
      <SectionHeading
        english="Education"
        id="education-heading"
        index="04"
        title="教育"
      />
      <article className="border-4 border-border bg-card p-5 shadow-brutal sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="min-w-0 text-xl font-bold break-words">
            {education.school}
          </h3>
          <p className="font-mono text-xs font-medium tracking-widest uppercase tabular-nums">
            {education.start}–{education.end}
          </p>
        </div>
        <p className="mt-1 font-mono text-sm font-medium">
          {education.degree} · {education.major}
        </p>
        {education.certificates.length > 0 ? (
          <>
            <h4 className="mt-5 font-mono text-xs font-medium tracking-widest uppercase">
              资格证书
            </h4>
            <BulletList items={education.certificates} />
          </>
        ) : null}
      </article>
    </section>
  );
}
