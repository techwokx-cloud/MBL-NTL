// Client-safe types and helpers shared between server data access
// (products-data.ts) and client components. No Node.js APIs here.

export interface Product {
  id: string;
  name: string;
  sku: string;
  img: string;
  price: number | null;
  badge: string | null;
  features: string[];
  link: string;
}

export function formatPrice(price: number | null): string {
  if (price === null) return 'Contact for Price';
  return `GHC ${price.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
