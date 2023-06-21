import { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link';
import Href from '../table';

type Props = {
    id: number,
    fullname: string,
    email: string,
    telegram_username: string,
    twitter_username: string,
    facebook_username: string,
    type: "courses"
}

const UsersTableRow = ({ fullname, email, telegram_username, twitter_username, facebook_username, id, type }: Props) => {
    const href: Href = {
        pathname: `/dashboard/${type}/[id]/edit`,
        query: { 
            id 
        }
    };

    return (
        <>
            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link 
                        className="w-full block text-start"
                        href={href}
                        as={`${`/dashboard/${type}/${id}/edit`}`}
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
                    <Link href={href} as={`${`/dashboard/${type}/${id}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
                                <span>
                                    {fullname}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${id}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
                                <span>
                                    {email}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${id}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
                                <span>
                                    {telegram_username}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${id}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
                                <span>
                                    {twitter_username}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </td>

            <td className="tables-cell table-cell-id">
                <div className="tables-column-wrapper">
                    <Link href={href} as={`${`/dashboard/${type}/${id}/edit`}`}>
                        <div className="tables-text-column px-4 py-3">
                            <div className="inline-flex items-center space-x-1 font-noto_sans text-gray-900/80 text-[.9rem] rtl:space-x-reverse">
                                <span>
                                    {facebook_username}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </td>
        </>
    )
}

export default UsersTableRow;