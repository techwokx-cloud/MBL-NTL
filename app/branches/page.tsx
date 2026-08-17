import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Branches & Locations',
  description: 'Find MBL-NTL SulNOxEco branches and service locations in Ghana and West Africa.',
};

const branches = [
  {
    name: 'Accra (Head Office)',
    region: 'Greater Accra',
    address: '[To be updated with approved address]',
    phone: '[To be updated with approved phone]',
    email: 'accra@mbl-ntlsulnox.com',
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

export default function Branches() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Our Branches</h1>
            <p className="text-xl text-gray-200">
              Find us across Ghana and West Africa.
            </p>
          </div>
        </section>

        {/* Branches Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {branches.map((branch, idx) => (
                <div key={idx} className="rounded-lg border-2 border-ntl-blue/20 bg-white p-8 hover:shadow-lg transition-shadow">
                  <div className="inline-block bg-sulnox-green text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {branch.region}
                  </div>
                  <h3 className="text-2xl font-bold text-ntl-navy mb-4">{branch.name}</h3>

                  <div className="space-y-3 text-gray-700 mb-6">
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">ADDRESS</p>
                      <p>{branch.address}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">PHONE</p>
                      <a href={`tel:${branch.phone}`} className="hover:text-ntl-blue font-semibold">
                        {branch.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">EMAIL</p>
                      <a href={`mailto:${branch.email}`} className="hover:text-ntl-blue font-semibold">
                        {branch.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-semibold">HOURS</p>
                      <p>{branch.hours}</p>
                    </div>
                  </div>

                  <button className="btn-primary w-full text-sm">
                    Get Directions
                  </button>
                </div>
              ))}
            </div>

            {/* Notice */}
            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Branch details above are placeholders. They will be updated with approved SulNOxEco Ghana locations upon client confirmation.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-ntl-slate">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold text-ntl-navy text-center mb-8">Service Coverage Map</h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-96">
              <div className="w-full h-full bg-gradient-to-br from-ntl-blue/10 to-sulnox-green/10 flex items-center justify-center">
                <p className="text-gray-400">Interactive Map – To be Integrated</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-ntl-navy text-white">
          <div className="container-narrow text-center">
            <h2 className="text-4xl font-bold mb-6">Can't Find a Branch Near You?</h2>
            <p className="text-xl text-gray-300 mb-8">Contact us via WhatsApp or email for delivery options.</p>
            <a href="/support" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
