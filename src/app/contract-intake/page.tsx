'use client';

import { cn } from '@/lib/utils';
import { Link } from 'next/navigation';
import { useState } from 'react';
import { contracts } from '@/lib/data';

export default function ContractIntakePage() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [owner, setOwner] = useState('');
  const [nextStep, setNextStep] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContract = {
      title,
      status,
      owner,
      nextStep,
    };
    contracts.push(newContract);
    setTitle('');
    setStatus('');
    setOwner('');
    setNextStep('');
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold">Contract Intake</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter contract title"
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="status">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <option value="">Select status</option>
          <option value="Pending Review">Pending Review</option>
          <option value="In Progress">In Progress</option>
          <option value="Approved">Approved</option>
        </select>
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="owner">
          Owner
        </label>
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          placeholder="Enter contract owner"
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="nextStep">
          Next Step
        </label>
        <input
          type="text"
          value={nextStep}
          onChange={(e) => setNextStep(e.target.value)}
          placeholder="Enter next step"
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button
          type="submit"
          className={cn('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', 'mt-4')}
        >
          Submit
        </button>
      </form>
      <Link href="/" className={cn('bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded', 'mt-4')}>
        Back to Dashboard
      </Link>
    </div>
  );
}