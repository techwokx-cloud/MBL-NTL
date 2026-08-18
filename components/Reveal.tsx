'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'fade';
}

/**
 * Lightweight scroll-reveal wrapper (IntersectionObserver based).
 * Gives sections a soft fade/slide-in feel similar to modern agency sites.
 */
export function Reveal({ children, delay = 0, className = '', direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const translate = direction === 'up' ? (visible ? 'translate-y-0' : 'translate-y-6') : '';

  return (
    <div
      ref={ref}
      className={`transition-all ease-out duration-700 ${translate} ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
