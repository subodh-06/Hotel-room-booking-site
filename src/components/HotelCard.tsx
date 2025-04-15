"use client";
import { useRouter } from "next/navigation";
import { Hotel } from "@/types/types"; // ✅ use the shared type

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const router = useRouter();

  return (
    <div
      className="border p-4 rounded-md bg-white cursor-pointer hover:shadow"
      onClick={() => router.push(`/search/${hotel._id}`)}
    >
      <h2 className="font-bold text-lg">{hotel.name}</h2>
      <p>{hotel.location}</p>
      <p>{hotel.facilities?.join(", ")}</p>
    </div>
  );
}
