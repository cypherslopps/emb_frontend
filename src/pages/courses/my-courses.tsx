import React from 'react';
import { motion } from 'framer-motion';
import { IoHandLeftOutline } from 'react-icons/io5';
import { Meta, CoursesCollectionPreview } from '@/components';
import GuestLayout from "@/components/layouts/GuestLayout";
import { coursesData } from '@/lib/constants/courses';
import useAuth from '@/hooks/useAuth';

function MyCourses() {
    const { user } = useAuth({ middleware: "auth" });
    console.log(user, "courses");

    return (
        <>
            <Meta 
                title="My Courses - Courses"
            />

           <>
               <header className="flex flex-col justify-center mb-6 bg-gray-50/90 py-12 md:py-16 px-8 sm:px-14 lg:px-24">
                    <motion.h3
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="w-full text-center sm:text-justify flex flex-col items-start gap-x-2 font-noto_sans dark:text-white font-bold w-3/5 mb-2 text-[1.5rem] mds:flex-row mds:items-center mds:text-2xl"
                    >
                        <span className="w-full mds:w-[max-content]">
                            <IoHandLeftOutline className="inline-block" /> {" "}
                            Welcome back,
                        </span>
                        <span className="font-extrabold w-full mds:w-[max-content] capitalize">{user?.fullname}</span> 
                    </motion.h3>
                    <p className="leading-[1.65] w-full text-gray-800/90 text-[1.1rem] text-center mds:text-justify mds:text-[.94rem] sm:text-[.97rem] sm:w-[73%] w-[65%] lg:w-[55%]">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Officiis ipsam doloremque aut earum cupiditate, qui voluptate id asperiores modi pariatur? Laudantium nostrum ipsa dignissimos, rem laborum, natus pariatur consequatur!</p>
                </header>

                {/* My courses list */}
                <section className="px-8 sm:px-12 lg:px-24 py-12 space-y-8">
                    <header className="space-y-0.5">
                        <h5 className="text-[1.12rem] text-gray-900/90">Courses you're taking</h5>
                        <p className="text-[.88rem] text-gray-900/60">Here are all your enrolled courses</p>
                    </header>

                    {/* Courses Collection */}
                    <CoursesCollectionPreview courses={coursesData} />
                </section>
           </>
        </>
    )
}

export default MyCourses;

MyCourses.getLayout = (page: any) => {
    return (
        <GuestLayout>
            {page}
        </GuestLayout>
    );
}

// MyCourses.requireAuth = true;