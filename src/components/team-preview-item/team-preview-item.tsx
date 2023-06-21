import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ITeams from '@/interfaces/teams.interface';

type Props = {
  index: number,
  team: ITeams
}

const teamBoxVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  show: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * .32
    }
  })
}

const TeamPreviewItem = ({ team: {thumbnail, name, role}, index}: Props) => {
	return (
    <AnimatePresence>
  		<motion.blockquote 
        className={`space-y-2 text-center ${index > 3 ? "scale-78" : ""}`}
        variants={teamBoxVariants}
        custom={index}
      >
        <div className={`w-64 h-64 mx-auto rounded-xl ${role === 'CEO - Founder' ? "md:w-48 md:h-64 lg:w-72 lg:h-80" : "md:w-40 md:h-40 lg:w-64 lg:h-64"} overflow-hidden`}>
          <Image 
            src={thumbnail} 
            alt="woman" 
            loading="lazy" 
            width={640} 
            height={805}
            className="w-full h-full object-cover hover:scale-200 transition duration-75 hover:cursor-pointer" 
           />
        </div>     

        <div className="space-y-0.5">
            <h4 className="text-[1.2rem] dark:text-white">{name}</h4>
            <span className="block text-sm text-gray-600/80 dark:text-white/60">{role}</span>
        </div>
      </motion.blockquote>     
    </AnimatePresence>   
	);
}

export default TeamPreviewItem;