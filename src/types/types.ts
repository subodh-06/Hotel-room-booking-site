// types.ts
export interface Hotel {
  _id: string;
  name: string;
  city: string;
  address: string;
  pricePerNight: number;
  imageUrl: string;
}

  export type Booking = {
    _id: string;
    hotel: {
      name: string;
      location: string;
    };
    checkIn: string;
    checkOut: string;
  };