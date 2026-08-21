import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { ShopGrid } from '@/components/ShopGrid';
import { HiOutlineSparkles, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineBadgeCheck } from 'react-icons/hi';
import { getProducts } from '@/lib/products-data';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Quick order genuine SulNOxEco Fuel Conditioner online in Ghana - select quantity and order directly via WhatsApp.',
};

export default function Shop() {
  const products = getProducts();

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-10">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Quick Order</h1>
              <p className="text-gray-200">
                Pick your quantities and order directly on WhatsApp — genuine SulNOxEco, delivered across Ghana.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Quick order grid */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <ShopGrid products={products} />
            </Reveal>
            <Reveal className="text-center text-xs text-gray-500 mt-6 mb-16">
              Prices shown are indicative and subject to final confirmation. Looking for full product details
              and specs instead? Visit the <a href="/products" className="text-sulnox-green font-semibold hover:underline">Products</a> page.
            </Reveal>

            {/* Bulk Orders */}
            <Reveal className="bg-ntl-slate rounded-2xl p-10 md:p-14 text-center">
              <HiOutlineSparkles className="w-10 h-10 text-sulnox-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-ntl-navy mb-3">Bulk & Wholesale Pricing</h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                For fleet operators and distributors, our team offers competitive wholesale pricing on bulk
                orders across all product sizes.
              </p>
              <a
                href="https://wa.me/233206769664?text=Hello%2C%20I%27d%20like%20wholesale%20pricing%20for%20SulNOxEco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Request a Quote
              </a>
            </Reveal>
          </div>
        </section>

        {/* Trust strip */}
        <section className="bg-ntl-navy py-4">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: HiOutlineBadgeCheck, label: 'Genuine Products', sub: '100% Original' },
              { icon: HiOutlineTruck, label: 'Fast Delivery', sub: 'Across Ghana' },
              { icon: HiOutlineShieldCheck, label: 'Secure Payment', sub: '100% Safe' },
              { icon: HiOutlineSparkles, label: 'Quality Guaranteed', sub: 'Best Performance' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-white justify-center sm:justify-start">
                <item.icon className="w-6 h-6 text-sulnox-green shrink-0" />
                <div className="leading-tight">
                  <p className="text-xs font-semibold">{item.label}</p>
                  <p className="text-[10px] text-gray-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
