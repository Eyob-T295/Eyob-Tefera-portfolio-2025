
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-slate-400 text-center font-mono text-sm">
            Designed & Built by Eyob Tefera
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;