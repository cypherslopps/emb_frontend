import { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link';
import Href from '../table';

type Props = {
    title: string,
    id: number,
    slug: string,
    thumbnail?: string | StaticImageData,
    type: "posts"
}

const PostsTableRow = ({ id, title, slug, type }: Props) => {
    const href = {
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
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem]  rtl:space-x-reverse">
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
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
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
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
                                <span>
                                    <svg className="text-teal-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
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
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
                                <span>
                                    https://emb.com/posts/img-2.jpeg
                                </span>
                            </div>
                        </div>
                    </Link>   
                 </div>
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

    export default PostsTableRow