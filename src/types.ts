export type SkillGroups = {
  languages: string[];
  frameworks: string[];
  engineering: string[];
  tools: string[];
  infra: string[];
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  name: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  major: string;
  start: string;
  end: string;
  certificates: string[];
};

export type Resume = {
  name: string;
  title: string;
  email: string;
  github: string;
  blog: string;
  summary: string;
  skills: SkillGroups;
  experiences: Experience[];
  projects: Project[];
  education: Education;
};
