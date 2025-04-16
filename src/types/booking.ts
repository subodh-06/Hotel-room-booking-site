export interface BookingFormInput {
    checkIn: string;
    checkOut: string;
    rooms: number;
    people: number;
    guestName: string;
    guestPhone: string;
  }
  
  export interface Booking {
    _id: string;
    hotelName: string;
    guestName: string;
    guestPhone: string;
    checkIn: string;
    checkOut: string;
    rooms: number;
    people: number;
    createdAt: string;
  }
  