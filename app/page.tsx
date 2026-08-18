import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { EngineExperience } from '@/components/EngineExperience';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import {
  HiOutlineCurrencyDollar,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineChip,
} from 'react-icons/hi';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'SulNOxEco Fuel Conditioner - Advanced emission control technology for automotive and industrial applications across West Africa.',
};

const heroFeatures = [
  { icon: HiOutlineCurrencyDollar, label: 'Lower Fuel Costs' },
  { icon: HiOutlineCloud, label: 'Reduce Emissions' },
  { icon: HiOutlineShieldCheck, label: 'Protect Your Engine' },
  { icon: HiOutlineTrendingUp, label: 'Better Engine Performance' },
];

const trustStrip = [
  { icon: HiOutlineSparkles, label: '100% Organic', sub: 'Advanced fuel conditioning' },
  { icon: HiOutlineChip, label: 'Proven Technology', sub: 'Tested for real performance' },
  { icon: HiOutlineCurrencyDollar, label: 'Lower Operating Costs', sub: 'Save more on every litre' },
  { icon: HiOutlineCloud, label: 'Cleaner Environment', sub: 'Lower harmful emissions' },
];

const whyChoose = [
  { icon: HiOutlineTrendingUp, title: 'Improves Fuel Efficiency', desc: 'Get more power with less fuel' },
  { icon: HiOutlineBeaker, title: 'Cleans & Protects', desc: 'Removes deposits and prevents future build-up' },
  { icon: HiOutlineCloud, title: 'Lower Emissions', desc: 'Reduces harmful exhaust emissions' },
  { icon: HiOutlineShieldCheck, title: 'Extends Engine Life', desc: 'Keeps your engine cleaner and running longer' },
];

export default function Home() {
  const whatsappUrl = 'https://wa.me/233206769664?text=Hello%20MBL-NTL%20SulNOxEco';

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-ntl-navy via-ntl-navy to-ntl-blue text-white">
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_60%,white,transparent_35%)]" />
          <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <span className="inline-block bg-sulnox-green/20 text-sulnox-green font-semibold text-xs tracking-wide uppercase px-3 py-1 rounded-full mb-5">
                  Made in Ghana &middot; UK Formulated
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
                  Make Every Drop <br className="hidden sm:block" />
                  of Fuel <span className="text-sulnox-green">Work Harder</span>
                </h1>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                  SulNOxEco™ Fuel Conditioner optimizes combustion, reduces fuel consumption, lowers
                  emissions and protects your engine for the long term.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                  {heroFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <f.icon className="w-6 h-6 text-sulnox-green shrink-0" />
                      <span className="text-sm font-medium text-gray-100">{f.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="/how-it-works" className="btn-primary bg-ntl-blue hover:bg-ntl-blue/90">
                    See How It Works
                  </a>
                  <a href="/shop" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
                    Explore Products
                  </a>
                </div>
              </Reveal>

              <Reveal delay={150} className="relative h-80 sm:h-96 lg:h-[480px] hidden lg:block">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,168,107,0.12),transparent_70%)] rounded-3xl" />
                <img
                  src="/images/products/all-product-display.jpg"
                  alt="SulNOxEco Product Range"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </Reveal>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10 bg-black/10">
            <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustStrip.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-sulnox-green shrink-0" />
                  <div className="leading-tight">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs hidden sm:block">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">Our Product Range</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mt-2 mb-4">Precision-Engineered Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                High-performance fuel conditioners that clean, protect and optimize your engine for every application.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <ProductCard
                  name="250ml Bottle"
                  sku="250ML"
                  description="Compact dosing solution for light commercial vehicles"
                  features={['Portable', 'Easy metering', 'Storage-friendly']}
                  link="/products/250ml"
                  imageUrl="/images/products/250 ml-Bottle..jpg"
                />
              </Reveal>
              <Reveal delay={100}>
                <ProductCard
                  name="4.5L Container"
                  sku="4.5L"
                  description="Standard container for fleet and industrial applications"
                  features={['High capacity', 'Cost-effective', 'Industrial grade']}
                  link="/products/4-5l"
                  imageUrl="/images/products/4.5 Litre Galon.jpg"
                />
              </Reveal>
            </div>
            <Reveal className="text-center mt-12">
              <a href="/shop" className="btn-secondary">
                View All Products
              </a>
            </Reveal>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-3">Why Choose SulNOxEco?</h2>
              <div className="w-16 h-1 bg-sulnox-green mx-auto rounded-full" />
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, idx) => (
                <Reveal key={idx} delay={idx * 100} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ntl-slate flex items-center justify-center border border-sulnox-green/30">
                    <item.icon className="w-8 h-8 text-sulnox-green" />
                  </div>
                  <h3 className="font-bold text-ntl-navy mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <EngineExperience />

        {/* Benefits detail (from proposal / product literature) */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src="/images/products/d38b1048-9bde-40bc-8543-4f85ba16fb84.jpg"
                alt="SulNOxEco in use"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </Reveal>
            <Reveal delay={100}>
              <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">The Science</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mt-2 mb-6">
                A 100% Organic, Biodegradable Fuel Conditioner
              </h2>
              <ul className="space-y-3">
                {[
                  'Improves fuel economy by burning cleaner and more efficiently',
                  'Cleans and lubricates to enhance engine performance & health',
                  'Reduces costly maintenance, breakdowns and recoveries',
                  'Reduces Greenhouse Gas (GHG) emissions',
                  'Improves air quality by reducing harmful Particulate Matter (PM)',
                  'Prevents diesel bug growth / protects against issues of E10',
                  'Compatible with all diesel, biofuel and petrol fuel types',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-sulnox-green shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <a href="/videos" className="inline-block mt-8 text-ntl-blue font-semibold hover:text-sulnox-green transition-colors">
                Watch it in action →
              </a>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-ntl-navy to-ntl-blue text-white">
          <Reveal className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Upgrade Your Fleet?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Connect with our sales team to find the right SulNOxEco solution for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90 flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a href="/support" className="btn-secondary border-white text-white hover:bg-white hover:text-ntl-navy">
                Contact Sales
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
