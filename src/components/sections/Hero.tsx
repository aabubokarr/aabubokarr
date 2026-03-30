"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    
    // Slight parallax effect based on mouse
    meshRef.current.rotation.x += (state.pointer.y * 0.1 - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (state.pointer.x * 0.1 - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} />
      <meshBasicMaterial 
        color="#4FFBDF" 
        wireframe={true} 
        transparent={true}
        opacity={0.3}
      />
    </mesh>
  );
}

export default function Hero() {
  const name = "Md Abu Bokar";
  
  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 pb-16 px-6 md:px-16 overflow-hidden">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(var(--color-border-subtle) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-mono text-text-secondary mb-6 text-sm md:text-base opacity-70"
          >
            {"< Software Engineer />"}
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-tight tracking-tighter mb-6 flex flex-wrap">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.04,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className={char === " " ? "w-4 md:w-6" : ""}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 1.2, duration: 1, repeat: Infinity, ease: "linear" }}
              className="text-accent ml-2 font-mono font-light"
            >
              |
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-text-secondary text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed"
          >
            I build things for the web — full-stack apps,
            intelligent systems, and experiences worth clicking.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-8 py-4 bg-accent text-primary font-bold font-mono tracking-tight hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all flex items-center gap-2"
            >
              View Work <span className="text-xl">↓</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 border border-border-subtle text-text-primary font-mono tracking-tight hover:border-accent hover:text-accent transition-all"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
        
        {/* Right Content - 3D Wireframe */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden lg:block h-[600px] w-full relative"
        >
          <div className="absolute inset-0 cursor-crosshair">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <Icosahedron />
            </Canvas>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
