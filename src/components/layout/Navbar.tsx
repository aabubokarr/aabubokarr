"use client";

import { useState, useEffect } from "react";
import { Code2, Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { id: "/", label: "Home" },
  { id: "/#about", label: "About" },
  { id: "/#experience", label: "Experience" },
  { id: "/projects", label: "Projects" },
  { id: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-primary/80 backdrop-blur-md py-4 border-b border-border-subtle" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-accent tracking-tighter">
            AB
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.id}
                className={`relative group transition-colors ${
                  pathname === link.id ? "text-accent" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 text-text-secondary">
            <a href="https://github.com/aabubokarr" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              <Code2 className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

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
                  <Link
                    href={link.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={pathname === link.id ? "text-accent" : "text-text-primary"}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
