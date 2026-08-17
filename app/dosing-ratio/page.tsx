import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Dosing Ratio & Calculator',
  description: 'Calculate the correct SulNOx dosing ratio for your vehicle.',
};

export default function DosingRatio() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Dosing Ratio & Calculator</h1>
            <p className="text-xl text-gray-200">
              Find the correct SulNOx concentration for your vehicle.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-ntl-navy mb-6">Standard Dosing Ratios</h2>
                <p className="text-gray-700 mb-6">
                  SulNOx (AUS 32) is typically dosed at specific ratios relative to fuel consumption. The exact ratio depends on
                  your vehicle's engine type and emission standard.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-ntl-slate rounded-lg border-l-4 border-sulnox-green">
                    <p className="text-sm text-gray-600 mb-1">Euro 6 / BS VI Vehicles</p>
                    <p className="text-xl font-bold text-ntl-navy">3–8% Dosing Ratio</p>
                    <p className="text-sm text-gray-600 mt-2">Most common for commercial vehicles</p>
                  </div>

                  <div className="p-4 bg-ntl-slate rounded-lg border-l-4 border-ntl-blue">
                    <p className="text-sm text-gray-600 mb-1">Heavy-Duty Trucks</p>
                    <p className="text-xl font-bold text-ntl-navy">5–8% Dosing Ratio</p>
                    <p className="text-sm text-gray-600 mt-2">Typical for industrial applications</p>
                  </div>

                  <div className="p-4 bg-ntl-slate rounded-lg border-l-4 border-ntl-navy">
                    <p className="text-sm text-gray-600 mb-1">Light Commercial Vehicles</p>
                    <p className="text-xl font-bold text-ntl-navy">4–6% Dosing Ratio</p>
                    <p className="text-sm text-gray-600 mt-2">Depends on specific OEM requirements</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-ntl-navy mb-6">Quick Calculator</h2>
                <div className="bg-ntl-slate p-8 rounded-lg border-2 border-ntl-blue">
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-ntl-navy mb-2">
                      Fuel Consumption (liters/100km)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 25"
                      className="input-field"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-ntl-navy mb-2">
                      Dosing Ratio (%)
                    </label>
                    <select className="input-field">
                      <option>Select dosing ratio...</option>
                      <option>3% (Light)</option>
                      <option>5% (Standard)</option>
                      <option>8% (Heavy)</option>
                    </select>
                  </div>

                  <div className="p-4 bg-white rounded-lg border-2 border-sulnox-green mb-6">
                    <p className="text-sm text-gray-600">Estimated SulNOx Consumption</p>
                    <p className="text-3xl font-bold text-sulnox-green">—</p>
                    <p className="text-xs text-gray-600 mt-2">liters per 100 km</p>
                  </div>

                  <button className="btn-primary w-full">Calculate</button>
                </div>

                <p className="text-xs text-gray-600 mt-4">
                  *This calculator is for informational purposes. Always refer to your vehicle manual for exact specifications.
                </p>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-white border-2 border-ntl-slate-dark/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-ntl-navy mb-6">Important Guidelines</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-sulnox-green text-2xl font-bold flex-shrink-0">⚠</div>
                  <div>
                    <p className="font-semibold text-ntl-navy">Always Check Your Vehicle Manual</p>
                    <p className="text-gray-700 text-sm">
                      OEM specifications take precedence over general guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sulnox-green text-2xl font-bold flex-shrink-0">⚠</div>
                  <div>
                    <p className="font-semibold text-ntl-navy">Monitor Tank Levels Regularly</p>
                    <p className="text-gray-700 text-sm">
                      Running out of SulNOx can trigger limp-home mode.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sulnox-green text-2xl font-bold flex-shrink-0">⚠</div>
                  <div>
                    <p className="font-semibold text-ntl-navy">Use Quality Metering Pumps</p>
                    <p className="text-gray-700 text-sm">
                      Accurate dosing depends on reliable injection equipment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-sulnox-green text-2xl font-bold flex-shrink-0">⚠</div>
                  <div>
                    <p className="font-semibold text-ntl-navy">Avoid Over-Dosing or Under-Dosing</p>
                    <p className="text-gray-700 text-sm">
                      Both can reduce SCR efficiency and affect emissions compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support CTA */}
            <div className="mt-12 text-center p-8 bg-gradient-to-r from-ntl-navy to-ntl-blue text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Need Technical Assistance?</h3>
              <p className="text-gray-200 mb-6">
                Our support team can help you determine the correct dosing ratio for your specific vehicle.
              </p>
              <a href="/support" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
