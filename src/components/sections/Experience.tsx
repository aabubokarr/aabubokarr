"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Kolorowey",
    location: "New Delhi, India",
    period: "Nov 2023 – Jul 2025",
    bullets: [
      "Built responsive web interfaces using React.js and TailwindCSS.",
      "Developed reusable UI components to improve development speed.",
      "Integrated RESTful APIs to ensure seamless data flow to the frontend."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Sunday studio",
    location: "Chittagong, Bangladesh",
    period: "Sept 2022 – Dec 2025",
    bullets: [
      "Converted Figma designs into high-performance Next.js sites.",
      "Added advanced UI animations using Framer Motion.",
      "Delivered mobile-first portfolio and agency websites."
    ]
  }
];

export default function Experience() {
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

  return (
    <section id="experience" className="py-24 px-6 md:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="font-mono text-accent text-sm md:text-base mb-4">04 / Experience</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            Where I've worked.
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative pl-8 md:pl-0">
          
          {/* Vertical line timeline */}
          <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-border-subtle rounded">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent to-accent-secondary"
              style={{ height: "100%", scaleY: pathLength, originY: 0 }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center w-full relative ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute left-[-21px] md:left-1/2 md:-ml-[6px] w-[12px] h-[12px] rounded-full bg-primary border-2 border-accent shadow-[0_0_10px_var(--color-accent)] z-20"
                />

                {/* Card side */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="bg-surface rounded-xl border-l-[3px] border-accent p-6 md:p-8 hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Background faint glow on hover */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-300" />
                    
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-1">{exp.role}</h3>
                    <div className="font-mono text-accent mb-4 text-sm md:text-base">{exp.company} &middot; {exp.location}</div>
                    
                    <div className="text-text-dim font-mono text-sm mb-6 pb-6 border-b border-border-subtle">
                      {exp.period}
                    </div>

                    <ul className="flex flex-col gap-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex text-text-secondary leading-relaxed text-sm md:text-base">
                          <span className="text-accent mr-3 mt-1.5 opacity-60 text-xs">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty side for layout centering */}
                <div className="hidden md:block w-1/2" />
                
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
