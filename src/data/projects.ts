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
  // --- Featured / High Priority ---
  {
    id: 'sherlocked',
    name: 'Sherlocked',
    description: 'AI Video Detective - An advanced AI-powered video analysis tool that detects anomalies and suspicious activities in real-time.',
    githubUrl: 'https://github.com/woabu0/sherlocked',
    category: 'ML/DL',
    techStack: ['Python', 'TensorFlow', 'OpenCV'],
    featured: true,
  },
  {
    id: 'pixenz',
    name: 'Pixenz',
    description: 'A modern landing page and photo gallery application showcasing high-quality imagery with a sleek UI.',
    githubUrl: 'https://github.com/woabu0/pixenz',
    category: 'Frontend',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'reviewnet',
    name: 'ReviewNet',
    description: 'A comprehensive review management platform for businesses to track and analyze customer feedback.',
    githubUrl: 'https://github.com/woabu0/reviewnet',
    category: 'Full Stack',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React'],
    featured: true,
  },
  {
    id: 'fillify',
    name: 'Fillify',
    description: 'An intelligent form auto-filler and data management utility for productivity.',
    githubUrl: 'https://github.com/woabu0/fillify',
    category: 'Mobile App',
    techStack: ['Flutter', 'Dart'],
    featured: true,
  },
  // --- Rest of Repositories ---
  {
    id: 'neovio',
    name: 'Neovio',
    description: 'A futuristic dashboard for monitoring system metrics and network performance.',
    githubUrl: 'https://github.com/woabu0/neovio',
    category: 'Frontend',
    techStack: ['Vue.js', 'D3.js'],
  },
  {
    id: 'farbound',
    name: 'Farbound',
    description: 'A travel companion app helping users discover off-the-beaten-path destinations.',
    githubUrl: 'https://github.com/woabu0/farbound',
    category: 'Mobile App',
    techStack: ['React Native', 'Expo'],
  },
  {
    id: 'relatia',
    name: 'Relatia',
    description: 'A relationship management tool for personal and professional networks.',
    githubUrl: 'https://github.com/woabu0/relatia',
    category: 'Full Stack',
    techStack: ['Django', 'Python', 'PostgreSQL'],
  },
  {
    id: 'xv6scheduler',
    name: 'XV6 Scheduler',
    description: 'Implementation of advanced scheduling algorithms for the XV6 operating system.',
    githubUrl: 'https://github.com/woabu0/xv6scheduler',
    category: 'ML/DL', // Categorized as low-level/systems (closest to ML/DL complexity for this list)
    techStack: ['C', 'OS Architecture'],
  },
  {
    id: 'mshstudio',
    name: 'MSH Studio',
    description: 'Creative studio portfolio website with immersive interactions.',
    githubUrl: 'https://github.com/woabu0/mshstudio',
    category: 'Frontend',
    techStack: ['Three.js', 'WebGL', 'JavaScript'],
  },
  {
    id: 'devign',
    name: 'Devign',
    description: 'Developer design tools and resources aggregator.',
    githubUrl: 'https://github.com/woabu0/devign',
    category: 'Frontend',
    techStack: ['Next.js', 'Chakra UI'],
  },
  {
    id: 'hyro',
    name: 'Hyro',
    description: 'A minimal and fast hydration tracker application.',
    githubUrl: 'https://github.com/woabu0/hyro',
    category: 'Frontend',
    techStack: ['React', 'JavaScript'],
  },
  {
    id: 'adtide',
    name: 'Adtide',
    description: 'Advertising campaign management dashboard.',
    githubUrl: 'https://github.com/woabu0/adtide',
    category: 'Full Stack',
    techStack: ['MERN Stack'],
  },
  {
    id: 'amoha',
    name: 'Amoha',
    description: 'Project management and team collaboration tool.',
    githubUrl: 'https://github.com/woabu0/amoha',
    category: 'Full Stack',
    techStack: ['React', 'Firebase'],
  },
  {
    id: 'curo',
    name: 'Curo',
    description: 'Healthcare appointment booking and patient management system.',
    githubUrl: 'https://github.com/woabu0/curo',
    category: 'Full Stack',
    techStack: ['Next.js', 'PostgreSQL'],
  },
  {
    id: 'reversely',
    name: 'Reversely',
    description: 'A utility tool for string and data reversal operations.',
    githubUrl: 'https://github.com/woabu0/reversely',
    category: 'Frontend',
    techStack: ['JavaScript', 'HTML/CSS'],
  },
  {
    id: 'evently',
    name: 'Evently',
    description: 'Event hosting and ticketing platform.',
    githubUrl: 'https://github.com/woabu0/evently',
    category: 'Full Stack',
    techStack: ['Next.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 'kolorowey',
    name: 'Kolorowey',
    description: 'Color palette generator and manager for designers.',
    githubUrl: 'https://github.com/woabu0/kolorowey',
    category: 'Frontend',
    techStack: ['React', 'Styled Components'],
  },
  {
    id: 'stm32combo',
    name: 'STM32 Combo',
    description: 'Embedded systems projects and drivers for STM32 microcontrollers.',
    githubUrl: 'https://github.com/woabu0/stm32combo',
    category: 'ML/DL', // Embedded/Systems fits best here in this 4-cat schema
    techStack: ['C', 'Embedded'],
  },
  {
    id: 'hreco',
    name: 'Hreco',
    description: 'Human resources and recruitment tracking system.',
    githubUrl: 'https://github.com/woabu0/hreco',
    category: 'Full Stack',
    techStack: ['PHP', 'MySQL'],
  },
  {
    id: '20BitCpu',
    name: '20-Bit CPU',
    description: 'Custom 20-bit CPU architecture simulation and design.',
    githubUrl: 'https://github.com/woabu0/20BitCpu',
    category: 'ML/DL', // Hardware/Systems
    techStack: ['Verilog', 'Logisim'],
  },
  {
    id: 'infy',
    name: 'Infy',
    description: 'Infinite scroll implementation and utility library.',
    githubUrl: 'https://github.com/woabu0/infy',
    category: 'Frontend',
    techStack: ['JavaScript'],
  },
  {
    id: 'prosewrite',
    name: 'ProseWrite',
    description: 'Distraction-free markdown editor for writers.',
    githubUrl: 'https://github.com/woabu0/prosewrite',
    category: 'Frontend',
    techStack: ['React', 'Electron'],
  },
  {
    id: 'boifinity',
    name: 'Boifinity',
    description: 'E-commerce platform for book lovers.',
    githubUrl: 'https://github.com/woabu0/boifinity',
    category: 'Full Stack',
    techStack: ['MERN Stack'],
  },
  {
    id: 'autocady',
    name: 'Autocady',
    description: 'CAD file viewer and basic editor for web.',
    githubUrl: 'https://github.com/woabu0/autocady',
    category: 'Frontend',
    techStack: ['WebGL', 'JavaScript'],
  },
  {
    id: 'sydney-clinic',
    name: 'Sydney Clinic',
    description: 'Website for a medical clinic with appointment scheduling.',
    githubUrl: 'https://github.com/woabu0/sydney-clinic',
    category: 'Full Stack',
    techStack: ['WordPress', 'PHP'],
  },
  {
    id: 'triumph',
    name: 'Triumph',
    description: 'Personal goal tracking and habit building application.',
    githubUrl: 'https://github.com/woabu0/triumph',
    category: 'Mobile App',
    techStack: ['Flutter', 'Firebase'],
  },
  {
    id: 'woabu0',
    name: 'Woabu0 Profile',
    description: 'Personal GitHub profile configuration and README.',
    githubUrl: 'https://github.com/woabu0/woabu0',
    category: 'Frontend',
    techStack: ['Markdown'],
  }
];
