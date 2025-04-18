"use client";

import React from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';

function HotelBookingForm() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-zinc-800 shadow-md rounded-lg">
       
        <div>
          <label className="block text-sm text-center mb-2 font-medium text-gray-50">Location</label>
          <Input 
            placeholder="Enter city or hotel name" 
            className="text-black w-full"
            
          />
        </div>
      <div className="mt-4 flex justify-center">
        <Button
          className="w-full sm:w-auto py-2 px-6 hover:bg-orange-600"
         
        >
         <Link href="/search"> Search Hotels</Link>
        </Button>
      </div>
    </div>
  )
}

export default HotelBookingForm