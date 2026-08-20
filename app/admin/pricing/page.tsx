'use client';

import { useEffect, useState } from 'react';
import type { Product } from '@/lib/products-shared';
import { HiOutlineSave, HiOutlineCheckCircle } from 'react-icons/hi';

export default function AdminPricing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      });
  }, []);

  const updatePrice = (id: string, value: string) => {
    const numeric = value === '' ? null : parseFloat(value);
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, price: numeric } : p)));
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading products...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold text-ntl-navy">Product Pricing</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50"
        >
          {saved ? <HiOutlineCheckCircle className="w-5 h-5" /> : <HiOutlineSave className="w-5 h-5" />}
          {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
      <p className="text-gray-500 mb-8">
        Edit prices below — changes apply immediately to the Products and Shop pages once saved.
      </p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-ntl-slate text-left">
            <tr>
              <th className="p-4 font-semibold text-ntl-navy">Product</th>
              <th className="p-4 font-semibold text-ntl-navy">SKU</th>
              <th className="p-4 font-semibold text-ntl-navy">Badge</th>
              <th className="p-4 font-semibold text-ntl-navy">Price (GHC)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-4 flex items-center gap-3">
                  <img src={product.img} alt={product.name} className="w-10 h-10 object-contain" />
                  <span className="font-medium text-ntl-navy">{product.name}</span>
                </td>
                <td className="p-4 text-gray-500">{product.sku}</td>
                <td className="p-4">
                  {product.badge ? (
                    <span className="bg-sulnox-green/10 text-sulnox-green text-xs font-semibold px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="relative w-36">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">GHC</span>
                    <input
                      type="number"
                      step="0.01"
                      value={product.price ?? ''}
                      onChange={(e) => updatePrice(product.id, e.target.value)}
                      placeholder="Contact for price"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green text-sm"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
