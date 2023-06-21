import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

type Props = {
  mainContext: string,
  description: string,
  cta: boolean,
  ctaContent: string,
  closeBanner: () => void
}

const bannerVariant = {
  hidden: {
    height: "none",
    opacity: 0,
    x: -20,
  },
  visible: {
    height: "flex",
    x: 0,
    opacity: 1,
    transition: {
      delay: .5,
      height: .55,
      x: .6
    }
  }
}

function Banner({ mainContext, description, cta = false, ctaContent, closeBanner }: Props) {
  return (
    <motion.div 
      className="banner relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      variants={bannerVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900 font-light">
          <strong className="font-semibold">{mainContext}</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          {description}
        </p>

        {/* Display cta */}
        {cta && (
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            {ctaContent} <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
      <div className="flex flex-1 justify-end">
        <button 
          type="button" 
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={closeBanner}
        >
          <span className="sr-only">Dismiss</span>
          <IoClose className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  )
}


export default Banner;