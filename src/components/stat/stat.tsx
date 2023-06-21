import React from 'react';
import { IoTabletLandscapeOutline } from "react-icons/io5";
import StatsProps from '@/interfaces/stats';

const Stat = ({ name, count }: { name: string, count: number }) => {
    let formattedName: string = "";
    let type: string = "";
    const statTypes: String[] = ["posts", "courses", "users", "roles", "permission"];

    if(statTypes.includes(name)) {
        // Set type
        type = name;

        // Format name
        formattedName = `All ${name}`;
    }
    else 
        formattedName = `${name} ${type}`;


    return (
        <figure className="relative p-6 rounded-2xl bg-gray-50/70 space-y-3 border border-gray-200/40 bg-gray-50/40  dark:bg-gray-800 filament-stats-overview-widget-card">
            <div className="flex rtl:space-x-reverse font-noto_sans items-center space-x-2 text-gray-600 dark:text-gray-200 mb-2">
                <IoTabletLandscapeOutline className="text-[1.03rem]" />
                <span className="text-[.95rem] font-noto_sans capitalize">{formattedName}</span>
            </div>
            <h4 className="text-3.5xl font-bold text-gray-900/90">{count}K</h4>
            {/*{widget && <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-noto_sans text-teal-600">
                <span>{widget.title}</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
            </div>}*/}
        </figure>
    )
}

export default Stat;