'use client';

import { useState } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';

export function SalesAgentForm() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    region: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to submit');

      // Open WhatsApp with the details pre-filled as a backup/immediate channel
      const waText = `Sales Agent Application\n\nName: ${form.fullName}\nCompany: ${form.companyName || 'N/A'}\nPhone: ${form.phone}\nEmail: ${form.email}\nRegion: ${form.region}\nMessage: ${form.message || 'N/A'}`;
      window.open(`https://wa.me/233206769664?text=${encodeURIComponent(waText)}`, '_blank', 'noopener,noreferrer');

      setSubmitted(true);
    } catch {
      setError('Something went wrong submitting your application. Please try WhatsApp directly, or try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <HiOutlineCheckCircle className="w-16 h-16 text-sulnox-green mx-auto mb-4" />
        <h3 className="text-xl font-bold text-ntl-navy mb-2">Application Received!</h3>
        <p className="text-gray-600">
          Thanks, {form.fullName.split(' ')[0]}. Our team will review your application and follow up shortly.
          We've also opened WhatsApp so you can send us a message directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Company Name</label>
          <input
            type="text"
            value={form.companyName}
            onChange={(e) => update('companyName', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
            placeholder="If applicable"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Phone Number *</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
            placeholder="0XX XXX XXXX"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Region *</label>
        <select
          required
          value={form.region}
          onChange={(e) => update('region', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
        >
          <option value="">Select your region</option>
          <option>Greater Accra</option>
          <option>Ashanti</option>
          <option>Western</option>
          <option>Eastern</option>
          <option>Central</option>
          <option>Northern</option>
          <option>Volta</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-ntl-navy mb-1.5">Tell Us About Your Business</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green"
          placeholder="Current business, customer base, target market, etc."
        />
      </div>
      <label className="flex items-start gap-2.5 text-sm text-gray-600">
        <input type="checkbox" required className="mt-1" />
        I agree to be contacted by the SulNOxEco Ghana sales team regarding this application.
      </label>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:opacity-50">
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>
      <p className="text-xs text-gray-500">
        Submitting saves your application with our team and opens WhatsApp so you can follow up directly.
      </p>
    </form>
  );
}
