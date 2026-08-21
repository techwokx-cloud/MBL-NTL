import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import {
  HiOutlineBeaker,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineFire,
  HiOutlineCog,
  HiOutlineTrendingUp,
  HiOutlineLightningBolt,
  HiOutlineCloud,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import { FaWhatsapp, FaCheckCircle, FaTimesCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See how SulNOxEco Fuel Conditioner improves combustion and reduces emissions, step by step.',
};

const scienceRow = [
  { icon: HiOutlineCloud, title: 'Cleaner Combustion', desc: 'Reduces harmful emissions' },
  { icon: HiOutlineShieldCheck, title: 'Engine Protection', desc: 'Prevents wear and corrosion' },
  { icon: HiOutlineTrendingUp, title: 'Better Performance', desc: 'Improves power and fuel economy' },
  { icon: HiOutlineCurrencyDollar, title: 'Cost Efficient', desc: 'Lower maintenance and fuel cost' },
];

const steps = [
  { number: 1, icon: HiOutlineBeaker, title: 'Added to Fuel', desc: 'SulNOxEco is added to your diesel or petrol at the recommended dosage.' },
  { number: 2, icon: HiOutlineCog, title: 'Molecular Action', desc: 'Active ingredients mix with fuel at a molecular level and start working immediately.' },
  { number: 3, icon: HiOutlineFire, title: 'Clean & Optimize Combustion', desc: 'SulNOxEco ensures more complete fuel burn, reducing carbon build-up and deposits.' },
  { number: 4, icon: HiOutlineShieldCheck, title: 'Protect & Improve Performance', desc: 'Engines run smoother, with less friction, less wear and improved power.' },
  { number: 5, icon: HiOutlineSparkles, title: 'Lower Emissions & Savings', desc: 'Enjoy lower emissions, better fuel economy and longer engine life.' },
];

const without = ['Carbon build-up', 'High emissions', 'Poor fuel economy', 'Frequent maintenance', 'Engine wear & tear'];
const withList = ['Clean engine', 'Low emissions', 'Better fuel economy', 'Less maintenance', 'Longer engine life'];

const keyBenefits = [
  { icon: HiOutlineCurrencyDollar, title: 'Up to 15% Fuel Savings', desc: 'Improves fuel efficiency and reduces operating cost.' },
  { icon: HiOutlineCloud, title: 'Up to 80% Emission Reduction', desc: 'Significantly reduces smoke, NOx, SOx and carbon.' },
  { icon: HiOutlineShieldCheck, title: 'Extends Engine Life', desc: 'Keeps engine clean and reduces wear & tear.' },
  { icon: HiOutlineLightningBolt, title: 'Smoother Performance', desc: 'Improves power, acceleration and reliability.' },
];

export default function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero with video */}
        <section className="relative overflow-hidden bg-ntl-navy text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                How <span className="text-sulnox-green">SulNOxEco</span> Works
              </h1>
              <p className="text-gray-300 max-w-md">
                SulNOxEco is a scientifically engineered fuel conditioner that works at a molecular level to
                clean, protect and optimize your engine for better performance and lower emissions.
              </p>
            </Reveal>
            <Reveal delay={150} className="relative h-[300px] lg:h-[360px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  src="/videos/engine-piston-cycle.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Fuel-flow glow sweep overlay */}
                <div className="absolute inset-0 animate-flow-sweep pointer-events-none mix-blend-screen" />
                <span className="absolute bottom-2 right-3 text-[10px] text-white/60 bg-black/40 px-2 py-0.5 rounded">
                  Footage: Vecteezy
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Science row */}
        <section className="bg-white py-10 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="mb-6">
              <h2 className="text-xl font-bold text-ntl-navy">The Science Behind SulNOxEco</h2>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                SulNOxEco goes beyond regular additives. It conditions the combustion process, helps ensure
                more complete fuel burn and keeps your engine clean inside out.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {scienceRow.map((item, idx) => (
                <Reveal key={idx} delay={idx * 70} className="text-center sm:text-left flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                  <div className="w-11 h-11 rounded-full bg-ntl-slate flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-sulnox-green" />
                  </div>
                  <div>
                    <p className="font-bold text-ntl-navy text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy">How It Works &mdash; Step by Step</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 80} className="relative">
                  <div className="h-full bg-white rounded-xl p-6 text-center border border-transparent hover:border-sulnox-green/30 transition-colors shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-sulnox-green text-white font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                    <step.icon className="w-8 h-8 text-ntl-blue mx-auto mb-3" />
                    <h3 className="font-bold text-ntl-navy text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-600">{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-sulnox-green text-xl">
                      &rarr;
                    </span>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* With vs Without + Key Benefits */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-8">
            {/* With vs Without */}
            <Reveal className="lg:col-span-3 bg-ntl-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold text-center mb-6">
                <span className="text-gray-300">WITHOUT</span> vs <span className="text-sulnox-green">WITH</span> SulNOxEco
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3">Without SulNOxEco</p>
                  <ul className="space-y-2.5">
                    {without.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <FaTimesCircle className="w-4 h-4 text-red-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-sulnox-green uppercase mb-3">With SulNOxEco</p>
                  <ul className="space-y-2.5">
                    {withList.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <FaCheckCircle className="w-4 h-4 text-sulnox-green shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Key Benefits */}
            <Reveal delay={100} className="lg:col-span-2 bg-ntl-slate rounded-2xl p-8">
              <h3 className="text-xl font-bold text-ntl-navy mb-6">Key Benefits</h3>
              <div className="space-y-5">
                {keyBenefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <b.icon className="w-6 h-6 text-sulnox-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-ntl-navy text-sm">{b.title}</p>
                      <p className="text-xs text-gray-600">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* See the Difference - injector sequence */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">
            <Reveal>
              <h3 className="text-2xl font-bold text-ntl-navy mb-3">See the Difference</h3>
              <p className="text-gray-600 mb-6">
                SulNOxEco keeps your engine clean, your performance high, and your costs low.
              </p>
              <a href="/products" className="text-sulnox-green font-semibold hover:text-ntl-blue transition-colors">
                View Products &rarr;
              </a>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-2 grid grid-cols-3 gap-4">
              {[
                { label: 'Dirty Injector', tone: 'bg-gray-700' },
                { label: 'Cleaning in Progress', tone: 'bg-ntl-blue' },
                { label: 'Clean Injector', tone: 'bg-sulnox-green' },
              ].map((stage, idx) => (
                <div key={idx} className={`${stage.tone} rounded-xl aspect-square flex flex-col items-center justify-center p-4 text-white relative overflow-hidden`}>
                  <div className="w-2 h-16 bg-white/30 rounded-full mb-3 relative overflow-hidden">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-white/80 animate-pulse"
                      style={{ height: `${30 + idx * 35}%` }}
                    />
                  </div>
                  <p className="text-xs font-semibold text-center">{stage.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Contact bar */}
        <section className="bg-ntl-navy py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-white text-center lg:text-left">
              <p className="font-bold">Have Questions?</p>
              <p className="text-sm text-gray-300">Our experts are ready to help you choose the right solution.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm">
              <a href="tel:+233206769664" className="flex items-center gap-2 hover:text-sulnox-green transition-colors">
                <FaPhone className="w-4 h-4" /> 0206 769 664
              </a>
              <a href="mailto:info@mbl-ntlsulnox.com" className="flex items-center gap-2 hover:text-sulnox-green transition-colors">
                <FaEnvelope className="w-4 h-4" /> info@mbl-ntlsulnox.com
              </a>
            </div>
            <a
              href="https://wa.me/233206769664?text=Hello%2C%20I%27d%20like%20help%20choosing%20a%20SulNOxEco%20dose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              <FaWhatsapp className="w-5 h-5" />
              Talk to Sales
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
