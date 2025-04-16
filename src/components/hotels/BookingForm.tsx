'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookingFormInput } from '@/types/booking';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Cookies from 'js-cookie';

export default function BookingForm({ hotelId }: { hotelId: string }) {
  const router = useRouter();
  const [form, setForm] = useState<BookingFormInput>({
    checkIn: '',
    checkOut: '',
    rooms: 1,
    people: 1,
    guestName: '',
    guestPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch('https://stayease-backend-lhmu.onrender.com/api/bookings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`, // fixed line
      },
      body: JSON.stringify({ ...form, hotelId }),
    });
  
    if (res.ok) {
      router.push('/profile');
    } else {
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="checkIn" className="text-gray-300">Check In</Label>
          <Input
            type="date"
            name="checkIn"
            id="checkIn"
            onChange={handleChange}
            required
            className="bg-[#1e1e1c] text-gray-100 border border-gray-700"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="checkOut" className="text-gray-300">Check Out</Label>
          <Input
            type="date"
            name="checkOut"
            id="checkOut"
            onChange={handleChange}
            required
            className="bg-[#1e1e1c] text-gray-100 border border-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="rooms" className="text-gray-300">Rooms</Label>
          <Input
            type="number"
            name="rooms"
            id="rooms"
            min="1"
            value={form.rooms}
            onChange={handleChange}
            required
            className="bg-[#1e1e1c] text-gray-100 border border-gray-700"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="people" className="text-gray-300">People</Label>
          <Input
            type="number"
            name="people"
            id="people"
            min="1"
            value={form.people}
            onChange={handleChange}
            required
            className="bg-[#1e1e1c] text-gray-100 border border-gray-700"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="guestName" className="text-gray-300">Guest Name</Label>
        <Input
          type="text"
          name="guestName"
          id="guestName"
          placeholder="Guest Name"
          onChange={handleChange}
          required
          className="bg-[#1e1e1c] text-gray-100 border border-gray-700"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="guestPhone" className="text-gray-300">Phone Number</Label>
        <Input
          type="tel"
          name="guestPhone"
          id="guestPhone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="bg-[#1e1e1c] text-gray-100 border border-gray-700"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gray-200 text-black hover:bg-yellow-300 font-semibold"
      >
        Book Now
      </Button>
    </form>
  );
}
