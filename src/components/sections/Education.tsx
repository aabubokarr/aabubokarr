"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";

const languages = [
  { name: "Bengali", level: "Native", percent: 100 },
  { name: "English", level: "Professional", percent: 90 },
  { name: "Hindi", level: "Conversational", percent: 70 },
  { name: "Mandarin", level: "Basic", percent: 35 },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 px-6 md:px-16 min-h-[70vh] flex items-center bg-surface">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-accent text-sm md:text-base mb-4">06 / Education & Languages</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            Background.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-elevated border border-border-subtle rounded-xl p-8 relative overflow-hidden group hover:border-accent/40 transition-colors"
          >
            <div className="text-4xl mb-6">🎓</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary leading-tight mb-2">
              B.Sc. in Computer Science<br />& Engineering
            </h3>
            
            <div className="w-12 h-1 bg-accent/30 my-6 group-hover:bg-accent group-hover:w-24 transition-all duration-500" />
            
            <div className="font-mono text-text-secondary text-lg">
              North South University
            </div>
            <div className="font-mono text-text-dim text-sm mt-1">
              Bashundhara, Dhaka &middot; 2022–Present
            </div>
            
            <GraduationCap className="absolute -bottom-10 -right-10 w-48 h-48 text-accent/5 pointer-events-none group-hover:-translate-y-2 transition-transform duration-500" />
          </motion.div>

          {/* Languages */}
          <div className="flex flex-col justify-center">
            <h3 className="font-mono text-text-primary mb-8 text-xl">Languages</h3>
            
            <div className="flex flex-col gap-6">
              {languages.map((lang, idx) => (
                <div key={lang.name} className="flex flex-col gap-2">
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-text-secondary">{lang.name}</span>
                    <span className="text-text-dim">{lang.level}</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full h-1.5 bg-border-subtle overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
