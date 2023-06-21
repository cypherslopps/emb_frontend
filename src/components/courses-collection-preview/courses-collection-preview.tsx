import React from 'react';
import { motion } from 'framer-motion';
import CourseItem from '../course-item/course-item';
import { CoursesProps } from '@/interfaces/courses';


type Props = {
	courses: CoursesProps,
	category?: category,
    classname: string
}

const coursesListVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .7,
            duration: 2,
            when: "beforeChildren",
            staggerChildren: .3
        }
    }
};


const CoursesCollectionPreview = ({ courses, classname }: CoursesProps) => {
	return (
        <motion.section 
            variants={coursesListVariants}
            initial="hidden"
            animate="visible"
            className={`courses__category__collection ${classname} grid grid-cols-1 sm:gap-x-4 sm:px-10 md:grid-cols-3 lg:gap-x-8 gap-y-10`}
        >
            {courses.length ? (
                courses.map((course, category, index) => (
                    <CourseItem 
                        key={course.id} 
                        index={index}
                        category={category} 
                        courseData={course} />
                ))
            ) : null}
        </motion.section>
	)
}

export default CoursesCollectionPreview;