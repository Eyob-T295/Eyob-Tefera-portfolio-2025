import React, { useState, useEffect } from 'react';

// Define icons as components inside Hero.tsx
const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><path d="M12 8V4H8"/><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 2v2"/><path d="M9 2v2"/></svg>
);

const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><path d="M10.5 8.5a2 2 0 0 1-2.8-2.8l2.8 2.8z M13.5 11.5a2 2 0 0 0 2.8 2.8l-2.8-2.8z"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/><path d="M4 14a6 6 0 1 0 5-5"/><path d="M15 4a6 6 0 1 1-5 5"/></svg>
);

const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76c-.24-.24-3.12-3.12-6.24-3.12-3.12 0-6 2.88-6.24 3.12m12.48 8.48c.24.24 3.12 3.12 6.24 3.12 3.12 0 6-2.88 6.24-3.12m-12.48-8.48s-3.12-3.12-6.24-3.12m0 14.72s3.12 3.12 6.24 3.12"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/></svg>
);

const PHPIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 fill-current"><title>PHP</title><path d="M12 1.404L1.758 7.313v11.25l10.242 5.91 10.242-5.91V7.313L12 1.403zm-1.84 4.091h1.528v3.476h2.79v-3.476h1.527v8.909h-1.527v-3.92h-2.79v3.92h-1.528v-8.909zM8.07 5.495h2.51v8.909H8.07v-8.909zm10.252 0h1.528v3.476h2.79v-3.476h1.528v8.909h-1.528v-3.92h-2.79v3.92h-1.528v-8.909z"/></svg>
);


const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const titles = [" an Emerging Tech Researcher."," Backend Developer"," a System Engineer.", " an R&D Professional."," a Technology Officer"," ICT Trainer"," IT Support specialist" ];
  const typingSpeed = 1;
  const deletingSpeed = 0.5;
  const pauseDuration = 10;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && subIndex === titles[index].length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }

      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        setCurrentText(titles[index].substring(0, subIndex + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);

      return () => clearTimeout(timeout);
    };

    const typingTimeout = setTimeout(handleTyping, 100);
    return () => clearTimeout(typingTimeout);
  }, [subIndex, index, isDeleting, titles]);


  return (
    <section id="hero" className="min-h-screen flex items-center justify-start text-left">
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <p className="text-lg text-[var(--accent-color)] mb-4 animate-[fadeInUp_0.3s_ease-out]">Hi, my name is gulema</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-light)] mb-2 tracking-tight animate-[fadeInUp_0.5s_ease-out]">
          Eyob Tefera.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 animate-[fadeInUp_0.7s_ease-out] min-h-[56px] md:min-h-[72px]">
          I am<span>{currentText}</span>
          <span className="blinking-cursor">|</span>
        </h2>
        <p className="max-w-xl text-lg text-[var(--text-mid)] mb-10 animate-[fadeInUp_0.9s_ease-out]">
          My work bridges hardware and software through real-time systems and secure, scalable infrastructure combining hands-on IT and network support with backend development in Python, React, and PHP.
        </p>
        
        {/* New Icons Section */}
        <div className="flex items-center gap-6 md:gap-8 mt-12 animate-[fadeInUp_1.1s_ease-out]">
            <div className="group relative">
                <div className="text-[var(--text-mid)] transition-all duration-300 transform hover:-translate-y-1 hover:text-[var(--accent-color)]">
                    <AIIcon />
                </div>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-white text-xs rounded py-1 px-2 pointer-events-none">
                    AI / ML
                </span>
            </div>
             <div className="group relative">
                <div className="text-[var(--text-mid)] transition-all duration-300 transform hover:-translate-y-1 hover:text-[var(--accent-color)]">
                    <PythonIcon />
                </div>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-white text-xs rounded py-1 px-2 pointer-events-none">
                    Python
                </span>
            </div>
            <div className="group relative">
                <div className="text-[var(--text-mid)] transition-all duration-300 transform hover:-translate-y-1 hover:text-[var(--accent-color)]">
                    <ReactIcon />
                </div>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-white text-xs rounded py-1 px-2 pointer-events-none">
                    React
                </span>
            </div>
            <div className="group relative">
                <div className="text-[var(--text-mid)] transition-all duration-300 transform hover:-translate-y-1 hover:text-[var(--accent-color)]">
                    <PHPIcon />
                </div>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-white text-xs rounded py-1 px-2 pointer-events-none">
                    PHP
                </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;