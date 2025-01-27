'use client';

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

// Define types for the service object
interface Service {
  num: string;
  title: string;
  href: string;
  description: string;
}

const services: Service[] = [
  {
    num: '01',
    title: 'Web Development',
    href: '/',
    description: 'As a web developer, I create responsive, dynamic, and user-friendly websites by leveraging modern technologies and best coding practices. My expertise includes front-end, focusing on clean, efficient code, performance optimization, and accessibility. I collaborate closely with designers and other developers to ensure seamless integration and scalable solutions.',
  },
  {
    num: '02',
    title: 'UX/UI Designer',
    href: '/',
    description: 'As a UX/UI designer, I create intuitive, user-centered digital experiences by conducting research, designing wireframes and prototypes, and crafting responsive, accessible interfaces. I collaborate with developers and product managers to ensure seamless design implementation, focusing on creativity, problem-solving, and a user-first approach to deliver impactful solutions.',
  },
  {
    num: '03',
    title: 'Logo Design',
    href: '/',
    description: "As a logo designer, I create unique, memorable, and visually striking logos that capture brand identity and resonate with target audiences. My process involves researching brand values, sketching concepts, and refining designs to ensure clarity, scalability, and versatility across different media. I focus on combining creativity with strategic design principles to deliver impactful logos that effectively communicate a brand’s essence and leave a lasting impression.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p>{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;