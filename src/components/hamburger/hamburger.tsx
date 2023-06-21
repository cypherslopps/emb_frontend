import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';

type Props = {
	isOpen: boolean,
	setIsOpen: () => void
}

const Hamburger = ({ isOpen, setIsOpen }: Props) => {
	const toggleSidebar = () => {
		if(isOpen)
			setIsOpen(false)
		else 
			setIsOpen(true);
	}
	
	return (
		<span 
			className="text-2xl cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-50/50"
			onClick={toggleSidebar}
		>
			<AiOutlineBars />
		</span>
	)
}

export default Hamburger;