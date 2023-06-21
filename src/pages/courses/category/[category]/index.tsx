import Head from 'next/head';
import { motion } from 'framer-motion';
import axiosClient from '@/lib/axiosClient';
import GuestLayout from '@/components/layouts/GuestLayout';
import { CoursesCollectionPreview } from '@/components';
import { coursesData, coursesCategories } from '@/lib/constants/courses';
import { CoursesProps } from '@/interfaces/courses';
import capitalizeText from '@/utils/capitalizeFirstLetter';



function CoursesCategory({ courseCategory }: {courseCategory: CoursesProps}) {
    const { category, subcategory, description } = courseCategory;
    // Fetch courses based on the category 
    const courses = coursesData.filter(course => course.category.toLowerCase() === courseCategory.category.toLowerCase());
    
    return (
        <>
            <Head>
                <title>{capitalizeText(category)} - Courses</title>
            </Head>
        
            <>
                {/* Courses Header */}
                <header className="flex flex-col justify-center mb-6 bg-gray-50/90 py-16 px-24">
                    <motion.h1 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="text-5xl font-noto_sans dark:text-white font-bold w-3/5 mb-2 font-noto_sans"
                    >
                        {capitalizeText(category)}
                    </motion.h1>
                    {Array.isArray(subcategory) ? (
                        <div className="space-x-2">
                            {subcategory.map(category => (
                                <span key={category} className="border border-gray-300 text-[.92rem] text-gray-500 dark:text-white/50 font-light inline w-[max-content] py-1 px-2 rounded-sm">{category}</span>
                            ))} 
                        </div>
                    ) :
                        <motion.span 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .7 }}
                            className="mt-2 border border-gray-300 dark:border-gray-300/80 text-[.91rem] text-gray-500 font-light inline w-[max-content] py-1 px-2 rounded-sm dark:text-white/90"
                        >
                            {subcategory}
                        </motion.span>
                    }
                </header>

                {/* Courses Category Collection */}
                <CoursesCollectionPreview 
                    courses={courses} 
                    className="px-24 py-14" 
                />
            </>
        </>
    )
}

export async function getStaticPaths() {
    const response = await axiosClient.get("/courses");
    const courses = response.data;
    const params = coursesCategories.map(({ category }) => ({
        params: {category: category.toLowerCase()}
    }));

    return {
        fallback: false,
        paths: params
    }
}

type Params = {
    params: {
        category: string
    }
}

export async function getStaticProps({ params }: Params) {
    const course = coursesCategories.filter(({ category }) => params?.category === category.toLowerCase())[0];
    
    return {
        props: { 
            courseCategory: course 
        }
    }
}

export default CoursesCategory;

CoursesCategory.getLayout = (page) => {
  return (
    <GuestLayout>
      {page}
    </GuestLayout>
  )
}

CoursesCategory.requireAuth = true;