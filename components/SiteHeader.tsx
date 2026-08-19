'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products', href: '/products' },
  { label: 'Dosing Ratio', href: '/dosing-ratio' },
  { label: 'Savings Calculator', href: '/savings-calculator' },
  { label: 'Shop', href: '/shop' },
  { label: 'Branches', href: '/branches' },
  { label: 'Support', href: '/support' },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233206769664';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=Hello%20MBL-NTL%20SulNOxEco`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden md:block bg-ntl-navy text-gray-200 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href="tel:+233206769664" className="flex items-center gap-2 hover:text-sulnox-cyan transition-colors">
              <FaPhoneAlt className="w-3 h-3" />
              0206 769 664 / 0242 567 700
            </a>
            <a href="mailto:info@mbl-ntlsulnox.com" className="flex items-center gap-2 hover:text-sulnox-cyan transition-colors">
              <FaEnvelope className="w-3 h-3" />
              info@mbl-ntlsulnox.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow Us:</span>
            <a href="#" aria-label="Facebook" className="hover:text-sulnox-cyan transition-colors"><FaFacebookF className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-sulnox-cyan transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-sulnox-cyan transition-colors"><FaLinkedinIn className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-shadow ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/logo.png"
                alt="MBL-NTL SulNOx Fuel Conditioner"
                className="h-14 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors py-1 ${
                      active ? 'text-ntl-navy' : 'text-gray-600 hover:text-ntl-blue'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sulnox-green rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-ntl-navy hover:bg-ntl-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 text-sulnox-green" />
                Talk to Sales
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-ntl-navy p-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 py-2.5 rounded-md font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-ntl-navy bg-ntl-slate'
                        : 'text-gray-700 hover:text-ntl-blue'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white px-4 py-3 rounded-lg font-semibold transition-colors mt-3"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Talk to Sales on WhatsApp
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
