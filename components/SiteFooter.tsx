'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233123456789';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <footer className="bg-ntl-navy text-white">
      {/* Main Footer */}
      <div className="container-fluid max-w-6xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sulnox-green rounded-lg flex items-center justify-center">
                <span className="font-bold text-ntl-navy">NTL</span>
              </div>
              <span className="font-bold text-xl">SulNOxEco</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium emission control solutions for automotive and industrial applications across West Africa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sulnox-green transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sulnox-green transition-colors" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sulnox-green transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sulnox-green transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products/250ml" className="hover:text-sulnox-green transition-colors">
                  250ml Solution
                </Link>
              </li>
              <li>
                <Link href="/products/4-5l" className="hover:text-sulnox-green transition-colors">
                  4.5L Container
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-sulnox-green transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/dosing-ratio" className="hover:text-sulnox-green transition-colors">
                  Dosing Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-sulnox-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-sulnox-green transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-sulnox-green transition-colors">
                  Branches
                </Link>
              </li>
              <li>
                <Link href="/distributors" className="hover:text-sulnox-green transition-colors">
                  Distributors
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="hover:text-sulnox-green transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-sulnox-green transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-sulnox-green transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sulnox-green transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="mailto:support@mbl-ntlsulnox.com" className="hover:text-sulnox-green transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} Mulberry Lane Ghana / Nationwide Technologies Ltd. All rights reserved.</p>
              <p>SulNOxEco is a trademark of Nationwide Technologies Ltd.</p>
            </div>
            <div className="flex flex-wrap gap-6 md:justify-end text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-sulnox-green transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-sulnox-green transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-sulnox-green transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
