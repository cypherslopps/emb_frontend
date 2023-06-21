import React from 'react';
import { useRouter } from 'next/navigation';
import { IoArrowForward } from 'react-icons/io5';
import Button from '../button/button';
import Carousel from '../carousel/carousel';
import { HeroContent } from '@/lib/constants/hero';
import carouselData from '@/lib/constants/carousel';
import NoiseComponent from '../icons/noise';

const Hero = () => {
  const router = useRouter();
  const { heading, subHeading } = HeroContent;

  return (
    <section className="hero flex justify-center md:mt-[2.8rem] lg:mt-[3rem]">
      <div className="wrapper flex flex-col items-center gap-y-28 lg:grid-cols-7 lg:grid lg:grid-rows-max-content lg:items-start lg:gap-x-6 lg:w-[93%] xlg:gap-x-12 xlg:w-11/12">
        {/* Content */}
        <div className="content w-[85%] flex flex-col order-2 lg:w-full lg:col-span-3 lg:pt-9 xlg:pt-7 lg:order-1">
          <h1 className='text-gray-900 text-[3.1rem] dark:text-white font-consolas leading-[1.1] font-extrabold lg:text-[3.3rem] xlg:text-6.5xl'>{heading}</h1>
          <p className="text-[1.05rem] text-center leading-[1.7] px-8 mt-[1.3rem] mb-[3.5rem] text-dark-text-shade-400 dark:text-white/90 font-light lg:pr-[.5rem] lg:text-[.96rem] lg:mt-[1.8rem] lg:pl-0 lg:mb-[4.2rem] lg:leading-[1.85] xlg:pr-0 xlg:text-base xlg:mt-7 xlg:mb-14 xlg:leading-[1.8] xlg:text-justify">{subHeading}</p>

          {/* CTA */}
          <div className="action w-[37%]">
            <Button
              role="link"
              onClick={() => router.push('/courses')} 
              classname="bg-primary-800 text-white rounded-md py-3 w-full"         
            >
              Hire a talent
              <IoArrowForward className="text-xl ml-2" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="h-[75vh] pt-4 md:w-[93%] order-1 lg:w-full lg:col-span-4 lg:order-2">
          <Carousel items={carouselData} />
        </div>
      </div>
    </section>
  )
}

export default Hero;