'use client';

import { useState } from 'react';
import { registerUser } from '../../lib/api';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add role: 'guest' when calling API
      const result = await registerUser({ ...form, role: 'guest' });
      alert("Registration successful!");
      window.location.href = "/login"; // Or use router.push("/login")
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className='bg-[#141413] min-h-screen flex items-center justify-center'>
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Your Password</label>
              <input
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-sm font-medium rounded-lg p-2.5 hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
