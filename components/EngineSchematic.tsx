'use client';

/**
 * Original animated engine schematic - a stylized technical illustration
 * (not photorealistic stock photography) showing the fuel/conditioning
 * path glowing through the engine block, echoing the "glowing line"
 * storytelling from the reference mockup without reproducing any
 * third-party image.
 */
export function EngineSchematic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white rounded-2xl shadow-xl p-8">
      <svg viewBox="0 0 400 420" className="w-full h-full max-h-[420px]">
        <defs>
          <linearGradient id="blockGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Engine block body */}
        <rect x="90" y="60" width="220" height="280" rx="18" fill="url(#blockGrad)" />
        {/* Cylinder heads */}
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={115 + i * 50} y="80" width="34" height="50" rx="6" fill="#334155" />
        ))}
        {/* Pulleys */}
        <circle cx="130" cy="320" r="26" fill="#334155" stroke="#475569" strokeWidth="4" />
        <circle cx="270" cy="320" r="26" fill="#334155" stroke="#475569" strokeWidth="4" />
        <circle cx="200" cy="330" r="18" fill="#334155" stroke="#475569" strokeWidth="3" />

        {/* Intake manifold block on top */}
        <rect x="150" y="35" width="100" height="30" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />

        {/* Glowing conditioning path */}
        <path
          id="flowPath"
          d="M 60 400 C 100 380, 100 340, 140 320 C 170 300, 160 250, 200 220 C 240 190, 230 140, 270 110 C 290 95, 300 80, 320 60"
          fill="none"
          stroke="#00d9ff"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#glow)"
          opacity="0.9"
        >
          <animate attributeName="stroke" values="#00d9ff;#00a86b;#00d9ff" dur="3s" repeatCount="indefinite" />
        </path>
        {/* Traveling pulse along the path */}
        <circle r="7" fill="#ffffff" filter="url(#glow)">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M 60 400 C 100 380, 100 340, 140 320 C 170 300, 160 250, 200 220 C 240 190, 230 140, 270 110 C 290 95, 300 80, 320 60" />
        </circle>

        {/* Entry / exit labels */}
        <circle cx="60" cy="400" r="6" fill="#00a86b" />
        <circle cx="320" cy="60" r="6" fill="#00d9ff" />
      </svg>
    </div>
  );
}
