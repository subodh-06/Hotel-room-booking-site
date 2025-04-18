'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function OwnerEntryPage() {

  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      const token = Cookies.get('token');

      if (!token) {
        setChecking(false);
        return;
      }

      try {
        const res = await fetch('https://stayease-backend-lhmu.onrender.com/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error();

        if (data.user?.role === 'owner') {
          router.push('/owner/dashboard');
        } else {
          setIsOwner(false);
        }
      } catch (error) {
        console.log('User not authenticated as owner.', error);
      } finally {
        setChecking(false);
      }
    };

    checkUserRole();
  }, [router]);

  const handleOwnerLoginRedirect = () => {
    Cookies.remove('token');
    router.push('/auth');
  };

  console.log(isOwner)



  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#141413] text-white">
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <div className="w-6 h-6 border-4 border-t-transparent border-teal-400 rounded-full animate-spin"></div>
          <p className="text-gray-300">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#141413] px-4 text-white">
      <div className="bg-[#1f1f1f] p-8 rounded-lg text-center border border-gray-700 max-w-md w-full shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to StayEase Owner Panel</h1>
        <p className="mb-6 text-gray-400">Please sign in as a hotel owner to access your dashboard.</p>
        <button
          onClick={handleOwnerLoginRedirect}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded transition w-full font-medium"
        >
          Sign in as Owner
        </button>


      </div>
    </div>
  );
}
