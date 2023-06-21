import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FeatureRow from '../feature-row/feature-row';
import features from '@/lib/constants/features';

const featureVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .15,
      when: "beforeChildren",
      staggerChildren: .3
    }
  }
}

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "100px 0px 200px 0px"
  });

  return (
    <motion.section 
      ref={ref}
      className="features pt-32 pb-16 px-[4.5rem] space-y-28"
      variants={featureVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <header className="features__header space-y-3 flex flex-col items-end pr-4">
        <h1 className="font-bold dark:text-white text-4xl w-[50%] text-end">What you stand to gain</h1>
        <p className="w-[45%] text-end dark:text-white/95 font-light leading-[1.73]">Lorem ipsum dolor sit amet consectetur, adipisicing elit, quod pariatur veniam, debitis illum sunt libero aut assumenda eos necessitatibus mollitia reiciendis vero.</p>
      </header>

      {/* Features Collection Container */}
      <div className="features__collection__container grid grid-cols-3 gap-x-8">
        {features.map((feature, index) => (
          <FeatureRow 
            key={feature.title}
            index={index}
            feature={feature}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Features;