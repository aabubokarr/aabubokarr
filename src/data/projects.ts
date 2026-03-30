export type Category = 'Frontend' | 'Full Stack' | 'Mobile App' | 'ML/DL';

export interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  category: Category;
  techStack: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'amoha',
    name: 'Amoha',
    description: 'AI Based Eye Disease Detection - An advanced diagnostic tool leveraging deep learning for early detection of ocular conditions.',
    githubUrl: 'https://github.com/aabubokarr/amoha',
    category: 'ML/DL',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'React'],
    featured: true,
  },
  {
    id: 'sherlock',
    name: 'Sherlock',
    description: 'Security System - Real-time security monitoring and threat detection system using computer vision architectures.',
    githubUrl: 'https://github.com/aabubokarr/sherlock',
    category: 'ML/DL',
    techStack: ['Python', 'MediaPipe', 'TensorFlow', 'Next.js'],
    featured: true,
  },
  {
    id: 'fifr',
    name: 'Fifr',
    description: 'Financial Platform - Comprehensive application for financial analytics and transaction management.',
    githubUrl: 'https://github.com/aabubokarr/fifr',
    category: 'Full Stack',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    featured: true,
  }
];
