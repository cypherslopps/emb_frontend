import React from 'react';
import Tags from '../tags/tags';
import AuthorInfo from '../author-info/author-info';

type Props = {}

const PostExceerptSkeleton = ({ props }: Props) => {

  return (
    <blockquote className="cursor-pointer py-2">
      <div  className="flex flex-col gap-y-3 py-2 rounded-lg px-[.8rem] transition-colors hover:bg-gray-50/50 duration-75">
        <Tags tags={["Tag 1", "Tag 2"]} />

        {/* Content */}
        <div className='grid grid-cols-post_excerpt_content grid-rows-max-content gap-x-10 mb-4'>
            <div className='space-y-3'>
                <h1 className='text-2.2xl font-semibold pr-4 leading-[1.35] duration-300 hover:underline hover:cursor-pointer focus:cursor-pointer'>{title}</h1>
                <p className="text-[1.015rem] text-gray-800/95 font-light leading-[1.65]">{excerpt}</p>
            </div>
           
            {/* Post Thumbnail */}
            <Image 
                src={BlogThumbNail}
                alt="post excerpt thumbnail"
                loading='lazy'
                className="h-full object-cover rounded-[.35rem]"
            />
        </div>

        {/* Author Info */}
        <AuthorInfo {...author} />
      </div>
        
    </blockquote>
  )
}

export default PostExceerptSkeleton