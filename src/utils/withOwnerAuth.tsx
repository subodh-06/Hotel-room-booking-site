// src/utils/withOwnerAuth.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const withOwnerAuth = (Component: any) => {
  return function ProtectedOwnerRoute(props: any) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      } else if (user.role !== 'owner') {
        router.push('/unauthorized');
      }
    }, [user]);

    if (!user || user.role !== 'owner') return null;

    return <Component {...props} />;
  };
};

export default withOwnerAuth;
