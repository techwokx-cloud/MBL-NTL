import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Support & Contact',
  description: 'Get help with SulNOx products, dosing, and technical support.',
};

export default function Support() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233123456789';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-20">
          <div className="container-narrow">
            <h1 className="text-5xl font-bold mb-4">Support & Contact</h1>
            <p className="text-xl text-gray-200">
              We're here to help. Reach out anytime.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-lg border-2 border-green-200 bg-green-50 hover:bg-green-100 hover:border-green-400 transition-all"
              >
                <FaWhatsapp className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">WhatsApp</h3>
                <p className="text-green-800 mb-4">
                  Chat with us on WhatsApp for quick support and inquiries.
                </p>
                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded font-semibold group-hover:bg-green-600">
                  Send Message
                </span>
              </a>

              <a
                href="mailto:support@mbl-ntlsulnox.com"
                className="group p-8 rounded-lg border-2 border-ntl-blue/20 bg-ntl-blue/5 hover:bg-ntl-blue/10 hover:border-ntl-blue transition-all"
              >
                <FaEnvelope className="w-12 h-12 text-ntl-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-ntl-navy mb-2">Email</h3>
                <p className="text-gray-700 mb-4">
                  Send us detailed inquiries via email. We respond within 24 hours.
                </p>
                <span className="inline-block bg-ntl-navy text-white px-4 py-2 rounded font-semibold group-hover:bg-ntl-blue">
                  support@mbl-ntlsulnox.com
                </span>
              </a>

              <div className="p-8 rounded-lg border-2 border-sulnox-green/20 bg-sulnox-green/5">
                <FaPhone className="w-12 h-12 text-sulnox-green mb-4" />
                <h3 className="text-2xl font-bold text-ntl-navy mb-2">Phone</h3>
                <p className="text-gray-700 mb-4">
                  Call our sales team for immediate assistance.
                </p>
                <span className="inline-block bg-sulnox-green text-white px-4 py-2 rounded font-semibold">
                  [Contact Number]
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-ntl-navy mb-8 text-center">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-2">
                    Name
                  </label>
                  <input type="text" placeholder="Your name" className="input-field" required />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-2">
                    Email
                  </label>
                  <input type="email" placeholder="your@email.com" className="input-field" required />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-2">
                    Subject
                  </label>
                  <input type="text" placeholder="What can we help with?" className="input-field" required />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us more..."
                    rows={6}
                    className="input-field"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-ntl-slate">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold text-ntl-navy mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-white transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>What's the minimum order quantity?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  We accept orders from 1 unit. For bulk orders (10+ units), please contact our sales team for wholesale pricing.
                </p>
              </details>

              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-white transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>Do you offer delivery?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Yes. Same-day delivery available in Accra. For regional orders, delivery typically takes 2–3 business days.
                </p>
              </details>

              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-white transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>What payment methods do you accept?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  We accept debit/credit cards, mobile money (MTN, Vodafone), and bank transfers. WhatsApp for details.
                </p>
              </details>

              <details className="group border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-white transition-colors">
                <summary className="flex items-center justify-between font-semibold text-ntl-navy">
                  <span>Is there a warranty or return policy?</span>
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Our products are certified ISO 22241. Returns within 14 days if product is unopened. Damaged shipments are
                  replaced immediately.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
