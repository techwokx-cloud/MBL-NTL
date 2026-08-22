'use client';

import { useEffect, useState } from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

interface Lead {
  id: string;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  region: string;
  message: string;
  submittedAt: string;
}

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leads')
      .then((res) => res.json())
      .then((data) => {
        setLeads(data.leads || []);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-ntl-navy mb-1">Sales Agent Leads</h1>
      <p className="text-gray-500 mb-8">Applications submitted through the Become a Sales Agent page.</p>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : leads.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <HiOutlineUserGroup className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="font-semibold text-ntl-navy mb-2">No applications yet</p>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Submissions from the Become a Sales Agent page will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ntl-slate text-left">
                <tr>
                  <th className="p-4 font-semibold text-ntl-navy">Name</th>
                  <th className="p-4 font-semibold text-ntl-navy">Company</th>
                  <th className="p-4 font-semibold text-ntl-navy">Contact</th>
                  <th className="p-4 font-semibold text-ntl-navy">Region</th>
                  <th className="p-4 font-semibold text-ntl-navy">Submitted</th>
                  <th className="p-4 font-semibold text-ntl-navy"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-ntl-slate/50 transition-colors align-top">
                    <td className="p-4 font-medium text-ntl-navy">{lead.fullName}</td>
                    <td className="p-4 text-gray-600">{lead.companyName || '—'}</td>
                    <td className="p-4 text-gray-600">
                      <div>{lead.phone}</div>
                      <div className="text-xs text-gray-400">{lead.email}</div>
                    </td>
                    <td className="p-4 text-gray-600">{lead.region}</td>
                    <td className="p-4 text-gray-500 text-xs whitespace-nowrap">
                      {new Date(lead.submittedAt).toLocaleDateString('en-GH', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="p-4">
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^\d]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sulnox-green hover:text-ntl-blue transition-colors"
                        title="Message on WhatsApp"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
