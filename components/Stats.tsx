import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const statsData: StatItem[] = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '', label: 'Countries Served' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const useCountUp = (target: number, isVisible: boolean, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
};

const StatCard: React.FC<{ stat: StatItem; isVisible: boolean; delay: number }> = ({ stat, isVisible, delay }) => {
  const count = useCountUp(stat.value, isVisible);
  return (
    <div
      className={`text-center p-8 rounded-2xl bg-[var(--glass-bg)] border border-white/5 backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[var(--accent-color)]/30 hover:shadow-2xl`}
      style={{ transitionDelay: `${delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
    >
      <p className="text-5xl font-bold text-[var(--accent-color)] mb-2">
        {stat.prefix}{count}{stat.suffix}
      </p>
      <p className="text-[var(--text-mid)] font-medium tracking-wide text-sm uppercase">{stat.label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} isVisible={isVisible} delay={index * 100} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
