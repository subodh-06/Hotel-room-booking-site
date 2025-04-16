'use client';

import { useState } from 'react';

export default function SearchForm({ onSearch }: { onSearch: (city: string) => void }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Enter city (e.g. Delhi)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full rounded-md p-3 bg-gray-900 text-gray-100 placeholder-gray-400 border border-gray-700"
      />
      <button
        type="submit"
        className="w-full bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
      >
        Search Hotels
      </button>
    </form>
  );
}
