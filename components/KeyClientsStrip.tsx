'use client';

import { Reveal } from '@/components/Reveal';

const logos = [
  { file: 'shell.png', name: 'Shell' },
  { file: 'total.png', name: 'TotalEnergies' },
  { file: 'goil.png', name: 'GOIL' },
  { file: 'vivo.jpg', name: 'Vivo Energy' },
  { file: 'tor.png', name: 'TOR' },
  { file: 'petrosol.png', name: 'Petrosol' },
  { file: 't-oil.png', name: 'T-Oil' },
  { file: 'chase.png', name: 'Chase' },
  { file: 'Quantum.png', name: 'Quantum' },
  { file: 'TFC.png', name: 'TFC' },
  { file: 'zen.jpg', name: 'Zen' },
  { file: 'Authenti.png', name: 'Authenti' },
  { file: 'vana.png', name: 'Vana' },
  { file: 'BO.png', name: 'BO' },
  { file: 'Bost.png', name: 'Bost' },
  { file: 'TOT.jpg', name: 'TOT' },
];

export function KeyClientsStrip() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">Trusted Across the Industry</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mt-2">Key Clients &amp; Partners</h2>
        </Reveal>
        <Reveal delay={100} className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-ntl-slate rounded-lg p-4 h-20 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={`/images/clients/${logo.file}`}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
