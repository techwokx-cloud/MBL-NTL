import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MBL-NTL SulNOxEco and our mission to provide premium emission control solutions.',
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">About MBL-NTL SulNOxEco</h1>
            <p className="text-xl text-gray-200">
              Leading emission control innovation across West Africa.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-ntl-navy mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-8">
                To deliver world-class emission control solutions that help automotive and industrial operators meet regulatory
                requirements while maintaining operational efficiency and sustainability.
              </p>

              <h2 className="text-3xl font-bold text-ntl-navy mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-8">
                Mulberry Lane Ghana (MBL) and Nationwide Technologies Ltd (NTL) are partnering to bring SulNOxEco emission
                control solutions to operators across West Africa. Our team brings decades of experience in automotive technology,
                environmental compliance, and customer service.
              </p>

              <h2 className="text-3xl font-bold text-ntl-navy mb-6">What We Offer</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
                <li>Premium-quality SulNOx selective catalytic reduction (SCR) solution</li>
                <li>Technical support and application guidance</li>
                <li>Nationwide distribution and support across Ghana and West Africa</li>
                <li>Compliance with Euro 6, BS VI, and international standards</li>
                <li>Proven results in heavy-duty and commercial vehicle fleets</li>
              </ul>

              <h2 className="text-3xl font-bold text-ntl-navy mb-6">Commitment to Quality</h2>
              <p className="text-gray-700">
                Every product is rigorously tested and certified to meet or exceed regulatory standards. We are committed to
                customer success and environmental stewardship.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
