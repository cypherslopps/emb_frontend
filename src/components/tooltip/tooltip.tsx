import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TooltipDataProps from '@/interfaces/tooltip';


const tooltipVariant = {
    hidden: {
        opacity: 0,
        x: "50%",  
        y: "90%"
    },
    visible: {
        opacity: 1,
        x: "50%", 
        y: "120%",
        transition: {
            delay: .5,
            type: "spring",
            duration: .25
        }
    }
}

const Tooltip = ({ icon, content }: TooltipDataProps) => {
    const Icon = icon;

    return (
    <div className='relative hover:cursor-pointer focus:cursor-pointer'>
        <span className="text-xl text-white">
            <Icon />
        </span>

        <AnimatePresence>
            <motion.p 
                variants={tooltipVariant}
                initial="hidden"
                exit="hidden"
                whileHover="visible"
                className="absolute font-light capitalize"
            >
                {content}
            </motion.p>
        </AnimatePresence>
    </div>
  )
}

export default Tooltip