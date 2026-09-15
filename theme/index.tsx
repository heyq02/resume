import './index.css';
import { useCallback, useEffect, useState } from 'react';
import data from './data';

function Header() {
  const { info } = data;
  return (
    <header className="resume-header">
      <div className="header-avatar">
        <div className="avatar-placeholder">{info.name[0]}</div>
      </div>
      <div className="header-info">
        <h1 className="header-name">{info.name}</h1>
        <p className="header-position">{info.position}</p>
        <div className="header-contacts">
          <a href={`mailto:${info.email}`} className="contact-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
            {info.email}
          </a>
          <span className="contact-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {info.phone}
          </span>
          <a href={`https://github.com/${info.github}`} className="contact-item" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {info.github}
          </a>
          <span className="contact-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {info.location}
          </span>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="resume-section">
      <h2 className="section-title">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        关于我
      </h2>
      <div className="card">
        <p className="about-text">{data.info.summary}</p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="resume-section">
      <h2 className="section-title">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        技术栈
      </h2>
      <div className="skills-grid">
        {data.skills.map((group) => (
          <div key={group.category} className="card skill-card">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="resume-section">
      <h2 className="section-title">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
        工作经历
      </h2>
      <div className="timeline">
        {data.experience.map((exp) => (
          <div key={exp.company + exp.period} className="card timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-company">{exp.company}</h3>
                <p className="timeline-role">{exp.role}</p>
              </div>
              <span className="timeline-period">{exp.period}</span>
            </div>
            <ul className="timeline-achievements">
              {exp.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="resume-section">
      <h2 className="section-title">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
        项目经历
      </h2>
      <div className="projects-grid">
        {data.projects.map((proj) => (
          <div key={proj.name} className="card project-card">
            <div className="project-header">
              <h3 className="project-name">{proj.name}</h3>
              <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <div className="project-tech">
              {proj.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            <p className="project-desc">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="resume-section">
      <h2 className="section-title">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
        </svg>
        教育背景
      </h2>
      {data.education.map((edu) => (
        <div key={edu.school} className="card education-card">
          <div className="education-header">
            <div>
              <h3 className="education-school">{edu.school}</h3>
              <p className="education-detail">
                {edu.degree} · {edu.major}
              </p>
            </div>
            <span className="education-period">{edu.period}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="resume-footer">
      <p>
        Built with{' '}
        <a href="https://rspress.rs" target="_blank" rel="noreferrer">
          Rspress
        </a>
      </p>
    </footer>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('rp-dark'));
  }, []);

  const toggle = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.classList.toggle('rp-dark', next);
    document.documentElement.style.colorScheme = next ? 'dark' : 'light';
    localStorage.setItem('rspress-theme-appearance', next ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {isDark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

const HomeLayout = () => {
  return (
    <div className="resume-page">
      <ThemeToggle />
      <div className="resume-container">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export { HomeLayout };
export * from '@rspress/core/theme-original';
