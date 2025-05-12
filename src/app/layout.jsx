'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { MyThemeProvider, useThemeMode } from '@/context/ThemeContext';
import Sidebar from '@/components/Sidebar';
import AboutMe from '@/components/aboutMe';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <MyThemeProvider>
            <Layout>{children}</Layout>
          </MyThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

function Layout({ children }) {
  const { mode } = useThemeMode();
  const { isLoggedIn, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!isLoggedIn && pathname !== '/login') {
      router.push('/login');
    }
  }, [isLoggedIn, loading, pathname, router]);

  const theme = createTheme({
    palette: {
      mode: mode || 'light',
    },
  });

  const showSidebar = pathname !== '/login';

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        {showSidebar && <Sidebar />}
        {!showSidebar && <AboutMe />}
        <main style={{ flexGrow: 1, padding: 24 }}>
          {children}
        </main>
      </div>
    </MUIThemeProvider>
  );
}
