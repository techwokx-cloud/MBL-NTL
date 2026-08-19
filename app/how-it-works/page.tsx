import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { PistonComparison } from '@/components/PistonComparison';
import { EngineSchematic } from '@/components/EngineSchematic';
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
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See how SulNOxEco Fuel Conditioner improves combustion and reduces emissions, step by step.',
};

const steps = [
  { number: 1, icon: HiOutlineBeaker, title: 'Add', desc: 'Add the recommended dose of SulNOxEco to your fuel.' },
  { number: 2, icon: HiOutlineCog, title: 'Mix', desc: 'SulNOxEco mixes thoroughly with the fuel in the tank.' },
  { number: 3, icon: HiOutlineShieldCheck, title: 'Clean & Protect', desc: 'It cleans injectors, combustion chambers and fuel system from deposits.' },
  { number: 4, icon: HiOutlineFire, title: 'Improve Combustion', desc: 'Fuel burns more completely and efficiently for better performance.' },
  { number: 5, icon: HiOutlineTrendingUp, title: 'Better Results', desc: 'Enjoy more power, lower emissions, less smoke and fuel savings.' },
];

const insideEngine = [
  'Cleans injectors for better spray pattern',
  'Removes carbon deposits from the combustion chamber',
  'Reduces friction and wear',
  'Lowers harmful exhaust emissions',
  'Extends engine life',
];

const results = [
  { icon: HiOutlineTrendingUp, label: 'Better Mileage', sub: 'More kilometres per litre of fuel' },
  { icon: HiOutlineLightningBolt, label: 'More Power & Performance', sub: 'Smoother acceleration and response' },
  { icon: HiOutlineCloud, label: 'Lower Emissions', sub: 'Reduced smoke, NOx, SOx and harmful gases' },
  { icon: HiOutlineShieldCheck, label: 'Longer Engine Life', sub: 'Protects engine parts and reduces wear' },
  { icon: HiOutlineCurrencyDollar, label: 'Cost Savings', sub: 'Save more on fuel and maintenance' },
];

export default function HowItWorks() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero - matches approved mockup: icon list left, engine visual right, feature strip bottom */}
        <section className="relative overflow-hidden bg-ntl-slate py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
              <Reveal>
                <h1 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-2">
                  How SulNOxEco Works
                </h1>
                <p className="text-xl text-ntl-blue font-semibold mb-5">Inside Your Engine</p>
                <p className="text-gray-600 mb-8 max-w-md">
                  SulNOxEco conditions the fuel, improves combustion and keeps your engine clean for optimal
                  performance.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: HiOutlineBeaker, title: 'Fuel Intake', desc: 'Fuel enters the system' },
                    { icon: HiOutlineCog, title: 'Fuel Conditioning', desc: 'SulNOxEco blends with fuel' },
                    { icon: HiOutlineFire, title: 'Improved Combustion', desc: 'Better burn, more power, less waste' },
                    { icon: HiOutlineSparkles, title: 'Cleaner Engine', desc: 'Less deposits, longer engine life' },
                    { icon: HiOutlineShieldCheck, title: 'Engine Protection', desc: 'Longer life, lower maintenance' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-ntl-navy flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-sulnox-green" />
                      </div>
                      <div>
                        <p className="font-bold text-ntl-navy">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={150} className="hidden lg:block h-[420px]">
                <EngineSchematic />
              </Reveal>
            </div>

            {/* Bottom feature strip */}
            <Reveal delay={200} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-300">
              {[
                { icon: HiOutlineCurrencyDollar, label: 'Lower Fuel Costs' },
                { icon: HiOutlineCloud, label: 'Reduce Emissions' },
                { icon: HiOutlineTrendingUp, label: 'Better Performance' },
                { icon: HiOutlineShieldCheck, label: 'Engine Protection' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 justify-center sm:justify-start">
                  <f.icon className="w-6 h-6 text-ntl-navy shrink-0" />
                  <span className="text-sm font-medium text-ntl-navy">{f.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy">
                The <span className="text-sulnox-green">5-Step</span> Process
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 80} className="relative">
                  <div className="h-full bg-ntl-slate rounded-xl p-6 text-center border border-transparent hover:border-sulnox-green/30 transition-colors">
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

        {/* Inside the Engine */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">Under the Hood</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mt-2 mb-5">
                What Happens Inside Your Engine?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                SulNOxEco conditions the fuel at a molecular level, improving atomization and enhancing the
                overall combustion process before it ever reaches the combustion chamber.
              </p>
              <ul className="space-y-3">
                {insideEngine.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <FaCheckCircle className="w-4 h-4 text-sulnox-green mt-1 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <PistonComparison />
            </Reveal>
          </div>
        </section>

        {/* Real Results */}
        <section className="section-padding bg-ntl-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Real <span className="text-sulnox-green">Results</span> You Can Feel
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {results.map((r, idx) => (
                <Reveal key={idx} delay={idx * 80} className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
                  <r.icon className="w-9 h-9 text-sulnox-green mx-auto mb-3" />
                  <p className="font-bold text-sm mb-1">{r.label}</p>
                  <p className="text-xs text-gray-300">{r.sub}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI Sales Agent CTA */}
        <section className="bg-sulnox-green">
          <Reveal className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <HiOutlineSparkles className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold">Need help choosing the right dose?</p>
                <p className="text-sm text-white/90">Chat with our AI Sales Agent now, or talk to our team on WhatsApp.</p>
              </div>
            </div>
            <a
              href="https://wa.me/233206769664?text=Hello%2C%20I%27d%20like%20help%20choosing%20a%20SulNOxEco%20dose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-sulnox-green font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
