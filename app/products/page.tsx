import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { HiOutlineTrendingUp, HiOutlineShieldCheck, HiOutlineCloud, HiOutlineSparkles } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse the full SulNOxEco Fuel Conditioner range - from 30ml to 25L, for every application.',
};

const products = [
  { name: '30ml Bottle', sku: '30ML', img: '/images/products/30ml Bottle.jpg', desc: 'Concentrated trial size for motorcycles and small engines.', link: '/products/250ml' },
  { name: '60ml Bottle', sku: '60ML', img: '/images/products/60ml-Bottle-.jpg', desc: 'For motorcycles and small gasoline engines.', link: '/products/250ml' },
  { name: '120ml Bottle', sku: '120ML', img: '/images/products/120 ml-Bottle..jpg', desc: 'Advanced formula for cars, pick-ups and generators.', link: '/products/250ml' },
  { name: '250ml Bottle', sku: '250ML', img: '/images/products/250 ml-Bottle..jpg', desc: 'Ideal for cars, motorcycles and small engines.', link: '/products/250ml' },
  { name: '1 Litre Bottle', sku: '1L', img: '/images/products/1 Litre Bottle.jpg', desc: 'For light commercial vehicles and small fleets.', link: '/products/4-5l' },
  { name: '4.5 Litre Container', sku: '4.5L', img: '/images/products/4.5 Litre Galon.jpg', desc: 'Standard container for fleet and industrial applications.', link: '/products/4-5l' },
  { name: '25 Litre Container', sku: '25L', img: '/images/products/25L Galon.jpg', desc: 'Bulk container for large fleets, marine and industrial use.', link: '/products/4-5l' },
];

const whyChoose = [
  { icon: HiOutlineTrendingUp, title: 'Cleaner Engine', desc: 'Removes harmful deposits' },
  { icon: HiOutlineShieldCheck, title: 'Better Performance', desc: 'Improves power & fuel economy' },
  { icon: HiOutlineCloud, title: 'Lower Emissions', desc: 'Environmentally friendly' },
  { icon: HiOutlineSparkles, title: 'Protects Engine', desc: 'Extends engine life' },
];

export default function Products() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-xl text-gray-200 max-w-2xl mb-10">
                High-performance fuel conditioners that clean, protect and optimize your engine for better
                efficiency and lower emissions.
              </p>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-8 h-8 text-sulnox-green shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Product Grid */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ntl-navy">Our Product Range</h2>
              <div className="w-16 h-1 bg-sulnox-green mx-auto rounded-full mt-3" />
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, idx) => (
                <Reveal key={idx} delay={(idx % 3) * 80}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                    <div className="relative h-56 bg-white flex items-center justify-center p-6">
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
                      <h3 className="text-lg font-bold text-ntl-navy mb-2">{p.name}</h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow">{p.desc}</p>
                      <a
                        href={p.link}
                        className="text-center bg-ntl-navy hover:bg-ntl-blue text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                      >
                        View Product
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bulk Orders */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="p-10 bg-gradient-to-r from-ntl-navy to-ntl-blue rounded-2xl text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Bulk Orders & Custom Solutions</h3>
              <p className="text-gray-200 mb-8 max-w-xl mx-auto">
                For fleet operators and distributors requiring larger quantities, our team offers tailored
                pricing and delivery solutions.
              </p>
              <a
                href="https://wa.me/233206769664?text=Hello%2C%20I%27d%20like%20a%20quote%20for%20bulk%20SulNOxEco%20orders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                Request a Quote
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
