/**
 * Application Constants
 * Centralized configuration values used throughout the app
 */

// Site Configuration
export const SITE_NAME = 'MBL-NTL SulNOxEco';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mbl-ntlsulnox.com';
export const SITE_DESCRIPTION =
  'Premium emission control solutions for automotive and industrial applications across West Africa.';

// Brand Colors
export const COLORS = {
  ntl_navy: '#001a4d',
  ntl_blue: '#003d99',
  sulnox_green: '#00a86b',
  sulnox_cyan: '#00d9ff',
  ntl_slate: '#f1f5f9',
  ntl_slate_dark: '#64748b',
};

// Contact Information (Update with approved values)
export const CONTACT = {
  whatsapp_number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+233123456789',
  email: 'support@mbl-ntlsulnox.com',
  phone: '[To be updated]',
  hours: 'Mon–Fri: 8am–6pm, Sat: 8am–2pm (Accra time)',
};

// Product Information
export const PRODUCTS = {
  BOTTLE_250ML: {
    name: '250ml Bottle',
    sku: '250ML',
    volume: '250ml',
    slug: '250ml',
    description: 'Compact dosing solution for light commercial vehicles',
  },
  CONTAINER_4_5L: {
    name: '4.5L Container',
    sku: '4.5L',
    volume: '4.5L',
    slug: '4-5l',
    description: 'Standard container for fleet and industrial applications',
  },
};

// Dosing Ratios (Update with approved specs)
export const DOSING_RATIOS = {
  LIGHT: {
    min: 3,
    max: 5,
    label: 'Light Commercial Vehicles',
  },
  STANDARD: {
    min: 5,
    max: 6,
    label: 'Standard Commercial Vehicles',
  },
  HEAVY: {
    min: 6,
    max: 8,
    label: 'Heavy-Duty Trucks & Industrial',
  },
};

// Standards & Certifications
export const CERTIFICATIONS = [
  { name: 'ISO 22241', description: 'International AUS 32 standard' },
  { name: 'ASTM D6427', description: 'American AUS 32 standard' },
  { name: 'Euro 6', description: 'European emission standard' },
  { name: 'BS VI', description: 'Indian/South Asian emission standard' },
];

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products', href: '/products' },
  { label: 'Shop', href: '/shop' },
  { label: 'Branches', href: '/branches' },
  { label: 'Support', href: '/support' },
];

// Footer Links
export const FOOTER_LINKS = {
  products: [
    { label: '250ml Solution', href: '/products/250ml' },
    { label: '4.5L Container', href: '/products/4-5l' },
    { label: 'Shop All', href: '/shop' },
    { label: 'Dosing Guide', href: '/dosing-ratio' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Branches', href: '/branches' },
    { label: 'Become a Sales Agent', href: '/become-a-sales-agent' },
  ],
  support: [
    { label: 'Help Center', href: '/support' },
    { label: 'Resources', href: '/resources' },
    { label: 'Email Us', href: 'mailto:support@mbl-ntlsulnox.com' },
  ],
};

// Pagination & Limits
export const PAGINATION = {
  PRODUCTS_PER_PAGE: 12,
  SEARCH_LIMIT: 50,
};

// Cache Duration (in seconds)
export const CACHE = {
  SHORT: 300, // 5 minutes
  MEDIUM: 3600, // 1 hour
  LONG: 86400, // 24 hours
  FOREVER: 31536000, // 1 year
};

// API Configuration
export const API = {
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
};

// SEO Configuration
export const SEO = {
  og_image: '/og-image.png',
  favicon: '/favicon.ico',
  twitter_handle: '@sulnoxeco',
};
