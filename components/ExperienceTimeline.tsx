import React, { useRef, useState, useEffect } from 'react';
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    company: 'NISS',
    role: 'Technology Officer',
    date: 'June 2023 – Present',
    details: [
      'Lead research and development initiatives in emerging technologies & system development.',
      'Manage and optimize enterprise-level IT infrastructure for maximum efficiency and security.',
      'Collaborate with cross-functional teams to drive technology adoption and innovation.',
    ]
  },
  {
    company: 'Admas University',
    role: 'ICT Trainer & Technician',
    date: 'Feb 2022 – Present',
    details: [
      'Teach ICT courses to Diploma students, covering software applications and IT fundamentals.',
      'Manage and maintain university computer labs, ensuring hardware and software functionality.',
      'Provide technical support for students and staff, troubleshooting a wide range of IT issues.',
      'Recognized as "Best ICT Instructor" for outstanding teaching and student engagement.',
    ]
  },
  {
    company: 'MMCYTECH',
    role: 'IT Support Specialist',
    date: 'Jan 2023 – Apr 2024',
    details: [
      'Provided technical support for clients, troubleshooting hardware, software, and network issues.',
      'Installed, configured, and maintained IT systems to ensure optimal performance.',
      'Assisted in the deployment of new technologies and provided user training.',
      'Collaborated with teams to resolve technical issues and improve service efficiency.'
    ]
  },
  {
    company: 'Bridge Marketing',
    role: 'IT Expert',
    date: 'Apr 2019 – Aug 2022',
    details: [
      "Played a key role in maintaining and troubleshooting the company's IT infrastructure.",
      'Provided comprehensive IT support to in-office and remote employees.',
      'Managed network configurations and system backups to ensure data integrity.'
    ]
  },
  {
    company: 'New Bright Community',
    role: 'ICT Trainer (Intern)',
    date: 'Jan 2022 – Apr 2022',
    details: [
      'Taught high school and elementary students basic computer and ICT skills.',
      'Performed routine computer maintenance and troubleshooting.',
      "Managed and maintained the center's computer inventory control system.",
    ]
  }
];

const TimelineItem: React.FC<{ exp: ExperienceItem; index: number }> = ({ exp, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-start gap-8 mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left side */}
      <div className={`flex-1 ${isLeft ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
        {isLeft && (
          <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-white/5 backdrop-blur-xl hover:border-[var(--accent-color)]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-[var(--text-light)]">{exp.role}</h3>
            <p className="text-[var(--accent-color)] font-semibold mb-1">{exp.company}</p>
            <p className="font-mono text-xs text-slate-500 mb-4">{exp.date}</p>
            <ul className="space-y-2 text-left">
              {exp.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-mid)]">
                  <span className="text-[var(--accent-color)] mt-1 flex-shrink-0">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-[var(--accent-color)] shadow-[0_0_15px_var(--accent-color)] ring-2 ring-[var(--accent-color)]/30 mt-6"></div>
      </div>

      {/* Right side */}
      <div className={`flex-1 ${!isLeft ? 'text-left pl-8' : 'order-last'}`}>
        {!isLeft && (
          <div className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-white/5 backdrop-blur-xl hover:border-[var(--accent-color)]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-[var(--text-light)]">{exp.role}</h3>
            <p className="text-[var(--accent-color)] font-semibold mb-1">{exp.company}</p>
            <p className="font-mono text-xs text-slate-500 mb-4">{exp.date}</p>
            <ul className="space-y-2">
              {exp.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-mid)]">
                  <span className="text-[var(--accent-color)] mt-1 flex-shrink-0">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <h2 className="section-heading text-3xl font-bold text-[var(--text-light)] mb-16 flex items-center">
        Where I've Worked
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-700/50 to-transparent"></div>
        {experienceData.map((exp, index) => (
          <TimelineItem key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
