const ContactSection = () => {
    return (
      <section id="contacts" className="py-40 relative overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[15vw] font-bold text-white/5 leading-none select-none pointer-events-none absolute left-1/2 -translate-x-1/2 top-10">
            CONTACTS
          </h2>
          
          <div className="relative z-10 pt-20">
             <h3 className="text-4xl md:text-6xl font-bold text-white mb-12">
               Have an idea? <br />
               <span className="text-blue-500">Let&apos;s build it together.</span>
             </h3>
             
             <div className="flex flex-col items-center gap-4">
               <a 
                 href="mailto:abu.bokar@northsouth.edu"
                 className="inline-block px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
               >
                 abu.bokar@northsouth.edu
               </a>
               <a 
                 href="tel:01746883852"
                 className="inline-block px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all font-mono"
               >
                 +880 1746 883852
               </a>
             </div>

             <div className="mt-24 flex justify-between items-end border-b border-gray-800 pb-8 text-gray-400 uppercase text-sm tracking-widest">
               <span>&copy; 2024 Md Abu Bokar</span>
               <div className="flex gap-8">
                 <a href="#" className="hover:text-white transition-colors">Twitter</a>
                 <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                 <a href="#" className="hover:text-white transition-colors">GitHub</a>
               </div>
               <span>Dhaka, BD</span>
             </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
