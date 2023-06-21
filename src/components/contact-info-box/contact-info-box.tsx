import React from 'react';
import IContact from '@/interfaces/contact';

// border border-gray-700 px-4 h-[6rem] rounded-lg grid grid-cols-[2rem_max-content] gap-x-5 items-center bg-teal-50/60 w-[80%]
// text-[.93rem] text-dark-text leading-none
// font-noto_sans text-[.85rem] text-black/75 underline decoration-dotted w-[90%]

const ContactInfoBox = ({ Icon, info, address }: IContact) => {
	return (
		<blockquote className="w-[83%] h-[6.5rem] grid grid-cols-[max-content_1fr] border border-gray-700 px-5 rounded-lg gap-x-5 items-center justify-center bg-teal-50/50">
	        <span className="w-[2.1rem] h-[2.1rem] bg-black rounded-full flex items-center justify-center">
	        	<Icon className="text-[1.1rem] text-white" />
	        </span>
	        <div className="content space-y-2">
	          <h6 className="text-[.91rem] font-medium text-dark-text leading-none">{info}</h6>
	          <p className="font-noto_sans text-[.85rem] text-black/75 underline decoration-dotted w-[90%]">{address}</p>
	        </div>
	    </blockquote>
	)
}


export default ContactInfoBox;