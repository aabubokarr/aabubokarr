"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Code, ExternalLink, Calendar, Star } from "lucide-react";
import Link from "next/link";
import { GithubRepo } from "@/services/github";
import { format } from "date-fns";

interface ProjectsListProps {
  initialProjects: GithubRepo[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const filteredProjects = initialProjects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (project.language && project.language.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-primary py-24 px-6 md:px-16 pt-32">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/#projects" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent font-mono mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            All Projects
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            A comprehensive list of repositories fetched directly from my GitHub.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <input
            type="text"
            placeholder="Search projects by name, description, or language..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface border border-border-subtle rounded-xl px-6 py-4 text-text-primary focus:outline-none focus:border-accent transition-colors font-mono"
          />
        </motion.div>

        {/* Projects Timeline View */}
        <div ref={containerRef} className="relative pl-8 md:pl-0 mt-12">
          
          {filteredProjects.length > 0 && (
            <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-border-subtle rounded">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent to-accent-secondary"
                style={{ height: "100%", scaleY: pathLength, originY: 0 }}
              />
            </div>
          )}

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col md:flex-row items-center w-full relative ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  
                  {/* Timeline node */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-ml-[6px] w-[12px] h-[12px] rounded-full bg-primary border-2 border-accent shadow-[0_0_10px_var(--color-accent)] z-20" />

                  {/* Card side */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="group flex flex-col bg-surface border-l-[3px] border-accent rounded-xl p-6 md:p-8 hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all duration-300 relative overflow-hidden">
                      
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(var(--color-accent) 0.5px, transparent 0.5px)',
                          backgroundSize: '16px 16px',
                          opacity: 0.03
                        }}
                      />
                      
                      <div className="flex flex-col h-full z-10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Link href={`/projects/${project.name}`}>
                            <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-accent transition-colors">
                              {project.name}
                            </h3>
                          </Link>
                          {project.language && (
                            <span className="text-[10px] font-mono px-2 py-1 bg-primary border border-border-active rounded text-text-secondary">
                              {project.language}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
                          {project.description || "No description provided."}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-xs font-mono text-text-dim mb-6 pb-6 border-b border-border-subtle">
                          <div className="flex items-center gap-1.5">
                            <Star className="w-3 h-3" /> {project.stargazers_count}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" /> Updated {format(new Date(project.updated_at), 'MMM dd, yyyy')}
                          </div>
                          {project.topics && project.topics.length > 0 && (
                            <div className="flex gap-2 flex-wrap w-full mt-2">
                              {project.topics.slice(0, 3).map(topic => (
                                <span key={topic} className="px-2 py-0.5 bg-primary rounded border border-border-subtle">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Link 
                            href={`/projects/${project.name}`}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_15px_var(--color-accent-glow)] transition-all font-mono text-xs"
                          >
                            View Details
                          </Link>
                          <a 
                            href={project.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-surface border border-border-subtle text-text-primary hover:text-accent hover:border-accent rounded-lg transition-all font-mono text-xs"
                          >
                            <Code className="w-3 h-3" /> GitHub
                          </a>
                          {project.homepage && (
                            <a 
                              href={project.homepage} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 bg-surface border border-border-subtle text-text-primary hover:text-accent hover:border-accent rounded-lg transition-all font-mono text-xs"
                            >
                              <ExternalLink className="w-3 h-3" /> Demo
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty side for layout centering */}
                  <div className="hidden md:block w-1/2" />
                  
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center border border-dashed border-border-subtle rounded-xl w-full"
              >
                <p className="text-text-secondary font-mono text-lg">No repositories found matching your search.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
