'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import Image from 'next/image';

export default function ListHotelPage() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    address: '',
    pricePerDay: '',
  });

  const [amenities, setAmenities] = useState({
    ac: false,
    wifi: false,
    tv: false,
    geyser: false,
    powerBackup: false,
  });

  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAmenityChange = (key: string) => {
    setAmenities({ ...amenities, [key as keyof typeof amenities]: !amenities[key as keyof typeof amenities] });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'stayeaseurl'); // Your Cloudinary preset

    setUploading(true);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/dsvpsemro/image/upload`, {
        method: 'POST',
        body: form,
      });

      const data = await res.json();
      if (data.secure_url) {
        setImages([...images, data.secure_url]);
        toast.success('Image uploaded!');
      } else {
        toast.error('Upload failed.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Cloudinary error');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
   

      const payload = {
        ...formData,
        pricePerDay: Number(formData.pricePerDay),
        amenities,
        images,
      };

      const res = await fetch('https://stayease-backend-lhmu.onrender.com/api/hotels/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Failed to list hotel');
        return;
      }

      toast.success('Hotel listed successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-zinc-900 shadow-xl rounded-xl p-8 border border-zinc-700">
        <h2 className="text-3xl font-bold text-white text-center mb-6">🛎️ List Your Hotel</h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          {/* Hotel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">🏨 Hotel Name</Label>
              <Input id="name" name="name" className='text-black' value={formData.name} onChange={handleInputChange} required />
            </div>

            <div>
              <Label htmlFor="city">📍 City</Label>
              <Input id="city" className='text-black' name="city" value={formData.city} onChange={handleInputChange} required />
            </div>
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address">📫 Address</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Enter the complete address..."
            />
          </div>

          {/* Price */}
          <div>
            <Label htmlFor="pricePerDay">💸 Price per Day (₹)</Label>
            <Input
              id="pricePerDay"
              name="pricePerDay"
              type="number"
              className='text-black'
              value={formData.pricePerDay}
              onChange={handleInputChange}
              required
              placeholder="E.g. 1500"
            />
          </div>

          {/* Amenities */}
          <div>
            <Label>Amenities 🛠️</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
              {Object.keys(amenities).map((key) => (
                <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox
                    checked={amenities[key as keyof typeof amenities]}
                    onCheckedChange={() => handleAmenityChange(key)}
                  
                  />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <Label>🖼️ Upload Images</Label>
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
            {uploading && <p className="text-sm mt-1 text-yellow-400">Uploading...</p>}

            {images.length > 0 && (
              <div className="flex gap-4 mt-4 flex-wrap">
                {images.map((url, idx) => (
                  <div key={idx} className="relative w-[100px] h-[100px] rounded overflow-hidden border border-zinc-700">
                    <Image src={url} alt={`Image ${idx + 1}`} width={100} height={100} className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full transition hover:scale-[1.02] bg-gray-400"
            disabled={loading || uploading}
          >
            {loading ? 'Submitting...' : '✨ List Hotel'}
          </Button>
        </form>
      </div>
    </div>
  );
}
