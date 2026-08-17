import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { EngineExperience } from '@/components/EngineExperience';
import { ProductCard } from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Premium emission control solutions for automotive and industrial applications across West Africa.',
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-ntl-navy via-ntl-blue to-sulnox-green text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/pattern.png')]"></div>
          </div>
          <div className="relative container-fluid max-w-6xl mx-auto py-24 sm:py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Advanced Emission Control Technology
                </h1>
                <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                  Trusted by automotive and industrial leaders across West Africa. SulNOx solutions deliver
                  compliance, efficiency, and performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">
                    Explore Products
                  </button>
                  <button className="btn-secondary text-white border-white hover:bg-white hover:text-ntl-navy">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative h-96 lg:h-full hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-b from-sulnox-green/20 to-transparent rounded-2xl"></div>
                <img
                  src="/images/products/all-product-display.jpg"
                  alt="SulNOx Product Range"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-padding bg-ntl-slate">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-ntl-navy mb-4">Our Products</h2>
              <p className="text-lg text-gray-600">
                Precision-engineered solutions for every application.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ProductCard
                name="250ml Bottle"
                sku="250ML"
                description="Compact dosing solution for light commercial vehicles"
                features={['Portable', 'Easy metering', 'Storage-friendly']}
                link="/products/250ml"
                imageUrl="/images/products/250 ml-Bottle..jpg"
              />
              <ProductCard
                name="4.5L Container"
                sku="4.5L"
                description="Standard container for fleet and industrial applications"
                features={['High capacity', 'Cost-effective', 'Industrial grade']}
                link="/products/4-5l"
                imageUrl="/images/products/4.5 Litre Galon.jpg"
              />
            </div>
            <div className="text-center mt-12">
              <a
                href="/shop"
                className="btn-primary"
              >
                View All Products
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <EngineExperience />

        {/* CTA Section */}
        <section className="section-padding bg-ntl-navy text-white">
          <div className="container-narrow text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Fleet?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our sales team to find the right solution for your needs.
            </p>
            <button className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
              Contact Sales
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
