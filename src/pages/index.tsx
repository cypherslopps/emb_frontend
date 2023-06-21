import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { Heading, Hero, ZPattern, NewsLetter, Features } from '@/components';
import { missionContent, visionContent } from '@/lib/constants/home';
// import { coursesData } from '@/lib/constants/courses';
import GuestLayout from '@/components/layouts/GuestLayout';
 
// const inter = Inter({ subsets: ['latin'] })


function Home() {
  return (
    <>
      <Head>
        <title>Empowered Blockchain Firm</title>
        <meta name="description" content="Empowered blockchain firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {/* Hero */}
        <Hero />

        {/* Features */}
        <Features />
        
        {/* Info section */}
        <main className="flex flex-col gap-y-24 bg-gray-100/20 dark:bg-dark-shade-200 relative z-20 mt-[6rem] pt-[4rem] pb-[5rem] p lg:mt-none lg:py-[8rem]">
          {/* Vision */}
          <ZPattern {...visionContent} />

          {/* Mission */}
          <ZPattern {...missionContent} variant='inverse' />
        </main>

        {/* CTA - Hire a talent */}
        <section className="hire_a_talent" id="hire-a-talent">
          Hire a talent
        </section>

        {/* Courses section */}
        {/* <section className="courses bg-gradient-to-r from-blue-500 dark:from-blue-600 to-blue-600 dark:to-blue-700 py-20 px-8 flex flex-col gap-y-14">
          <h1 className="text-white text-2xl font-bold capitalize">Courses Category</h1>

          {/* Courses Collection
          <div className="courses__collection grid grid-cols-3 gap-x-4 gap-y-5">
            {coursesData.map(course => (
              <CoursesCollectionItem 
                key={course.heading}
                {...course}
              />
            ))}
          </div>
        </section> */}
        
        {/* News letter */}
        <NewsLetter />
      </>
    </>
  )
}

export default Home;

Home.getLayout = (page) => {
  return (
    <GuestLayout>
      {page}
    </GuestLayout>
  )
}