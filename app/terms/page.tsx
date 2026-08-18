import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for MBL-NTL SulNOxEco Ghana.',
};

export default function Terms() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-200">
              Our terms and conditions for using this website.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-ntl-navy mb-6">Terms of Service</h2>
            <p className="text-gray-700 mb-6">
              Last updated: August 2024
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">1. Acceptance of Terms</h3>
            <p className="text-gray-700 mb-6">
              By accessing and using www.mbl-ntlsulnox.com, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">2. Use License</h3>
            <p className="text-gray-700 mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) on our
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
              of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" on any server</li>
              <li>Use any automated tools to access or crawl our website</li>
            </ul>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">3. Disclaimer</h3>
            <p className="text-gray-700 mb-6">
              The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied,
              and hereby disclaim and negate all other warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">4. Limitations of Liability</h3>
            <p className="text-gray-700 mb-6">
              In no event shall MBL-NTL or its suppliers be liable for any damages (including, without limitation, damages
              for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
              materials on our website.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">5. Accuracy of Materials</h3>
            <p className="text-gray-700 mb-6">
              The materials appearing on our website could include technical, typographical, or photographic errors. We do
              not warrant that any of the materials on our website are accurate, complete, or current. We may make changes
              to the materials contained on our website at any time without notice.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">6. Links to Other Websites</h3>
            <p className="text-gray-700 mb-6">
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any
              such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such
              linked website is at the user's own risk.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">7. Modifications to Terms</h3>
            <p className="text-gray-700 mb-6">
              We may revise these terms of service at any time without notice. By using this website, you are agreeing to
              be bound by the then current version of these terms of service.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">8. Governing Law</h3>
            <p className="text-gray-700 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Ghana, and you
              irrevocably submit to the exclusive jurisdiction of the courts in Ghana.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">9. Product Warranty</h3>
            <p className="text-gray-700 mb-6">
              All SulNOxEco products are manufactured from 100% organic, biodegradable ingredients and support
              compliance with international emission standards (Euro 6, BS
              VI, ASTM D6427). Products are supplied as-is. For defects, contact our support team within 14 days of purchase.
            </p>

            <h3 className="text-2xl font-bold text-ntl-navy mt-8 mb-4">10. Contact Information</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us:
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
