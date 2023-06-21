import React from 'react';
import Link from 'next/link';
import { FooterLinkDataProps, FooterLinksProps } from '@/lib/constants/footer';

const FooterLinkSection = ({ heading, links }: FooterLinkDataProps) => {
  return (
    <div className="space-y-5">
        <h4 className="capitalize text-white text-[.98rem]">{heading}</h4>

        {/* Links */}
        <ul className="flex flex-col gap-y-3">
            {links.map(({ title, route }: FooterLinksProps) => (
                <li key={title}>
                    <Link href={`${route}`} className='font-light text-[.87rem] text-white/90'>{title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterLinkSection