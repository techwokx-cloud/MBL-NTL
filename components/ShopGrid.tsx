'use client';

import { useState } from 'react';
import type { Product } from '@/lib/products-shared';
import { formatPrice } from '@/lib/products-shared';
import { FaWhatsapp, FaMinus, FaPlus } from 'react-icons/fa';

export function ShopGrid({ products }: { products: Product[] }) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((p) => [p.id, 1]))
  );

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, (prev[id] || 1) + delta) }));
  };

  const orderUrl = (product: Product) => {
    const qty = quantities[product.id] || 1;
    const priceText = product.price !== null ? ` (${formatPrice(product.price)} each)` : '';
    return `https://wa.me/233206769664?text=${encodeURIComponent(
      `Hello, I'd like to order ${qty} x SulNOxEco ${product.name}${priceText}`
    )}`;
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
        >
          <div className="relative h-40 bg-ntl-slate flex items-center justify-center p-4">
            <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain" />
            <span className="absolute top-2 left-2 bg-sulnox-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {p.sku}
            </span>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-sm font-bold text-ntl-navy leading-snug mb-1">{p.name}</h3>
            <p className="text-lg font-bold text-ntl-navy mb-3">{formatPrice(p.price)}</p>

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">Qty</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(p.id, -1)}
                  className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ntl-slate transition-colors"
                  aria-label="Decrease quantity"
                >
                  <FaMinus className="w-2.5 h-2.5 text-gray-500" />
                </button>
                <span className="w-6 text-center text-sm font-semibold">{quantities[p.id] || 1}</span>
                <button
                  onClick={() => updateQty(p.id, 1)}
                  className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-ntl-slate transition-colors"
                  aria-label="Increase quantity"
                >
                  <FaPlus className="w-2.5 h-2.5 text-gray-500" />
                </button>
              </div>
            </div>

            <a
              href={orderUrl(p)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              Order Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
