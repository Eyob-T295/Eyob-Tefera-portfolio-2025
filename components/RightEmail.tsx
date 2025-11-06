import React, { useEffect, useState } from 'react';

const RightEmail: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500); // Delay for entry animation
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className={`hidden md:flex fixed bottom-0 right-10 z-30 flex-col items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col items-center gap-6 p-0 m-0">
                <a href="mailto:eyobtefera295@gmail.com" className="font-mono text-sm p-2 text-[var(--text-mid)] hover:text-[var(--accent-color)] transform hover:-translate-y-1 transition-all writing-mode-v-rl tracking-widest">
                    eyobtefera295@gmail.com
                </a>
            </div>
            <div className="w-px h-24 bg-slate-700 mt-6"></div>
        </div>
    );
};

export default RightEmail;