'use client';

import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { FaExclamationTriangle } from 'react-icons/fa';

const applications = [
  { name: 'Road Vehicles (Diesel & Petrol)', note: 'Cars, pick-ups, light commercial vehicles' },
  { name: 'Heavy-Duty Fleets & Generators', note: 'Trucks, buses, standby & industrial generators' },
  { name: 'Marine Engines', note: 'MDO, MGO and biofuel-powered vessels' },
  { name: 'Locomotives & Rail', note: 'Diesel rail traction and tampers' },
  { name: 'Agriculture, Mining & Construction', note: 'Heavy equipment and machinery' },
];

export default function DosingRatio() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Dosing Ratio Guide</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                SulNOxEco is added directly to your fuel tank in small, precise ratios. Use the guide below,
                and always confirm against your official product documentation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal className="bg-white border border-ntl-blue/15 rounded-xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-ntl-navy mb-3">Application-Based Dosing</h2>
              <p className="text-gray-700 mb-6">
                The correct SulNOxEco dosing ratio depends on your fuel type, engine and application. Approved
                dosing ratios for each product size are provided on the packaging and in the official Product
                Data Sheet.
              </p>
              <div className="space-y-3">
                {applications.map((app, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-ntl-slate rounded-lg">
                    <div>
                      <p className="font-semibold text-ntl-navy">{app.name}</p>
                      <p className="text-sm text-gray-600">{app.note}</p>
                    </div>
                    <a
                      href="/resources"
                      className="text-sm font-semibold text-sulnox-green hover:text-ntl-blue transition-colors whitespace-nowrap ml-4"
                    >
                      See Data Sheet →
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Guidelines */}
            <Reveal delay={100} className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-ntl-navy mb-6">Important Guidelines</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Always Follow the Product Data Sheet',
                    body: 'Approved dosing ratios per pack size are set out in the official SulNOxEco documentation — download it from our Resources page.',
                  },
                  {
                    title: 'Measure Accurately',
                    body: 'Use a measuring container to dose SulNOxEco into the fuel tank before or during refuelling for even mixing.',
                  },
                  {
                    title: 'Consistency Matters',
                    body: 'Dose with every refill for best, cumulative results across your fleet or vehicle.',
                  },
                  {
                    title: 'Unsure of the Right Ratio?',
                    body: "Talk to our team on WhatsApp or request a dosing recommendation — we're happy to help.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <FaExclamationTriangle className="w-5 h-5 text-sulnox-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ntl-navy">{item.title}</p>
                      <p className="text-gray-700 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Support CTA */}
            <Reveal delay={150} className="mt-12 text-center p-10 bg-gradient-to-r from-ntl-navy to-ntl-blue text-white rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Need Help Choosing the Right Dose?</h3>
              <p className="text-gray-200 mb-6 max-w-xl mx-auto">
                Our team can recommend the correct SulNOxEco ratio for your specific vehicle, fleet or application.
              </p>
              <a href="/support" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
                Contact Support
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
