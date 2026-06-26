"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Code, ExternalLink, Calendar, Star } from "lucide-react";
import Link from "next/link";
import { GithubRepo } from "@/services/github";
import { format } from "date-fns";

interface ProjectsListProps {
  initialProjects: GithubRepo[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [searchQuery, setSearchQuery] = useState("");

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

        {/* Projects List View */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col md:flex-row gap-6 bg-surface border border-border-subtle rounded-xl p-6 md:p-8 hover:border-accent/50 hover:bg-elevated transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Link href={`/projects/${project.name}`}>
                      <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                    </Link>
                    {project.language && (
                      <span className="text-xs font-mono px-2 py-1 bg-primary border border-border-active rounded text-text-secondary">
                        {project.language}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description || "No description provided."}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm font-mono text-text-dim">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4" /> {project.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> Updated {format(new Date(project.updated_at), 'MMM dd, yyyy')}
                    </div>
                    {project.topics && project.topics.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {project.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="px-2 py-0.5 bg-primary rounded border border-border-subtle text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex md:flex-col justify-start md:justify-center gap-4 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border-subtle md:pl-6 shrink-0">
                  <Link 
                    href={`/projects/${project.name}`}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary font-bold rounded-lg hover:shadow-[0_0_15px_var(--color-accent-glow)] transition-all font-mono"
                  >
                    View Details
                  </Link>
                  <a 
                    href={project.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-surface border border-border-subtle text-text-primary hover:text-accent hover:border-accent rounded-lg transition-all font-mono"
                  >
                    <Code className="w-4 h-4" /> GitHub
                  </a>
                  {project.homepage && (
                    <a 
                      href={project.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-surface border border-border-subtle text-text-primary hover:text-accent hover:border-accent rounded-lg transition-all font-mono"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center border border-dashed border-border-subtle rounded-xl"
            >
              <p className="text-text-secondary font-mono text-lg">No repositories found matching your search.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
