import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLinksProps from '@/interfaces/dashboard-links';


const AdminSidebarLink = ({ name, route, Icon, subLinks }: DashboardLinksProps) => {
    const [isAccordionCollapsed, setIsAccordionCollapsed] = useState<boolean>(false);
    const pathname = usePathname();
    // const accessRoutes: string[] = ['posts', 'users', 'referrals', 'courses', 'roles', 'permissions'];

    const addActiveClass = (defaultStyle, activeStyle) => {
        const slicedPath = route.split("/")[2];

        if(pathname === route || pathname.includes(slicedPath))
            return activeStyle; 

        return defaultStyle;
    }


    return (
        <>
            <li 
                key={name} 
                className={`px-3 ${(subLinks && isAccordionCollapsed) ? "mb-[.7rem]" : ""}`}
            > 
                <Link 
                    href={`${route}`} 
                    className={`flex items-center font-noto_sans justify-between px-3 py-2.5 rounded-sm transition-colors rounded-md ${addActiveClass("text-gray-800/80 hover:text-gray-900 hover:bg-gray-200/40", "bg-gray-200/70 text-gray-900 font-medium")}`}
                    onClick={() => setIsAccordionCollapsed(props => !props)}
                >
                    <div className="flex items-center gap-3">
                        <Icon className='h-5 w-5 shrink-0 text-inherit' />
                        <span className="flex flex-1 capitalize">{name}</span>
                    </div>

                    {subLinks && (<svg className="h-4 w-4 opacity-75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>)}
                </Link>
            
                {/* Dropdown */}
                <AnimatePresence>
                    {(subLinks && isAccordionCollapsed) && (
                        <motion.ul 
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ type: "spring", duration: '.4', easeIn: "easeInOut" }}
                            className="ml-3.5 pl-3.5 text-sm flex flex-col gap-y-4 mt-[.3rem] border-l border-gray-300/70"
                        >
                            {subLinks.map(({ SubIcon, ...subLink }) => (
                                <li key={subLink.name}>
                                    <Link href={`${subLink.route}`} className={`flex w-max-content items-center text-[.85rem] font-noto_sans gap-3 px-3 rounded-lg transition ${addActiveClass("text-gray-800/80 hover:text-gray-900 hover:bg-gray-200/40", "bg-gray-200/70 text-gray-900 font-medium")}`}>
                                        <SubIcon className='h-5 w-5 shrink-0 fill-gray-700/90' />
                                        <span className="flex flex-1 capitalize">{subLink.name}</span>
                                    </Link>
                                </li>        
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>
        </>
    )
}
    // {/* <AnimatePresence>
    //     {(subLinks && route.includes(path)) && (
    //         <motion.ul 
    //             initial={{ height: 0, opacity: 0 }}
    //             animate={{ height: "100%", opacity: 1 }}
    //             className="pl-10 text-sm space-y-[.35rem] -mx-3 mt-2"
    //         >
    //             {subLinks.map(({ SubIcon, ...subLink }) => (
    //                 <li key={subLink.name}>
    //                     <Link href={`${subLink.route}`} className={`flex w-max-content items-center text-[.85rem] font-light gap-3 px-3 py-2 rounded-lg transition ${pathname === subLink.route ? "text-primary-600 hover:text-primary-700" : "hover:text-primary-700 focus:text-primary-700"}`}>
    //                         <SubIcon className='h-5 w-5 shrink-0 fill-gray-800' />
    //                         <span className="flex flex-1 capitalize">{subLink.name}</span>
    //                     </Link>
    //                 </li>        
    //             ))}
    //         </motion.ul>
    //     )}
    // </AnimatePresence> */}

export default AdminSidebarLink