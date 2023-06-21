import React from 'react';
import CoursesDataProps from '@/interfaces/courses-features';

const CoursesCollectionItem = ({ heading, icon, content }: CoursesDataProps) => {
    const Icon = icon;
    
    return (
        <div className="bg-white text-gray-800 rounded py-4 px-5 border border-dark-shade-900/40 space-y-4">
            <div className="flex items-center space-x-5">
                <Icon className='text-3xl' />
                <h3 className="text-lg">{heading}</h3>
            </div>
            <p className="font-light text-[.91rem] text-gray-700 leading-[1.6]">{content.substring(0, 200)}...</p>
        </div>
    )
}

export default CoursesCollectionItem