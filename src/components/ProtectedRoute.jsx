'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (!authStatus) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
