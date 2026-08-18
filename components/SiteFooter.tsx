'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineCog, HiOutlineCash, HiOutlineGlobeAlt } from 'react-icons/hi';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233206769664';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

  const trustBadges = [
    { icon: HiOutlineSparkles, label: '100% Organic', sub: 'Fuel Conditioner' },
    { icon: HiOutlineCog, label: 'Lower Operating Costs', sub: 'Save more on every litre' },
    { icon: HiOutlineCash, label: 'Cleaner Environment', sub: 'Lower harmful emissions' },
    { icon: HiOutlineGlobeAlt, label: 'Longer Engine Life', sub: 'Reduces wear & maintenance' },
  ];

  return (
    <footer className="bg-ntl-navy text-white">
      {/* Trust badge strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <badge.icon className="w-7 h-7 text-sulnox-green shrink-0" />
              <div>
                <p className="font-semibold text-sm leading-tight">{badge.label}</p>
                <p className="text-gray-400 text-xs">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img src="/logo.png" alt="MBL-NTL SulNOx" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              MBL-NTLSULNOX is the sole distributor of SulNOxEco in Ghana. Produced in the UK, packaged and
              distributed locally.
            </p>
            <p className="text-gray-400 text-xs mb-5">SulNOxEco is a trademark of Nationwide Technologies Ltd.</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-sulnox-green flex items-center justify-center transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-sulnox-green flex items-center justify-center transition-colors" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-sulnox-green flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="/videos" className="w-9 h-9 rounded-full bg-white/10 hover:bg-sulnox-green flex items-center justify-center transition-colors" aria-label="YouTube">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-sulnox-green flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-5 text-sulnox-cyan">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/250ml" className="text-gray-300 hover:text-sulnox-green transition-colors">250ml Bottle</Link></li>
              <li><Link href="/products/4-5l" className="text-gray-300 hover:text-sulnox-green transition-colors">4.5L Container</Link></li>
              <li><Link href="/shop" className="text-gray-300 hover:text-sulnox-green transition-colors">Shop All</Link></li>
              <li><Link href="/dosing-ratio" className="text-gray-300 hover:text-sulnox-green transition-colors">Dosing Ratio</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-5 text-sulnox-cyan">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-sulnox-green transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-sulnox-green transition-colors">How It Works</Link></li>
              <li><Link href="/branches" className="text-gray-300 hover:text-sulnox-green transition-colors">Find a Branch</Link></li>
              <li><Link href="/become-a-sales-agent" className="text-gray-300 hover:text-sulnox-green transition-colors">Become a Sales Agent</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-5 text-sulnox-cyan">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/support" className="text-gray-300 hover:text-sulnox-green transition-colors">Help Center</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-sulnox-green transition-colors">Resources & FAQ</Link></li>
              <li><Link href="/videos" className="text-gray-300 hover:text-sulnox-green transition-colors">Videos</Link></li>
              <li><a href="mailto:info@mbl-ntlsulnox.com" className="text-gray-300 hover:text-sulnox-green transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-gray-400 text-xs">
              <p>© {currentYear} Mulberry Lane Ghana / Nationwide Technologies Ltd. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                Talk to Sales · 0206 769 664
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-sulnox-green transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-sulnox-green transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
