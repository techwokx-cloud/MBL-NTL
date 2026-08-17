'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products', href: '/products' },
  { label: 'Shop', href: '/shop' },
  { label: 'Videos', href: '/videos' },
  { label: 'Branches', href: '/branches' },
  { label: 'Support', href: '/support' },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233123456789';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=Hello%20MBL-NTL%20SulNOxEco`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-fluid max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="MBL-NTL SulNOx Fuel Conditioner"
              className="h-14 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-ntl-blue transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              title="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-ntl-navy"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-ntl-blue transition-colors font-medium px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors mx-4"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
