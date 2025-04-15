"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Booking } from "@/types/types"; // Adjust path if needed


export default function ProfilePage() {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login"; // ✅ still works
        return;
      }
  
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/user/bookings`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => setBookings(res.data.bookings));
    }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b) => (
          <div key={b._id} className="border rounded-md p-4 mb-3 bg-white">
            <p>Hotel: {b.hotel.name}</p>
            <p>Check-in: {new Date(b.checkIn).toLocaleDateString()}</p>
            <p>Check-out: {new Date(b.checkOut).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
}
