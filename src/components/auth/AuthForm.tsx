'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';


export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default to user
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = isRegister
      ? 'https://stayease-backend-lhmu.onrender.com/api/auth/register'
      : 'https://stayease-backend-lhmu.onrender.com/api/auth/login';

    const payload = isRegister
      ? {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }
      : {
          email: formData.email,
          password: formData.password,
        };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Something went wrong');
        return;
      }

      toast.success(isRegister ? 'Registered successfully' : 'Login successful');

      // Save token in cookies for middleware access
      Cookies.set('token', data.token, { expires: 7 });

      // Redirect based on role if needed
      if (!isRegister) {
        const decoded = JSON.parse(atob(data.token.split('.')[1]));
        if (decoded.role === 'owner') {
          router.push('/owner/dashboard');
        } else {
          router.push('/');
        }
      } else {
        router.push('/');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#141413] border border-gray-700 p-6 rounded-lg max-w-md mx-auto shadow-md">
      <h2 className="text-2xl text-center text-gray-50 font-bold mb-4">
        {isRegister ? 'Create Account' : 'Login'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegister && (
          <>
            <div>
              <Label htmlFor="name" className="text-gray-200">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="role" className="text-gray-200">
                Register as
              </Label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 text-gray-100 p-2 rounded"
              >
                <option value="user">User</option>
                <option value="owner">Owner</option>
              </select>
            </div>
          </>
        )}

        <div>
          <Label htmlFor="email" className="text-gray-200">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className='text-black'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-gray-200">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className='text-black'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Please wait...' : isRegister ? 'Register' : 'Login'}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-400 mt-4">
        {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          onClick={() => setIsRegister(!isRegister)}
          className="text-blue-400 hover:underline ml-1"
        >
          {isRegister ? 'Login here' : 'Register here'}
        </button>
      </p>
    </div>
  );
}
