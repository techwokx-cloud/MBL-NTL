'use client';

/**
 * Original SVG illustration comparing engine combustion with and without
 * SulNOxEco — deliberately hand-built (not sourced stock photography) to
 * avoid any licensing issues, while still giving the "before/after inside
 * the engine" visual your reference mockups called for.
 */
export function PistonComparison() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {/* Without SulNOxEco */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-8">
        <span className="absolute top-4 left-4 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          WITHOUT SULNOXECO
        </span>
        <svg viewBox="0 0 200 260" className="w-full h-64 mt-6">
          {/* Cylinder wall */}
          <rect x="50" y="20" width="100" height="180" rx="8" fill="none" stroke="#6b7280" strokeWidth="4" />
          {/* Carbon deposits */}
          <rect x="54" y="24" width="92" height="60" fill="#3f3226" opacity="0.9" />
          <circle cx="70" cy="40" r="6" fill="#2a2118" />
          <circle cx="100" cy="55" r="8" fill="#2a2118" />
          <circle cx="130" cy="35" r="5" fill="#2a2118" />
          <circle cx="85" cy="70" r="7" fill="#2a2118" />
          {/* Piston */}
          <rect x="55" y="150" width="90" height="50" rx="4" fill="#4b5563" />
          <rect x="55" y="150" width="90" height="8" fill="#6b7280" />
          {/* Weak/sooty flame */}
          <ellipse cx="100" cy="110" rx="18" ry="28" fill="#78716c" opacity="0.5" />
          <ellipse cx="100" cy="115" rx="10" ry="16" fill="#57534e" opacity="0.6" />
        </svg>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <p className="text-gray-400 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" /> Carbon build-up
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" /> Incomplete burn
          </p>
        </div>
      </div>

      {/* With SulNOxEco */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-ntl-navy to-ntl-blue p-8">
        <span className="absolute top-4 left-4 bg-sulnox-green text-white text-xs font-bold px-3 py-1 rounded-full">
          WITH SULNOXECO
        </span>
        <svg viewBox="0 0 200 260" className="w-full h-64 mt-6">
          <defs>
            <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#00a86b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00a86b" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Cylinder wall - clean */}
          <rect x="50" y="20" width="100" height="180" rx="8" fill="none" stroke="#00d9ff" strokeWidth="4" opacity="0.8" />
          <rect x="54" y="24" width="92" height="60" fill="#0a2a4a" opacity="0.4" />
          {/* Piston */}
          <rect x="55" y="150" width="90" height="50" rx="4" fill="#1e3a5f" />
          <rect x="55" y="150" width="90" height="8" fill="#00d9ff" opacity="0.7" />
          {/* Strong clean flame with glow */}
          <circle cx="100" cy="105" r="45" fill="url(#flameGlow)">
            <animate attributeName="r" values="40;48;40" dur="2s" repeatCount="indefinite" />
          </circle>
          <ellipse cx="100" cy="105" rx="16" ry="30" fill="#00d9ff" opacity="0.9">
            <animate attributeName="ry" values="28;34;28" dur="1.6s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="100" cy="110" rx="8" ry="18" fill="#ffffff" opacity="0.9">
            <animate attributeName="ry" values="16;20;16" dur="1.2s" repeatCount="indefinite" />
          </ellipse>
        </svg>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <p className="text-gray-200 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sulnox-green" /> Clean & protected
          </p>
          <p className="text-gray-200 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sulnox-green" /> Complete combustion
          </p>
        </div>
      </div>
    </div>
  );
}
