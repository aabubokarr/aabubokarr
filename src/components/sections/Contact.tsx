"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
          <div className="font-mono text-accent text-sm md:text-base mb-6">06 / Contact</div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tighter mb-8">
            {"Let's build"}<br />something.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-16 font-light">
            Open to full-time roles, freelance projects,
            and interesting collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 mb-24"
        >
          {/* Email Link */}
          <a
            href="mailto:abu.bokar@northsouth.edu"
            className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-surface border border-border-subtle hover:border-accent hover:bg-elevated hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_var(--color-accent-glow)] overflow-hidden"
            aria-label="Email Me"
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(var(--color-accent) 0.5px, transparent 0.5px)',
                backgroundSize: '12px 12px',
                opacity: 0.05
              }}
            />
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-text-secondary group-hover:text-accent transition-colors duration-300" />
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/8801746883852"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-surface border border-border-subtle hover:border-emerald-500 hover:bg-elevated hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] overflow-hidden"
            aria-label="WhatsApp Me"
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)',
                backgroundSize: '12px 12px',
                opacity: 0.05
              }}
            />
            <svg 
              className="w-8 h-8 md:w-10 md:h-10 text-text-secondary group-hover:text-emerald-500 transition-colors duration-300" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
