'use client';

import { useState } from 'react';
import { Input } from '../ui/input';

export default function SearchForm({ onSearch }: { onSearch: (city: string) => void }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (

    <div className="max-w-5xl mx-auto p-6 bg-zinc-800 shadow-md rounded-lg">
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
     
       <div>
          <label className="block text-sm text-center mb-2 font-medium text-gray-50">Location</label>
          <Input 
            placeholder="Enter city or hotel name" 
            className="text-black w-full"
            value={city} 
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      <button
        type="submit"
        className="w-full bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
      >
        Search Hotels
      </button>
    </form>
    </div>
  );
}
