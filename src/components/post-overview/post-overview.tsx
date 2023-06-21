import React from 'react';
import Image, { StaticImageData } from 'next/image'
import Tags from '../tags/tags';
import AuthorInfo from '../author-info/author-info';
import PostImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (39).jpg';
import PostProps from '@/interfaces/posts';
import parser from 'html-react-parser';


const PostOverview = ({ id, thumbnail, title, date, stat, content, author }: PostProps) => {
  return (
    <div className="post-overview" id={`post-${id}`}>
        {/* Thumbnail */}
        <figure className="h-80 rounded-sm overflow-hidden">
            <Image 
                src={PostImage}
                alt="blog thumbnail"
                loading='lazy'
                className="w-full h-full object-cover"
            />
        </figure>

        <header className='mt-7 flex flex-col gap-y-2'>
            {/* Tags */}
            <Tags tags={["web development", "reactjs"]} />
            
            {/* Post Title */}
            <h1 className="text-3.5xl leading-[1.2] text-black mt-1 mb-2 dark:text-white">{title}</h1>

            {/* Info */}
            <div className="info flex items-end justify-between">
                {/* Post Author */}
                <AuthorInfo {...author} />
                 
                <p className="flex items-center space-x-2 text-[.9rem] font-light">
                    <span className='text-gray-700/80'>{date ?? "Mar 14, 2022"}</span>
                    <span className="text-primary-600">•</span>
                    <span className="text-primary-600">{stat ?? "1 min read"}</span>
                </p>
            </div>
        </header>

        {/* Post content */}
        <section className="ProseMirror mt-14 text-[.96rem] text-gray-700 space-y-6 leading-[1.9] font-light dark:text-white/90">
            {parser(content)}
        </section>
    </div>
  )
}

export default PostOverview