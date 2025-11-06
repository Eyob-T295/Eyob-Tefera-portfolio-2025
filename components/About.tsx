
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
              With a background in Computer Science (Bsc) and Project Management (Msc), I am a System Engineer and Researcher passionate about tackling complex challenges at the intersection of hardware and software. My professional experience is centered around research and development, where I design, test, and integrate solutions involving real-time data processing, signal analysis, and secure system deployment.


            </p>
            <p>
              I transform theoretical concepts into practical, reliable systems. My work spans developing AI models for signal classification, building low latency data pipelines, and securing production environments. With a strong mix of technical expertise and project management insight, I focus on delivering scalable, high impact solutions. I’m continuously exploring AI and emerging technologies to turn research into real world innovation.
            </p>
          </div>
          <div className="md:w-1/3 w-2/3 mx-auto md:mx-0">
            <div className="relative group aspect-square">
                <div className="absolute inset-0 rounded-lg bg-[#64ffda] transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 border-2 border-transparent">
                   <img 
                      src="image/me.jpg" 
                      alt="Eyob Tefera" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0a192f]/50 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;