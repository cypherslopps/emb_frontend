import React from 'react';

const ValueCollectionItem = ({ icon, heading, content }) => {
	const Icon = icon;

	return (
		<blockquote className="flex space-x-3">
	        <Icon className="mt-[.2rem] text-[1.3rem] text-primary-500 dark:text-primary-400" />

	        <p className="text-[.9rem] text-gray-800/80 dark:text-white/90 dark:font-light font-noto_sans leading-[1.7]">
	          <span className="font-bold text-gray-900 dark:text-white">{heading}.</span>{" "} 
	         {content}
	        </p>
      </blockquote>
	)
}

export default ValueCollectionItem;