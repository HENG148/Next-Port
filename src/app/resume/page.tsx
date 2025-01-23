"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InfoItem {
  field: string;
  value: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface SkillItem {
  icon: React.ComponentType;
  name: string;
}

interface SectionData {
  title: string;
  description: string;
  items?: (ExperienceItem | EducationItem | SkillItem)[];
  info?: InfoItem[];
}

type DataType = {
  [key: string]: SectionData;
};

const data: DataType = {
  about: {
    title: "About me",
    description:
      "I am a passionate web developer and UX/UI designer, blending technical skills with creativity to deliver impactful digital experiences. As a web developer, I specialize in building dynamic, responsive websites using technologies like JavaScript, React.js, Next.js, and Node.js. I focus on clean code, performance optimization, and creating scalable web solutions. In UX/UI design, I create user-centered designs that balance functionality and aesthetics, using tools like Figma and Adobe XD for wireframing, prototyping, and visual design. My goal is to craft seamless, intuitive experiences that engage users while meeting business objectives.",
    info: [
      { field: "Name:", value: "Rong Sokheng" },
      { field: "Phone:", value: "(+855) 17 540 260" },
      { field: "Experience:", value: "6 Months" },
      { field: "Nationality:", value: "Cambodian" },
      { field: "Freelance:", value: "Available" },
      { field: "Email:", value: "rongsokheng148@gmail.com" },
      { field: "Language:", value: "English, Chinese" },
    ],
  },
  experience: {
    title: "My experience",
    description:
      "Over the past 6 months as a front-end web developer, I've built responsive, user-friendly interfaces using JavaScript, Next.Js, and React.js. I’ve collaborated with UX/UI designers to ensure consistency, optimized website performance, and worked with back-end developers to integrate APIs. This experience has enhanced my coding skills and ability to create efficient, visually appealing web applications.",
    items: [
      { company: "Giant Focus Inc.", position: "Web Front-end Developer", duration: "2022-May - 2022-September" },
    ],
  },
  education: {
    title: "My education",
    description:
      "Since secondary school, I have excelled in computer science and math, which sparked my interest in technology. This foundation led me to pursue web development in college, where I continue to build on my skills with hands-on experience and advanced knowledge, staying motivated to succeed in my studies.",
    items: [
      { institution: "RUPP", degree: "Bachelor's Degree -- (Computer Science)", duration: "2021 - Present" },
      { institution: "Above & Beyond School", degree: "Full Stack Developer", duration: "2023 - 2024" },
      { institution: "RUPP", degree: "Front-end Developer", duration: "2022 - 2023" },
      { institution: "Chhong Zheng High School", degree: "High School", duration: "2019 - 2021" },
      { institution: "Chhong Zheng High School", degree: "Secondary School", duration: "2015 - 2019" },
    ],
  },
  skills: {
    title: "My skills",
    description:
      "I am skilled in JavaScript, React.js, Next.js, and Node.js, enabling me to build dynamic, full-stack web applications. I use React.js for creating interactive UIs, Next.js for server-side rendering and static sites, and Node.js to build robust backends and handle server-side logic.",
    items: [
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3, name: "CSS" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaReact, name: "React.js" },
      { icon: BiLogoTypescript, name: "TypeScript" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
};

const Section: React.FC<{ title: string; description: string; items: any[]; renderItem: (item: any, idx: number) => React.ReactNode }> = ({ title, description, items, renderItem }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {items.map(renderItem)}
      </ul>
    </ScrollArea>
  </div>
);

const InfoList: React.FC<{ info: InfoItem[] }> = ({ info }) => (
  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
    {info.map(({ field, value }, idx) => (
      <li key={idx} className="flex items-center justify-center xl:justify-start gap-4">
        <span className="text-white/60">{field}</span>
        <span className="text-xl">{value}</span>
      </li>
    ))}
  </ul>
);

const renderItems = {
  experience: ({ duration, position, company }: ExperienceItem, idx: number) => (
    <li key={idx} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
      <span className="text-accent">{duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{position}</h3>
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{company}</p>
      </div>
    </li>
  ),
  education: ({ institution, degree, duration }: EducationItem, idx: number) => (
    <li key={idx} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
      <span className="text-accent">{duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{degree}</h3>
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{institution}</p>
      </div>
    </li>
  ),
  skills: ({ icon: Icon, name }: SkillItem, idx: number) => (
    <li key={idx}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
            <div className="text-6xl group-hover:text-accent transition-all duration-300"><Icon /></div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  ),
};

const Resume: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          {Object.keys(data).map((key) => (
            <TabsTrigger key={key} value={key}>{data[key].title}</TabsTrigger>
          ))}
        </TabsList>
        <div className="min-h-[75vh] w-full">
          {Object.entries(data).map(([key, section]) => (
            <TabsContent key={key} value={key}>
              {key === 'about' ? (
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{section.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{section.description}</p>
                  {section.info && <InfoList info={section.info} />}
                </div>
              ) : (
                  section.items && (
                    <Section
                      title={section.title}
                      description={section.description}
                      items={section.items}
                      renderItem={renderItems[key as keyof typeof renderItems] as (item: any, idx: number) => React.ReactNode}
                    />
                  )
              )}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  </motion.div>
)

export default Resume
