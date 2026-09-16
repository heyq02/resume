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
  const visibleGroups = GROUPS.filter((group) => skills[group.key].length > 0);

  if (visibleGroups.length === 0) {
    return null;
  }

  return (
    <section className="mb-10" aria-labelledby="skills-heading">
      <SectionHeading
        english="Skills"
        id="skills-heading"
        index="01"
        title="技能"
      />
      <div className="grid gap-6">
        {visibleGroups.map((group) => {
          const items = skills[group.key];

          return (
            <div key={group.key}>
              <h3 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    className="border-4 border-border bg-card px-2 py-1 font-mono text-sm font-bold tracking-wide uppercase shadow-brutal"
                    key={skill}
                    translate="no"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
