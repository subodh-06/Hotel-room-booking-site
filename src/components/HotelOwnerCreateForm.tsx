'use client';

import { useState } from 'react';
import HotelImageUploader from './HotelImageUploader';

const HotelOwnerCreateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    description: '',
  });

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      images: imageUrls,
    };

    const res = await fetch('http://localhost:5000/api/hotels/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add Authorization header if needed
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log(data); // show success message or redirect
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Create a New Hotel</h2>

      <input name="name" placeholder="Hotel Name" className="input" value={formData.name} onChange={handleChange} required />
      <input name="location" placeholder="Location" className="input" value={formData.location} onChange={handleChange} required />
      <input name="price" placeholder="Price per Night" type="number" className="input" value={formData.price} onChange={handleChange} required />
      <textarea name="description" placeholder="Hotel Description" className="input" value={formData.description} onChange={handleChange} required />

      <HotelImageUploader onUploadComplete={(urls) => setImageUrls(urls)} />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Create Hotel
      </button>
    </form>
  );
};

export default HotelOwnerCreateForm;
