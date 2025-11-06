
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = {
  "Languages & Frameworks": [ 'PHP', 'Python', 'JavaScript (ES6+)', 'React Native', 'Android', 'C#', 'HTML5 & CSS3' ],
  "AI & Machine Learning": [ 'TensorFlow', 'Scikit-learn', 'Machine Learning', 'Data Analysis' ],
  "Databases & DevOps": [ 'MySQL', 'PostgreSQL', 'Docker', 'Oracle', 'System Administration', 'Nginx', 'PM2', 'Systemd' ],
  "Professional": [ 'Project Management', 'Team Leadership', 'Agile Methodologies', 'Test Engineering', 'R&D' ]
};

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32">
      <h2 className={`section-heading text-3xl font-bold text-slate-100 mb-12 flex items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        My Skillset
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-bold text-slate-100 mb-4 text-[#64ffda]">{category}</h3>
            <ul className="space-y-3 text-slate-400">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-[#64ffda] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="font-mono">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;