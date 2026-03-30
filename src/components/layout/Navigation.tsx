"use client";

import { useState } from "react";
import { Code2, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { id: "hero", label: "01 Hero" },
  { id: "about", label: "02 About" },
  { id: "skills", label: "03 Skills" },
  { id: "experience", label: "04 Experience" },
  { id: "projects", label: "05 Projects" },
  { id: "education", label: "06 Education" },
  { id: "contact", label: "07 Contact" },
];

export default function Navigation() {
  // In a real app we would use intersection observers to set active section
  const [active, setActive] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Left Rail */}
      <motion.nav 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="hidden !hidden flex-col justify-between w-64 fixed left-0 top-0 bottom-0 h-screen py-10 px-8 border-r border-border-subtle z-40 bg-primary/50 backdrop-blur-sm"
      >
        <div className="text-3xl font-display font-bold text-accent tracking-tighter cursor-pointer" onClick={() => scrollTo("hero")}>
          AB
        </div>

        <ul className="flex flex-col gap-6 font-mono text-sm">
          {NAV_LINKS.map(link => (
            <li key={link.id} className="relative group flex items-center">
              <span className={`absolute -left-4 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 ${active === link.id ? "scale-100" : "scale-0"}`} />
              <button 
                onClick={() => scrollTo(link.id)}
                className={`relative hover:text-text-primary transition-colors flex items-center ${active === link.id ? "text-text-primary" : "text-text-secondary"}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-text-secondary">
          <a href="#" className="hover:text-accent transition-colors"><Code2 className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Globe className="w-5 h-5" /></a>
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border-subtle bg-primary/80 backdrop-blur-md z-40 flex items-center justify-between px-6">
        <div className="text-2xl font-display font-bold text-accent tracking-tighter">AB</div>
        <button onClick={() => setMobileMenuOpen(true)} className="text-text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute top-6 right-6 text-text-primary"
            >
              <X className="w-8 h-8" />
            </button>
            <ul className="flex flex-col gap-8 text-center font-mono text-2xl">
              {NAV_LINKS.map((link, i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.id}
                >
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className={`${active === link.id ? "text-accent" : "text-text-primary"}`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
