"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function HotelBookingForm() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [openGuests, setOpenGuests] = useState(false);
  const [openCheckIn, setOpenCheckIn] = useState(false);
  const [openCheckOut, setOpenCheckOut] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-zinc-800 shadow-md rounded-lg">
      <div className="grid grid-cols-4 gap-4 items-center">
        {/* Location Input */}
        <div>
          <label className="block text-sm font-medium text-gray-50">Location</label>
          <Input 
            placeholder="Enter city or hotel name" 
            className="text-black"
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </div>

        {/* Check-in Date */}
        <div>
          <label className="block text-sm font-medium text-gray-50">Check-in Date</label>
          <Popover open={openCheckIn} onOpenChange={setOpenCheckIn}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full text-black">
                {checkIn ? format(checkIn, "PPP") : "Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <Calendar 
                mode="single" 
                selected={checkIn} 
                onSelect={(date) => { setCheckIn(date); setOpenCheckIn(false); }} 
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block text-sm font-medium text-gray-50">Check-out Date</label>
          <Popover open={openCheckOut} onOpenChange={setOpenCheckOut}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full text-black">
                {checkOut ? format(checkOut, "PPP") : "Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <Calendar 
                mode="single" 
                selected={checkOut} 
                onSelect={(date) => { setCheckOut(date); setOpenCheckOut(false); }} 
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests & Rooms Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-50">Guests & Rooms</label>
          <Popover open={openGuests} onOpenChange={setOpenGuests}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full flex justify-between px-4 py-2 border rounded-lg text-black">
                <span>{adults} Adults | {rooms} Room</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] p-4 bg-white shadow-md rounded-lg">
              {/* Rooms Selector */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600">Rooms (Max 8)</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setRooms((r) => Math.max(1, r - 1))}>-</Button>
                  <span>{rooms}</span>
                  <Button variant="outline" size="sm" onClick={() => setRooms((r) => Math.min(8, r + 1))}>+</Button>
                </div>
              </div>

              {/* Adults Selector */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600">Adults (12+ yr)</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setAdults((a) => Math.max(1, a - 1))}>-</Button>
                  <span>{adults}</span>
                  <Button variant="outline" size="sm" onClick={() => setAdults((a) => a + 1)}>+</Button>
                </div>
              </div>

              {/* Done Button */}
              <Button className="w-full bg-orange-500 text-white py-2 hover:bg-orange-600" onClick={() => setOpenGuests(false)}>
                DONE
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Search Button - Centered below the row */}
      <div className="mt-4 flex justify-center">
      <Button>Search Hotels</Button>
      </div>
    </div>
  );
}
