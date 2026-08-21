'use client';

import { useMemo, useState } from 'react';
import { HiOutlineSearch, HiOutlinePhone } from 'react-icons/hi';

interface Outlet {
  region: string;
  location: string;
  vendor: string;
  contact: string;
}

export function OutletsTable({ outlets }: { outlets: Outlet[] }) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All Regions');

  const regions = useMemo(
    () => ['All Regions', ...Array.from(new Set(outlets.map((o) => o.region))).sort()],
    [outlets]
  );

  const filtered = useMemo(() => {
    return outlets.filter((o) => {
      const matchesRegion = region === 'All Regions' || o.region === region;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        o.location.toLowerCase().includes(q) ||
        o.vendor.toLowerCase().includes(q) ||
        o.region.toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    });
  }, [outlets, search, region]);

  return (
    <div>
      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by location, vendor or region..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
          />
        </div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green sm:w-56"
        >
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Showing {filtered.length} of {outlets.length} outlets
      </p>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ntl-slate text-left">
              <tr>
                <th className="p-4 font-semibold text-ntl-navy">Region</th>
                <th className="p-4 font-semibold text-ntl-navy">Location</th>
                <th className="p-4 font-semibold text-ntl-navy">Vendor</th>
                <th className="p-4 font-semibold text-ntl-navy">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((o, idx) => (
                <tr key={idx} className="hover:bg-ntl-slate/50 transition-colors">
                  <td className="p-4 text-gray-600 whitespace-nowrap">{o.region}</td>
                  <td className="p-4 text-gray-700">{o.location || '—'}</td>
                  <td className="p-4 font-medium text-ntl-navy whitespace-nowrap">{o.vendor}</td>
                  <td className="p-4">
                    {o.contact ? (
                      <a
                        href={`tel:${o.contact}`}
                        className="flex items-center gap-1.5 text-ntl-blue hover:text-sulnox-green transition-colors whitespace-nowrap"
                      >
                        <HiOutlinePhone className="w-4 h-4" />
                        {o.contact}
                      </a>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-400">
                    No outlets match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
