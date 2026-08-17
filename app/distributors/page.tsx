import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'AI Sales Agent',
  description: 'Intelligent sales support for MBL-NTL SulNOxEco Ghana.',
};

export default function SalesAgent() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Assistance',
      description: 'Intelligent chatbot that understands customer needs and provides personalized product recommendations.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Track customer interactions, sales patterns, and optimize your approach in real-time.',
    },
    {
      icon: '🎯',
      title: 'Lead Scoring',
      description: 'Automatically identify high-value leads and prioritize follow-up actions.',
    },
    {
      icon: '💬',
      title: 'Multi-Channel Support',
      description: 'Engage customers via chat, email, WhatsApp, and phone from one unified platform.',
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Access sales tools from anywhere with responsive mobile and desktop interfaces.',
    },
    {
      icon: '⚡',
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock AI support and notifications.',
    },
  ];

  const benefits = [
    'Increase sales by 40% with intelligent lead qualification',
    'Reduce response time from hours to seconds',
    'Provide consistent, brand-aligned messaging',
    'Scale your sales team without hiring',
    'Integrate with existing CRM and tools',
    'Get actionable insights on customer behavior',
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ntl-navy via-ntl-blue to-sulnox-green text-white py-20">
          <div className="container-narrow text-center">
            <h1 className="text-5xl font-bold mb-4">AI-Powered Sales Agent</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Revolutionize your sales process with intelligent automation. Our AI sales agent works 24/7 to engage customers, qualify leads, and close deals faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#features" className="btn-primary">
                Explore Features
              </Link>
              <a href="https://wa.me/message" className="btn-secondary text-ntl-navy">
                Try Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="section-padding">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold text-ntl-navy mb-12 text-center">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-ntl-slate rounded-lg p-8 hover:shadow-lg hover:border-sulnox-green transition-all"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-ntl-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gradient-to-r from-ntl-navy to-ntl-blue text-white">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Proven Results
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">✓</div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold text-ntl-navy mb-12 text-center">
              How It Works
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sulnox-green text-white text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ntl-navy mb-2">Customer Inquiry</h3>
                  <p className="text-gray-700">
                    Customer initiates contact via chat, WhatsApp, or email with a product or dosing question.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sulnox-green text-white text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ntl-navy mb-2">AI Analysis</h3>
                  <p className="text-gray-700">
                    Our AI agent analyzes the inquiry, understands the customer's needs, and accesses product knowledge base.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sulnox-green text-white text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ntl-navy mb-2">Personalized Response</h3>
                  <p className="text-gray-700">
                    AI provides instant, personalized recommendations with pricing, dosing info, and ordering options.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sulnox-green text-white text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ntl-navy mb-2">Human Escalation (if needed)</h3>
                  <p className="text-gray-700">
                    Complex or high-value inquiries are seamlessly escalated to human sales team with full context.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sulnox-green text-white text-xl font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ntl-navy mb-2">Deal Closed & Analytics</h3>
                  <p className="text-gray-700">
                    Transaction completed with full analytics captured for insights and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-ntl-slate">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold text-ntl-navy mb-12 text-center">
              Plans & Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-ntl-navy mb-4">Starter</h3>
                <div className="text-4xl font-bold text-sulnox-green mb-2">$99</div>
                <p className="text-gray-600 mb-6">/month</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Up to 100 chats/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Basic analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Email support
                  </li>
                </ul>
                <button className="btn-primary w-full">Get Started</button>
              </div>

              <div className="bg-gradient-to-br from-ntl-navy to-ntl-blue text-white rounded-lg p-8 border-2 border-sulnox-green transform scale-105">
                <div className="text-sm font-bold text-sulnox-green mb-4">POPULAR</div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-2">$299</div>
                <p className="text-gray-200 mb-6">/month</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Unlimited chats
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Advanced analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> API access
                  </li>
                </ul>
                <button className="btn-primary w-full bg-sulnox-green hover:bg-green-600 text-white">Get Started</button>
              </div>

              <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-ntl-navy mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-sulnox-green mb-2">Custom</div>
                <p className="text-gray-600 mb-6">Contact sales</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Custom integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> Dedicated support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sulnox-green">✓</span> SLA guarantee
                  </li>
                </ul>
                <button className="btn-secondary text-ntl-navy w-full">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-sulnox-green to-sulnox-cyan text-white">
          <div className="container-narrow text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Supercharge Your Sales?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join leading companies using our AI sales agent to grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-ntl-navy hover:bg-gray-100">
                Start Free Trial
              </button>
              <a href="https://wa.me/message" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-ntl-navy">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
