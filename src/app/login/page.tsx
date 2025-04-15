'use client';

import { useState } from 'react';
import { loginUser } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset previous errors

    const result = await loginUser(form);
    if (result.token) {
      login(result); // Save user data and token to context
      router.push('/profile'); // Redirect to profile page after successful login
    } else {
      setError('Invalid email or password'); // Handle error
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <>
    <Navbar/>
    <div className='bg-[#141413] py-8'>
    <div className="max-w-md mx-auto  p-6  rounded-lg shadow-lg border">
      <h2 className="text-2xl font-bold text-gray-50 text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@example.com"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your Password</label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white text-sm font-medium rounded-lg p-2.5 hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-gray-200 text-sm">
        Don't have an account? 
        <a href="/register" className="text-blue-500 hover:underline">Register here</a>
      </p>
    </div>
    </div>
    <Footer/>
    </>
  );
}
