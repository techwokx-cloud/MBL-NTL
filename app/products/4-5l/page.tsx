import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'SulNOx 4.5L Container',
  description: 'Standard SulNOx emission control container for fleet and industrial operations.',
};

export default function Product45L() {
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
              <span className="text-ntl-navy font-semibold">4.5L Container</span>
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
                    <p className="text-gray-400 text-lg font-semibold">SulNOx 4.5L</p>
                    <p className="text-gray-300 text-sm">Product Image</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-block bg-sulnox-green text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  4.5L
                </div>
                <h1 className="text-4xl font-bold text-ntl-navy mb-2">SulNOx 4.5L Container</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Standard container for medium to large fleet operations and industrial applications.
                </p>

                {/* Specs */}
                <div className="space-y-4 mb-8 p-6 bg-ntl-slate rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">SKU</p>
                    <p className="font-semibold text-ntl-navy">4.5L-SULNOX</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Volume</p>
                    <p className="font-semibold text-ntl-navy">4.5 liters</p>
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
                    <p className="font-semibold text-ntl-navy">100% Organic &amp; Biodegradable</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ntl-navy mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">High-capacity container for fleet efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">Industrial-grade packaging and durability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">Compatible with standard fleet pumping systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sulnox-green font-bold text-xl">✓</span>
                      <span className="text-gray-700">Bulk purchase discounts available</span>
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
                  <li>• Medium to large commercial fleets</li>
                  <li>• Industrial and construction vehicles</li>
                  <li>• Long-haul transportation operations</li>
                  <li>• Bulk inventory management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ntl-navy mb-4">Usage Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Store in cool, secure location</li>
                  <li>• Use with approved fleet pump systems</li>
                  <li>• Monitor inventory levels regularly</li>
                  <li>• Refer to fleet manual for dosing specifications</li>
                </ul>
              </div>
            </div>

            {/* Refill Schedule */}
            <div className="mt-8 p-6 bg-white rounded-lg border-2 border-sulnox-green">
              <h3 className="text-xl font-bold text-ntl-navy mb-4">Typical Refill Schedule (per vehicle)</h3>
              <p className="text-gray-700 mb-4">
                A 4.5L container typically covers one vehicle for approximately:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>10,000–15,000 km</strong> at 5% dosing ratio</li>
                <li>• <strong>7,500–10,000 km</strong> at 8% dosing ratio</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                *Actual consumption varies based on engine, load, driving conditions, and OEM dosing specifications.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
