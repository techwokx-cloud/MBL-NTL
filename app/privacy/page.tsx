import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for MBL-NTL SulNOxEco Ghana.',
};

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-200">
              How we handle your personal information.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-ntl-navy mb-6">Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Last updated: August 2024
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">1. Introduction</h3>
            <p className="text-gray-700 mb-6">
              Mulberry Lane Ghana (MBL) and Nationwide Technologies Ltd (NTL), operating as SulNOxEco, are committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website www.mbl-ntlsulnox.com.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">2. Information We Collect</h3>
            <p className="text-gray-700 mb-4">We collect information you provide directly, including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Company information and location</li>
              <li>Messages sent via contact forms or WhatsApp</li>
              <li>Payment information (processed securely by third parties)</li>
            </ul>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">3. Automatic Information Collection</h3>
            <p className="text-gray-700 mb-6">
              When you visit our website, we automatically collect certain information including your IP address, browser
              type, device type, pages visited, and time spent on pages. We use cookies and similar tracking technologies
              for analytics and user experience improvement.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">4. How We Use Your Information</h3>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Process and fulfill your orders</li>
              <li>Send transactional and promotional emails</li>
              <li>Respond to your inquiries</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">5. Data Security</h3>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">6. Data Retention</h3>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was
              collected, or as required by law. You may request deletion of your data at any time.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">7. Third-Party Sharing</h3>
            <p className="text-gray-700 mb-6">
              We do not sell or rent your personal information to third parties. We may share information with service
              providers (payment processors, email services, analytics) who are contractually obligated to protect your
              data.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">8. Your Rights</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Restrict processing of your data</li>
            </ul>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">9. Contact Us</h3>
            <p className="text-gray-700 mb-6">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-ntl-slate p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> support@mbl-ntlsulnox.com<br />
                <strong>Phone:</strong> [Contact Number]<br />
                <strong>WhatsApp:</strong> [WhatsApp Number]
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
