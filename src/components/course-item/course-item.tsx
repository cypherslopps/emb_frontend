
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { CoursesProps } from '@/interfaces/courses';
import { Button } from '@/components';

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: (index: number) => ({
    y: 10,
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: index * 0.2,
    }
  })
}

const CourseItem = ({ courseData, category, index }: { courseData: CoursesProps, category: string, index: number }) => {
  const router = useRouter();
  const { id, course, thumbnail, slug } = courseData;

  return (
    <motion.blockquote 
      variants={itemVariants}
      custom={index}
      className="feature-row pb-0.5 grid hover:cursor-pointer focus:cursor-pointer">
      <figure className="h-[30vh] rounded-tr-[.5rem] rounded-tl-[.5rem] border border-gray-300/60">
        <Image
          src={thumbnail}
          alt={`${course}-${id} image`}
          loading="lazy"
          className='h-full rounded-tr-[.5rem] rounded-tl-[.5rem] object-cover'
        />
      </figure>

      <div className="body flex flex-col justify-start gap-y-1 px-1 pt-3">
        <h3 className="text-[1.02rem] leading-[1.4] font-noto_sans font-semibold text-gray-900 dark:text-white">{course}</h3>
        <div className="text-gray-700/90 dark:text-white/80 text-[.88rem] font-noto_sans font-light flex items-center space-x-3">
          <span>Empowered Blockchain Firm</span>
          <span>º</span>
          <span>Jun 15, 2023</span>
        </div>
        <Button
          role="link"
          variant="fill-primary"
          classname='rounded-md py-[.65rem] mt-4'
          onClick={() => router.push({
            pathname: `/courses/category/[category]/[course_slug]`,
            query: {
              category,
              course_slug: slug
            }
          })}
        >View course</Button>
      </div>
    </motion.blockquote>
  )
}

export default CourseItem;

// {/* <figure className='image'>
//         <Image 
//           src={thumbnail} 
//           alt={`${course}-${id} image`}
//           loading="lazy"
//           className="h-[17vh] object-cover
//         />
//       </figure>

//       {/* Content */}
//       <div className="content px-0.5">
//         <h5 className="text-[.91rem] font-medium">{course}</h5>
//         <p>content</p>
//       </div> */}