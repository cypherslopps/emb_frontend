import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tags from '../tags/tags';
import BlogThumbNail from '../../../public/assets/images/wallpaperflare.com_wallpaper (6).jpg';
import PostProps from '@/interfaces/posts';

type Props = {}

const PostExcerpt = ({ id, excerpt, thumbnail, title, slug, created_at }: PostProps) => {
  const router = useRouter();
  
  return (
    <blockquote className="container grid grid-cols-[28%_1fr] gap-x-6 mx-auto dark:bg-gray-800 dark:text-gray-100 overflow-hidden">
      <figure className="thumbnail">
        <Image 
          src={BlogThumbNail}
          alt="post excerpt thumbnail"
          placeholder="blur"
          className="h-full object-cover rounded-tl-lg rounded-bl-lg" 
        />
      </figure>

      <div className="pr-7 py-5">        
        <div className="flex items-center justify-between">
          <span className="text-[.87rem] font-medium font-noto_sans dark:text-gray-400">{created_at || "2 May, 2023"}</span>
        </div>
        <div className="mt-3">
          <Link rel="noopener noreferrer" href="#" className="text-2xl font-semibold font-noto_sans hover:underline">{title}</Link>
          <p className="mt-2 text-gray-800 font-noto_sans w-[90%]">{excerpt}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link rel="noopener noreferrer" href="#" className="hover:underline text-sm text-gray-800 dark:text-primary-400 underline decoration-dashed">Read more</Link>
        </div>
      </div>
    </blockquote>
  )
}
    // <blockquote 
    //   className="cursor-pointer py-2" 
    //   id={`post-${id}`}
    //   onClick={() => router.push({
    //     pathname: "/blog/[slug]",
    //     query: { slug: encodeURIComponent(slug) }
    //   })}
    // >
    //   <div  className="flex flex-col gap-y-3 py-2 rounded-lg px-[.8rem]  transition-colors hover:bg-gray-50/50 duration-75">
    //     <Tags tags={["Tag 1", "Tag 2"]} />

    //     {/* Content */}
    //     <div className='grid grid-cols-post_excerpt_content grid-rows-max-content gap-x-10 mb-4'>
    //         <div className='space-y-3'>
    //             <h1 className='text-2.2xl font-semibold pr-4 leading-[1.35] duration-300 hover:underline hover:cursor-pointer focus:cursor-pointer'>{title}</h1>
    //             <p className="text-[1.015rem] text-gray-800/95 font-light leading-[1.65]">{excerpt}</p>
    //         </div>
          
    //         {/* Post Thumbnail */}
    //         <Image 
    //             src={BlogThumbNail}
    //             alt="post excerpt thumbnail"
    //             loading='lazy'
    //             className="h-full object-cover rounded-[.35rem]"
    //         />
    //     </div>

    //     {/* Author Info */}
    //     <AuthorInfo author={author} />
    //   </div>
    // </blockquote>

export default PostExcerpt