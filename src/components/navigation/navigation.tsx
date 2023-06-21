import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import NavigationLink from '../navigation-link/navigation-link';
import Button from '../button/button';
import ThemeButton from '../theme-button/theme-button';
import ProfilePanel from '../profile-panel/profile-panel';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import navigationLinks from '@/lib/constants/navigation-links';
import { IUser } from '@/interfaces/user';

type Props = {
  user: IUser | undefined
}

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 } 
}

const Navigation = ({ user }: Props) => {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    window.addEventListener("scroll", showNavigationOnScroll)

    return () => {
      window.removeEventListener("scroll", showNavigationOnScroll);
    }
  });

  function showNavigationOnScroll(e) {
    if(window.scrollY >= 350)
      setShowNavigation(true);
    else
      setShowNavigation(false);
  }

// border-b dark:border-gray-100/25 border-gray-200
  return (
    <motion.nav 
      className={`navigation w-full z-50 py-5 md:py-3 ${showNavigation ? "fixed top-0 left-0 bg-white/5 dark:bg-black/10 bg-clip-padding backdrop-filter backdrop-blur-xl border-b bg-opacity-60 dark:border-gray-100/10 border-black/5" : ""} px-8 mds:px-12 flex justify-between items-center sm:px-10 lg:px-9`}
      initial={{
        y: showNavigation ? -10 : 0
      }}
      animate={{
        y: showNavigation ?  0 : 0
      }}
      transition={{ delay: .3, duration: .5 }}
    >
      {/* Left */}
      <div className="navigation__links flex items-center md:space-x-6 lg:space-x-10">
        <Link href="/" className="navigation__logo dark:text-white text-gray-900 font-extrabold text-3xl">Logo</Link>
      
        {/* Navigation Links */}
        <ul className='navigation__items hidden space-x-4 smd:flex smd:items-center lg:space-x-6'>
          {navigationLinks.map(link => (<NavigationLink key={link.name} {...link} />))}
        </ul>
      </div>

      {/* Right */}
      <div className={`navigation__actions flex items-center ${user?.roles === "student" ? "gap-x-3 sm:gap-x-3 md:gap-x-4 pr-4" : "gap-x-[.3rem] md:gap-x-[.35rem]"}`}>
        {(user?.roles ?? user) === "student" && (
          <ul className="space-x-4 flex items-center">
            {/* User - Student My courses link  */}
            <NavigationLink
              name="My courses"
              route="/courses/my-courses"
              classname="text-teal-400 font-medium hover:text-teal-500/80 focus:text-teal-500/80"
            />

            <span className="seperator w-[.35rem] h-[.35rem] rounded-full bg-gradient-to-r from-primary-500 to-teal-400" />
          </ul>
        )}

        <motion.div initial={{ y: 0 }} exit={{ opacity: 0, y: -10 }}>
          {/* Theme button */}
          {mounted && <ThemeButton />}
        </motion.div>

        <div className="navigation__a flex flex-1 items-center space-x-5 sm:space-x-2">
          {
            (user?.roles === "student" ?? user) ? (
              <ProfilePanel user={user} redirectRoute="/login" />
            ) : (
              <div className="space-x-2 hidden sm:flex">
                <Button
                  role="link"
                  variant="transparent"
                  onClick={() => router.push('/login')}
                  style={{ padding: ".65rem" }}
                >Login</Button>

                <Button 
                  role="link"
                  variant="fill-primary"
                  onClick={() => router.push('/register')}
                  classname="h-[1rem]"
                >Create an account</Button>
              </div>
            )
          }

          <span className="flex smd:hidden">Ham</span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation