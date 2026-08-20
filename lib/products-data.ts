import fs from 'fs';
import path from 'path';
import type { Product } from './products-shared';

export type { Product } from './products-shared';
export { formatPrice } from './products-shared';

const DATA_PATH = path.join(process.cwd(), 'data', 'products.json');

/**
 * Server-only data access for the product catalog. Backed by a JSON file
 * so the admin dashboard can edit pricing without a database — suitable
 * for the Render demo deployment. Note: writes are not guaranteed to
 * persist across a redeploy/restart on ephemeral filesystems; swap this
 * for a real database-backed store before this goes to production.
 */
export function getProducts(): Product[] {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read products.json', err);
    return [];
  }
}

export function saveProducts(products: Product[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2), 'utf-8');
}
