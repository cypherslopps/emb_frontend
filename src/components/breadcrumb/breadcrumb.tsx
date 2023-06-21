import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiRightArrow } from 'react-icons/bi';

type Props = {
    name: string,
    link?: object | string,
    active: boolean
}

const BreadCrumb = ({ tabs }: Props[]) => {
    console.log(usePathname());
  return (
    <ul className="hidden gap-2 font-medium text-sm lg:flex lg:items-center">
        {tabs.map(({ name, active }, index) => (
            <li key={name} className="flex items-center gap-2">
                <span className={`font-light text-[.9rem] capitalize font-medium ${active ? "text-primary-700" : "text-gray-500/80"}`}>
                    {active ? (
                        <Link 
                            href="/link"
                            className="text-inherit text-[.9rem]">
                           {name}
                        </Link>
                    ): (
                        <>{name}</>
                    )}
                </span>
                {Math.max(index) ? null : (
                    <span>
                        <BiRightArrow className="text-gray-500/90 text-[.76rem]" />
                    </span>
                )}
            </li>
        ))}
    </ul>
  )
}

export default BreadCrumb;