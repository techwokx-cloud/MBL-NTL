import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AIAssistant } from '@/components/AIAssistant';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'MBL-NTL SulNOxEco';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mbl-ntlsulnox.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#001a4d',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Emission Control Solutions`,
    template: `%s | ${siteName}`,
  },
  description:
    'Advanced emission control technology for automotive and industrial applications across West Africa.',
  keywords: [
    'emission control',
    'fuel conditioner',
    'SulNOx',
    'automotive',
    'Ghana',
    'West Africa',
  ],
  authors: [{ name: 'Nationwide Technologies Ltd' }],
  creator: 'Mulberry Lane Ghana',
  publisher: 'MBL-NTL',
  applicationName: siteName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: siteUrl,
    siteName,
    title: `${siteName} | Premium Emission Control Solutions`,
    description:
      'Advanced emission control technology for automotive and industrial applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Premium Emission Control Solutions`,
    description:
      'Advanced emission control technology for automotive and industrial applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Site Verification (add token after client approval) */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Organization structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description:
                'Sole authorised distributor of SulNOxEco Fuel Conditioner in Ghana.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '129 Haatso Road, Haatso, Ga East District',
                addressLocality: 'Accra',
                postOfficeBoxNumber: 'P.O. Box LG 206, Legon',
                addressCountry: 'GH',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
