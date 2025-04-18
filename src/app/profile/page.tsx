'use client';

import { useEffect, useState } from 'react';
import BookingCard from '@/components/bookings/BookingCard';
import { Booking } from '@/types/booking';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cookies from 'js-cookie';


export default function ProfilePage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch('https://stayease-backend-lhmu.onrender.com/api/bookings/my-bookings', {
          headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`, // fixed line
          },
        });

        if (!res.ok) throw new Error('Failed to fetch bookings');
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#141413] text-gray-100 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-50 mb-6">My Bookings</h1>

        {loading ? (
          <p>Loading...</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-400">You have no bookings yet.</p>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}
