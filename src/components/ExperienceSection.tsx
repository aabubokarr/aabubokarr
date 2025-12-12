const experiences = [
  {
    year: '2022 - Present',
    company: 'Upwork / Freelance',
    role: 'Full-Stack Developer',
    stack: 'Next.js, Node.js, Tailwind'
  },
  {
    year: '2021 - 2022',
    company: 'VK Development Lab',
    role: 'Frontend Developer',
    stack: 'React, Redux'
  },
  {
    year: '2020 - 2021',
    company: 'SN Inc.',
    role: 'Junior Developer',
    stack: 'JavaScript, Python'
  }
];

const skills = [
  { category: 'Frontend', items: 'React, Next.js, Vue, Tailwind, TypeScript' },
  { category: 'Backend', items: 'Node.js, Express, Python, PostgreSQL, MongoDB' },
  { category: 'DevOps', items: 'Docker, AWS, Git, CI/CD' },
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
             <div className="flex flex-col gap-6">
                {skills.map((skill, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-gray-800 bg-white/5 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                    <p className="text-gray-400 font-mono leading-relaxed">
                      {skill.items.split(', ').map((item, idx) => (
                         <span key={idx} className="inline-block mr-4 mb-2 hover:text-cyan-400 transition-colors">
                           / {item}
                         </span>
                      ))}
                    </p>
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
