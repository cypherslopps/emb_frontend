import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BiChevronDown } from 'react-icons/bi';
import Dropdown from '../dropdown/dropdown'

type PageProps = {
  name: String,
  route: String,
  subLinks?: Array<string>,
  classname: string
}

const NavigationLink = ({ name, route, subLinks, classname }: PageProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const path = usePathname();
  let activeLinkClass = "";

  if(path.includes("my-courses")) 
    activeLinkClass = "border-b-4 border-primary-400";
  else
    activeLinkClass = "text-primary-800 dark:text-primary-500";
  
  return (
    <li className='relative leading-none'>
      <Link 
        href={`${route}`} 
        className={`text-[.83rem] ${path === route ? activeLinkClass : "text-gray-800/90 dark:text-inherit"} hover:text-primary-700 hover:dark:text-primary-400 capitalize ${subLinks ? 'flex items-center gap-x-1' : ''} lg:text-[.86rem] xlg:text-[.87rem] ${classname}`}
        onClick={() => setIsDropDownOpen(prop => !prop)}
      >
        {name}{' '}
        {subLinks && <BiChevronDown />}
      </Link>

      {/* @ts-ignore */}
      {(isDropDownOpen && subLinks) && (
        <Dropdown 
          content={subLinks} 
          isDropDownOpen={isDropDownOpen} 
          closeDropdown={() => setIsDropDownOpen(false)} />
        )}
    </li>
  )
}

export default NavigationLink