import { HiOutlineUserGroup, HiOutlineInformationCircle } from 'react-icons/hi';

export default function AdminLeads() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-ntl-navy mb-1">Sales Agent Leads</h1>
      <p className="text-gray-500 mb-8">Applications submitted through the Become a Sales Agent page.</p>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <HiOutlineUserGroup className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <p className="font-semibold text-ntl-navy mb-2">No lead storage connected yet</p>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          The Become a Sales Agent form currently opens WhatsApp directly with the applicant's details rather
          than storing them here. Once a database is connected, submissions will appear in this table
          automatically.
        </p>
      </div>

      <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-3">
        <HiOutlineInformationCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700">
          To capture leads here instead of (or in addition to) WhatsApp, the application form needs to post to
          a database-backed API. Worth doing once you've confirmed hosting/database preferences for the
          production build.
        </p>
      </div>
    </div>
  );
}
