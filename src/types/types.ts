// types.ts
export type Hotel = {
    _id: string;
    name: string;
    location: string;
    description?: string; // ✅ Add this line
    facilities?: string[];
    // Add other fields as needed (like images, rooms, etc.)
  };
  export type Booking = {
    _id: string;
    hotel: {
      name: string;
      location: string;
    };
    checkIn: string;
    checkOut: string;
  };