import React, { useState, useEffect } from 'react';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);

const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
);

const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10v4M8 12h8"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
);

const PHPIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);


const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const titles = [
    " a Tech Researcher.",
    " a Full-stack Developer.",
    " a Solution-oriented Engineer.",
    " someone who builds with passion."
  ];
  const typingSpeed = 100; // Adjusted for better feel
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && subIndex === titles[index].length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      } 
      
      if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
        return;
      }

      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        setCurrentText(titles[index].substring(0, subIndex + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);

      return () => clearTimeout(timeout);
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [subIndex, index, isDeleting, titles]);


  return (
    <section id="hero" className="min-h-screen flex items-center justify-start text-left">
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <p className="text-xl text-[var(--accent-color)] mb-4 font-medium opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          Hi there, I'm
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-light)] mb-4 tracking-tight opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
          Eyob Tefera.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 opacity-0 animate-[fadeInUp_0.7s_ease-out_0.4s_forwards] min-h-[56px] md:min-h-[72px]">
          I'm<span>{currentText}</span>
          <span className="blinking-cursor">|</span>
        </h2>
        <p className="max-w-2xl text-xl text-[var(--text-mid)] mb-12 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          I build robust hardware and software integrations with a focus on real-time systems and scalable infrastructure. Based on my experience in IT and network support, I develop efficient, user-centric solutions.
        </p>
        
        {/* Hero Icons Section */}
        <div className="flex flex-wrap items-center gap-8 mt-16 animate-[fadeInUp_1.1s_ease-out_forwards] opacity-0">
            {/* Social Group */}
            <div className="flex items-center gap-6 pr-8 border-r border-white/10">
                <a href="https://github.com/Eyob-T295" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--accent-color)] transition-all duration-300 transform hover:-translate-y-1">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/eyob-tefera-5b9b3a21a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--accent-color)] transition-all duration-300 transform hover:-translate-y-1">
                    <LinkedInIcon />
                </a>
            </div>

            {/* Tech Group */}
            <div className="flex items-center gap-6 md:gap-8">
                <div className="group relative">
                    <div className="text-slate-500 transition-all duration-300 transform hover:-translate-y-1 hover:text-[var(--accent-color)]">
                        <ReactIcon />
                    </div>
                </div>
                <div className="group relative">
                    <div className="text-slate-500 transition-all duration-300 transform hover:-translate-y-1 hover:text-[var(--accent-color)]">
                        <PythonIcon />
                    </div>
                </div>
                <div className="group relative">
                    <div className="text-slate-500 transition-all duration-300 transform hover:-translate-y-1 hover:text-[var(--accent-color)]">
                        <PHPIcon />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
