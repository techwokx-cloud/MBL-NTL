import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ProductCard } from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Purchase SulNOx emission control solutions online.',
};

export default function Shop() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Shop SulNOx</h1>
            <p className="text-xl text-gray-200">
              Fast, reliable delivery of emission control solutions.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ProductCard
                name="250ml Bottle"
                sku="250ML"
                description="Compact dosing solution for light commercial vehicles"
                features={['Portable', 'Easy metering', 'Storage-friendly']}
                link="/products/250ml"
              />
              <ProductCard
                name="4.5L Container"
                sku="4.5L"
                description="Standard container for fleet and industrial applications"
                features={['High capacity', 'Cost-effective', 'Industrial grade']}
                link="/products/4-5l"
              />
            </div>

            {/* Bulk Orders */}
            <div className="bg-ntl-slate rounded-lg p-12 text-center">
              <h3 className="text-2xl font-bold text-ntl-navy mb-4">Bulk & Wholesale Pricing</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                For fleet operators and distributors, we offer competitive wholesale pricing on bulk orders.
              </p>
              <a href="/support" className="btn-primary">
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Shipping & Payment */}
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl text-sulnox-green font-bold mb-4">📦</div>
                <h3 className="text-xl font-bold text-ntl-navy mb-2">Fast Delivery</h3>
                <p className="text-gray-700">
                  Same-day dispatch for orders in Accra and major cities.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-ntl-blue font-bold mb-4">🔒</div>
                <h3 className="text-xl font-bold text-ntl-navy mb-2">Secure Checkout</h3>
                <p className="text-gray-700">
                  Multiple payment options: card, mobile money, bank transfer.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-ntl-navy font-bold mb-4">✓</div>
                <h3 className="text-xl font-bold text-ntl-navy mb-2">Quality Guaranteed</h3>
                <p className="text-gray-700">
                  ISO 22241 certified, temperature-controlled delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
