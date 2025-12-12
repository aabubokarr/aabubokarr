const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-[#050505]">
      {/* Background Visuals - CSS Fallback since GenAI limit hit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-mesh pointer-events-none"></div>
      
      {/* Abstract Shape Construction (Imitating the blob) */}
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] opacity-80 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute top-10 left-10 w-3/4 h-3/4 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        
        {/* Massive Typography Layout Matrix */}
        <div className="flex flex-col mb-12">
          
          {/* Row 1: "Full-stack" + Projects Button */}
          <div className="flex flex-col md:flex-row items-end md:items-center gap-8 md:gap-16">
            <h1 className="text-[12vw] md:text-[8rem] lg:text-[11rem] font-extrabold text-white leading-[0.8] tracking-tighter">
              Full-stack
            </h1>
            
            {/* The Projects "Pill" - Tucked in */}
            <a 
               href="#projects"
               className="hidden md:flex items-center justify-between w-64 h-20 bg-white rounded-full px-8 hover:scale-105 transition-transform duration-300 group"
             >
               <span className="text-xl font-bold text-black">Projects</span>
               <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                 </svg>
               </div>
            </a>
          </div>

          {/* Row 2: "Developer" Right Aligned */}
          <div className="w-full text-right">
             <h1 className="text-[12vw] md:text-[8rem] lg:text-[11rem] font-extrabold text-white leading-[0.8] tracking-tighter">
              Developer
            </h1>
          </div>
        </div>

        {/* Bottom Area: Subtext & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-8 gap-8">
           <div className="max-w-md">
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              My goal is to write <span className="text-white font-medium italic">maintainable, clean</span> and <span className="text-white font-medium italic">understandable code</span> to process development was enjoyable.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
             {/* Mobile "Projects" button if screened out above */}
             <a 
               href="#projects"
               className="md:hidden flex items-center justify-center w-full h-14 bg-white rounded-full text-black font-bold text-lg mb-4"
             >
               View Projects
             </a>

             <SocialPill href="https://github.com/woabu0" icon="github" label="Github" />
             <SocialPill href="#" icon="linkedin" label="Linkedin" />
             <SocialPill href="#" icon="telegram" label="Telegram" />
             <SocialPill href="#" icon="facebook" label="Facebook" />
             <SocialPill href="#" icon="instagram" label="Instagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Exact replica of the "Pill" social buttons
const SocialPill = ({ href, icon, label }: { href: string; icon: string; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all text-gray-300 hover:text-white group"
  >
    {icon === 'github' && (
       <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    )}
    {/* Generic Icon for others for speed */}
    {icon !== 'github' && (
      <span className="w-5 h-5 flex items-center justify-center opacity-70 group-hover:opacity-100">
         {icon === 'instagram' ? 
           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg> :
           <div className="w-2 h-2 bg-white rounded-full"></div>
         }
      </span>
    )}
    <span className="capitalize">{label}</span>
  </a>
);

export default HeroSection;
