const experiences = [
  {
    year: 'Nov, 2023 - July, 2025',
    company: 'Kolorowey',
    role: 'Frontend Developer',
    stack: 'React.js, TailwindCSS, APIs'
  },
  {
    year: 'Sept, 2022 - Dec, 2025',
    company: 'Sunday studio',
    role: 'Frontend Developer',
    stack: 'Next.js, Framer Motion'
  }
];

const skills = [
  { category: 'Language', items: 'C/C++, Java, Python, JavaScript, TypeScript' },
  { category: 'Frontend', items: 'React Js, Next Js, TailwindCSS, Bootstrap, Framer Motion' },
  { category: 'Backend', items: 'Node Js, Django, Express Js, Flask, FastAPI, Uvicorn' },
  { category: 'Database', items: 'MySQL, Postgresql, MongoDB' },
  { category: 'Mobile', items: 'React Native, Expo' },
  { category: 'No Code', items: 'Framer, Webflow, Wordpress' },
  { category: 'ML/DL', items: 'MediaPipe, PyTorch, TensorFlow, OpenCV, BERT' },
  { category: 'Tools', items: 'Figma, Postman, Photoshop, After Effects, Premiere Pro, Excel, Gazebo' }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Experience Timeline */}
        <div>
          <h2 className="text-5xl font-bold mb-16 text-white">Work</h2>
          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group py-8 border-b border-gray-800 hover:border-blue-500 transition-colors cursor-default"
              >
                <div className="grid grid-cols-[1fr_2fr] items-baseline gap-4">
                  <span className="text-gray-500 font-mono text-sm">{exp.year}</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                    <div className="flex justify-between items-center w-full">
                      <span className="text-gray-300 font-medium">{exp.role}</span>
                      <span className="text-gray-600 text-sm">{exp.stack}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Block matching Ref Image Style */}
        <div>
           <div className="sticky top-32">
             <h2 className="text-5xl font-bold mb-16 text-white">skills_</h2>
             <div className="flex flex-col gap-2">
                {skills.map((skill, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center py-3 px-4 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest w-28 shrink-0 mb-2 sm:mb-0 group-hover:text-blue-400 transition-colors">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.split(', ').map((item, idx) => (
                         <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5 hover:text-white hover:bg-white/10 transition-all cursor-default">
                           {item}
                         </span>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
