import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AuthorInfo from '../author-info/author-info';
import PostProps from '@/interfaces/posts';
import PostPreviewImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (8).jpg'

const PostPreviewExcerpt = ({ id, title, slug, thumbnail, excerpt, createdAt, author }: PostProps) => {
	const router = useRouter();
	console.log(author, "author")

	return (
		<article
			className="h-[26rem] border border-gray-300 dark:border-black/10 rounded-[1rem] relative overflow-hidden flex flex-col gap-y-3 hover:cursor-pointer focus:cursor-pointer" 
			onClick={() => router.push({
				pathname: "/blog/[slug]",
	        	query: { slug: encodeURIComponent(slug) }
			})}
		>
			{/* Image */}
			<Image 
				src={PostPreviewImage} 
				alt={`post-${title}-thumbnail`}
				className="w-full h-full object-cover"  
				priority
			/>

			{/* Content */}
			<div className="w-full pt-3 pb-[2rem] px-7 bg-gradient-to-t from-black/80 to-transparent content absolute bottom-0 left-[50%] space-y-[.5rem]" style={{ transform: "translate(-50%, 0)" }}>
				<header className="head flex items-center space-x-6">
					<span className="date font-light text-[.81rem] font-noto_sans text-gray-200/90">March 3, 2023</span>
					<AuthorInfo 
					author={author} 
					variant="light" 
					size="small"  
				/>
				</header>

				<h5 className="text-white font-medium font-noto_sans">{title}</h5>
			</div>
		</article>
	)
}

export default PostPreviewExcerpt;