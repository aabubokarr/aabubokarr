"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "amoha",
    name: "Amoha",
    tags: ["AI", "PyTorch", "Computer Vision"],
    desc: "AI-powered eye disease detection using deep learning and medical imaging. Fast, reliable, and accessible diagnostics for early intervention.",
    link: "#",
    featured: true
  },
  {
    id: "sherlock",
    name: "Sherlock",
    tags: ["Security", "Node.js", "React"],
    desc: "A real-time security monitoring system with live alerts and access control.",
    link: "#",
    featured: false
  },
  {
    id: "fifr",
    name: "Fifr",
    tags: ["FinTech", "PostgreSQL", "Express"],
    desc: "A financial platform for streamlined transaction tracking and portfolio management.",
    link: "#",
    featured: false
  },
  {
    id: "devign",
    name: "Devign",
    tags: ["Agency", "Next.js", "Framer Motion"],
    desc: "A motion-first agency website with scroll-triggered animations and rich UI.",
    link: "#",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-accent text-sm md:text-base mb-4">05 / Projects</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            Things I've built.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group flex flex-col justify-between bg-surface border border-border-subtle rounded-xl p-8 hover:-translate-y-2 hover:border-accent/50 hover:bg-elevated transition-all duration-300 relative overflow-hidden ${project.featured ? "md:col-span-2 md:flex-row md:items-center gap-12 border-accent/30 hover:border-accent" : "min-h-[320px]"}`}
            >
              {/* Subtle Grid Background Pattern on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(var(--color-accent) 0.5px, transparent 0.5px)',
                  backgroundSize: '16px 16px',
                  opacity: 0.03
                }}
              />
              
              {/* Feature Visualization (only for Amoha) */}
              {project.featured && (
                <div className="w-full md:w-1/2 h-48 md:h-full min-h-[250px] relative rounded-lg border border-border-subtle overflow-hidden flex items-center justify-center bg-primary">
                  {/* Abstract Eye visualization placeholder */}
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full border border-accent/40 flex items-center justify-center relative shadow-[0_0_30px_var(--color-accent-glow)]"
                  >
                    <div className="w-16 h-16 rounded-full border border-accent/60 bg-accent/10" />
                    <div className="w-4 h-4 rounded-full bg-accent absolute" />
                  </motion.div>
                </div>
              )}

              <div className={`flex flex-col h-full z-10 ${project.featured ? "md:w-1/2 py-4" : ""}`}>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-mono text-border-active text-5xl opacity-20 font-bold group-hover:opacity-40 group-hover:text-accent transition-colors">
                      0{idx + 1}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end max-w-[70%]">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-text-dim px-2 py-1 rounded border border-border-subtle group-hover:text-accent/80 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-8 text-base">
                    {project.desc}
                  </p>
                </div>
                
                <div className={`mt-auto flex items-center gap-2 font-mono font-medium text-text-primary group-hover:text-accent transition-colors ${project.featured ? "" : ""}`}>
                  View Details <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
