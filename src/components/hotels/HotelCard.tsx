import { Hotel } from '@/types/hotel';
import Image from 'next/image';
import Link from 'next/link';

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
      <Image src={hotel.imageUrl} alt={hotel.name} height={100} width={100} className="w-full h-48 object-cover" />
      <div className="p-4 text-gray-100">
        <h2 className="text-lg font-semibold text-gray-50">{hotel.name}</h2>
        <p className="text-gray-200">City: {hotel.city}</p>
        <p className="text-gray-300">Price: ₹{hotel.pricePerNight} / night</p>
        <Link
          href={`/hotel/${hotel._id}`}
          className="block mt-4 text-center bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
