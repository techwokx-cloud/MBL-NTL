'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  HiOutlineViewGrid,
  HiOutlineCurrencyDollar,
  HiOutlineShare,
  HiOutlineUserGroup,
  HiOutlineLogout,
  HiOutlineExternalLink,
} from 'react-icons/hi';

const navItems = [
  { label: 'Overview', href: '/admin', icon: HiOutlineViewGrid },
  { label: 'Product Pricing', href: '/admin/pricing', icon: HiOutlineCurrencyDollar },
  { label: 'Social Media', href: '/admin/social', icon: HiOutlineShare },
  { label: 'Sales Agent Leads', href: '/admin/leads', icon: HiOutlineUserGroup },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Login page renders its own full-screen layout
  if (pathname === '/admin/login') return <>{children}</>;

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen flex bg-ntl-slate">
      {/* Sidebar */}
      <aside className="w-64 bg-ntl-navy text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <img src="/logo.png" alt="MBL-NTL SulNOx" className="h-9 w-auto brightness-0 invert" />
          <p className="text-xs text-gray-400 mt-2">Admin Dashboard (Demo)</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'bg-sulnox-green text-white' : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <HiOutlineExternalLink className="w-5 h-5 shrink-0" />
            View Live Site
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors"
          >
            <HiOutlineLogout className="w-5 h-5 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
