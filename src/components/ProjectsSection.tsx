"use client";
import Link from 'next/link';
import { Project, projects } from '@/data/projects';

// Top 4 featured projects for the showcase
const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-massive text-white opacity-10">.../Projects ...</h2>
          <Link href="https://github.com/woabu0" className="hidden md:block text-white border-b border-white pb-1 hover:opacity-70 transition-opacity">
            View All on GitHub
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/5 hover:border-blue-500/50 transition-all duration-500 aspect-[4/3] ${index % 3 === 0 ? 'md:col-span-2 aspect-[2/1]' : ''}`}
            >
              {/* Fake UI / Visual Placeholder for "Image" since we don't have screenshots */}
              <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                <div className="flex flex-wrap gap-3">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="max-w-2xl transform group-hover:-translate-y-4 transition-transform duration-500">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-lg line-clamp-2 md:line-clamp-none max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <a href={project.githubUrl} className="absolute bottom-12 right-12 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
