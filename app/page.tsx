import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { EngineExperience } from '@/components/EngineExperience';
import { Reveal } from '@/components/Reveal';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { AISalesAgentIntro } from '@/components/AISalesAgentIntro';
import {
  HiOutlineCurrencyDollar,
  HiOutlineCloud,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
  HiOutlineChip,
  HiOutlineBeaker,
  HiOutlineTruck,
  HiOutlineLightningBolt,
} from 'react-icons/hi';
import { GiFarmTractor, GiCrane, GiFactory, GiMining } from 'react-icons/gi';
import { FaWhatsapp, FaCheckCircle, FaShip, FaCar, FaMapMarkerAlt, FaHandshake, FaBoxes } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'SulNOxEco Fuel Conditioner - Advanced emission control technology for automotive and industrial applications across West Africa.',
};

const heroFeatures = [
  { icon: HiOutlineTrendingUp, label: 'Improve Fuel Efficiency' },
  { icon: HiOutlineCloud, label: 'Reduce Emissions' },
  { icon: HiOutlineShieldCheck, label: 'Protect Your Engine' },
];

const trustStrip = [
  { icon: HiOutlineChip, label: 'Proven Technology', sub: 'Advanced fuel conditioning for better performance' },
  { icon: HiOutlineCurrencyDollar, label: 'Lower Operating Costs', sub: 'Save more on fuel every single day' },
  { icon: HiOutlineCloud, label: 'Cleaner Environment', sub: 'Lower harmful emissions for a greener future' },
  { icon: HiOutlineShieldCheck, label: 'Longer Engine Life', sub: 'Reduces wear & maintenance for maximum reliability' },
];

const whyChoose = [
  { icon: HiOutlineTrendingUp, title: 'Improves Fuel Efficiency', desc: 'Get more power with less fuel' },
  { icon: HiOutlineBeaker, title: 'Cleans & Protects', desc: 'Removes deposits and prevents future build-up' },
  { icon: HiOutlineCloud, title: 'Lower Emissions', desc: 'Reduces harmful exhaust emissions' },
  { icon: HiOutlineShieldCheck, title: 'Extends Engine Life', desc: 'Keeps your engine cleaner and running longer' },
];

const applications = [
  { icon: FaCar, label: 'Cars & SUVs', color: 'bg-blue-50 text-blue-600' },
  { icon: HiOutlineTruck, label: 'Trucks & Buses', color: 'bg-amber-50 text-amber-600' },
  { icon: HiOutlineLightningBolt, label: 'Generators', color: 'bg-yellow-50 text-yellow-600' },
  { icon: GiCrane, label: 'Construction', color: 'bg-orange-50 text-orange-600' },
  { icon: GiFarmTractor, label: 'Agriculture', color: 'bg-lime-50 text-lime-700' },
  { icon: FaShip, label: 'Marine', color: 'bg-cyan-50 text-cyan-600' },
  { icon: GiFactory, label: 'Industrial', color: 'bg-slate-100 text-slate-600' },
  { icon: GiMining, label: 'Mining', color: 'bg-stone-100 text-stone-600' },
];

const ctaStrip = [
  {
    icon: FaWhatsapp,
    label: 'Talk to Sales',
    sub: 'Chat with our sales team on WhatsApp',
    href: 'https://wa.me/233206769664?text=Hello%20MBL-NTL%20SulNOxEco',
    external: true,
    color: 'bg-sulnox-green hover:bg-sulnox-green/90',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Find an Outlet',
    sub: 'Locate SulNOxEco near you',
    href: '/outlets',
    color: 'bg-ntl-blue hover:bg-ntl-blue/90',
  },
  {
    icon: FaHandshake,
    label: 'Become a Sales Agent',
    sub: 'Join our growing network across Ghana',
    href: '/become-a-sales-agent',
    color: 'bg-rose-600 hover:bg-rose-600/90',
  },
  {
    icon: FaBoxes,
    label: 'Bulk / Fleet Enquiry',
    sub: 'Special pricing for businesses and fleets',
    href: '/shop',
    color: 'bg-ntl-navy hover:bg-ntl-navy/90',
  },
];

export default function Home() {
  const whatsappUrl = 'https://wa.me/233206769664?text=Hello%20MBL-NTL%20SulNOxEco';

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white text-ntl-navy min-h-[640px] flex items-center">
          <HeroSlideshow />
          <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24 w-full">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.05] text-ntl-navy">
                  Make Every Drop <br className="hidden sm:block" />
                  of Fuel <span className="text-sulnox-green">Work Harder</span>
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-xl">
                  SulNOxEco™ Fuel Conditioner optimizes combustion, reduces fuel consumption, lowers
                  emissions and protects your engine for the long term.
                </p>

                <div className="inline-flex items-center gap-3 border border-ntl-blue/30 bg-white/90 shadow-sm rounded-lg px-4 py-3 mb-8">
                  <span className="text-xl">🇬🇧</span>
                  <span className="text-sm font-medium text-ntl-navy">
                    It is produced in the UK. Package and distribute in Ghana.
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
                  {heroFeatures.map((f, i) => (
                    <div key={i} className="flex flex-col items-start gap-2">
                      <f.icon className="w-7 h-7 text-sulnox-green shrink-0" />
                      <span className="text-sm font-semibold text-ntl-navy leading-tight">{f.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <a href="/how-it-works" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
                    See How It Works
                  </a>
                  <a href="/savings-calculator" className="btn-secondary border-ntl-navy text-ntl-navy hover:bg-ntl-navy hover:text-white">
                    Calculate Your Savings
                  </a>
                </div>

                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <HiOutlineShieldCheck className="w-5 h-5 text-sulnox-green" />
                  Trusted by drivers, businesses &amp; industries across Ghana
                </p>
              </Reveal>
            </div>
          </div>

          {/* Trust strip */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-sulnox-green/20 bg-white/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustStrip.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-sulnox-green shrink-0" />
                  <div className="leading-tight">
                    <p className="font-semibold text-sm text-ntl-navy">{item.label}</p>
                    <p className="text-gray-500 text-xs hidden sm:block">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet SulNOx AI */}
        <AISalesAgentIntro />

        {/* Applications */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">One Solution, Multiple Applications</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mt-2 mb-3">Where SulNOxEco Is Used</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                SulNOxEco is suitable for a wide range of engines and industries.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {applications.map((item, idx) => (
                <Reveal key={idx} delay={idx * 60} className="text-center bg-ntl-slate rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <p className="text-sm font-semibold text-ntl-navy">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4">
          {ctaStrip.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`${item.color} text-white p-6 flex items-center gap-4 transition-colors`}
            >
              <item.icon className="w-8 h-8 shrink-0" />
              <div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-xs text-white/80">{item.sub}</p>
              </div>
            </a>
          ))}
        </section>

        {/* Why Choose */}
        <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 bg-white">
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
