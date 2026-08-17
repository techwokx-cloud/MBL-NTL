'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <SiteHeader />
      <main className="flex-grow flex items-center justify-center">
        <section className="section-padding w-full">
          <div className="container-narrow text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ntl-navy to-sulnox-green">
                500
              </h1>
            </div>
            <h2 className="text-4xl font-bold text-ntl-navy mb-4">Oops! Something Went Wrong</h2>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              We apologize for the inconvenience. An unexpected error occurred on our server.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left max-w-2xl mx-auto">
                <p className="text-sm text-red-700 font-mono break-words">
                  {error.message}
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="btn-primary"
              >
                Try Again
              </button>
              <Link href="/" className="btn-secondary text-ntl-navy">
                Go Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
