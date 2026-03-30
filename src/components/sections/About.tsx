"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const aboutData = {
  name: "Abu Bokar",
  role: "Software Engineer",
  based: "Dhaka, BD",
  open_to: "Remote / Hybrid",
  interests: [
    "Full Stack",
    "Computer Vision",
    "Mobile Dev"
  ]
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="font-mono text-accent text-sm md:text-base">02 / About</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            A bit about me.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-lg mb-8">
            I'm a full-stack engineer who loves blending seamless frontend experiences with robust backend architectures. With a background extending into machine learning and motion design, I don't just write code—I craft digital experiences that matter.
          </p>
          
          <div className="flex divide-x divide-border-subtle">
            <div className="pr-8 flex flex-col justify-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">
                {isInView ? <CountUp end={3} duration={2} suffix="+" /> : "0+"}
              </div>
              <div className="text-sm font-mono text-text-dim uppercase tracking-wider">Years</div>
            </div>
            <div className="px-8 flex flex-col justify-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">
                {isInView ? <CountUp end={5} duration={2} suffix="+" /> : "0+"}
              </div>
              <div className="text-sm font-mono text-text-dim uppercase tracking-wider">Stacks</div>
            </div>
            <div className="pl-8 flex flex-col justify-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">
                {isInView ? <CountUp end={4} duration={2} /> : "0"}
              </div>
              <div className="text-sm font-mono text-text-dim uppercase tracking-wider">Languages Spoken</div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Column - Terminal Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative bg-[#0d0d0d] rounded-xl border border-border-subtle overflow-hidden shadow-2xl font-mono text-sm md:text-base"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 border-b border-border-subtle bg-[#111111]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-success/80"></div>
            </div>
            <div className="mx-auto text-text-dim text-xs tracking-wider">about.json</div>
          </div>
          
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-accent/5 to-transparent h-10 animate-scanline z-10 hidden md:block"></div>
          
          {/* Terminal Body */}
          <div className="p-6 md:p-8 text-text-secondary leading-loose overflow-x-auto relative">
            <span className="text-accent-secondary">{`{`}</span>
            <div className="pl-6">
              <div><span className="text-accent">"name"</span>: <span className="text-white">"{aboutData.name}"</span>,</div>
              <div><span className="text-accent">"role"</span>: <span className="text-white">"{aboutData.role}"</span>,</div>
              <div><span className="text-accent">"based"</span>: <span className="text-white">"{aboutData.based}"</span>,</div>
              <div><span className="text-accent">"open_to"</span>: <span className="text-white">"{aboutData.open_to}"</span>,</div>
              <div><span className="text-accent">"interests"</span>: <span className="text-accent-secondary">[</span></div>
              <div className="pl-6">
                {aboutData.interests.map((interest, i) => (
                  <div key={i}><span className="text-white">"{interest}"</span>{i < aboutData.interests.length - 1 ? "," : ""}</div>
                ))}
              </div>
              <span className="text-accent-secondary">]</span>
            </div>
            <span className="text-accent-secondary">{`}`}</span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2 w-2 h-4 bg-accent flex"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
