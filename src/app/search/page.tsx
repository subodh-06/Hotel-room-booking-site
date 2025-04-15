"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import HotelBookingForm from "@/components/HotelBookingForm";
import HotelCard from "@/components/HotelCard";
import { Hotel } from "@/types/types"; // ✅ import the type
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";


export default function SearchPage() {
  const searchParams = useSearchParams();
  const [hotels, setHotels] = useState<Hotel[]>([]); // ✅ explicitly typed array

  useEffect(() => {
    const fetchHotels = async () => {
      const params = Object.fromEntries(searchParams.entries());
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/hotel/search`, { params });
      setHotels(res.data.hotels);
    };
    fetchHotels();
  }, [searchParams]);

  return (
    <>
    <Navbar/>
    <div className="bg-[#141413]">
    <div className="p-4">
      <HotelBookingForm />
      <div className="grid h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
