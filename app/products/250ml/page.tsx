import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'SulNOx 250ml Bottle',
  description: 'Compact SulNOx emission control solution for light commercial vehicles and testing.',
};

export default function Product250ml() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-ntl-slate py-4">
          <div className="container-narrow">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-ntl-blue">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-ntl-blue">Products</Link>
              <span>/</span>
              <span className="text-ntl-navy font-semibold">250ml Bottle</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Image */}
              <div>
                <div className="bg-gradient-to-br from-ntl-blue/10 to-sulnox-green/10 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 text-lg font-semibold">SulNOx 250ml</p>
                    <p className="text-gray-300 text-sm">Product Image</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-block bg-sulnox-green text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  250ML
                </div>
                <h1 className="text-4xl font-bold text-ntl-navy mb-2">SulNOx 250ml Bottle</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Portable emission control solution for light commercial vehicles and testing applications.
                </p>

                {/* Specs */}
                <div className="space-y-4 mb-8 p-6 bg-ntl-slate rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">SKU</p>
                    <p className="font-semibold text-ntl-navy">250ML-SULNOX</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Volume</p>
                    <p className="font-semibold text-ntl-navy">250 ml</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Shelf Life</p>
                    <p className="font-semibold text-ntl-navy">24 months from manufacture</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Storage Temperature</p>
                    <p className="font-semibold text-ntl-navy">-11°C to 35°C</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Standard</p>
                    <p className="font-semibold text-ntl-navy">ISO 22241 / ASTM D6427</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ntl-navy mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">Portable size for easy handling and storage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">Ideal for vehicle testing and trial applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">High-purity aqueous urea formulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">Compatible with standard dosing systems</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    Add to Cart
                  </button>
                  <button className="btn-secondary text-ntl-navy flex-1">
                    Request Quote
                  </button>
                </div>

                {/* Info */}
                <p className="text-sm text-gray-600 mt-6">
                  For bulk orders or custom solutions, contact our sales team via WhatsApp or email.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding bg-ntl-slate">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold text-ntl-navy mb-8">Application Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-ntl-navy mb-4">Best For</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Light commercial vehicles (pickup trucks, vans)</li>
                  <li>• Small fleet testing and evaluation</li>
                  <li>• Vehicle maintenance and top-ups</li>
                  <li>• Emergency refill situations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ntl-navy mb-4">Usage Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Store in cool, dry location</li>
                  <li>• Check expiration date before use</li>
                  <li>• Use with compatible metering pump</li>
                  <li>• Refer to vehicle manual for dosing ratio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
