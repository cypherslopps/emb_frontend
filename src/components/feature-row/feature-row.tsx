import React from 'react';
import FeaturesProps from '@/interfaces/features';

const featureItemVariants = {
  hidden: {
    y: 20
  },
  visible: (index: number) => ({
    y: 0,
    transition: {
      delay: .2 * index,
    }
  })
}

const FeatureRow = ({ index, feature: {title, Icon, content}}: FeaturesProps) => {
  return (
    <blockquote 
        variants={featureItemVariants}
        custom={index}
        className="feature-row space-y-4 grid" 
        style={{ alignContent: "start" }}
    >
        <header className="grid grid-cols-[1.65rem_1fr] items-center gap-x-3">
            <span className="h-[1.55rem] bg-gradient-to-tr from-primary-400 to-primary-500 rounded-[.2rem] flex items-center justify-center">
                <Icon className="text-white text-[.925rem]" />
            </span>

            <h6 className="text-[.99rem] dark:text-white font-medium">{title}</h6>
        </header>

        <p className="font-light leading-[1.75] text-[.86rem] pl-0.5 text-gray-800 dark:text-white/95">{content}</p>
    </blockquote>
  )
}

export default FeatureRow