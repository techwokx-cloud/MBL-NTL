import { HiOutlineBeaker, HiOutlineFire, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineCloud } from 'react-icons/hi';
import { FaGasPump } from 'react-icons/fa';

export function EngineExperience() {
  const steps = [
    {
      number: '01',
      icon: HiOutlineBeaker,
      title: 'Added to Fuel',
      description: 'SulNOxEco is dosed directly into the fuel tank, blending seamlessly with diesel, petrol or biofuel.',
    },
    {
      number: '02',
      icon: HiOutlineSparkles,
      title: 'Conditions the Fuel',
      description: 'The organic formula conditions and emulsifies the fuel, breaking down carbon deposits already in the system.',
    },
    {
      number: '03',
      icon: HiOutlineFire,
      title: 'Improved Combustion',
      description: 'Fuel burns more completely in the engine, releasing more of its available energy with less waste.',
    },
    {
      number: '04',
      icon: HiOutlineShieldCheck,
      title: 'Cleaner, Efficient Engine',
      description: 'The result: lower fuel consumption, reduced emissions, and a cleaner, better-protected engine over time.',
    },
  ];

  return (
    <section className="pt-8 pb-16 sm:pb-20 lg:pb-24 bg-ntl-slate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">Inside Your Engine</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mt-2 mb-4">How SulNOxEco Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, drop-in process that conditions fuel for cleaner, more efficient combustion &mdash; no engine
            modifications required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="h-full rounded-xl border border-ntl-blue/15 bg-ntl-slate p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-bold text-ntl-blue/15">{step.number}</span>
                  <step.icon className="w-9 h-9 text-sulnox-green" />
                </div>
                <h3 className="text-lg font-bold text-ntl-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/3 transform translate-x-full">
                  <div className="w-8 h-1 bg-gradient-to-r from-ntl-blue to-sulnox-green"></div>
                  <div className="w-0 h-0 border-l-4 border-l-sulnox-green border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Performance Benefits */}
        <div className="mt-16 rounded-2xl bg-ntl-navy p-8 md:p-10 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Performance You Can Feel<span className="text-sulnox-green">.</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {[
              {
                icon: FaGasPump,
                stat: '9 – 15%',
                label: 'Fuel Savings',
                desc: 'Improves fuel efficiency and helps you save more on every drive.',
              },
              {
                icon: HiOutlineCloud,
                stat: '90%',
                label: 'Fewer Emissions',
                desc: 'Reduces harmful exhaust emissions for a cleaner environment.',
              },
              {
                icon: HiOutlineShieldCheck,
                stat: '30%',
                label: 'Better Engine Life',
                desc: 'Protects and extends engine life for long-term performance.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 md:px-8 first:md:pl-0">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-sulnox-green" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-snug">
                    Up to <span className="text-sulnox-green">{item.stat}</span> {item.label}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
