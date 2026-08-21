import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { OutletsTable } from '@/components/OutletsTable';
import outletsData from '@/data/outlets.json';

export const metadata: Metadata = {
  title: 'Outlets & Locations',
  description: 'Find MBL-NTL SulNOxEco outlets and authorised vendors across Ghana.',
};

export default function Outlets() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find an Outlet Near You</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {outletsData.length}+ authorised SulNOxEco outlets and vendors across Ghana.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Outlets Table */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <OutletsTable outlets={outletsData} />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-ntl-navy text-white">
          <Reveal className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Can't Find an Outlet Near You?</h2>
            <p className="text-lg text-gray-300 mb-8">Contact us via WhatsApp or email for delivery options.</p>
            <a href="/support" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
              Contact Us
            </a>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
