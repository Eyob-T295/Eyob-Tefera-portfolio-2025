import React, { useState, useEffect } from 'react';

// Icons for Navigation
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 6h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
  </svg>
);
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>Sun</title><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>Moon</title><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><title>GitHub</title><path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.948 0-1.091.39-1.984 1.03-2.683-.103-.254-.447-1.273.098-2.652 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.202 2.398.099 2.652.64.699 1.029 1.592 1.029 2.683 0 3.846-2.337 4.692-4.565 4.942.36.31.678.923.678 1.862 0 1.344-.012 2.427-.012 2.756 0 .269.18.58.688.481C19.138 20.198 22 16.443 22 12.02 22 6.484 17.523 2 12 2z"></path></svg>
);
const DocumentTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', icon: <UserIcon /> },
    { name: 'Experience', href: '#experience', icon: <BriefcaseIcon /> },
    { name: 'Projects', href: '#projects', icon: <CodeIcon /> },
    { name: 'Certifications', href: '#certifications', icon: <CertificateIcon /> },
    { name: 'Contact', href: '#contact', icon: <MailIcon /> },
  ];

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['hero', 'about', 'experience', 'projects', 'certifications', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  // Theme state: 'dark' | 'light' with persistence; default to dark
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved as 'light' | 'dark';
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.slice(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (isOpen) {
      setIsOpen(false);
    }
  }; 


  return (
    <header className={`sticky top-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-[var(--bg-color)]/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={handleLinkClick} className="text-2xl font-bold text-white transition-colors hover:text-[var(--accent-color)]">
            ET
          </a>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-2 text-md font-medium transition-all duration-300 ${activeSection === link.href.slice(1) ? 'text-[var(--accent-color)] translate-x-1' : 'text-[var(--text-mid)] hover:text-[var(--accent-color)]'}`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
              <a href="/Resume/Eyob_Tefera_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--accent-color)] text-[var(--accent-color)] font-bold py-2 px-4 rounded-md text-sm hover:bg-[var(--accent-color)]/10 transition-all duration-300">
                <DocumentTextIcon />
                <span>Resume</span>
              </a>
              <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-4 p-2 rounded-md text-[var(--text-mid)] hover:text-[var(--accent-color)] transition-colors focus:outline-none">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </nav>
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md text-[var(--text-mid)] hover:text-[var(--accent-color)] focus:outline-none">
                {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-mid)] hover:text-[var(--accent-color)]">
                {isOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/80 backdrop-blur-lg">
          <nav className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center gap-3 text-lg font-medium text-[var(--text-mid)] hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
             <a href="/Resume/Eyob_Tefera_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-[var(--accent-color)] text-[var(--accent-color)] font-bold py-3 px-8 rounded-md text-lg hover:bg-[var(--accent-color)]/10 transition-all duration-300 mt-4">
                <DocumentTextIcon />
                <span>Resume</span>
              </a>
              <a href="https://github.com/Eyob-T295" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-3 text-[var(--text-mid)] hover:text-[var(--accent-color)] transition-colors mt-4">
                <GitHubIcon />
                <span className="sr-only">GitHub</span>
              </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;