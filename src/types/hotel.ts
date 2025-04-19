import { ReactNode } from "react";

export interface Hotel {
  location: ReactNode;
  description: ReactNode;
  images: string[];  // Array of image URLs
  _id: string;
  name: string;
  city: string;
  address: string;
  pricePerDay: number;
  imageUrl: string;

  amenities?: {
    ac: boolean;
    wifi: boolean;
    tv: boolean;
    geyser: boolean;
    powerBackup: boolean;
  };
}
