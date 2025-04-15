'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProtectedOwnerRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!user || user.role !== 'owner') {
      router.push('/owner/login'); // Redirect to owner login if not authenticated or not owner
    }
  }, [user, router]);

  // Prevent hydration error on initial load
  if (!isClient || !user || user.role !== 'owner') {
    return null;
  }

  return <>{children}</>;
}
