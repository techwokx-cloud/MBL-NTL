'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import type { Product } from '@/lib/products-shared';
import { formatPrice } from '@/lib/products-shared';

const categories = ['All Products', 'Petrol', 'Diesel', 'Industrial', 'Marine', 'Agriculture'];

export function ProductsGrid({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState('All Products');

  return (
    <>
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
            {products.map((p) => (
              <div key={p.id}>
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
                      <span className="text-xl font-bold text-ntl-navy">{formatPrice(p.price)}</span>
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
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Prices shown are indicative and subject to final confirmation. Contact us on WhatsApp for current pricing.
          </p>
        </div>
      </section>
    </>
  );
}
