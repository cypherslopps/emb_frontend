import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tooltip from '../tooltip/tooltip';
import tooltipData from '@/lib/constants/tooltip';
import { footerLinks } from '@/lib/constants/footer';
import FooterLinkSection from '../footer-link-section/footer-link-section';

type Props = {};

const Footer = (props: Props) => {
  const { asPath } = useRouter();
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={`footer flex flex-col gap-y-4 bg-black border-t border-gray-50/5 ${asPath === "/" ? "pt-24" : "pt-14"} px-8 lg:px-12 xlg:px-20`}>
      <section className='content grid grid-cols-footer items-start gap-x-[4rem] lg:gap-x-[3.6rem] xlg:gap-x-32'>
        <div className="description">
          <Link href="/" className="font-extrabold text-white text-4xl mb-6 inline-block">Logo</Link>
          <p className="leading-[1.6] text-white/90 font-light text-[.93rem] lg:text-[.88rem] xlg:text-[.95rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt et aperiam at a ex cum dicta ad reprehenderit temporibus non recusandae</p>

          {/* Social Icons */}
          <ul className="socials mt-10 flex md:gap-x-4 lg:space-x-4">
            {tooltipData.map(({ icon, content }) => (
              <Tooltip 
                key={content}
                icon={icon}
                content={content}
              />
            ))}
          </ul>
        </div>
        <nav className="navigation__links grid grid-cols-footer-navigation lg:gap-x-[3.4rem] xlg:gap-x-24">
          {footerLinks.map(({ heading, links }) => (
            <FooterLinkSection 
              key={heading}
              heading={heading}
              links={links}
            />
          ))}
        </nav>
      </section>
      <footer className="bottom font-light md:text-[.84rem] lg:text-[.85rem] text-white/90 mt-8 mb-2 border-t border-gray-50/5 py-4">@ Copyright {currentYear} by Empowered Blockchain Firm. All rights reserved</footer>
    </footer>
  )
}

export default Footer