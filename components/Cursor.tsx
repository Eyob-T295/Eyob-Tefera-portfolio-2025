import React, { useState, useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if(dotRef.current) {
                dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
            }
            if(followerRef.current) {
                followerRef.current.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor cursor-dot"></div>
            <div ref={followerRef} className="cursor cursor-follower"></div>
        </>
    );
};

export default Cursor;