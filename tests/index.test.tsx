import { expect, test } from '@rstest/core';
import { render, screen, within } from '@testing-library/react';
import App from '../src/App';
import resume from '../src/data.json';

test('renders rewrite resume instead of the Rsbuild starter', () => {
  render(<App />);

  expect(screen.queryByText('Rsbuild with React')).not.toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 1, name: resume.name }),
  ).toBeInTheDocument();
  expect(screen.getByRole('banner')).toHaveTextContent(resume.title);
  expect(screen.getByText(resume.summary)).toBeInTheDocument();
});

test('renders identity, timeline, and public contacts from data.json', () => {
  render(<App />);

  for (const experience of resume.experiences) {
    expect(
      screen.getByRole('heading', { name: experience.company }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${experience.start}–${experience.end}`),
    ).toBeInTheDocument();
  }

  expect(
    screen.getByRole('heading', { name: resume.education.school }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(`${resume.education.degree} · ${resume.education.major}`),
  ).toBeInTheDocument();
  expect(
    screen.getByText(resume.education.certificates[0]),
  ).toBeInTheDocument();

  const contacts = within(screen.getByRole('navigation', { name: '联系方式' }));
  const email = contacts.getByRole('link', { name: resume.email });
  expect(email).toHaveAttribute('href', `mailto:${resume.email}`);
  expect(email).not.toHaveAttribute('target');

  const github = contacts.getByRole('link', { name: resume.github });
  expect(github).toHaveAttribute('href', resume.github);
  expect(github).toHaveAttribute('target', '_blank');
  expect(github).toHaveAttribute('rel', 'noopener noreferrer');

  const blog = contacts.getByRole('link', { name: resume.blog });
  expect(blog).toHaveAttribute('href', resume.blog);
  expect(blog).toHaveAttribute('target', '_blank');
  expect(blog).toHaveAttribute('rel', 'noopener noreferrer');
});

test('covers merchant finance and cross-end work plus projects', () => {
  render(<App />);

  expect(screen.getAllByText(/财务/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/秒送门/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Taro/).length).toBeGreaterThan(0);
  expect(
    screen.getByRole('heading', { name: resume.projects[0].name }),
  ).toBeInTheDocument();
  expect(screen.getByText(resume.projects[0].role)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: resume.projects[1].name }),
  ).toBeInTheDocument();
});

test('exposes skip link and main landmark', () => {
  render(<App />);

  const skip = screen.getByRole('link', { name: '跳到正文' });
  expect(skip).toHaveAttribute('href', '#main');

  const main = screen.getByRole('main');
  expect(main).toHaveAttribute('id', 'main');
  expect(main).not.toContainElement(skip);
  expect(
    within(main).getByRole('heading', { level: 1, name: resume.name }),
  ).toBeInTheDocument();
  expect(within(main).getByText(resume.summary)).toBeInTheDocument();
  expect(
    within(main).getByRole('navigation', { name: '联系方式' }),
  ).toBeInTheDocument();
});

test('does not show phone, salary, or invented metrics', () => {
  render(<App />);

  const text = document.body.textContent ?? '';
  expect(text).not.toMatch(/1[3-9]\d{9}/);
  expect(text).not.toMatch(/期望薪资/);
  expect(text).not.toMatch(/\bDAU\b/);
  expect(text).not.toMatch(/\bGMV\b/);
  expect(JSON.stringify(resume)).not.toMatch(/phone|salary|mobile/i);
});

test('renders classified skills from the data contract', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: '语言' })).toBeInTheDocument();
  expect(screen.getByText(resume.skills.languages[0])).toBeInTheDocument();
  expect(screen.getByText(resume.skills.frameworks[0])).toBeInTheDocument();
  expect(screen.getByText(resume.skills.engineering[0])).toBeInTheDocument();
  expect(screen.getByText(resume.skills.tools[0])).toBeInTheDocument();
  expect(screen.getByText(resume.skills.infra[0])).toBeInTheDocument();
});
