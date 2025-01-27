'use client'

import { motion } from "framer-motion"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import { infos } from "./Type"

const Contact: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%]">
            <ContactForm />
          </div>
          <ContactInfo info={infos}/>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;