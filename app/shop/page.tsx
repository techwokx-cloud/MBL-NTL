import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { HiOutlineTruck, HiOutlineShieldCheck, HiOutlineBadgeCheck } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Order SulNOxEco Fuel Conditioner in Ghana - available in sizes from 30ml to 25L.',
};

const products = [
  { name: '30ml Bottle', sku: '30ML', img: '/images/products/30ml Bottle.jpg' },
  { name: '60ml Bottle', sku: '60ML', img: '/images/products/60ml-Bottle-.jpg' },
  { name: '120ml Bottle', sku: '120ML', img: '/images/products/120 ml-Bottle..jpg' },
  { name: '250ml Bottle', sku: '250ML', img: '/images/products/250 ml-Bottle..jpg' },
  { name: '1 Litre Bottle', sku: '1L', img: '/images/products/1 Litre Bottle.jpg' },
  { name: '4.5 Litre Container', sku: '4.5L', img: '/images/products/4.5 Litre Galon.jpg' },
  { name: '25 Litre Container', sku: '25L', img: '/images/products/25L Galon.jpg' },
];

export default function Shop() {
  const whatsappUrl = (name: string) =>
    `https://wa.me/233206769664?text=${encodeURIComponent(`Hello, I'd like to order SulNOxEco ${name}`)}`;

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Shop SulNOxEco</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Order genuine SulNOxEco Fuel Conditioner, delivered across Ghana. Message us on WhatsApp to place
                an order or request pricing.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((p, idx) => (
                <Reveal key={idx} delay={(idx % 3) * 80}>
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
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-ntl-navy mb-4">{p.name}</h3>
                      <a
                        href={whatsappUrl(p.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto flex items-center justify-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bulk Orders */}
            <Reveal className="bg-ntl-slate rounded-2xl p-10 md:p-14 text-center">
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

        {/* Shipping & Payment */}
        <section className="section-padding bg-ntl-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: HiOutlineTruck, title: 'Fast Delivery', body: 'Prompt dispatch across Accra and major cities in Ghana.' },
                { icon: HiOutlineShieldCheck, title: 'Secure Ordering', body: 'Order confidently via WhatsApp with our sales team.' },
                { icon: HiOutlineBadgeCheck, title: 'Genuine Product', body: 'Sole authorised distributor of SulNOxEco in Ghana.' },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 100} className="text-center">
                  <item.icon className="w-10 h-10 text-sulnox-green mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
