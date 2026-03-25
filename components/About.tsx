
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20 md:py-32">
        <h2 className={`section-heading text-3xl font-bold text-slate-100 mb-12 flex items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
          <div className="md:w-2/3 text-lg text-slate-400 space-y-6">
            <p>
              Hi! I'm Eyob, a System Engineer and Tech Researcher with a passion for building things that live at the intersection of hardware and software. With a background in Computer Science and Project Management, I focus on creating reliable, scalable solutions for real-world problems.
            </p>
            <p>
              My work revolves around research and development, where I design and integrate systems involving real-time data, signal analysis, and secure deployments. I love transforming complex theoretical concepts into practical tools that make a difference.
            </p>
            <p>
              Whether it's building AI models for signal classification or optimizing enterprise IT infrastructure, I'm always looking for new ways to innovate and learn.
            </p>
          </div>
          <div className="md:w-1/3 w-full max-w-[300px] mx-auto md:mx-0">
            <div className="relative group">
                <div className="absolute inset-0 rounded-2xl border-2 border-[var(--accent-color)]/30 translate-x-6 translate-y-6 transition-all duration-700 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                   <img 
                      src="/image/me.jpg" 
                      alt="Eyob Tefera" 
                      className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;