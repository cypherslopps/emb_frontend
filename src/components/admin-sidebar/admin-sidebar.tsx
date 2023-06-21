import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useAuth from '@/hooks/useAuth';
import { adminDashboardLinks, settings } from '@/lib/constants/dashboard-links';
import AdminSidebarLink from '../admin-sidebar-link/admin-sidebar-link';
import { IUser } from '@/interfaces/user';

type Props = {
    user: IUser | undefined,
    sidebarIsOpen: boolean
}

const AdminSidebar = ({ user, sidebarIsOpen }: Props) => {
    let links: Array<{}> = user?.role === "admin" ? adminDashboardLinks.filter(links => links.name !== "users") : adminDashboardLinks;

    console.log(sidebarIsOpen, "sidebar");

    return (
        <motion.aside 
            className="sidebar -left-[20rem] lg:left-0 w-[20vw] fixed inset-y-0 left-0 rtl:left-auto rtl:right-0 z-20 flex flex-col h-screen overflow-hidden transition-all bg-white dark:bg-dark lg:border-r lg:border-r-gray-300 rtl:lg:border-r-0 rtl:lg:border-l rtl:lg:border-l-gray-200/60 lg:z-0 lg:translate-x-0 translate-x-0"
            animate={sidebarIsOpen ? {x: "-20rem"} : {x: 0}}
        >
            <header className="sidebar__header px-7 py-5 shrink-0 flex items-center relative">
                <Link href="/admin" className='w-full text-xl font-bold tracking-tight'>Logo</Link>
            </header>

            {/* Navigation */}
            <nav className="flex-1 overflow-x-hidden space-y-6 overflow-y-auto sidebar__nav">
                <ul className="text-sm flex flex-col gap-y-[.5rem] ">
                    {links.map(link => (
                        <AdminSidebarLink 
                            key={link.name}
                            {...link}
                        />
                    ))}
                </ul>


                {/* Display settings link if user is admin */}
                <div className="settings border-t border-gray-400/60 pt-4">
                    <ul className='text-sm  space-y-[.55rem] '>
                        <h6 className="text-[.96rem] px-6 mb-3">Settings</h6>
                        {settings.map(link => (
                            <AdminSidebarLink
                                key={link.name}
                                {...link}
                            />
                        ))}
                    </ul>
                </div>
            </nav>
        </motion.aside>
    )
}

export default AdminSidebar