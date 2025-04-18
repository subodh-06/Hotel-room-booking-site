'use client';

import { useState } from 'react';
import SearchForm from '@/components/hotels/SearchForm';
import HotelCard from '@/components/hotels/HotelCard';
import { fetchHotels } from '@/lib/api';
import { Hotel } from '@/types/hotel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <section className="bg-[#141413] text-white py-16 flex flex-col justify-center items-center px-4">
    <div className="text-center px-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        Search Your Perfect Stay 🏨
        </h1>
        <p className="text-lg md:text-xl mb-6">
        Search and Discover amazing hotels at unbeatable prices. Book now and experience luxury like never before!
        </p>
      </div>
      <div className="container mx-auto">
     
        <SearchForm onSearch={handleSearch} />
        {loading && <p className="text-gray-400">Loading hotels...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
}
