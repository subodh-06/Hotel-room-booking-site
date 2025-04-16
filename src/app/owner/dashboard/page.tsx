'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

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

  return (
    <div className="min-h-screen bg-[#141413] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Your Hotel Bookings
        </h2>

        {loading ? (
          <div className="text-center text-gray-300 text-lg">Fetching your bookings...</div>
        ) : bookings.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">No bookings found yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking, idx) => (
              <div
                key={idx}
                className="bg-[#1f1f1f] text-white p-5 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition duration-200"
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
      </div>
    </div>
  );
}
