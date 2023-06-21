import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
// import styles from '@/styles/svg-background.module.css';
import { Meta, CoursesCollectionItem, ZPattern, Button, TeamPreviewItem, ValueCollectionItem, ImageBlock, PostPreviewExcerpt, HireTalentSection } from '@/components';
import { coursesFeaturesData, values } from '@/lib/constants/about';
import { teamManagement, teamContent } from '@/lib/constants/teams';
import { missionContent, visionContent } from '@/lib/constants/home';
import GuestLayout from '@/components/layouts/GuestLayout';
import axiosClient from '@/lib/axiosClient';
import PostProps from '@/interfaces/posts';
import Image1 from '../../../public/assets/images/howl-s-moving-castle-anime-4k-y6gs7mikscux645p.jpg';
import Image2 from '../../../public/assets/images/bd4f4f5f0540e5c3b0bd67c8d867e123.webp';
import Image3 from '../../../public/assets/images/d79fdc1715b03726da4b3fa8b05c022c.webp';
import Image4 from '../../../public/assets/images/star-wars-the-force-awakens-7t6s48g4atoa9t44.jpg';
import Image5 from '../../../public/assets/images/wallpaperflare.com_wallpaper (25).jpg';
import Image6 from '../../../public/assets/images/f4fc355ab08c0205dd69b39e179cd8fb.webp';
import Image7 from '../../../public/assets/images/wallpaperflare.com_wallpaper (2).jpg';

const teamSectionVariants = {
  hidden: {
    height: "695px",
  },
  show: {
    height: "auto",
    transition: {
      delay: .12,
      duration: .3,
      when: "beforeChildren",
      staggerChildren: .8
    }
  }
}

function About({ posts }: PostProps[]) {
  const { heading, subHeading } = teamContent;
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Meta 
        title="About - Empowered Blockchain Firm"
        keywords="blockchain development, web3, web development, content creation"
        description="Our vision is to train, mentor and empower two (2) million africans by helping them acquire  the neccessary skills they require to become relevant in the Blockchain/Web3 industry."
      />
    
      <>
        {/* Hero ${resolvedTheme === "light" ? styles.cubeLight : styles.cubeDark} */}
        <section className={`hero py-12 flex justify-center pb-32`}>
          <div className="wrapper w-[95vw] flex flex-col items-center space-y-16">
            <header className="about-hero=content text-center flex flex-col items-center space-y-2">
              <h1 className="text-4xl dark:text-white font-semibold">About us</h1>
              <p className="w-[52%] dark:text-white/80 font-noto_sans leading-[1.7] text-[.97rem] text-gray-800/90">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni praesentium, quisquam quia, fugiat soluta obcaecati est architecto cupiditate dolor possimus adipisci esse! Facere consequatur consectetur.</p>
            </header>

            {/* Images */}
            <div className="images w-[90%] grid grid-cols-5 grid-rows-[1.5rem_repeat(5,3rem)_1.5rem] gap-x-[1rem] gap-y-[1.1rem]">
              <div className="row-[3/6] flex items-center justify-center">
                <figure className="w-full h-full shadow-md shadow-gray-200/60 dark:shadow-black/10 border border-gray-300/70 dark:border-black/10 rounded-[.6rem] overflow-hidden z-20 relative z-20 relative">
                  <div className="w-full h-full bg-gray-300 dark:bg-black/15 animate-pulse -z-[5] absolute top-0 left-0"></div>
                  <Image src={Image1} alt="about-ebmf-member-1" priority className="object-cover w-full h-full z-20" />
                </figure>
              </div>
              <div className="row-[2/4] col-[2/3] flex items-center justify-center">
                <figure className="w-full h-full shadow-md shadow-gray-200/60 dark:shadow-black/10 border border-gray-300/70 dark:border-black/10 rounded-[.6rem] overflow-hidden z-20 relative">
                  <div className="w-full h-full bg-gray-300 dark:bg-black/15 animate-pulse -z-[5] absolute top-0 left-0"></div>
                  <Image src={Image2} alt="about-ebmf-member-2" priority className="object-cover w-full h-full z-20" />
                </figure>
              </div>
              <div className="col-[2/3] row-[4/7] flex items-center justify-center">
                <figure className="w-full h-full shadow-md shadow-gray-200/60 dark:shadow-black/10 border border-gray-300/70 dark:border-black/10 rounded-[.6rem] overflow-hidden z-20 relative">
                  <div className="w-full h-full bg-gray-300 dark:bg-black/15 animate-pulse -z-[5] absolute top-0 left-0"></div>
                  <Image src={Image3} alt="about-ebmf-member-3" priority className="object-cover w-full h-full z-20" />
                </figure>
              </div>
              <div className="col-[3/4] row-span-full flex items-center justify-center">
                <figure className="w-full h-full shadow-md shadow-gray-200/60 dark:shadow-black/10 border border-gray-300/70 dark:border-black/10 rounded-[.6rem] overflow-hidden z-20 relative">
                  <div className="w-full h-full bg-gray-300 dark:bg-black/15 animate-pulse -z-[5] absolute top-0 left-0"></div>
                  <Image src={Image4} alt="about-ebmf-member-4" priority className="object-cover w-full h-full z-20" />
                </figure>
              </div>
              <div className="col-[4/5] row-[2/5] flex items-center justify-center">
                <figure className="w-full h-full shadow-md shadow-gray-200/60 dark:shadow-black/10 border border-gray-300/70 dark:border-black/10 rounded-[.6rem] overflow-hidden z-20 relative">
                  <div className="w-full h-full bg-gray-300 dark:bg-black/15 animate-pulse -z-[5] absolute top-0 left-0"></div>
                  <Image src={Image5} alt="about-ebmf-member-5" priority className="object-cover w-full h-full z-20" />
                </figure>
              </div>
              <div className="col-[4/5] row-[5/7] flex items-center justify-center">
                <figure className="w-full h-full shadow-md shadow-gray-200/60 dark:shadow-black/10 border border-gray-300/70 dark:border-black/10 rounded-[.6rem] overflow-hidden z-20 relative">
                  <div className="w-full h-full bg-gray-300 dark:bg-black/15 animate-pulse -z-[5] absolute top-0 left-0"></div>
                  <Image src={Image6} alt="about-ebmf-member-6" priority className="object-cover w-full h-full z-20" />
                </figure>
              </div>
              <div className="col-[5/-1] row-[3/6] flex items-center justify-center">
                <figure className="w-full h-full shadow-md shadow-gray-200/60 dark:shadow-black/10 border border-gray-300/70 dark:border-black/10 rounded-[.6rem] overflow-hidden z-20 relative">
                  <div className="w-full h-full bg-gray-300 dark:bg-black/15 animate-pulse -z-[5] absolute top-0 left-0"></div>
                  <Image src={Image7} alt="about-ebmf-member-7" priority className="object-cover w-full h-full z-20" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Our values */}
        <section className="values py-32 px-12 space-y-16">
          <header className="space-y-3">
            <h1 className="text-3xl font-bold font-noto_sans text-gray-900 dark:text-white">{values.heading}</h1>
            <p className="w-[50%] leading-[1.7] text-gray-800/90 dark:text-white/90 dark:font-light font-noto_sans">{values.content}</p>
          </header>

          {/* Values */}
          <div className="values-list grid grid-cols-2 gap-x-5 gap-y-10">
            {values.list.map(list => (
              <ValueCollectionItem 
                key={list.heading}
                {...list} 
              />
            ))}
          </div>
        </section>

        {/* Info section */}
        <main className="flex flex-col gap-y-24 bg-gray-100/20 dark:bg-dark-shade-200 relative z-20 mt-[6rem] pt-[4rem] pb-[5rem] p lg:mt-0 lg:py-[8rem] space-y-8">
          {/* Vision */}
          <ZPattern {...visionContent} />

          {/* Mission */}
          <ZPattern {...missionContent} variant='inverse' />
        </main>

        {/* Courses section */}
        <section className="courses bg-gradient-to-r from-blue-500 dark:from-blue-600 to-blue-600 dark:to-blue-700 py-16 px-8 flex flex-col gap-y-16">
          <h1 className="text-white text-3xl leading-[0] font-bold capitalize">Our courses</h1>

          {/* Courses Collection */}
          <div className="courses__collection grid grid-cols-3 gap-x-4 gap-y-5">
            {coursesFeaturesData.map(course => (
              <CoursesCollectionItem 
                key={course.heading}
                {...course}
              />
            ))}
          </div>
        </section> 

        {/* Teams */}
        <section className="py-20 bg-gray-50 dark:bg-inherit">
          <div className="container mx-auto">
            <div className="mb-20 text-center">
              <h2 className="mb-5 text-center text-2xl text-gray-900 dark:text-white font-noto_sans font-bold md:text-4xl capitalize">{heading}</h2>
              <p className="text-gray-600 dark:text-white/80 font-light text-[1.02rem] leading-[1.6] lg:w-7/12 lg:mx-auto">{subHeading}</p>
            </div>

            {/* Management */}
            <div className="grid gap-12 items-center md:grid-cols-3 px-6 md:px-12 xl:px-32">
              {teamManagement.filter((_, index) => index < 3).map((team, index) => (<TeamPreviewItem key={team.name} index={index} team={team} />))}
            </div>

            {/* Team members */}
            <AnimatePresence>
              <motion.div 
                className="team-members mb-14 grid grid-cols-4 gap-x-0.5 gap-y-12 mt-20 px-6 md:px-12 xl:px-30"
                variants={teamSectionVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {teamManagement.filter((_, index) => index >= 3).map((team, index) => (<TeamPreviewItem key={team.name} index={index} team={team} />))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <HireTalentSection />

        {/* Blog */}
        <section className="blog-overview px-12 py-24 space-y-12">
          <header className="space-y-1">
            <h3 className="font-noto_sans text-3.5xl dark:text-white font-semibold">From the blog</h3>
            <p className="text-gray-800/90 dark:text-white/80 font-noto_sans dark:font-light w-[40%] leading-[1.6]">Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Atque, ipsum autem tempore consectetur beatae possimus.</p>
          </header>

          <div className="blog-collection grid grid-cols-3 gap-x-10 px-2">
            {posts.map(post => (
              <PostPreviewExcerpt key={post.id} {...post} />
            ))}
          </div>
        </section>
      </>
    </>
  )
}

export async function getStaticProps() {
  const response = await axiosClient.get('/posts?page=1&limit=3');
  const posts = response.data;

  return {
    props: {
      posts
    }
  }
}

export default About;

About.getLayout = (page) => {
  return (
    <GuestLayout>
      {page}
    </GuestLayout>
  )
}