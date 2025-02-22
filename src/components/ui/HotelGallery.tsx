import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  {
    id: "Mumbai",
    title: "Luxury Stays in Mumbai",
    description:
      "Experience the vibrant city life with luxurious hotel rooms offering stunning views, top-class amenities, and easy access to iconic landmarks.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Mumbai_1-1581426168.jpg",
  },
  {
    id: "Hyderabad",
    title: "Stay in the Heart of Hyderabad",
    description:
      "Book a comfortable stay in the City of Pearls, surrounded by historic monuments, rich culture, and delicious Hyderabadi cuisine.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Hyderabad-1581426329.jpg",
  },
  {
    id: "Mysore",
    title: "Royal Retreats in Mysore",
    description:
      "Stay in Mysore and immerse yourself in the royal charm of palaces, beautiful gardens, and serene landscapes.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Mysore-1581427823.jpg",
  },
  {
    id: "Munnar",
    title: "Scenic Resorts in Munnar",
    description:
      "Relax in the lush green hills of Munnar with breathtaking views, cozy resorts, and a refreshing climate.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Munnar-1581456447.jpg",
  },
  {
    id: "Udaipur",
    title: "Romantic Getaways in Udaipur",
    description:
      "Explore the City of Lakes with luxurious stays offering royal hospitality, serene boat rides, and breathtaking sunset views.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Udaipur_1-1581427188.jpg",
  },
  {
    id: "Bengaluru",
    title: "Business & Leisure Stays in Bengaluru",
    description:
      "Find the perfect balance of work and leisure with modern hotels in the Silicon Valley of India, featuring premium services and connectivity.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Bengaluru_1-1581426843.jpg",
  },
  {
    id: "Ooty",
    title: "Tranquil Stays in Ooty",
    description:
      "Escape to the Queen of Hill Stations and enjoy cozy stays surrounded by misty mountains and lush green tea gardens.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Ooty-1581430518.jpg",
  },
  {
    id: "Manali",
    title: "Adventure & Serenity in Manali",
    description:
      "Experience the thrill of adventure sports or unwind in the peaceful valleys of Manali with cozy mountain stays.",
    image:
      "https://cdn1.goibibo.com/voy_ing/t_g/New_dWeb_Homepage_Manali-1581428152.jpg",
  },
  {
    id: "Nature",
    title: "Stay Amidst Nature",
    description:
      "Find your perfect escape into nature with eco-friendly resorts, jungle retreats, and serene landscapes away from the city noise.",
    image:
      "https://hblimg.mmtcdn.com//content/hubble/img/sasan/mmt/destination/m_destination_sasan_gir_l_400_640.jpg?im=Resize=(400,462)",
  },
];

const HotelGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Discover Your Stay</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((hotel, index) => (
          <Card
            key={hotel.id}
            className={`overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition ${
              index % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1"
            }`}
          >
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src={hotel.image}
                alt={hotel.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{hotel.title}</h3>
              <p className="text-sm text-gray-600">{hotel.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HotelGrid;
