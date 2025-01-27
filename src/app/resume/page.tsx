'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiLogoTypescript } from 'react-icons/bi';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const data = {
  about: {
    title: 'About me',
    description: 'I am a passionate web developer and UX/UI designer, blending technical skills with creativity to deliver impactful digital experiences. As a web developer, I specialize in building dynamic, responsive websites using technologies like JavaScript, React.js, Next.js, and Node.js. I focus on clean code, performance optimization, and creating scalable web solutions. In UX/UI design, I create user-centered designs that balance functionality and aesthetics, using tools like Figma and Adobe XD for wireframing, prototyping, and visual design. My goal is to craft seamless, intuitive experiences that engage users while meeting business objectives.',
    info: [
      ['Name:', 'Rong Sokheng'],
      ['Phone:', '(+855) 17 540 260'],
      ['Experience:', '6 Months'],
      ['Nationality:', 'Cambodian'],
      ['Freelance:', 'Available'],
      ['Email:', 'rongsokheng148@gmail.com'],
      ['Language:', 'English, Chinese']
    ]
  },
  experience: {
    title: 'My experience',
    description: "Over the past 6 months as a front-end web developer, I've built responsive, user-friendly interfaces using JavaScript, Next.Js and React.js. I’ve collaborated with UX/UI designers to ensure consistency, optimized website performance, and worked with back-end developers to integrate APIs. This experience has enhanced my coding skills and ability to create efficient, visually appealing web applications.",
    items: [
      { company: 'Giant Focus Inc.', position: 'Web Front-end Developer', duration: '2022-may - 2022-September' },
    ],
  },
  education: {
    title: 'My education',
    description: 'Since secondary school, I have excelled in computer science and math, which sparked my interest in technology. This foundation led me to pursue web development in college, where I continue to build on my skills with hands-on experience and advanced knowledge, staying motivated to succeed in my studies.',
    items: [
      { institution: 'RUPP', degree: "Bachelor's Degree -- (Computer Science)", duration: '2021 - Present' },
      { institution: 'Above & Beyond School', degree: 'Full Stack Developer', duration: '2023 - 2024' },
      { institution: 'RUPP', degree: 'Front-end Developer', duration: '2022 - 2023' },
      { institution: 'Chhong Zheng High School', degree: 'High School', duration: '2019 - 2021' },
      { institution: 'Chhong Zheng High School', degree: 'Secondary School', duration: '2015 - 2019' }
    ]
  },
  skills: {
    title: 'My skills',
    description: 'I am skilled in JavaScript, React.js, Next.js, and Node.js, enabling me to build dynamic, full-stack web applications. I use React.js for creating interactive UIs, Next.js for server-side rendering and static sites, and Node.js to build robust backends and handle server-side logic.',
    items: [
      { icon: FaHtml5, name: 'HTML5' },
      { icon: FaCss3, name: 'CSS' },
      { icon: FaJs, name: 'JavaScript' },
      { icon: FaReact, name: 'React.js' },
      { icon: BiLogoTypescript, name: 'TypeScript' },
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiTailwindcss, name: 'Tailwind' }
    ]
  }
};

const Resume = () => {
  return (
    <div>
      resume
    </div>
  )
}

export default Resume; 