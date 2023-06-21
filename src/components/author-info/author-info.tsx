import React from 'react';
import Image from 'next/image';
import AuthorImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (2).jpg';
import AuthorProps from '@/interfaces/author';

const AuthorInfo = ({ id, fullname, email, role }: AuthorProps) => {
    return (
        <div className="flex items-center gap-x-2">
            <figure className="w-[2.4rem] h-[2.4rem] rounded-full">
                <Image 
                    src={AuthorImage}
                    alt="author picture"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                />
            </figure>

            <div className="content flex flex-col">
                <h6 className="text-gray-900 text-[.92rem] font-normal capitalize">{fullname}</h6>
                <span className="text-[.88rem] text-gray-700/80 font-light">Author profession</span>
            </div>
        </div>
    )
}

export default AuthorInfo;