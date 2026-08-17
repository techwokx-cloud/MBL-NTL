import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { EngineExperience } from '@/components/EngineExperience';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Understand the SulNOx emission control process and how it reduces NOx emissions by up to 90%.',
};

export default function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">How SulNOx Works</h1>
            <p className="text-xl text-gray-200">
              The science behind our emission control solution.
            </p>
          </div>
        </section>

        {/* Process */}
        <EngineExperience />

        {/* Technical Details */}
        <section className="section-padding bg-ntl-slate">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold text-ntl-navy mb-12 text-center">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-ntl-navy mb-4">Active Ingredient</h3>
                <p className="text-gray-700 mb-4">
                  Aqueous urea solution (AUS 32) formulated to ISO 22241 and ASTM D6427 standards.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 32% urea concentration</li>
                  <li>✓ Distilled water carrier</li>
                  <li>✓ Additives for stability and corrosion inhibition</li>
                  <li>✓ Storage temperature: -11°C to 35°C</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ntl-navy mb-4">Application</h3>
                <p className="text-gray-700 mb-4">
                  Injected into the SCR catalyst chamber for selective catalytic reduction of NOx.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Precision metering pump required</li>
                  <li>✓ 3-8% dosing ratio of fuel consumption</li>
                  <li>✓ Compatible with Euro 6 and BS VI SCR systems</li>
                  <li>✓ Reduces NOx by up to 90%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold text-ntl-navy mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-ntl-slate transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>Is SulNOx safe to handle?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Yes. SulNOx is a non-toxic, aqueous urea solution classified as safe for handling with proper ventilation.
                  Standard workplace safety protocols apply.
                </p>
              </details>
              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-ntl-slate transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>How often does the tank need refilling?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Refill intervals depend on vehicle usage and consumption rates. Most operators refill every 5,000–15,000 km,
                  depending on dosing ratio and driving conditions.
                </p>
              </details>
              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-ntl-slate transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>What happens if I run out of SulNOx?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  The engine will enter limp-home mode to avoid SCR system damage. Refill immediately to restore full performance
                  and avoid fault codes.
                </p>
              </details>
              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-ntl-slate transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>Does SulNOx damage the engine?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  No. SulNOx works only in the SCR catalyst and does not contact the engine. Millions of liters are used globally
                  with zero engine damage when handled correctly.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
