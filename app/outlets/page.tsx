import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Outlets & Locations',
  description: 'Find MBL-NTL SulNOxEco outlets and service locations in Ghana.',
};

const outlets = [
  {
    name: 'Accra (Head Office)',
    region: 'Greater Accra',
    address: '[To be updated with approved address]',
    phone: '0206 769 664',
    email: 'info@mbl-ntlsulnox.com',
    hours: 'Mon–Fri: 8am–6pm, Sat: 8am–2pm',
  },
  {
    name: 'Kumasi',
    region: 'Ashanti',
    address: '[To be updated with approved address]',
    phone: '[To be updated with approved phone]',
    email: 'kumasi@mbl-ntlsulnox.com',
    hours: 'Mon–Fri: 8am–6pm, Sat: 8am–1pm',
  },
  {
    name: 'Takoradi',
    region: 'Western',
    address: '[To be updated with approved address]',
    phone: '[To be updated with approved phone]',
    email: 'takoradi@mbl-ntlsulnox.com',
    hours: 'Mon–Fri: 8am–5pm, Sat: 8am–1pm',
  },
];

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
                Locate authorised SulNOxEco outlets and offices across Ghana.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Outlets Grid */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {outlets.map((outlet, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow p-8 h-full flex flex-col">
                    <div className="inline-block bg-sulnox-green/10 text-sulnox-green px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                      {outlet.region}
                    </div>
                    <h3 className="text-xl font-bold text-ntl-navy mb-5">{outlet.name}</h3>

                    <div className="space-y-4 text-sm flex-grow">
                      <div className="flex items-start gap-3">
                        <HiOutlineLocationMarker className="w-5 h-5 text-sulnox-green shrink-0 mt-0.5" />
                        <p className="text-gray-700">{outlet.address}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <HiOutlinePhone className="w-5 h-5 text-sulnox-green shrink-0 mt-0.5" />
                        <a href={`tel:${outlet.phone}`} className="text-gray-700 hover:text-ntl-blue font-medium">
                          {outlet.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <HiOutlineMail className="w-5 h-5 text-sulnox-green shrink-0 mt-0.5" />
                        <a href={`mailto:${outlet.email}`} className="text-gray-700 hover:text-ntl-blue font-medium break-all">
                          {outlet.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <HiOutlineClock className="w-5 h-5 text-sulnox-green shrink-0 mt-0.5" />
                        <p className="text-gray-700">{outlet.hours}</p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/233206769664"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block text-center bg-ntl-navy hover:bg-ntl-blue text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Notice */}
            <Reveal className="p-5 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Outlet details above are placeholders and will be updated with approved
                SulNOxEco Ghana locations upon client confirmation.
              </p>
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
