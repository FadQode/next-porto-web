export type SkillStage = 'Learning' | 'Using' | 'Comfortable';

export type Skill = {
  name: string;
  stage: SkillStage;
  note: string;
  category: string;
};

export const skills: Skill[] = [
  {
    name: 'Laravel',
    stage: 'Using',
    note: 'Used in simple NoSQL experiments',
    category: 'Full Stack',
  },
  {
    name: 'TypeScript/JavaScript',
    stage: 'Learning',
    note: 'Learning to apply types gradually in projects',
    category: 'Full Stack',
  },
  {
    name: 'React / Next.js',
    stage: 'Using',
    note: 'Used in personal projects and this portfolio',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    stage: 'Comfortable',
    note: 'Used to build responsive layouts and components',
    category: 'Frontend',
  },
  {
    name: 'Node.js/Bun',
    stage: 'Using',
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
    name: 'MySQL  ',
    stage: 'Learning',
    note: 'Learning relational databases and basic queries',
    category: 'Database',
  },
  {
    name: 'PyTorch',
    stage: 'Using',
    note: 'Used in machine learning projects and experiments',
    category: 'Machine Learning',
  },
  {
    name: 'TensorFlow',
    stage: 'Learning',
    note: 'Exploring deep learning frameworks and models',
    category: 'Machine Learning',
  },
  {
    name: 'Java',
    stage: 'Learning',
    note: 'Learning to apply types gradually in projects',
    category: 'Mobile Development',
  },

];
