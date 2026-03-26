import React, { useEffect, useRef } from 'react';

const CursorSpotlight: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed pointer-events-none z-[5] -translate-x-1/2 -translate-y-1/2 mix-blend-normal"
      style={{
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.08s ease-out, top 0.08s ease-out',
      }}
    />
  );
};

export default CursorSpotlight;
