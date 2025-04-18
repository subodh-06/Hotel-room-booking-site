'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ CORRECT for App Router (client components)


interface Booking {
  hotelName: string;
  guestName: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  people: number;
  createdAt: string;
}

export default function OwnerDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
       
        const res = await fetch('https://stayease-backend-lhmu.onrender.com/api/bookings/owner-dashboard', {
          headers: {
           'Authorization': `Bearer ${Cookies.get('token')}`
          },
        });

        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleSignOut = () => {
    Cookies.remove('token');
    router.push('/owner');
  };

  return (
    <div className="flex min-h-screen bg-[#141413] text-white">
    {/* Sidebar */}
    <aside className="w-64 bg-[#1c1c1b] p-6 border-r border-gray-700 hidden sm:block">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="space-y-4">
        <Link
          href="/owner/list-hotel"
          className="block text-gray-300 hover:text-white transition"
        >
          ➕ List Your Hotel
        </Link>
        <button
              onClick={handleSignOut}
              className="text-red-400 hover:underline hover:text-red-300 transition"
            >
              Sign out
            </button>
      </nav>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Your Hotel Bookings</h2>
        <Button className="bg-white text-black font-semibold hover:bg-gray-200">
          <Link href="/owner/list-hotel">List Your Hotel</Link>
        </Button>
      </div>

      {/* Booking List */}
      {loading ? (
        <div className="text-center text-gray-300 text-lg">Fetching your bookings...</div>
      ) : bookings.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">No bookings found yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, idx) => (
            <div
              key={idx}
              className="bg-[#1f1f1f] p-5 rounded-xl border border-gray-700 shadow hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                {booking.hotelName}
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-400">Guest:</span> {booking.guestName}</p>
                <p><span className="text-gray-400">Phone:</span> {booking.guestPhone}</p>
                <p><span className="text-gray-400">Check-In:</span> {new Date(booking.checkIn).toLocaleDateString()}</p>
                <p><span className="text-gray-400">Check-Out:</span> {new Date(booking.checkOut).toLocaleDateString()}</p>
                <p><span className="text-gray-400">Rooms:</span> {booking.rooms}</p>
                <p><span className="text-gray-400">People:</span> {booking.people}</p>
                <p className="text-gray-500 mt-2 text-xs">
                  Booked on: {new Date(booking.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  </div>
  );
}
