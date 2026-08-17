/**
 * Utility Functions
 * Reusable helper functions throughout the application
 */

/**
 * Format currency (Ghana Cedis or USD)
 */
export function formatCurrency(amount: number, currency: 'GHS' | 'USD' = 'GHS'): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format phone number for WhatsApp
 * Removes all non-digits and prepends country code
 */
export function formatPhoneForWhatsApp(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  // If doesn't start with country code, assume Ghana
  if (!cleaned.startsWith('233')) {
    return cleaned.startsWith('0') ? '233' + cleaned.slice(1) : '233' + cleaned;
  }
  return cleaned;
}

/**
 * Generate WhatsApp message link
 */
export function generateWhatsAppLink(phoneNumber: string, message?: string): string {
  const phone = formatPhoneForWhatsApp(phoneNumber);
  const encoded = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${phone}${encoded}`;
}

/**
 * Format date in readable format
 */
export function formatDate(date: Date | string, locale: string = 'en-GH'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Generate slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
}

/**
 * Calculate dosing consumption
 * Returns estimated liters consumed per 100km
 */
export function calculateDosingConsumption(
  fuelConsumption: number, // liters per 100km
  dosingRatio: number // percentage (3-8)
): number {
  return (fuelConsumption * dosingRatio) / 100;
}

/**
 * Estimate refill interval
 * Returns kilometers between refills
 */
export function estimateRefillInterval(
  containerSize: number, // liters
  fuelConsumption: number, // liters per 100km
  dosingRatio: number // percentage
): number {
  const dosingPerKm = calculateDosingConsumption(fuelConsumption, dosingRatio) / 100;
  return Math.round(containerSize / dosingPerKm);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Ghana format)
 */
export function isValidGhanaPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.startsWith('233') && cleaned.length === 12;
}

/**
 * Debounce function for search/input
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Check if device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Local storage helper with type safety
 */
export const localStorage = {
  getItem<T>(key: string, defaultValue?: T): T | null {
    if (typeof window === 'undefined') return defaultValue || null;
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : (defaultValue || null);
  },
  setItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem(key: string): void {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
  },
};

/**
 * Session storage helper with type safety
 */
export const sessionStorage = {
  getItem<T>(key: string, defaultValue?: T): T | null {
    if (typeof window === 'undefined') return defaultValue || null;
    const item = window.sessionStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : (defaultValue || null);
  },
  setItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  removeItem(key: string): void {
    if (typeof window === 'undefined') return;
    window.sessionStorage.removeItem(key);
  },
};
