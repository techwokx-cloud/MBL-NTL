import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-grow flex items-center justify-center">
        <section className="section-padding w-full">
          <div className="container-narrow text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ntl-navy to-sulnox-green">
                404
              </h1>
            </div>
            <h2 className="text-4xl font-bold text-ntl-navy mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Go Home
              </Link>
              <Link href="/support" className="btn-secondary text-ntl-navy">
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
