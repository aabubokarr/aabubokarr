"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="text-3xl font-display font-bold text-accent tracking-tighter mb-4 inline-block">
            AB
          </Link>
          <p className="text-text-secondary max-w-sm mt-4 text-sm leading-relaxed">
            Software Engineer specializing in building exceptional digital experiences, 
            full-stack applications, and machine learning solutions.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-text-primary font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <Link href="/#about" className="text-text-secondary hover:text-accent transition-colors">About</Link>
            </li>
            <li>
              <Link href="/projects" className="text-text-secondary hover:text-accent transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="/#experience" className="text-text-secondary hover:text-accent transition-colors">Experience</Link>
            </li>
            <li>
              <Link href="/#contact" className="text-text-secondary hover:text-accent transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-text-primary font-bold mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/aabubokarr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:bg-surface hover:text-accent hover:border-accent transition-all">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/aabubokarr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:bg-surface hover:text-accent hover:border-accent transition-all">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="mailto:contact@abubokar.com" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:bg-surface hover:text-accent hover:border-accent transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border-subtle/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-text-dim">
        <p>Copyright &copy; {currentYear} Abu Bokar. All rights reserved.</p>
      </div>
    </footer>
  );
}
