// src/app/hotel/[id]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import BookingForm from '@/components/hotels/BookingForm';
import { Hotel } from '@/types/hotel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Wifi, Tv, Snowflake, ShowerHead, BatteryCharging } from 'lucide-react';



async function getHotel(id: string): Promise<Hotel | null> {
  try {
    const res = await fetch(`https://stayease-backend-lhmu.onrender.com/api/hotels/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function HotelDetail(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params; // ✅ Await it
  const hotel = await getHotel(id);

  if (!hotel) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#141413] text-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <Card className="bg-[#1e1e1c] border border-gray-700 text-gray-100 shadow-lg rounded-2xl overflow-hidden">
            <Image
              src={hotel.images[0]}
              alt={hotel.name}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-3xl">{hotel.name}</CardTitle>
              <CardDescription className="text-gray-400">{hotel.city}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm md:text-base">
  <p><span className="font-semibold text-gray-400">Address:</span> {hotel.address}</p>
  <p><span className="font-semibold text-gray-400">Rent:</span> ₹{hotel.pricePerDay} / night</p>

  {hotel.amenities && (
    <div className="mt-4">
     
      <ul className="list-disc list-inside space-y-1 ml-4">
      {hotel.amenities && (
  <div className="mt-4">
    <p className="font-semibold text-gray-400 mb-2">Amenities:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {hotel.amenities.ac && (
        <div className="flex items-center space-x-2">
          <Snowflake className="w-5 h-5 text-blue-400" />
          <span>Air Conditioning</span>
        </div>
      )}
      {hotel.amenities.wifi && (
        <div className="flex items-center space-x-2">
          <Wifi className="w-5 h-5 text-green-400" />
          <span>WiFi</span>
        </div>
      )}
      {hotel.amenities.tv && (
        <div className="flex items-center space-x-2">
          <Tv className="w-5 h-5 text-yellow-400" />
          <span>Television</span>
        </div>
      )}
      {hotel.amenities.geyser && (
        <div className="flex items-center space-x-2">
          <ShowerHead className="w-5 h-5 text-blue-300" />
          <span>Geyser</span>
        </div>
      )}
      {hotel.amenities.powerBackup && (
        <div className="flex items-center space-x-2">
          <BatteryCharging className="w-5 h-5 text-purple-400" />
          <span>Power Backup</span>
        </div>
      )}
    </div>
  </div>
)}

      </ul>
    </div>
  )}
</CardContent>

          </Card>

          <Card className="bg-[#1e1e1c] border border-gray-700 text-gray-100 shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Book this hotel</CardTitle>
              <CardDescription className="text-gray-400">Fill the form to reserve your stay</CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm hotelId={id} />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

