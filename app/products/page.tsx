'use client';

import { useState } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import {
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';

const categories = ['All Products', 'Petrol', 'Diesel', 'Industrial', 'Marine', 'Agriculture'];

const products = [
  {
    name: 'SulNOxEco 30ml',
    sku: '30ML',
    img: '/images/products/30ml Bottle.jpg',
    price: 'GHC 35.00',
    badge: 'For Trial Engines',
    features: ['For trial engines', 'Easy to use', 'Improves combustion', 'For all fuel types'],
    link: '/products/250ml',
  },
  {
    name: 'SulNOxEco 60ml',
    sku: '60ML',
    img: '/images/products/60ml-Bottle-.jpg',
    price: 'GHC 60.00',
    badge: 'Popular',
    features: ['For motorcycles', 'Improves mileage', 'Reduces emissions', 'Protects engine'],
    link: '/products/250ml',
  },
  {
    name: 'SulNOxEco 120ml',
    sku: '120ML',
    img: '/images/products/120 ml-Bottle..jpg',
    price: 'GHC 120.00',
    badge: null,
    features: ['For cars & pick-ups', 'Better fuel economy', 'Cleans injectors', 'All petrol engines'],
    link: '/products/250ml',
  },
  {
    name: 'SulNOxEco 250ml',
    sku: '250ML',
    img: '/images/products/250 ml-Bottle..jpg',
    price: 'GHC 105.00',
    badge: 'Best Seller',
    features: ['Improves fuel efficiency', 'Reduces harmful emissions', 'Cleans fuel system & injectors', 'Suitable for all petrol engines'],
    link: '/products/250ml',
  },
  {
    name: 'SulNOxEco 1 Litre',
    sku: '1L',
    img: '/images/products/1 Litre Bottle.jpg',
    price: 'GHC 320.00',
    badge: null,
    features: ['For commercial use', 'High performance', 'Reduces operating cost', 'Petrol & diesel engines'],
    link: '/products/4-5l',
  },
  {
    name: 'SulNOxEco 4.5 Litre',
    sku: '4.5L',
    img: '/images/products/4.5 Litre Galon.jpg',
    price: 'GHC 1,960.00',
    badge: 'Value Pack',
    features: ['For fleets & industry', 'Maximum performance', 'Lower emissions', 'All diesel & petrol engines'],
    link: '/products/4-5l',
  },
];

const trustBadges = [
  { icon: HiOutlineSparkles, label: '100% Organic Formula' },
  { icon: HiOutlineBeaker, label: 'Treats up to 250 Litres' },
  { icon: HiOutlineShieldCheck, label: 'For Petrol & Diesel Engines' },
  { icon: HiOutlineTrendingUp, label: 'Easy to Use & Effective' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Products');

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero banner */}
        <section className="bg-gradient-to-r from-ntl-navy to-sulnox-green text-white py-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Products</h1>
              <p className="text-gray-200 max-w-md">
                High performance fuel conditioner for cleaner engines, better mileage and lower emissions.
              </p>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-2 gap-4">
              {trustBadges.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2.5">
                  <b.icon className="w-6 h-6 text-white shrink-0" />
                  <span className="text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Category tabs */}
        <section className="bg-white border-b border-gray-200 sticky top-[80px] z-30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-ntl-navy text-white'
                    : 'bg-ntl-slate text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, idx) => (
                <Reveal key={idx} delay={(idx % 3) * 80}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col">
                    <div className="relative h-56 bg-white flex items-center justify-center p-6">
                      {p.badge && (
                        <span className="absolute top-4 left-4 bg-sulnox-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                          {p.badge}
                        </span>
                      )}
                      <img
                        src={p.img}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-ntl-navy mb-1">{p.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">Fuel Conditioner</p>
                      <ul className="space-y-1.5 mb-4 flex-grow">
                        {p.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <FaCheck className="w-2.5 h-2.5 text-sulnox-green shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-ntl-navy">{p.price}</span>
                        <span className="text-xs text-sulnox-green font-semibold">In Stock</span>
                      </div>
                      <a
                        href={p.link}
                        className="text-center bg-ntl-navy hover:bg-ntl-blue text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Pricing note */}
            <Reveal className="mt-6 text-center text-xs text-gray-500">
              Prices shown are indicative and subject to final confirmation. Contact us on WhatsApp for current pricing.
            </Reveal>
          </div>
        </section>

        {/* Bottom feature strip */}
        <section className="bg-white py-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Fast & Reliable Delivery', sub: 'Nationwide delivery across Ghana' },
              { label: '100% Genuine Products', sub: 'Quality assured by us' },
              { label: 'Secure Payments', sub: 'Multiple safe payment options' },
              { label: 'Customer Support', sub: "We're here to help you" },
            ].map((item, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <p className="font-bold text-ntl-navy text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp CTA bar */}
        <section className="bg-sulnox-green">
          <Reveal className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold">Need help choosing the right product? Our experts are ready to assist.</p>
            <a
              href="https://wa.me/233206769664?text=Hello%2C%20I%20need%20help%20choosing%20a%20SulNOxEco%20product"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-sulnox-green font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <FaWhatsapp className="w-5 h-5" />
              Talk to Sales on WhatsApp
            </a>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
