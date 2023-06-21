import React from 'react';
import Image from 'next/image';
import Tags from '../tags/tags';
import AuthorInfo from '../author-info/author-info';
import BlogThumbNail from '../../../public/assets/images/wallpaperflare.com_wallpaper (6).jpg';


type Props = {};

const PostPreviewItem = (props: Props) => {
    return (
        <figure className="grid grid-cols-2 gap-x-3">
            <Image 
                src={BlogThumbNail}
                alt="post overview thumbnail"
                loading="lazy"
                className="h-full object-cover rounded-[.25rem]"
            />

            <div className="content">
                <Tags tags={["Food", "Cryptocurrency"]} />
                <h6 className="capitalize text-[1.08rem] leading-[1.4] mt-[.5rem] mb-[1.2rem] font-bold text-gray-900">The 3 best practices in sales prospection</h6>

                <AuthorInfo />
            </div>
        </figure>
    );
}

export default PostPreviewItem;