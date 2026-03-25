import React, { useState } from 'react';
import { ExperienceItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experienceData: ExperienceItem[] = [
  {
    company: 'NISS',
    role: 'Technology Officer',
    date: 'June 2023 - Present',
    details: [
      'Lead research and development initiatives in emerging technologies & system development.',
      'Manage and optimize enterprise-level IT infrastructure for maximum efficiency and security.',
      'Collaborate with cross-functional teams to drive technology adoption and innovation.',
    ]
  },
  {
    company: 'Admas University',
    role: 'ICT Trainer & Technician',
    date: 'Feb 2022 - Present',
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
    date: 'Jan 2023 - Apr 2024',
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
    date: 'Apr 2019 - Aug 2022',
    details: [
      "Played a key role in maintaining and troubleshooting the company's IT infrastructure.",
      'Provided comprehensive IT support to in-office and remote employees.',
      'Managed network configurations and system backups to ensure data integrity.'
    ]
  },
  {
    company: 'New Bright Community',
    role: 'ICT Trainer (Intern)',
    date: 'Jan 2022 - Apr 2022',
    details: [
        'Taught high school and elementary students basic computer and ICT skills.',
        'Performed routine computer maintenance and troubleshooting.',
        'Managed and maintained the center\'s computer inventory control system.',
    ]
  }
];


const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32">
      <h2 className={`section-heading text-3xl font-bold text-[var(--text-light)] mb-12 flex items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Where I've Worked
      </h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-slate-800/50">
          {experienceData.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={`text-left whitespace-nowrap px-6 py-4 text-sm font-medium transition-all duration-300 relative ${activeTab === index ? 'text-[var(--accent-color)] bg-[var(--accent-color)]/5' : 'text-[var(--text-mid)] hover:bg-slate-800/30 hover:text-[var(--accent-color)]'}`}
            >
              {exp.company}
               {activeTab === index && (
                <span className="absolute bottom-[-2px] left-0 md:bottom-0 md:left-[-2px] md:top-0 h-0.5 md:h-full w-full md:w-0.5 bg-[var(--accent-color)] shadow-[0_0_10px_var(--accent-color)]"></span>
              )}
            </button>
          ))}
        </div>
        <div className="flex-1 min-h-[350px] p-8 rounded-xl bg-[var(--glass-bg)] border border-slate-800/50 backdrop-blur-xl shadow-2xl">
          {experienceData.map((exp, index) => (
            <div key={index} className={`${activeTab === index ? 'block animate-[fadeIn_0.5s_ease-out]' : 'hidden'}`}>
              <h3 className="text-2xl font-bold text-[var(--text-light)]">
                {exp.role} <span className="text-[var(--accent-color)]">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-sm text-slate-500 mt-2 mb-8">{exp.date}</p>
              <ul className="space-y-4 text-[var(--text-mid)] text-lg">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 mt-1 text-[var(--accent-color)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;