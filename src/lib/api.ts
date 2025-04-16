import { Hotel } from '@/types/hotel'; // adjust the import path if needed

export async function fetchHotels(city: string): Promise<Hotel[]> {
  const res = await fetch(
    `https://stayease-backend-lhmu.onrender.com/api/hotels/search?city=${city}`
  );
  if (!res.ok) throw new Error('Failed to fetch hotels');
  return res.json();
}
