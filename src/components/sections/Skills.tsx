"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Brain, Globe, PenTool, LayoutTemplate } from "lucide-react";

// Particle animation variants
const particleVariants = {
  animate: (i: number) => ({
    y: ["0%", "-100%"],
    x: Math.sin(i) * 20,
    opacity: [0, 0.8, 0],
    transition: {
      duration: ((i * 1.7) % 5) + 5,
      repeat: Infinity,
      delay: (i * 1.3) % 5,
      ease: "linear" as const,
    },
  }),
};

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-accent" />,
    skills: ["React.js", "Next.js", "TailwindCSS", "Bootstrap", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: <Code2 className="w-5 h-5 text-accent" />,
    skills: ["Node.js", "Express.js", "Flask", "REST API", "Uvicorn"]
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5 text-accent" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5 text-accent" />,
    skills: ["React Native", "Expo"]
  },
  {
    title: "ML / DL",
    icon: <Brain className="w-5 h-5 text-accent" />,
    skills: ["MediaPipe", "PyTorch", "TensorFlow", "OpenCV", "BERT"]
  },
  {
    title: "Languages",
    icon: <Globe className="w-5 h-5 text-accent" />,
    skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Tools",
    icon: <PenTool className="w-5 h-5 text-accent" />,
    skills: ["Figma", "Postman", "Photoshop", "After Effects", "Premiere Pro", "Gazebo"]
  },
  {
    title: "No-Code",
    icon: <LayoutTemplate className="w-5 h-5 text-accent" />,
    skills: ["Framer", "Webflow"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 min-h-screen relative bg-surface overflow-hidden">
      
      {/* Background floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            custom={i}
            variants={particleVariants}
            animate="animate"
            className="absolute rounded-full bg-accent blur-[2px]"
            style={{
              width: ((i * 1.5) % 4) + 2 + "px",
              height: ((i * 1.5) % 4) + 2 + "px",
              left: `${(i * 17) % 100}%`,
              bottom: "-10%",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-accent text-sm md:text-base mb-4 text-center">03 / Skills</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight text-center">
            The tools I work with.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-elevated border border-border-subtle rounded-xl p-6 hover:border-accent/40 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-text-primary font-display font-bold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.05 + sIdx * 0.05 }}
                    className="px-3 py-1.5 rounded bg-[#1A2235] border border-border-subtle text-text-secondary text-sm font-mono cursor-default hover:border-border-active hover:text-accent hover:shadow-[0_0_10px_var(--color-accent-glow)] transition-all duration-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
