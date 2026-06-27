"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const name = "Abu Bokar";
  
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] relative flex flex-col justify-center items-center px-6 md:px-16 overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-border-subtle) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center relative z-10 text-center">
        
        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border-subtle backdrop-blur-md mb-8 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-text-secondary text-xs md:text-sm tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-extrabold leading-[1.1] tracking-tighter mb-6 flex flex-wrap justify-center relative z-20 text-white drop-shadow-sm">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.4 + index * 0.03,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={char === " " ? "w-4 md:w-6 inline-block" : "inline-block hover:text-accent hover:-translate-y-1 transition-all duration-300 cursor-default"}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="text-text-secondary text-lg md:text-2xl max-w-2xl mb-12 font-light leading-relaxed"
          >
            I build things for the web — full-stack apps,
            intelligent systems, and <span className="text-white font-medium">experiences worth clicking.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-primary font-bold font-mono tracking-tight shadow-[0_0_15px_var(--color-accent-glow)] hover:shadow-[0_0_30px_var(--color-accent-glow)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              View Work 
              <span className="text-xl group-hover:translate-y-1 transition-transform">↓</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border-subtle bg-surface/30 backdrop-blur-sm text-text-primary font-mono tracking-tight hover:border-accent hover:text-accent hover:bg-accent/5 transition-all flex justify-center"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden md:flex z-10"
      >
        <span className="font-mono text-[10px] text-text-dim tracking-[0.2em] uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
