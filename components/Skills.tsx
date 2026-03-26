
import React, { useRef, useEffect, useState } from 'react';

const skillCategories: { category: string; emoji: string; skills: string[] }[] = [
  {
    category: "Languages & Frameworks",
    emoji: "💻",
    skills: ['PHP', 'Python', 'JavaScript (ES6+)', 'React Native', 'Android', 'C#', 'HTML5 & CSS3', 'Flutter', 'Django', 'Node.js'],
  },
  {
    category: "AI & Machine Learning",
    emoji: "🤖",
    skills: ['TensorFlow', 'Scikit-learn', 'Machine Learning', 'Data Analysis', 'Signal Processing', 'SDR'],
  },
  {
    category: "Databases & DevOps",
    emoji: "🛠️",
    skills: ['MySQL', 'PostgreSQL', 'Docker', 'Oracle', 'Nginx', 'PM2', 'Systemd', 'Ubuntu Server', 'MariaDB'],
  },
  {
    category: "Professional",
    emoji: "📋",
    skills: ['Project Management', 'Team Leadership', 'Agile Methodologies', 'Test Engineering', 'R&D', 'System Administration'],
  }
];

const SkillTag: React.FC<{ skill: string; index: number; isVisible: boolean }> = ({ skill, index, isVisible }) => (
  <span
    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-mono font-medium border border-slate-700/60 text-slate-300 bg-slate-800/50 hover:border-[var(--accent-color)]/50 hover:text-[var(--accent-color)] hover:bg-[var(--accent-color)]/5 transition-all duration-300 cursor-default`}
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
      transition: `opacity 0.4s ease-out ${index * 50}ms, transform 0.4s ease-out ${index * 50}ms, color 0.3s, border-color 0.3s, background-color 0.3s`,
    }}
  >
    {skill}
  </span>
);

const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32">
      <h2 className={`section-heading text-3xl font-bold text-slate-100 mb-12 flex items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        My Skillset
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map(({ category, emoji, skills }) => (
          <div key={category} className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-white/5 backdrop-blur-xl hover:border-[var(--accent-color)]/20 transition-all duration-500">
            <h3 className="text-lg font-bold text-[var(--text-light)] mb-4 flex items-center gap-2">
              <span>{emoji}</span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <SkillTag key={skill} skill={skill} index={i} isVisible={isVisible} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;