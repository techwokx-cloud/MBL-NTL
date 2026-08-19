'use client';

import { useState, useMemo } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Reveal } from '@/components/Reveal';
import { HiOutlineCalculator } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const fuelTypes = ['Diesel', 'Petrol'];
const periods = [
  { label: 'Daily', days: 1 },
  { label: 'Weekly', days: 7 },
  { label: 'Monthly', days: 30 },
];

// Conservative estimated savings range typically reported by fuel-conditioner
// users. Kept as a range (not a guarantee) — actual results vary by engine,
// vehicle condition, and driving pattern.
const SAVINGS_LOW = 0.04; // 4%
const SAVINGS_HIGH = 0.08; // 8%

function recommendProduct(litresPerDay: number) {
  const monthlyLitres = litresPerDay * 30;
  if (monthlyLitres <= 250) return { name: 'SulNOxEco 250ml', note: '1 bottle treats up to 250 litres' };
  if (monthlyLitres <= 1000) return { name: 'SulNOxEco 1 Litre', note: 'Treats up to 1,000 litres' };
  return { name: 'SulNOxEco 4.5 Litre', note: 'Treats up to 4,500 litres — best for fleets' };
}

export default function SavingsCalculator() {
  const [fuelType, setFuelType] = useState('Diesel');
  const [litresPerDay, setLitresPerDay] = useState(150);
  const [fuelPrice, setFuelPrice] = useState(15.0);
  const [period, setPeriod] = useState('Monthly');

  const results = useMemo(() => {
    const periodDays = periods.find((p) => p.label === period)?.days || 30;
    const totalLitres = litresPerDay * periodDays;
    const totalSpend = totalLitres * fuelPrice;
    const savingsLow = totalSpend * SAVINGS_LOW;
    const savingsHigh = totalSpend * SAVINGS_HIGH;
    const product = recommendProduct(litresPerDay);
    return { totalSpend, savingsLow, savingsHigh, product };
  }, [litresPerDay, fuelPrice, period]);

  const fmt = (n: number) =>
    `GH₵ ${n.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white py-14">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <HiOutlineCalculator className="w-8 h-8 text-sulnox-green" />
                <h1 className="text-3xl sm:text-4xl font-bold">Calculate Your Fuel Savings</h1>
              </div>
              <p className="text-gray-200 max-w-2xl">
                Enter your details below to see your estimated savings with SulNOxEco.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Calculator */}
        <section className="section-padding bg-ntl-slate">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal className="grid md:grid-cols-5 gap-0 bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Inputs */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h2 className="text-xl font-bold text-ntl-navy mb-1">Your Details</h2>
                <p className="text-sm text-gray-500 mb-6">Enter your details to see your estimated savings.</p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Fuel Type</label>
                    <select value={fuelType} onChange={(e) => setFuelType(e.target.value)} className="input-field">
                      {fuelTypes.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Litres Used Per Day</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={0}
                        value={litresPerDay}
                        onChange={(e) => setLitresPerDay(Math.max(0, Number(e.target.value)))}
                        className="input-field pr-16"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">Litres</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Fuel Price (GH₵ / Litre)</label>
                    <input
                      type="number"
                      min={0}
                      step={0.1}
                      value={fuelPrice}
                      onChange={(e) => setFuelPrice(Math.max(0, Number(e.target.value)))}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Calculation Period</label>
                    <select value={period} onChange={(e) => setPeriod(e.target.value)} className="input-field">
                      {periods.map((p) => (
                        <option key={p.label} value={p.label}>{p.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="btn-primary w-full flex items-center justify-center gap-2 cursor-default select-none">
                    <HiOutlineCalculator className="w-5 h-5" />
                    Results update automatically
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="md:col-span-2 bg-ntl-slate p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-200">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-5">Your Potential Savings</p>

                <div className="mb-5">
                  <p className="text-xs text-gray-500 mb-1">{fuelType} Spend ({period})</p>
                  <p className="text-2xl font-bold text-ntl-navy">{fmt(results.totalSpend)}</p>
                </div>

                <div className="mb-5">
                  <p className="text-xs text-gray-500 mb-1">Estimated Savings (4–8%)</p>
                  <p className="text-2xl font-bold text-sulnox-green">
                    {fmt(results.savingsLow)} – {fmt(results.savingsHigh)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">per {period.toLowerCase().replace('ly', '')}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-300">
                  <p className="text-xs text-gray-500 mb-1">Recommended Product</p>
                  <p className="font-bold text-ntl-navy">{results.product.name}</p>
                  <p className="text-xs text-gray-500">{results.product.note}</p>
                </div>

                <a
                  href={`https://wa.me/233206769664?text=${encodeURIComponent(
                    `Hello, I used the savings calculator: ${litresPerDay}L/day of ${fuelType}, estimated savings ${fmt(results.savingsLow)}-${fmt(results.savingsHigh)} per ${period.toLowerCase()}. I'd like to order ${results.product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-ntl-navy hover:bg-ntl-blue text-white font-semibold text-sm py-3 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Talk to Sales About This
                </a>

                <p className="text-[11px] text-gray-400 mt-4">
                  * Results are estimates based on typical performance and vary by vehicle, engine condition and
                  driving pattern. Not a guaranteed figure.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
