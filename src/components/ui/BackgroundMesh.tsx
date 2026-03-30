"use client";

import { motion } from "framer-motion";

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-secondary blur-[150px] opacity-10"
      />
      <motion.div 
        className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] rounded-full bg-accent blur-[150px] opacity-[0.06] animate-pulse-glow"
      />
    </div>
  );
}
