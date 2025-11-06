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
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/50 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={handleLinkClick} className="text-2xl font-bold text-white transition-colors hover:text-[var(--accent-color)]">
            ET
          </a>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 text-md font-medium text-[var(--text-mid)] hover:text-[var(--accent-color)] transition-colors duration-300"
                >
                  {link.icon}
                  <span>
                    <span className="text-[var(--accent-color)]">0{index + 1}.</span> {link.name}
                  </span>
                </a>
              ))}
              <a href="Eyob_Tefera_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--accent-color)] text-[var(--accent-color)] font-bold py-2 px-4 rounded-md text-sm hover:bg-[var(--accent-color)]/10 transition-all duration-300">
                <DocumentTextIcon />
                <span>Resume</span>
              </a>
            </nav>
            <div className="md:hidden">
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
                <span>
                  <span className="text-[var(--accent-color)]">0{index + 1}.</span> {link.name}
                </span>
              </a>
            ))}
             <a href="Eyob_Tefera_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-[var(--accent-color)] text-[var(--accent-color)] font-bold py-3 px-8 rounded-md text-lg hover:bg-[var(--accent-color)]/10 transition-all duration-300 mt-4">
                <DocumentTextIcon />
                <span>Resume</span>
              </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;