import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoStatsChart, IoTimer } from 'react-icons/io5';
import GuestLayout from '@/components/layouts/GuestLayout';
import { CourseItem, BreadCrumb, Button, AuthorInfo } from '@/components';
import { coursesData, coursesCategories } from '@/lib/constants/courses';
import { CoursesProps } from '@/interfaces/courses';
import capitalizeText from '@/utils/capitalizeFirstLetter';


function CourseDetail({course: { description, course, category, thumbnail }}: { course: CoursesProps }) {
    console.log(description, course, category, usePathname());
    const courseAuthor = {
        fullname: "Joseph Etim Ibok",
    }

    return (
        <>
            <Head>
                <title>{capitalizeText(course)} - Courses</title>
            </Head>
            
            <main className="pt-12 w-[67%] mx-auto">
                <header className="header gap-x-8 grid grid-cols-2">
                    {/* Course Thumbnail */}
                    <aside className="bg-gradient-to-r from-teal-500 to-rose-400 rounded-md overflow-hidden p-0.5">
                        <Image 
                            src={thumbnail}
                            alt={`${course} thumbnail`}
                            loading="lazy"
                            className="rounded-md object-cover"
                        />
                    </aside>

                    {/* Course Info */}
                    <aside className="course__info h-full flex flex-col justify-between">
                        <div>
                            <div className="space-y-2">   
                                <BreadCrumb 
                                    tabs={[
                                        {
                                            name: "courses",
                                            active: false
                                        },
                                        {
                                            name: category,
                                            active: true
                                        }
                                    ]}
                                />
                                <h2 className="text-[1.8rem] leading-[1.3] font-bold font-noto_sans capitalize">{course}</h2>
                            </div>

                            {/* Course stat info */}
                            <div className="course__stat__info flex items-center gap-x-8 mt-4 mb-5 pl-1">
                                <blockquote className="flex items-center gap-x-2">
                                    <IoStatsChart className="text-primary-600 text-[1.2rem]" />
                                    <span className="text-gray-500 text-[.91rem] leading-[0] font-noto_sans">Expert</span>
                                </blockquote>

                                <blockquote className="flex items-center gap-x-2">
                                    <IoTimer className="text-teal-500 text-[1.2rem]" />
                                    <span className="text-gray-500 text-[.91rem] leading-[0] font-noto_sans">20hr 10m</span>
                                </blockquote>
                            </div>

                            {/* Course Author */}
                            <AuthorInfo author={courseAuthor} />
                        </div>

                        <Button
                            role="button"
                            variant="dark"
                            classname="py-2"
                        >                            
                            Apply to course
                        </Button>
                    </aside>
                </header>

                {/* Content */}
                <section className="content mt-16">
                    <blockquote className="space-y-3">
                        <h4 className="text-lg font-semibold font-noto_sans">Description</h4>
                        <p className="leading-[1.7] text-[1.01rem] font-noto_sans text-gray-800/90">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero, dolorum beatae ea aspernatur! Vitae quibusdam vel iusto?Quis, qui odio excepturi id porro incidunt iure optio sunt aspernatur distinctio impedit a rerum hic minus velit? iure corporis consectetur laudantium ab culpa dolor quae velit temporibus. Nulla, cupiditate aspernatur suscipit ea praesentium molestiae voluptatibus ex neque, officiis sapiente laudantium dolores consequatur.vAlias dolores nostrum earum expedita necessitatibus id rem aperiam ipsam quo, aspernatur dolor repellat!</p>
                    </blockquote>

                    {/* Course Requirement */}
                    <blockquote className="space-y-3 my-8">
                        <h4 className="text-lg font-semibold font-noto_sans">Requirements</h4>
                        
                        {/* Requirements */}
                        <ul className="requirements list-style-dot space-y-3 mt-4">
                            <li>Requirement 1</li>
                            <li>Requirement 2</li>
                            <li>Requirement 3</li>
                            <li>Requirement 4</li>
                            <li>Requirement 5</li>
                            <li>Requirement 6</li>
                        </ul>
                    </blockquote>

                    {/* Courses Outline */}
                    <section className="course-outline my-8">
                        <h4 className="text-lg font-semibold font-noto_sans">Course Outline</h4>

                        <div className="course-outline-list pt-5 px-4">
                            <ul className="border border-gray-300/80">
                                <li className="border-b border-gray-300/80 p-2 hover:cursor-pointer focus:cursor-pointer">Outline 1</li>
                                <li className="border-b border-gray-300/80 p-2 hover:cursor-pointer focus:cursor-pointer">Outline 1</li>
                                <li className="border-b border-gray-300/80 p-2 hover:cursor-pointer focus:cursor-pointer">Outline 1</li>
                                <li className="border-b border-gray-300/80 p-2 hover:cursor-pointer focus:cursor-pointer">Outline 1</li>
                                <li className="border-b border-gray-300/80 p-2 hover:cursor-pointer focus:cursor-pointer">Outline 1</li>
                                <li className="p-2 hover:cursor-pointer focus:cursor-pointer">Outline 1</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const params = coursesData.map(({ category, slug }) => ({
        params: {
            category,
            course_slug: slug
        }
    }));

    return {
        fallback: false,
        paths: params 
    }
}

type Params = {
    params: {
        category: string,
        course_slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const course = coursesData.filter(({ slug }) => params?.course_slug === slug.toLowerCase())[0];

    return {
        props: { 
            course
        }
    }
}

export default CourseDetail;

CourseDetail.getLayout = (page) => {
  return (
    <GuestLayout>
      {page}
    </GuestLayout>
  )
}

CourseDetail.requireAuth = true;