import { getProducts } from '@/lib/products-data';
import Link from 'next/link';
import {
  HiOutlineCube,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineShare,
  HiOutlineArrowRight,
} from 'react-icons/hi';

export default function AdminOverview() {
  const products = getProducts();
  const pricedCount = products.filter((p) => p.price !== null).length;

  const cards = [
    { icon: HiOutlineCube, label: 'Total Products', value: products.length, href: '/admin/pricing' },
    { icon: HiOutlineCurrencyDollar, label: 'Products Priced', value: `${pricedCount} / ${products.length}`, href: '/admin/pricing' },
    { icon: HiOutlineUserGroup, label: 'Sales Agent Leads', value: '—', href: '/admin/leads' },
    { icon: HiOutlineShare, label: 'Social Channels', value: '4', href: '/admin/social' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-ntl-navy mb-1">Dashboard Overview</h1>
      <p className="text-gray-500 mb-8">Manage your SulNOxEco Ghana site content.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            href={card.href}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <card.icon className="w-8 h-8 text-sulnox-green mb-3" />
            <p className="text-2xl font-bold text-ntl-navy">{card.value}</p>
            <p className="text-sm text-gray-500">{card.label}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="font-bold text-ntl-navy mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/admin/pricing"
            className="flex items-center justify-between p-4 bg-ntl-slate rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span className="font-medium text-sm text-ntl-navy">Update Product Pricing</span>
            <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
          <Link
            href="/admin/social"
            className="flex items-center justify-between p-4 bg-ntl-slate rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span className="font-medium text-sm text-ntl-navy">Manage Social Links</span>
            <HiOutlineArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5">
        <p className="text-sm text-gray-700">
          <strong>Demo build notice:</strong> This dashboard runs on file-based storage suitable for the
          Render demo. Pricing edits are live on the site immediately, but may reset if the service
          restarts or redeploys. A database-backed version (with real accounts, lead capture, and social
          post scheduling) is the natural next step before production launch.
        </p>
      </div>
    </div>
  );
}
