import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { HiOutlineSparkles, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineBadgeCheck } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { getProducts, formatPrice } from '@/lib/products-data';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Order genuine SulNOxEco Fuel Conditioner online in Ghana - available in sizes from 30ml to 25L.',
};

export default function Shop() {
  const products = getProducts();
  const whatsappUrl = (name: string) =>
    `https://wa.me/233206769664?text=${encodeURIComponent(`Hello, I'd like to order SulNOxEco ${name}`)}`;

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-ntl-slate py-10">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-2">Shop SulNOxEco Products</h1>
              <p className="text-gray-600">Order genuine SulNOxEco products online.</p>
            </Reveal>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
              {products.map((p, idx) => (
                <Reveal key={p.id} delay={(idx % 3) * 80}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                    <div className="relative h-56 bg-ntl-slate flex items-center justify-center p-6">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-4 left-4 bg-sulnox-green text-white text-xs font-bold px-3 py-1 rounded-full">
                        {p.sku}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h3 className="text-lg font-bold text-ntl-navy mb-1">{p.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">Fuel Conditioner</p>
                      <p className="text-xl font-bold text-ntl-navy mb-5">{formatPrice(p.price)}</p>
                      <a
                        href={whatsappUrl(p.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto flex items-center justify-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center text-xs text-gray-500 mb-16">
              Prices shown are indicative and subject to final confirmation. Message us on WhatsApp to complete your order.
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
