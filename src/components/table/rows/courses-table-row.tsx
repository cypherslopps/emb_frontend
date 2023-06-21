import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link';
import Href from '../table';
import Thumbnail from '../../../../public/assets/images/wallpaperflare.com_wallpaper (8).jpg'

type Props = {
    id: number,
    title: string,
    slug: string,
    category: string | string[],
    description: string,
    thumbnail?: string | StaticImageData,
    type: "courses"

}

const CoursesTableRow = ({ id, title, slug, category, description, thumbnail, type }: Props) => {
    const href: Href = {
        pathname: `/dashboard/${type}/[slug]/edit`,
        query: { 
            slug 
        }
    };

    return (
        <>
            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link 
                        className="w-full block text-start"
                        href={href}
                        as={`${`/dashboard/${type}/${slug}/edit`}`}
                    >
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-[.88rem] text-gray-900/80 rtl:space-x-reverse">
                                <span>
                                    {id}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${slug}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 text-[.9rem] font-noto_sans text-gray-900/80 rtl:space-x-reverse">
                                <span>
                                    {title}
                                </span>
                            </div>
                        </div>
                    </Link>    
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${slug}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 text-[.9rem] font-noto_sans text-gray-900/80 rtl:space-x-reverse">
                                <span>
                                    {slug}
                                </span>
                            </div>
                        </div>
                    </Link>    
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${slug}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 text-[.9rem] font-noto_sans text-gray-900/80 text rtl:space-x-reverse">
                                <span>
                                    {category}
                                </span>
                            </div>
                        </div>
                    </Link>    
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${slug}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 text-[.9rem] text-gray-600/80 text-gray-600/80 rtl:space-x-reverse">
                                <span className="capitalize">
                                    {description ?? "Description"}
                                </span>
                            </div>
                        </div>
                    </Link>    
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <figure className="tables-column-wrapper flex justify-center">
                    <Link href={href} as={`${`/dashboard/${type}/${slug}/edit`}`}>
                        {/*<Image 
                            src={`${process.env.NEXT_PUBLIC_BACKEND_API}/${thumbnail}`}
                            alt={`${title} thumbnail`}
                            width={40}
                            height={40}
                            className="rounded-30"
                        />*/}
                        <Image 
                            src={Thumbnail}
                            alt={`${title} thumbnail`}
                            width={53}
                            height={45}
                            className="rounded-30 w-[80%] object-fit"
                        />
                    </Link>    
                </figure>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link 
                        className="w-full block text-start"
                        href={href}
                        as={`${`/dashboard/${type}/${slug}/edit`}`}
                    >
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 text-[.88rem] font-noto_sans rtl:space-x-reverse justify-center gap-0.5 outline-none hover:underline focus:underline text-sm text-primary-600 hover:text-primary-500 tables-link-action">
                                <svg className="link-icon w-4 h-4 mr-1 rtl:ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                </svg>        
                                    Edit
                            </div>
                        </div>
                    </Link>
                </div>
            </td>
        </>
    )
}

export default CoursesTableRow