'use client';

import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineSave, HiOutlineCheckCircle } from 'react-icons/hi';

interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

const fields: { key: keyof SocialLinks; label: string; icon: typeof FaFacebookF; placeholder: string }[] = [
  { key: 'facebook', label: 'Facebook Page URL', icon: FaFacebookF, placeholder: 'https://facebook.com/...' },
  { key: 'instagram', label: 'Instagram Profile URL', icon: FaInstagram, placeholder: 'https://instagram.com/...' },
  { key: 'linkedin', label: 'LinkedIn Page URL', icon: FaLinkedinIn, placeholder: 'https://linkedin.com/company/...' },
  { key: 'youtube', label: 'YouTube Channel URL', icon: FaYoutube, placeholder: 'https://youtube.com/@...' },
];

export default function AdminSocial() {
  const [links, setLinks] = useState<SocialLinks>({ facebook: '', instagram: '', linkedin: '', youtube: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/admin/social')
      .then((res) => res.json())
      .then((data) => {
        setLinks(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch('/api/admin/social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(links),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold text-ntl-navy">Social Media Links</h1>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50"
        >
          {saved ? <HiOutlineCheckCircle className="w-5 h-5" /> : <HiOutlineSave className="w-5 h-5" />}
          {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
      <p className="text-gray-500 mb-8">Manage the social links shown across the site.</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-xl space-y-5">
        {fields.map((field) => (
          <div key={field.key}>
            <label className="flex items-center gap-2 text-sm font-semibold text-ntl-navy mb-1.5">
              <field.icon className="w-4 h-4 text-sulnox-green" />
              {field.label}
            </label>
            <input
              type="url"
              value={links[field.key]}
              onChange={(e) => setLinks((prev) => ({ ...prev, [field.key]: e.target.value }))}
              placeholder={field.placeholder}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sulnox-green text-sm"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5 max-w-xl">
        <p className="text-sm text-gray-700">
          <strong>Next step:</strong> these links are saved here but not yet wired into the live header/footer
          social icons — that's a quick follow-up once you confirm the real account URLs.
        </p>
      </div>
    </div>
  );
}
