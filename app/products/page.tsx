import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ProductCard } from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our SulNOx emission control solutions in various sizes and formats.',
};

export default function Products() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-200">
              Premium SulNOx emission control solutions for every application.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-8">
              <ProductCard
                name="250ml Bottle"
                sku="250ML"
                description="Compact dosing solution for light commercial vehicles, small fleets, and testing."
                features={[
                  'Portable and easy to store',
                  'Precise metering capability',
                  'Perfect for trial applications',
                  'Long shelf life (24 months)',
                ]}
                link="/products/250ml"
              />
              <ProductCard
                name="4.5L Container"
                sku="4.5L"
                description="Standard container for medium to large fleet operations and industrial applications."
                features={[
                  'Higher capacity for cost efficiency',
                  'Industrial-grade packaging',
                  'Compatible with standard pumps',
                  'Bulk purchase discounts available',
                ]}
                link="/products/4-5l"
              />
            </div>

            <div className="mt-12 p-8 bg-ntl-slate rounded-xl border border-ntl-slate-dark/20">
              <h3 className="text-2xl font-bold text-ntl-navy mb-4">Bulk Orders & Custom Solutions</h3>
              <p className="text-gray-700 mb-6">
                For fleet operators and distributors requiring larger quantities, we offer competitive pricing and tailored
                solutions. Contact our sales team for a custom quote.
              </p>
              <a href="/support" className="btn-primary">
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
