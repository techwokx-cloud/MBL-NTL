import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { HiOutlineGlobeAlt, HiOutlineBadgeCheck, HiOutlineUserGroup, HiOutlineSparkles } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MBL-NTL SulNOxEco Ghana and our mission to bring cleaner, more efficient fuel technology to West Africa.',
};

const values = [
  { icon: HiOutlineGlobeAlt, title: 'Sustainability', desc: 'Reducing emissions and environmental impact across every sector we serve' },
  { icon: HiOutlineBadgeCheck, title: 'Genuine Quality', desc: 'Sole authorised distributor of SulNOxEco in Ghana, direct from the UK manufacturer' },
  { icon: HiOutlineUserGroup, title: 'Customer Success', desc: 'Technical guidance and support for every customer, from individual vehicles to fleets' },
  { icon: HiOutlineSparkles, title: 'Proven Technology', desc: 'A track record of real-world results across road, marine, rail and industrial use' },
];

export default function About() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">About Us</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">MBL–NTL SulNOxEco Ghana</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Bringing cleaner, more efficient fuel technology to automotive and industrial operators across
                Ghana and West Africa.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission & Who We Are */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start mb-14">
            <Reveal>
              <img
                src="/images/site/ntl-storefront-new.jpg"
                alt="MBL-NTL SulNOxEco storefront in Ghana"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">Our storefront in Ghana</p>
            </Reveal>
            <Reveal delay={100} className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-ntl-navy mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To deliver a proven, organic fuel conditioning solution that helps vehicle owners, fleet
                  operators and industrial users reduce fuel costs, cut harmful emissions, and protect their
                  engines — without any modification or capital investment.
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-ntl-navy mb-4">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed">
                  Mulberry Lane Ghana (MBL) and Nationwide Technologies Ltd (NTL) have partnered as the sole
                  distributor of SulNOxEco™ Fuel Conditioner in Ghana. SulNOxEco is manufactured in the UK using
                  100% organic, biodegradable ingredients, and packaged and distributed locally to serve
                  customers across the country.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="max-w-5xl mx-auto px-6">
            <Reveal delay={150}>
              <h2 className="text-2xl sm:text-3xl font-bold text-ntl-navy mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Genuine SulNOxEco Fuel Conditioner across all pack sizes',
                  'Technical support and dosing guidance for every application',
                  'Nationwide distribution across Ghana',
                  'Solutions for road, marine, rail, agriculture and industrial use',
                  'Sales agent and distributor partnership opportunities',
                  'Responsive customer support via WhatsApp, phone and email',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-sulnox-green shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-3">What Drives Us</h2>
              <div className="w-16 h-1 bg-sulnox-green mx-auto rounded-full" />
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, idx) => (
                <Reveal key={idx} delay={idx * 100} className="bg-white rounded-xl p-7 text-center shadow-sm">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ntl-slate flex items-center justify-center">
                    <v.icon className="w-7 h-7 text-sulnox-green" />
                  </div>
                  <h3 className="font-bold text-ntl-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-ntl-navy to-ntl-blue text-white">
          <Reveal className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-lg text-gray-200 mb-8">Explore how SulNOxEco works or get in touch with our team.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/how-it-works" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">See How It Works</a>
              <a href="/support" className="btn-secondary border-white text-white hover:bg-white hover:text-ntl-navy">Contact Us</a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
