"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Hotel } from "@/types/types"; // ✅ import your type

export default function HotelDetail() {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState<Hotel | null>(null); // 👈 typed

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE}/api/hotel/${hotelId}`)
      .then((res) => setHotel(res.data.hotel));
  }, [hotelId]);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "/login");

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/booking/create`,
      {
        hotelId,
        checkIn: new Date(), // placeholder
        checkOut: new Date(),
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    window.location.href = "/profile";
  };

  if (!hotel) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold">{hotel.name}</h1>
      <p>{hotel.description}</p>
      <p>Facilities: {hotel.facilities?.join(", ")}</p>
      <Button className="mt-4" onClick={handleBooking}>
        Book Now
      </Button>
    </div>
  );
}
