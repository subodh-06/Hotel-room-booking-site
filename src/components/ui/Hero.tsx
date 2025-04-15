"use client";
import HotelBookingForm from "../HotelBookingForm";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="bg-[#141413] text-white py-16 flex flex-col justify-center items-center px-4">
      
      {/* Hero Content */}
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Stay 🏨
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing hotels at unbeatable prices. Book now and experience luxury like never before!
        </p>
      </div>

      {/* Booking UI Component */}
      <div className="w-full max-w-5xl">
      <HotelBookingForm
        onSearch={(params) => {
          const query = new URLSearchParams({
            location: params.location,
            checkIn: params.checkIn?.toISOString() || "",
            checkOut: params.checkOut?.toISOString() || "",
            rooms: params.rooms.toString(),
            adults: params.adults.toString(),
            children: params.children.toString(),
          }).toString();

          router.push(`/search?${query}`);
        }}
      />
      </div>
      
    </section>
  );
}
