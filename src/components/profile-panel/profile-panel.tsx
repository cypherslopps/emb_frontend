import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSettings, IoLockOpen } from 'react-icons/io5';
import { BiChevronDown } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import useAuth from '@/hooks/useAuth';
import { IUser } from '@/interfaces/user';


type Props = {
    user: IUser,
    redirectRoute: "/login" | "/admin/login"
}


const dropDownVariants = {
    hide: {
        y: -10,
        opacity: 0
    },
    show: {
        y: 10,
        opacity: 1
    }
}

const ProfilePanel = ({ user, redirectRoute }: Props) => {
    const router = useRouter();
    const { logout } = useAuth({ redirectIfAuthenticated: redirectRoute });
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (
        <div className="relative select-none">
            <blockquote 
                className="flex items-center gap-x-2 focus:cursor-pointer hover:cursor-pointer"
                onClick={() => setIsDropdownOpen(prop => !prop)}
            >
                <span className="profile flex justify-center items-center w-10 h-10 rounded-full bg-black text-white font-extrabold text-[1.15rem] bg-cover bg-center">{user?.fullname.substring(0,1).toUpperCase()}</span>

                <BiChevronDown className="text-[1.06rem]" />
            </blockquote>

            {isDropdownOpen && (
                <AnimatePresence>
                    <motion.ul
                        className="profile-dropdown-panel text-[.98rem] absolute -left-[10rem] w-[12.5rem] z-10 rounded-lg divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-[rgba(0,0,0,.04)] dark:divide-gray-700 dark:bg-gray-800 dark:ring-white/10"
                        variants={dropDownVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                    >   
                        <div 
                            className="user px-5 text-[.94rem] font-medium flex items-center space-x-3 py-3 hover:cursor-pointer focus:cursor-pointer transition-colors hover:bg-primary-100/30 focus:bg-primary-100/30"
                            onClick={() => {
                                // Close panel
                                setIsDropdownOpen(false)

                                // Redirect user to /accounts/profile if student role === student || /dashboard/account if role !== student
                                if(user?.roles === "student")
                                    router.push("/accounts/profile");
                                else 
                                    router.push("/dashboard/account/profile"); 
                            }}
                        >
                            <IoSettings className="text-primary-600" />
                            <span className="font-noto_sans text-gray-900/90">{user?.roles === "students" ? "Profile" : "Account"}</span>
                        </div>
                        <div 
                            className="px-5 text-[.94rem] font-medium flex items-center space-x-3 py-3 hover:cursor-pointer focus:cursor-pointer transition-colors hover:bg-primary-100/30 focus:bg-primary-100/30" 
                            onClick={() => {
                                // CLose panel
                                setIsDropdownOpen(false)


                                alert("logging out")
                                
                                // Logout user
                                logout();
                            }}
                        >
                            <IoLockOpen className="text-primary-600" />
                            <span className="font-noto_sans text-gray-900/90">Logout</span>
                        </div>
                    </motion.ul>
                </AnimatePresence>
            )}
        </div>
        
    )
}

export default ProfilePanel;