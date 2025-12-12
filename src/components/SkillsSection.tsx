const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vue.js'],
  Backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Firebase'],
  Tools: ['Git', 'Docker', 'Figma', 'VS Code', 'Webpack', 'Jest'],
  "AI/ML": ['TensorFlow', 'PyTorch', 'OpenCV', 'Pandas', 'Scikit-learn']
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolset that empowers me to build end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-200">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-sm font-medium bg-white text-gray-700 rounded-md shadow-sm border border-gray-100 flex items-center"
                  >
                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
                   {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
