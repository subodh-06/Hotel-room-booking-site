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
    guestName: string;
    guestPhone: string;
    checkIn: string;
    checkOut: string;
    rooms: number;
    people: number;
    createdAt: string;
    hotel: {
      name: string;
      city: string;
      address: string;
      pricePerDay: number;
      images: string[];
      amenities: {
        ac: boolean;
        wifi: boolean;
        tv: boolean;
        geyser: boolean;
        powerBackup: boolean;
      };
    };
  }
  
  