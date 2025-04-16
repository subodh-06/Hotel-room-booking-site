'use client';

import { useState } from 'react';
import SearchForm from '@/components/hotels/SearchForm';
import HotelCard from '@/components/hotels/HotelCard';
import { fetchHotels } from '@/lib/api';
import { Hotel } from '@/types/hotel';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function SearchPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchHotels(city);
      setHotels(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load hotels');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#141413] text-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-50">Search Hotels</h1>
        <SearchForm onSearch={handleSearch} />
        {loading && <p className="text-gray-400">Loading hotels...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
