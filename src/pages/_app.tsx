import React, { useState, useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Loader, AuthGuard } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const getLayout = Component.getLayout || ((page) => page);
  const AuthenticatedRoutes = Component.requireAuth ? (
    <AuthGuard>
      <Component {...pageProps} />
    </AuthGuard>
  ) : <Component {...pageProps} />;
  const PageLayout = getLayout(AuthenticatedRoutes);

  useEffect(() => {
    setIsLoading(true);
  });

  return (
    <>
      {!isLoading ? (
        <Loader 
          loading={!isLoading} 
          speedMultiplier={2}
          size={55}
        />
      ) : (
        <ThemeProvider enableSystem={true} attribute="class">
          {PageLayout}
        </ThemeProvider>
      )}
    </>
  )
}
