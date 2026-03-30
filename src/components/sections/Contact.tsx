"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Radial Spotlight */}
      <div 
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] max-w-[800px] rounded-full pointer-events-none opacity-50 z-0"
        style={{
          background: "radial-gradient(circle closest-side, var(--color-accent-glow), transparent)"
        }}
      />
      
      {/* Background scanline sweeping */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "1000%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-[2px] bg-accent/20 blur-[2px]"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-accent text-sm md:text-base mb-6">07 / Contact</div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tighter mb-8">
            Let's build<br />something.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-16 font-light">
            Open to full-time roles, freelance projects,
            and interesting collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <a
            href="mailto:abu.bokar@northsouth.edu"
            className="group relative inline-block text-4xl md:text-5xl lg:text-7xl font-display font-bold text-text-primary hover-glitch"
          >
            <span>abu.bokar@northsouth.edu</span>
            <span className="text-accent ml-2 lg:ml-6 inline-block group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
              ↗
            </span>
            {/* Animated Underline */}
            <div className="absolute -bottom-4 left-0 w-full h-[3px] overflow-hidden">
              <div className="w-full h-full bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 font-mono text-text-secondary"
        >
          <a href="#" className="hover:text-accent transition-colors flex items-center gap-2">
            GitHub
          </a>
          <span className="text-text-dim">&middot;</span>
          <a href="#" className="hover:text-accent transition-colors flex items-center gap-2">
            LinkedIn
          </a>
          <span className="text-text-dim">&middot;</span>
          <a href="/resume.pdf" target="_blank" className="hover:text-accent transition-colors flex items-center gap-2">
            Resume <ArrowDown className="w-4 h-4 ml-1" />
          </a>
        </motion.div>

      </div>
      
      <div className="absolute bottom-8 text-center w-full font-mono text-xs text-text-dim z-10">
        Built for Md Abu Bokar &middot; Software Engineer
      </div>
    </section>
  );
}
