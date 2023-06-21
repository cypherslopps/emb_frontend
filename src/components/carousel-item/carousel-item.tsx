import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import CarouselProps from '@/interfaces/carousel';

const CarouselItem = ({ data }: CarouselProps) => {
  const { image, route, title } = data;

  return (
    <motion.blockquote 
      className='absolute top-0 left-0 w-full h-full flex flex-shrink-0 transition-transform overflow-hidden relative'>
      <Link href={`${route}`}>
          <Image 
              src={image} 
              alt='carousel image' 
              loading="lazy"
              className='w-full h-full object-cover'
          />

          <div className="absolute top-50 left-50">
            <h1 className="text-white text-4xl">{title}</h1>
          </div>
      </Link>
    </motion.blockquote>
  )
}

export default CarouselItem