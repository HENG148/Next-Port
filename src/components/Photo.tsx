'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Profile from '../../public/profile.png'

interface PhotoProps {
  width?: number;
  height?: number;
  className: string;
}

const Photo: React.FC<PhotoProps> = ({ width = 298, height = 298, className = "" }) => {
  return (
    <div className={`w-full h-full relative ${className}`}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {delay: 0.2, duration: 0.4, ease: 'easeIn'},
          }}
          className={`w-[${width}px] h-[${height}px] xl:w-[${width * 1.67}px] xl:h-[${height * 1.67}px] mix-blend-lighten`}
        >
          <Image 
            src={Profile}
            priority
            quality={100}
            fill
            alt='Profile Image'
            className='object-contain rounded-full'
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo;
