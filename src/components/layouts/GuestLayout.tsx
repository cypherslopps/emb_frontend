import React, { useState, useEffect, ReactNode, Suspense } from 'react';
import useSWR from 'swr';
import { AnimatePresence } from 'framer-motion';
import { Navigation, Footer, Banner } from '@/components';
import axiosClient from '@/lib/axiosClient';
import useAuth from '@/hooks/useAuth';

type Props = {
    children: ReactNode
}

const GuestLayout = ({ children }: Props) => {
  const [isBannerOpen, setBannerIsOpen] = useState<boolean>(true);
  const { user } = useAuth({ middleware: 'auth' });
  console.log(user);


  return (
    <main className={`h-screen grid ${isBannerOpen ? "grid-rows-[repeat(2,max-content)_1fr_max-content]" : "grid-rows-[max-content_1fr_max-content]"}`}>
        {/* Banner */}
        <AnimatePresence>
          {isBannerOpen && (
            <Banner 
              mainContext="Cohort 2.0 available"
              description="Enroll to our cohort coming up June 7 – 9 to see what’s coming next."
              cta={true}
              ctaContent="Register now"
              closeBanner={() => setBannerIsOpen(false)}
            />
          )}
        </AnimatePresence>
        
        {/* Navigation */}
        <Navigation user={user} />

        {/* md:mt-[2.8rem] lg:mt-[3rem] */}
        <section className='font-sans pb-12'>
            {children}
        </section>

        <Footer />
    </main>
  )
}

export default GuestLayout;