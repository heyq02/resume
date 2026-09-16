import type { SkillGroups as SkillGroupsData } from '../types';
import { SectionHeading } from './SectionHeading';

type SkillGroupsProps = {
  skills: SkillGroupsData;
};

const GROUPS = [
  { key: 'languages', label: '语言' },
  { key: 'frameworks', label: '框架' },
  { key: 'engineering', label: '工程化' },
  { key: 'tools', label: '工具' },
  { key: 'infra', label: '基础设施' },
] as const;

export function SkillGroups({ skills }: SkillGroupsProps) {
  return (
    <section className="mb-10" aria-labelledby="skills-heading">
      <SectionHeading
        english="Skills"
        id="skills-heading"
        index="01"
        title="技能"
      />
      <div className="grid gap-6">
        {GROUPS.map((group) => (
          <div key={group.key}>
            <h3 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills[group.key].map((skill) => (
                <li
                  className="border-4 border-border bg-card px-2 py-1 font-mono text-sm font-bold tracking-wide uppercase shadow-brutal"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
