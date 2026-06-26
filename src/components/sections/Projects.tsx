"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";
import { GithubRepo } from "@/services/github";

interface ProjectsProps {
  projects: GithubRepo[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <div className="font-mono text-accent text-sm md:text-base mb-4">05 / Projects</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
              Things I've built.
            </h2>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 font-mono text-accent hover:text-accent-secondary transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col justify-between bg-surface border border-border-subtle rounded-xl p-8 hover:-translate-y-2 hover:border-accent/50 hover:bg-elevated transition-all duration-300 relative overflow-hidden min-h-[320px]"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(var(--color-accent) 0.5px, transparent 0.5px)',
                  backgroundSize: '16px 16px',
                  opacity: 0.03
                }}
              />
              
              <div className="flex flex-col h-full z-10">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-mono text-border-active text-5xl opacity-20 font-bold group-hover:opacity-40 group-hover:text-accent transition-colors">
                      0{idx + 1}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end max-w-[70%]">
                      {project.topics && project.topics.slice(0, 3).map(topic => (
                        <span key={topic} className="text-xs font-mono text-text-dim px-2 py-1 rounded border border-border-subtle group-hover:text-accent/80 transition-colors">
                          {topic}
                        </span>
                      ))}
                      {(!project.topics || project.topics.length === 0) && project.language && (
                        <span className="text-xs font-mono text-text-dim px-2 py-1 rounded border border-border-subtle group-hover:text-accent/80 transition-colors">
                          {project.language}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-8 text-base">
                    {project.description || "A project exploring new technologies and solving unique problems."}
                  </p>
                </div>
                
                <Link href={`/projects/${project.name}`} className="mt-auto flex items-center gap-2 font-mono font-medium text-text-primary group-hover:text-accent transition-colors">
                  View Details <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
