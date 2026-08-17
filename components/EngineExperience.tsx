export function EngineExperience() {
  const steps = [
    {
      number: '01',
      title: 'Injection',
      description: 'SulNOx solution is injected into the exhaust stream at precise intervals.',
    },
    {
      number: '02',
      title: 'Reaction',
      description:
        'The solution reacts with NOx compounds in the selective catalytic reduction (SCR) catalyst.',
    },
    {
      number: '03',
      title: 'Conversion',
      description:
        'NOx is converted into harmless nitrogen and water vapor, reducing emissions by up to 90%.',
    },
    {
      number: '04',
      title: 'Compliance',
      description:
        'Your vehicle meets international emission standards (Euro 6, BS VI, and beyond).',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ntl-navy mb-4">How SulNOx Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven four-step emission control process delivers measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step card */}
              <div className="h-full rounded-xl border-2 border-ntl-blue/20 bg-gradient-to-br from-ntl-blue/5 to-sulnox-green/5 p-8">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ntl-blue to-sulnox-green mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-ntl-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector arrow (hidden on last item) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/3 transform translate-x-full">
                  <div className="w-8 h-1 bg-gradient-to-r from-ntl-blue to-sulnox-green"></div>
                  <div className="w-0 h-0 border-l-4 border-l-sulnox-green border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-xl bg-ntl-slate p-8 border border-ntl-slate-dark/10">
          <h3 className="text-2xl font-bold text-ntl-navy mb-4">Performance Benefits</h3>
          <ul className="grid md:grid-cols-3 gap-8">
            <li className="flex gap-3">
              <span className="text-sulnox-green text-2xl font-bold">→</span>
              <div>
                <p className="font-semibold text-ntl-navy">Up to 90% NOx Reduction</p>
                <p className="text-sm text-gray-600">Exceeds regulatory limits</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-sulnox-green text-2xl font-bold">→</span>
              <div>
                <p className="font-semibold text-ntl-navy">Fuel Efficiency</p>
                <p className="text-sm text-gray-600">Optimized injection protocol</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-sulnox-green text-2xl font-bold">→</span>
              <div>
                <p className="font-semibold text-ntl-navy">Proven Reliability</p>
                <p className="text-sm text-gray-600">Field-tested across regions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
