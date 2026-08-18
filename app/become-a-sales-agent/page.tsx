import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { HiOutlineTrendingUp, HiOutlineCash, HiOutlineSpeakerphone, HiOutlineTruck, HiOutlineUserGroup } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Become a Sales Agent',
  description: 'Join the SulNOxEco Ghana sales agent network and grow your business with a proven fuel conditioner brand.',
};

const benefits = [
  { icon: HiOutlineTrendingUp, title: 'High-Quality Product', desc: 'Represent a proven, internationally-formulated fuel conditioner' },
  { icon: HiOutlineCash, title: 'Attractive Margins', desc: 'Competitive agent and reseller pricing structures' },
  { icon: HiOutlineSpeakerphone, title: 'Marketing Support', desc: 'Access to product materials, videos and campaign assets' },
  { icon: HiOutlineTruck, title: 'Reliable Supply', desc: 'Consistent stock availability across Ghana' },
  { icon: HiOutlineUserGroup, title: 'Growth Opportunities', desc: 'Build a territory as our distribution network expands' },
];

export default function BecomeSalesAgent() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">Partner With Us</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-5">Become a SulNOxEco Sales Agent</h1>
              <p className="text-xl text-gray-200 mb-8">
                Join our growing network of sales agents across Ghana and build a profitable business with a
                trusted, high-demand fuel conditioner brand.
              </p>
              <a href="#apply" className="btn-primary bg-sulnox-green hover:bg-sulnox-green/90">
                Apply Now
              </a>
            </Reveal>
            <Reveal delay={100} className="hidden lg:block">
              <img
                src="/images/products/all-product-display.jpg"
                alt="SulNOxEco Product Range"
                className="w-full h-auto drop-shadow-2xl"
              />
            </Reveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy mb-3">Why Partner With SulNOxEco</h2>
              <div className="w-16 h-1 bg-sulnox-green mx-auto rounded-full" />
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {benefits.map((b, idx) => (
                <Reveal key={idx} delay={idx * 80} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <b.icon className="w-8 h-8 text-sulnox-green" />
                  </div>
                  <h3 className="font-bold text-ntl-navy mb-1.5 text-sm">{b.title}</h3>
                  <p className="text-xs text-gray-600">{b.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-ntl-navy">How to Get Started</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Submit Your Application', desc: 'Complete the form below with your details and business region.' },
                { step: '2', title: 'Speak With Our Team', desc: "We'll review your application and reach out to discuss terms." },
                { step: '3', title: 'Start Selling', desc: 'Receive your starter stock, marketing materials, and pricing guide.' },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 100} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ntl-navy text-white font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-ntl-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="section-padding bg-ntl-slate">
          <div className="max-w-3xl mx-auto px-6">
            <Reveal className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-ntl-navy mb-2">Sales Agent Application</h2>
              <p className="text-gray-600 mb-8">Tell us about yourself and your business — our team will follow up shortly.</p>

              <form
                action="https://wa.me/233206769664"
                target="_blank"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
                      placeholder="If applicable"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
                      placeholder="0XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Region *</label>
                  <select
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
                  >
                    <option value="">Select your region</option>
                    <option>Greater Accra</option>
                    <option>Ashanti</option>
                    <option>Western</option>
                    <option>Eastern</option>
                    <option>Central</option>
                    <option>Northern</option>
                    <option>Volta</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Tell Us About Your Business</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
                    placeholder="Current business, customer base, target market, etc."
                  />
                </div>
                <label className="flex items-start gap-2.5 text-sm text-gray-600">
                  <input type="checkbox" required className="mt-1" />
                  I agree to be contacted by the SulNOxEco Ghana sales team regarding this application.
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit Application
                </button>
                <p className="text-xs text-gray-500">
                  This form opens WhatsApp to send your application directly to our sales team. A connected form
                  submission backend can be added on request.
                </p>
              </form>
            </Reveal>
          </div>
        </section>

        {/* Trust reassurance */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal className="grid sm:grid-cols-2 gap-4">
              {[
                'No upfront franchise fees',
                'Full product training provided',
                'Dedicated agent support line',
                'Territory-based opportunities',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-sulnox-green shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
