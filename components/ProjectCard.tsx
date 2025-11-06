import React, { useRef } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-[var(--accent-color)]"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, techStack, githubUrl, liveUrl } = project;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="glowing-border-card group flex flex-col justify-between h-full bg-[var(--glass-bg)] backdrop-blur-md rounded-md shadow-lg p-7 transition-all duration-300 hover:-translate-y-2 border border-slate-800"
    >
      <div>
        <header className="flex justify-between items-center mb-6">
          <div className="text-[var(--accent-color)]">
            <FolderIcon />
          </div>
          <div className="flex items-center space-x-4 text-[var(--text-mid)]">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub link" className="hover:text-[var(--accent-color)] transition-colors">
                <GithubIcon />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo link" className="hover:text-[var(--accent-color)] transition-colors">
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </header>
        <h3 className="text-xl font-bold text-[var(--text-light)] group-hover:text-[var(--accent-color)] transition-colors mb-3">
          <a href={liveUrl || githubUrl || '#'} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="text-[var(--text-mid)] text-md leading-relaxed">
          {description}
        </p>
      </div>
      <footer className="mt-6">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-slate-500">
          {techStack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default ProjectCard;