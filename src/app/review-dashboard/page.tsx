'use client';

import { cn } from '@/lib/utils';
import { Link } from 'next/navigation';
import { contracts } from '@/lib/data';
import { useState } from 'react';

export default function ReviewDashboardPage() {
  const [filter, setFilter] = useState('');

  const filteredContracts = contracts.filter((contract) => contract.title.includes(filter));

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Review Dashboard</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search contracts"
        className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <table className="w-full table-auto mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Owner</th>
            <th className="px-4 py-2">Next Step</th>
          </tr>
        </thead>
        <tbody>
          {filteredContracts.map((contract) => (
            <tr key={contract.id}>
              <td className="px-4 py-2">{contract.title}</td>
              <td className="px-4 py-2">{contract.status}</td>
              <td className="px-4 py-2">{contract.owner}</td>
              <td className="px-4 py-2">{contract.nextStep}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/" className={cn('bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded', 'mt-4')}>
        Back to Dashboard
      </Link>
    </div>
  );
}