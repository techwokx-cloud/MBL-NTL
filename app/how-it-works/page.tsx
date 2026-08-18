import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { EngineExperience } from '@/components/EngineExperience';
import { Reveal } from '@/components/Reveal';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Understand how SulNOxEco Fuel Conditioner improves combustion and reduces emissions.',
};

export default function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">The Science</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">How SulNOxEco Works</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                A 100% organic fuel conditioner that improves combustion in your existing engine &mdash; no
                retrofits, no downtime.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <EngineExperience />

        {/* Technical Details */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-12 text-center">Product Overview</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-12">
              <Reveal className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-ntl-navy mb-4">What SulNOxEco Is</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    '100% organic, biodegradable fuel conditioner',
                    'Blends directly into diesel, petrol or biofuel',
                    'Formulated in the UK, packaged and distributed in Ghana',
                    'No engine modification or capital investment required',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FaCheckCircle className="w-4 h-4 text-sulnox-green mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={100} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-ntl-navy mb-4">Where It's Used</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Road transport, fleets and generators',
                    'Marine engines and vessels',
                    'Locomotives and rail operations',
                    'Agriculture, mining and construction equipment',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FaCheckCircle className="w-4 h-4 text-sulnox-green mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-12 text-center">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div className="space-y-4">
              {[
                {
                  q: 'Is SulNOxEco safe to handle?',
                  a: 'Yes. SulNOxEco is made from natural, biodegradable ingredients and is designed to be safe for regular handling. Standard workplace safety practices apply, as with any fuel additive.',
                },
                {
                  q: 'How is SulNOxEco added to my vehicle?',
                  a: 'SulNOxEco is measured and added directly into the fuel tank at the recommended dosing ratio for your fuel type and application. See our Dosing Ratio page for guidance.',
                },
                {
                  q: 'Will it damage my engine or void my warranty?',
                  a: 'No. SulNOxEco is compatible with all diesel, petrol and biofuel engines and works by improving fuel combustion, not by altering engine components.',
                },
                {
                  q: 'What fuel types is it compatible with?',
                  a: 'SulNOxEco is compatible with diesel, biofuels (including HVO) and petrol, across road, marine, rail and industrial applications.',
                },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 60}>
                  <details className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-sulnox-green/40 transition-colors bg-white">
                    <summary className="flex items-center justify-between font-semibold text-ntl-navy list-none">
                      <span>{item.q}</span>
                      <span className="text-sulnox-green group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-gray-700 mt-4">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
