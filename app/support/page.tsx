import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa';

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
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-14">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact Customer Support</h1>
              <p className="text-gray-200">Reach out to our Customer Support team for assistance anytime.</p>
            </Reveal>
          </div>
        </section>

        {/* Contact Panel */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-5">
              {/* Contact info panel */}
              <div className="lg:col-span-2 bg-ntl-navy text-white p-8 md:p-10 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <FaPhone className="w-5 h-5 text-sulnox-green mt-1 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Call Us</p>
                      <p className="text-sm text-gray-300">0206 769 664 / 0242 567 700</p>
                      <p className="text-xs text-gray-400 mt-1">Mon–Fri: 8:00am–5:00pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaEnvelope className="w-5 h-5 text-sulnox-green mt-1 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Email Us</p>
                      <p className="text-sm text-gray-300">info@mbl-ntlsulnox.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaWhatsapp className="w-5 h-5 text-sulnox-green mt-1 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Live Chat</p>
                      <p className="text-sm text-gray-300">Chat with our support team on WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="w-5 h-5 text-sulnox-green mt-1 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Visit Us</p>
                      <p className="text-sm text-gray-300">Mulberry Lane Limited (MBL-NTL SulNOx)</p>
                      <p className="text-sm text-gray-300">129 Haatso Road, Haatso, Ga East District, Accra</p>
                      <p className="text-sm text-gray-300">P.O. Box LG 206, Legon, Accra-Ghana</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FaHeadset className="w-7 h-7 text-sulnox-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Our support team is standing by</p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sulnox-green text-sm font-semibold hover:text-white transition-colors"
                    >
                      Chat with us now →
                    </a>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="lg:col-span-3 p-8 md:p-10">
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Your Name *</label>
                      <input type="text" required className="input-field" placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Phone Number *</label>
                      <input type="tel" required className="input-field" placeholder="0XX XXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Email Address *</label>
                    <input type="email" required className="input-field" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Subject *</label>
                    <select required className="input-field">
                      <option value="">Select Subject</option>
                      <option>Product Question</option>
                      <option>Dosing Guidance</option>
                      <option>Order & Delivery</option>
                      <option>Become a Sales Agent</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Your Message *</label>
                    <textarea required rows={5} className="input-field" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              </div>
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
