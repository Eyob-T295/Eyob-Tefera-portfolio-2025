import React, { useState } from 'react';

const StatusBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-2 px-4 bg-[var(--bg-color)]/90 backdrop-blur-xl border-t border-white/5">
      <div className="flex items-center gap-3 text-sm text-[var(--text-mid)]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="font-medium text-emerald-400">Open to opportunities</span>
        <span className="hidden md:inline text-slate-600">·</span>
        <span className="hidden md:inline">Available for freelance projects & full-time roles</span>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="ml-4 text-xs font-bold text-[var(--accent-color)] border border-[var(--accent-color)]/40 px-3 py-1 rounded-full hover:bg-[var(--accent-color)]/10 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 text-slate-600 hover:text-slate-400 transition-colors text-lg leading-none"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
};

export default StatusBar;
