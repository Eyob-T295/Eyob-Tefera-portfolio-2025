import React from 'react';
import { Certification } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const certificationsData: Certification[] = [
  {
    title: 'Android Developer Fundamentals',
    issuer: 'UDACITY',
    date: 'Aug 2024',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'June 2023',
  },
  {
    title: 'Introduction to Cyber Security',
    issuer: 'Great Learning',
    date: 'June 2023',
  },
  {
    title: 'Hardware and Network Servicing (Level 1-4)',
    issuer: 'TVET Agency',
    date: 'July 2022',
  },
  {
    title: 'Computer Maintenance and Networking',
    issuer: 'Satcom Institute of Technology',
    date: 'Dec 2021',
  },
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Coursera',
    date: 'Mar 2021',
  },
];

const CertificationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);


const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
    <div className="bg-[var(--glass-bg)] backdrop-blur-md border border-slate-800 p-6 rounded-md flex items-center gap-6 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/10 h-full">
        <div className="transform transition-transform duration-300">
            <CertificationIcon />
        </div>
        <div>
            <h3 className="text-lg font-bold text-[var(--text-light)] group-hover:text-[var(--accent-color)]">{cert.title}</h3>
            <p className="text-[var(--text-mid)]">{cert.issuer} &middot; {cert.date}</p>
        </div>
    </div>
);


const Certifications: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" ref={ref} className="py-20 md:py-32">
      <h2 className={`section-heading text-3xl font-bold text-[var(--text-light)] mb-12 flex items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Certifications & Training
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => (
          <div
            key={cert.title}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <CertificationCard cert={cert} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;