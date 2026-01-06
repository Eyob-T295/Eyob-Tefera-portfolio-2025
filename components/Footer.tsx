
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-slate-400 text-center font-mono text-sm">
            Designed & Built by Eyob Tefera
          </p>
          <div>
            <a href="https://github.com/Eyob-T295" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-[#64ffda] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 inline-block"><title>GitHub</title><path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.093.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.948 0-1.091.39-1.984 1.03-2.683-.103-.254-.447-1.273.098-2.652 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.202 2.398.099 2.652.64.699 1.029 1.592 1.029 2.683 0 3.846-2.337 4.692-4.565 4.942.36.31.678.923.678 1.862 0 1.344-.012 2.427-.012 2.756 0 .269.18.58.688.481C19.138 20.198 22 16.443 22 12.02 22 6.484 17.523 2 12 2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;