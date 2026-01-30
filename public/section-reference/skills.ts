export type SkillStage = 'Learning' | 'Using' | 'Comfortable';

export type Skill = {
  name: string;
  stage: SkillStage;
  note: string;
  category: 'Frontend' | 'Backend' | 'Database';
};

export const skills: Skill[] = [
  {
    name: 'React / Next.js',
    stage: 'Using',
    note: 'Used in personal projects and this portfolio',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    stage: 'Learning',
    note: 'Learning to apply types gradually in projects',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    stage: 'Comfortable',
    note: 'Used to build responsive layouts and components',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    stage: 'Using',
    note: 'Primary language for frontend development',
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    stage: 'Learning',
    note: 'Exploring backend fundamentals and APIs',
    category: 'Backend',
  },
  {
    name: 'Python',
    stage: 'Using',
    note: 'Used for coursework and data experiments',
    category: 'Backend',
  },
  {
    name: 'PostgreSQL',
    stage: 'Learning',
    note: 'Learning relational databases and basic queries',
    category: 'Database',
  },
  {
    name: 'MongoDB',
    stage: 'Learning',
    note: 'Used in simple NoSQL experiments',
    category: 'Database',
  },
];
