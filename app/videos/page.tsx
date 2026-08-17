import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Videos & Testimonials',
  description: 'Watch SulNOxEco in action - product demonstrations, testimonials, and educational content.',
};

export default function Videos() {
  const videos = [
    {
      id: '4Jh3VXGtQlQ',
      title: 'Nationwide Technologies Introduces SulNOx at GhipCon 2022, Ghana',
      description: 'SulNOxEco Fuel Conditioner launch presentation at GhipCon 2022 in Ghana',
      category: 'Launch Event',
    },
    {
      id: '7ZqijtLh9ks',
      title: 'SulnoxEco Advanced Fuel Conditioner - Ghana',
      description: 'Product overview and benefits for the Ghanaian market',
      category: 'Product Overview',
    },
    {
      id: 'OnzCZhQswLU',
      title: 'SulNOx Investor Presentation June 2022',
      description: 'Comprehensive investor presentation on SulNOxEco technology and market opportunity',
      category: 'Business',
    },
    {
      id: 'RhLnyqHUMIA',
      title: 'SulNOx Ghana Trotro Test',
      description: 'Real-world testing of SulNOxEco in Ghana\'s public transport sector',
      category: 'Testimonial',
    },
    {
      id: 'HAop0CIi0FA',
      title: 'Get Unbelievable Results with Sulnox Fuel Conditioner',
      description: 'Results showcase and customer testimonials',
      category: 'Testimonial',
    },
    {
      id: 'LtXwfS9eXBs',
      title: 'SulnoxEco - Drive More, Spend Less',
      description: 'Benefits campaign highlighting fuel savings and efficiency',
      category: 'Campaign',
    },
    {
      id: '7oQRwDGzyCg',
      title: 'SulNox Mini Advert',
      description: 'Quick 30-second product advertisement',
      category: 'Advertisement',
    },
    {
      id: 'XjMIi8ZpRm4',
      title: 'SulNox Eco Explained: How Our Fuel Conditioner Works',
      description: 'Technical explanation of how SulNOxEco works',
      category: 'Education',
    },
  ];

  const benefits = [
    {
      icon: '⛽',
      title: 'Improves Fuel Economy',
      description: 'Burns cleaner and more efficiently, reducing fuel consumption',
    },
    {
      icon: '🧹',
      title: 'Engine Cleaning',
      description: 'Cleans and lubricates to enhance engine performance and health',
    },
    {
      icon: '🔧',
      title: 'Reduces Maintenance',
      description: 'Lowers costly maintenance, breakdowns and recovery expenses',
    },
    {
      icon: '🌍',
      title: 'Reduces Emissions',
      description: 'Cuts greenhouse gas emissions and harmful particulate matter',
    },
    {
      icon: '🍃',
      title: '100% Natural',
      description: 'Made with natural and biodegradable ingredients',
    },
    {
      icon: '⚙️',
      title: 'Universal Compatible',
      description: 'Works with diesel, biofuel, and petrol engines',
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-16">
          <div className="container-narrow text-center">
            <h1 className="text-5xl font-bold mb-4">Videos & Testimonials</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Watch SulNOxEco in action. See real-world results and learn how our fuel conditioner transforms fleet performance.
            </p>
          </div>
        </section>

        {/* Key Benefits Grid */}
        <section className="section-padding bg-ntl-slate">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold text-ntl-navy mb-12 text-center">
              Why SulNOxEco?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-ntl-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-4xl font-bold text-ntl-navy mb-12 text-center">
              Featured Videos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* YouTube Embed */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-sulnox-green text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {video.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-ntl-navy mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sulnox-green font-semibold hover:text-ntl-blue transition-colors"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-sulnox-green to-sulnox-cyan text-white">
          <div className="container-narrow text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Fleet?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies across West Africa using SulNOxEco to reduce costs and emissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/shop" className="btn-primary bg-white text-ntl-navy hover:bg-gray-100">
                View Products
              </a>
              <a href="/support" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-ntl-navy">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
