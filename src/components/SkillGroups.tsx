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
    <section
      className="mb-16 animate-rise delay-75"
      aria-labelledby="skills-heading"
    >
      <SectionHeading
        english="Skills"
        id="skills-heading"
        index="01"
        title="技能"
      />
      <div className="grid gap-8">
        {visibleGroups.map((group) => {
          const items = skills[group.key];

          return (
            <div key={group.key}>
              <h3 className="mb-3 font-mono text-xs font-medium tracking-widest uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    className="border-2 border-border bg-card px-3 py-1.5 font-mono text-sm font-medium tracking-wide uppercase shadow-stamp transition-transform duration-200 ease-out-quart hover:-translate-x-px hover:-translate-y-px motion-reduce:transition-none"
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
