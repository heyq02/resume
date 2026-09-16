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
      className="relative z-10 min-h-dvh bg-transparent pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] font-sans text-foreground"
      lang="zh-CN"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <a
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-[max(1rem,env(safe-area-inset-top))] focus-visible:left-[max(1rem,env(safe-area-inset-left))] focus-visible:z-50 focus-visible:inline-block focus-visible:border-4 focus-visible:border-border focus-visible:bg-accent focus-visible:px-3 focus-visible:py-2 focus-visible:font-mono focus-visible:text-xs focus-visible:font-bold focus-visible:tracking-widest focus-visible:text-accent-foreground focus-visible:uppercase focus-visible:shadow-brutal"
          href="#main"
        >
          跳到正文
        </a>
        <main className="scroll-mt-6" id="main" tabIndex={-1}>
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
