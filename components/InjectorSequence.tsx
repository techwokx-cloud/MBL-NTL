'use client';

/**
 * Original animated injector-spray illustration (SVG + CSS), showing the
 * dirty -> cleaning -> clean progression with an actual nozzle graphic
 * and animated spray particles, rather than a single thin bar.
 */
const stages = [
  {
    label: 'Dirty Injector',
    tone: 'bg-gray-800',
    particleColor: '#9CA3AF',
    particleCount: 3,
    spread: 8,
    opacity: 0.5,
  },
  {
    label: 'Cleaning in Progress',
    tone: 'bg-ntl-blue',
    particleColor: '#00D9FF',
    particleCount: 6,
    spread: 20,
    opacity: 0.8,
  },
  {
    label: 'Clean Injector',
    tone: 'bg-sulnox-green',
    particleColor: '#FFFFFF',
    particleCount: 10,
    spread: 34,
    opacity: 1,
  },
];

export function InjectorSequence() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stages.map((stage, idx) => (
        <div
          key={idx}
          className={`${stage.tone} rounded-xl aspect-square flex flex-col items-center justify-between p-4 sm:p-6 text-white relative overflow-hidden`}
        >
          {/* Nozzle */}
          <svg viewBox="0 0 100 60" className="w-full h-14 sm:h-16 shrink-0">
            <rect x="35" y="5" width="30" height="20" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
            <rect x="45" y="25" width="10" height="12" fill="rgba(255,255,255,0.3)" />
            <polygon points="42,37 58,37 50,45" fill="rgba(255,255,255,0.35)" />
          </svg>

          {/* Spray particles */}
          <div className="relative flex-1 w-full flex items-start justify-center">
            {Array.from({ length: stage.particleCount }).map((_, i) => {
              const angle = ((i / (stage.particleCount - 1 || 1)) - 0.5) * stage.spread;
              const delay = (i % 4) * 0.15;
              return (
                <span
                  key={i}
                  className="absolute top-0 w-1 sm:w-1.5 rounded-full animate-spray"
                  style={{
                    left: '50%',
                    height: '55%',
                    backgroundColor: stage.particleColor,
                    opacity: stage.opacity,
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'top center',
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

          <p className="text-xs sm:text-sm font-bold text-center relative z-10">{stage.label}</p>
        </div>
      ))}
    </div>
  );
}
