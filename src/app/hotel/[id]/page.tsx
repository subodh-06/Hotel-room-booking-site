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

