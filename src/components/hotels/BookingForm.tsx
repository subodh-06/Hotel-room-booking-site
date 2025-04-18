'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookingFormInput } from '@/types/booking';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils'; // Utility function to handle className merging
import Cookies from 'js-cookie';

export default function BookingForm({ hotelId }: { hotelId: string }) {
  const router = useRouter();

  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();

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
        'Authorization': `Bearer ${Cookies.get('token')}`,
      },
      body: JSON.stringify({ ...form, hotelId }),
    });

    if (res.ok) {
      router.push('/profile');
    } else {
      alert('Booking failed');
    }
  };

  const handleDateChange = (field: 'checkIn' | 'checkOut', date: Date | undefined) => {
    const isoDate = date ? date.toISOString().split('T')[0] : '';
    setForm((prev) => ({ ...prev, [field]: isoDate }));

    if (field === 'checkIn') setCheckInDate(date);
    else setCheckOutDate(date);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        {/* Check In */}
        <div className="space-y-1">
          <Label htmlFor="checkIn" className="text-gray-300">Check In</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal bg-[#1e1e1c] text-gray-100 border border-gray-700',
                  !checkInDate && 'text-muted-foreground'
                )}
              >
                {checkInDate ? format(checkInDate, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={(date) => handleDateChange('checkIn', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check Out */}
        <div className="space-y-1">
          <Label htmlFor="checkOut" className="text-gray-300">Check Out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal bg-[#1e1e1c] text-gray-100 border border-gray-700',
                  !checkOutDate && 'text-muted-foreground'
                )}
              >
                {checkOutDate ? format(checkOutDate, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={(date) => handleDateChange('checkOut', date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Rooms and People */}
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

      {/* Guest Name */}
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

      {/* Guest Phone */}
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

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gray-200 text-black hover:bg-yellow-300 font-semibold"
      >
        Book Now
      </Button>
    </form>
  );
}
