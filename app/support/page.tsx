import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Support & Contact',
  description: 'Get help with SulNOxEco products, dosing, and technical support in Ghana.',
};

export default function Support() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233206769664';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Support & Contact</h1>
              <p className="text-xl text-gray-200">We're here to help. Reach out anytime.</p>
            </Reveal>
          </div>
        </section>

        {/* Contact Options */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Reveal>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full p-8 rounded-xl bg-white shadow-sm hover:shadow-lg border-t-4 border-sulnox-green transition-all"
                >
                  <FaWhatsapp className="w-10 h-10 text-sulnox-green mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-ntl-navy mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-5 text-sm">Chat with us on WhatsApp for quick support and inquiries.</p>
                  <span className="inline-block bg-sulnox-green text-white px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-sulnox-green/90">
                    Send Message
                  </span>
                </a>
              </Reveal>

              <Reveal delay={100}>
                <a
                  href="mailto:info@mbl-ntlsulnox.com"
                  className="group block h-full p-8 rounded-xl bg-white shadow-sm hover:shadow-lg border-t-4 border-ntl-blue transition-all"
                >
                  <FaEnvelope className="w-10 h-10 text-ntl-blue mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-ntl-navy mb-2">Email</h3>
                  <p className="text-gray-600 mb-5 text-sm">Send us detailed inquiries via email. We respond within 24 hours.</p>
                  <span className="inline-block bg-ntl-navy text-white px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-ntl-blue break-all">
                    info@mbl-ntlsulnox.com
                  </span>
                </a>
              </Reveal>

              <Reveal delay={200}>
                <a href="tel:+233206769664" className="group block h-full p-8 rounded-xl bg-white shadow-sm hover:shadow-lg border-t-4 border-sulnox-cyan transition-all">
                  <FaPhone className="w-10 h-10 text-sulnox-cyan mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-ntl-navy mb-2">Phone</h3>
                  <p className="text-gray-600 mb-5 text-sm">Call our sales team for immediate assistance.</p>
                  <span className="inline-block bg-ntl-navy text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    0206 769 664 / 0242 567 700
                  </span>
                </a>
              </Reveal>
            </div>

            {/* Contact Form */}
            <Reveal className="max-w-2xl mx-auto mb-4 bg-white rounded-2xl shadow-sm p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-ntl-navy mb-8 text-center">Send Us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Name</label>
                  <input type="text" placeholder="Your name" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Email</label>
                  <input type="email" placeholder="your@email.com" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Subject</label>
                  <input type="text" placeholder="What can we help with?" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Message</label>
                  <textarea placeholder="Tell us more..." rows={6} className="input-field" required></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-12 text-center">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div className="space-y-4">
              {[
                {
                  q: "What's the minimum order quantity?",
                  a: 'We accept orders from 1 unit. For bulk orders, please contact our sales team for wholesale pricing.',
                },
                {
                  q: 'Do you offer delivery?',
                  a: 'Yes. We deliver across Accra and major cities in Ghana — message us on WhatsApp to confirm delivery timing for your area.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and cash on delivery in select areas. Message us on WhatsApp for details.',
                },
                {
                  q: 'Is there a warranty or return policy?',
                  a: 'Unopened products can be returned within 14 days of purchase. Damaged shipments are replaced immediately — contact support with your order details.',
                },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 60}>
                  <details className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-sulnox-green/40 transition-colors bg-ntl-slate">
                    <summary className="flex items-center justify-between font-semibold text-ntl-navy list-none">
                      <span>{item.q}</span>
                      <span className="text-sulnox-green group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-gray-700 mt-4">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
