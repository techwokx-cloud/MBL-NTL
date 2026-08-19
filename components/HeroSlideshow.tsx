'use client';

import { useState, useEffect } from 'react';

interface Slide {
  image: string;
  alt: string;
}

const slides: Slide[] = [
  { image: '/images/hero/hero-studio-1.jpg', alt: 'SulNOxEco Fuel Conditioner Range - Studio Edition' },
  // Add more slides here as additional hero photography becomes available
];

/**
 * Auto-rotating hero background slideshow. Currently ships with one slide;
 * built as a carousel so additional hero images can be dropped into the
 * `slides` array above without any other code changes.
 */
export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, idx) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === active ? 'opacity-100' : 'opacity-0'
          }`}
          loading={idx === 0 ? 'eager' : 'lazy'}
        />
      ))}
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === active ? 'bg-sulnox-green w-6' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
