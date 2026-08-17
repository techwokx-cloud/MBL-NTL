'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ProductCardProps {
  name: string;
  sku: string;
  description: string;
  features: string[];
  link: string;
  imageUrl?: string;
}

export function ProductCard({
  name,
  sku,
  description,
  features,
  link,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-ntl-blue/10 to-sulnox-green/10 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-lg font-semibold">{name}</p>
              <p className="text-gray-300 text-sm">Product Image</p>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-sulnox-green text-white px-3 py-1 rounded-full text-sm font-semibold">
          {sku}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-ntl-navy mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-sulnox-green font-bold mt-1">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sulnox-green font-semibold hover:text-ntl-blue transition-colors group/link"
        >
          View Details
          <FaArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
