import React from 'react'
import BreadCrumb from '../breadcrumb/breadcrumb'
import ThemeButton from '../theme-button/theme-button'
import ProfilePanel from '../profile-panel/profile-panel';
import Hamburger from '../hamburger/hamburger';
import { IUser } from '@/interfaces/user';

type Props = {
    user: IUser | undefined,
    sidebarIsOpen: boolean,
    setSidebarIsOpen: () => void
}

const AdminNavigation = ({ user, sidebarIsOpen, setSidebarIsOpen }: Props) => {
    console.log(user, "admin nav")
  return (
    <nav className="admin__navigation bg-white sticky top-0 z-10 flex h-16 w-full pr-2 pl-4 sm:pr-5 sm:pl-7 md:pl-6 md:pr-9 lg:pl-4 lg:pr-8 shrink-0 items-center dark:bg-dark-100/90 border-b border-gray-300">
        <Hamburger 
            isOpen={sidebarIsOpen}
            setIsOpen={setSidebarIsOpen}
        />

        <div className="wrapper flex items-center w-full">
            <div className="flex flex-1">
                {/*<BreadCrumb />*/}
            </div>

            <div className="admin__navigation__right flex items-center gap-x-4">
                <ThemeButton />
                <ProfilePanel user={user} redirectRoute="/admin/login" />
            </div>
        </div>
    </nav>
  )
}

export default AdminNavigation