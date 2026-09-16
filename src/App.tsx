import './App.css';
import { Education } from './components/Education';
import { ExperienceList } from './components/ExperienceList';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { SkillGroups } from './components/SkillGroups';
import resume from './data.json';
import type { Resume } from './types';

const data: Resume = resume;

const App = () => {
  return (
    <div
      className="min-h-dvh bg-background font-sans text-foreground"
      lang="zh-CN"
    >
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-10">
        <a
          className="mb-6 inline-block border-4 border-border bg-accent px-3 py-2 font-mono text-xs font-bold tracking-widest text-accent-foreground uppercase shadow-brutal"
          href="#main"
        >
          跳到正文
        </a>
        <main id="main" tabIndex={-1}>
          <Hero
            blog={data.blog}
            email={data.email}
            github={data.github}
            name={data.name}
            summary={data.summary}
            title={data.title}
          />
          <SkillGroups skills={data.skills} />
          <ExperienceList experiences={data.experiences} />
          <ProjectList projects={data.projects} />
          <Education education={data.education} />
        </main>
      </div>
    </div>
  );
};

export default App;
