import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationLinksProps from '@/interfaces/navigation-links';

type Props = {
    content: NavigationLinksProps,
    isDropDownOpen: boolean,
    closeDropdown: () => boolean
}

const dropdownVariant = {
    hidden: {
        opacity: 0,
        top: "10rem"
    },
    visible: {
        opacity: 1,
        top: "9rem",
        transition: {
            type: 'spring',
            stiffness: 120,
            ease: "easeInOut", 
            delay: 1, 
            duration: .3
        }
    }
}

const Dropdown = ({ content, isDropDownOpen, closeDropdown }: Props) => {
    const { asPath } = useRouter();
    let data;

    return (
        <AnimatePresence>          
            <motion.div 
                className="w-[33rem] bg-teal-300 absolute left-[16.6rem] bg-white grid grid-cols-2 gap-x-4 gap-y-3 rounded-[.2rem] px-[1.5rem] py-4 shadow-sm z-[100] border border-gray-200/70" 
                style={{ transform: "translate(-50%, -50%)" }}
                variants={dropdownVariant}
                initial="hidden"
                animate="visible"
                exit={!isDropDownOpen ? "hidden" : ""}
            >
                {content.map(({ name, route, slug }) => (
                    <div className="flex items-center gap-x-3">
                        <span className="w-[2rem] h-[2rem] rounded-full bg-gradient-to-tr from-rose-600 to-teal-400"></span>
                        <Link 
                            href={{
                                pathname: '/courses/category/[category]',
                                query: {
                                    category: encodeURIComponent(slug)
                                }
                            }} 
                            onClick={closeDropdown}
                            key={name} 
                            className="font-noto_sans text-inherit dark:text-gray-900 hover:text-primary-500 dark:hover:text-primary-400 focus:text-primary-500 dark:focus:text-primary-400 text-[.93rem] capitalize"
                        >
                            {name}
                        </Link>
                    </div>
                ))}
            </motion.div>
        </AnimatePresence>
    )
}

export default Dropdown;