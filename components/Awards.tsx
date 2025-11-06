import React from 'react';
import { Award } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const awardsData: Award[] = [
  {
    title: 'Certificate of Excellence',
    issuer: 'NISS',
    year: 2024,
  },
  {
    title: 'Well-Rounded Leader',
    issuer: 'NISS',
    year: 2023,
  },
  {
    title: 'Best ICT Instructor',
    issuer: 'Admas University',
    year: 2023,
  },
];

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);


const AwardCard: React.FC<{ award: Award }> = ({ award }) => (
    <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-slate-800 p-6 rounded-md flex items-center gap-6 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/10 h-full">
        <div className="transform transition-transform duration-300">
            <TrophyIcon />
        </div>
        <div>
            <h3 className="text-lg font-bold text-[var(--text-light)] group-hover:text-[var(--accent-color)]">{award.title}</h3>
            <p className="text-[var(--text-mid)]">{award.issuer} &middot; {award.year}</p>
        </div>
    </div>
);


const Awards: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="awards" ref={ref} className="py-20 md:py-32">
      <h2 className={`section-heading text-3xl font-bold text-[var(--text-light)] mb-12 flex items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Awards & Recognition
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardsData.map((award, index) => (
          <div
            key={award.title}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <AwardCard award={award} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;