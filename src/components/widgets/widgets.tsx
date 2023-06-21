import React from 'react';
import Stat from '../stat/stat';
import StatsProps from '@/interfaces/stats';

const Widgets = ({ stats }: StatsProps) => {
	const statsEntries = Object.entries(stats);
	
	return (
		<div className="widgets grid gap-4 lg:gap-8 md:grid-cols-3 mb-9">
            {statsEntries.map(([name, count]) => (
            	<Stat 
            		key={name}
            		name={name.replace("_count", "")}
            		count={count} 
            	/>
            ))}	 
        </div>
	)
}

export default Widgets;