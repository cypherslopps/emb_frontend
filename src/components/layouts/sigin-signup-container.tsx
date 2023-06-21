import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AuthImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (10).jpg';

type Props = {
  children: ReactNode
} 

const SignInSignUpLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const parsedPathName = pathname.substr(1, pathname.length);

  const authTypeData: object = {
    register: {
      title: "Sign up",
      options: {
        name: "Already have an account?",
        route: {
          name: "Login",
          link: "/login"
        }
      } 
    },
    login: {
      title: "Sign in",
      options: {
        name: "Don't have an account?",
        route: {
          name: "Register",
          link: "/register"
        }
      } 
    }
  };

  return (
    <main className={`h-screen flex ${parsedPathName === "login" ? "justify-end" : ""}`}>
      <aside className={`hidden h-screen fixed top-0 bg-gradient-to-bl from-primary-500 to-primary-800 md:flex md:w-[35%] lg:w-[45%] ${parsedPathName === "register" ? "right-0 flex flex-col items-end text-end": "left-0"}`}>
        <Image 
          src={AuthImage}
          alt="auth"
          blur="blur"
          className="w-full h-full object-cover"
        />
      </aside>

      {/* Form Container */}
      <div className="form-container flex flex-col items-center w-full px-[1rem] py-9 mds:px-[2rem] sm:px-[7rem] sm:gap-y-2s md:w-[65%] md:px-14 md:gap-y-4 lg:w-[55%] lg:px-28">
        <header className="text-center">
          <h3 className="text-[2rem] mb-2 font-medium text-gray-800 dark:text-white md:text-4xl md:mb-2">{authTypeData[parsedPathName].title}</h3>
          <p className='text-sm font-light text-gray-600 dark:text-white/80'>
            {authTypeData[parsedPathName].options.name} 
            <Link href={`${authTypeData[parsedPathName].options.route.link}`} className="inline-block ml-1 underline text-primary-700 dark:text-primary-500">{authTypeData[parsedPathName].options.route.name}</Link>
          </p>
        </header>

        <section className={`w-full px-4 md:px-0 ${parsedPathName === "register" ? "pb-12" : ""}`}>
          {children}
        </section>
      </div>
    </main>
  )
}

export default SignInSignUpLayout;