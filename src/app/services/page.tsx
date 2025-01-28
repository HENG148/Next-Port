'use client'

import { motion } from "framer-motion"
import { services } from "./ServiceData"
import ServiceItems from "./ServiceItem"

const Services: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-centerpy-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {delay: 0.2, duration: 0.4, ease: 'easeIn'},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, idx) => (
            <ServiceItems key={idx} service={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;