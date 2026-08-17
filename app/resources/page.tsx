import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Download technical documents, guides, and resources for SulNOx.',
};

export default function Resources() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-gray-200">
              Technical documentation, guides, and training materials.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Technical Docs */}
              <div className="border-2 border-ntl-blue/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-ntl-navy mb-6">Technical Documentation</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-ntl-blue/10 transition-colors"
                    >
                      <span className="text-sulnox-green text-2xl">📄</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">SulNOx Product Specification Sheet</p>
                        <p className="text-xs text-gray-600">ISO 22241 certified datasheet</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-ntl-blue/10 transition-colors"
                    >
                      <span className="text-sulnox-green text-2xl">📄</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">SCR System Installation Guide</p>
                        <p className="text-xs text-gray-600">Step-by-step installation & maintenance</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-ntl-blue/10 transition-colors"
                    >
                      <span className="text-sulnox-green text-2xl">📄</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">Dosing Ratio Calculator</p>
                        <p className="text-xs text-gray-600">Spreadsheet tool for fleet operators</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-ntl-blue/10 transition-colors"
                    >
                      <span className="text-sulnox-green text-2xl">📄</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">Safety Data Sheet (SDS)</p>
                        <p className="text-xs text-gray-600">OSHA/Workplace safety compliance</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Training & Support */}
              <div className="border-2 border-sulnox-green/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-ntl-navy mb-6">Training & Support</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-sulnox-green/10 transition-colors"
                    >
                      <span className="text-ntl-blue text-2xl">🎓</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">Operator Training Manual</p>
                        <p className="text-xs text-gray-600">Best practices for fleet operators</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-sulnox-green/10 transition-colors"
                    >
                      <span className="text-ntl-blue text-2xl">🎓</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">Technician Certification Program</p>
                        <p className="text-xs text-gray-600">Online training & certification</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-sulnox-green/10 transition-colors"
                    >
                      <span className="text-ntl-blue text-2xl">🎓</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">Video Tutorials</p>
                        <p className="text-xs text-gray-600">How to use, maintain, and troubleshoot</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-4 rounded-lg bg-ntl-slate hover:bg-sulnox-green/10 transition-colors"
                    >
                      <span className="text-ntl-blue text-2xl">🎓</span>
                      <div>
                        <p className="font-semibold text-ntl-navy">FAQs & Troubleshooting</p>
                        <p className="text-xs text-gray-600">Common questions and solutions</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Regulatory Info */}
            <div className="bg-ntl-slate rounded-lg p-8 border-l-4 border-ntl-navy">
              <h3 className="text-2xl font-bold text-ntl-navy mb-4">Regulatory & Compliance</h3>
              <p className="text-gray-700 mb-6">
                SulNOx is certified to meet the following international emission standards:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sulnox-green font-bold text-lg">✓</span>
                  <span className="text-gray-700"><strong>Euro 6</strong> – European emission standard</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sulnox-green font-bold text-lg">✓</span>
                  <span className="text-gray-700"><strong>BS VI</strong> – Indian/South Asian standard</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sulnox-green font-bold text-lg">✓</span>
                  <span className="text-gray-700"><strong>ISO 22241</strong> – International standard</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sulnox-green font-bold text-lg">✓</span>
                  <span className="text-gray-700"><strong>ASTM D6427</strong> – American standard</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-ntl-navy text-white">
          <div className="container-narrow text-center">
            <h2 className="text-4xl font-bold mb-6">Need More Information?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our technical support team for detailed assistance.
            </p>
            <a href="/support" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
              Contact Support
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
