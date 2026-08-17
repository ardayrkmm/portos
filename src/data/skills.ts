export interface SkillCategory {
  title: string;
  description: string;
  items: { name: string; highlight?: boolean }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Crafting responsive, high-performance interfaces.',
    items: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Tailwind' }]
  },
  {
    title: 'Backend',
    description: 'Robust, scalable API architectures.',
    items: [{ name: 'Go', highlight: true }, { name: 'Laravel' }, { name: 'Node.js' }]
  },
  {
    title: 'AI / ML',
    description: 'Computer vision and model integration.',
    items: [{ name: 'Python', highlight: true }, { name: 'TensorFlow' }, { name: 'OpenCV' }]
  },
  {
    title: 'Mobile',
    description: 'Native-feeling cross-platform applications.',
    items: [{ name: 'Flutter' }, { name: 'Dart' }]
  },
  {
    title: 'Database',
    description: 'Data modeling and optimization.',
    items: [{ name: 'PostgreSQL' }, { name: 'Redis' }]
  },
  {
    title: 'Infra / Tools',
    description: 'Deployment pipelines and system operations.',
    items: [{ name: 'Docker' }, { name: 'Linux' }, { name: 'Git' }]
  }
];
