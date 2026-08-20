import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { ProductsGrid } from '@/components/ProductsGrid';
import {
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { getProducts } from '@/lib/products-data';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse the full SulNOxEco Fuel Conditioner range - from 30ml to 25L, for every application.',
};

const trustBadges = [
  { icon: HiOutlineSparkles, label: '100% Organic Formula' },
  { icon: HiOutlineBeaker, label: 'Treats up to 250 Litres' },
  { icon: HiOutlineShieldCheck, label: 'For Petrol & Diesel Engines' },
  { icon: HiOutlineTrendingUp, label: 'Easy to Use & Effective' },
];

export default function Products() {
  const products = getProducts();

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero banner */}
        <section className="bg-gradient-to-r from-ntl-navy to-sulnox-green text-white py-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Products</h1>
              <p className="text-gray-200 max-w-md">
                High performance fuel conditioner for cleaner engines, better mileage and lower emissions.
              </p>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-2 gap-4">
              {trustBadges.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2.5">
                  <b.icon className="w-6 h-6 text-white shrink-0" />
                  <span className="text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <ProductsGrid products={products} />

        {/* Bottom feature strip */}
        <section className="bg-white py-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Fast & Reliable Delivery', sub: 'Nationwide delivery across Ghana' },
              { label: '100% Genuine Products', sub: 'Quality assured by us' },
              { label: 'Secure Payments', sub: 'Multiple safe payment options' },
              { label: 'Customer Support', sub: "We're here to help you" },
            ].map((item, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <p className="font-bold text-ntl-navy text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp CTA bar */}
        <section className="bg-sulnox-green">
          <Reveal className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold">Need help choosing the right product? Our experts are ready to assist.</p>
            <a
              href="https://wa.me/233206769664?text=Hello%2C%20I%20need%20help%20choosing%20a%20SulNOxEco%20product"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-sulnox-green font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <FaWhatsapp className="w-5 h-5" />
              Talk to Sales on WhatsApp
            </a>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
