export interface Service {
  num: string;
  title: string;
  href: string;
  description: string;
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Web Development',
    href: '/',
    description:
      'As a web developer, I create responsive, dynamic, and user-friendly websites by leveraging modern technologies and best coding practices. My expertise includes front-end, focusing on clean, efficient code, performance optimization, and accessibility. I collaborate closely with designers and other developers to ensure seamless integration and scalable solutions.',
  },
  {
    num: '02',
    title: 'UX/UI Designer',
    href: '/',
    description:
      'As a UX/UI designer, I create intuitive, user-centered digital experiences by conducting research, designing wireframes and prototypes, and crafting responsive, accessible interfaces. I collaborate with developers and product managers to ensure seamless design implementation, focusing on creativity, problem-solving, and a user-first approach to deliver impactful solutions.',
  },
  {
    num: '03',
    title: 'Logo Design',
    href: '/',
    description:
      'As a logo designer, I create unique, memorable, and visually striking logos that capture brand identity and resonate with target audiences. My process involves researching brand values, sketching concepts, and refining designs to ensure clarity, scalability, and versatility across different media. I focus on combining creativity with strategic design principles to deliver impactful logos that effectively communicate a brand’s essence and leave a lasting impression.',
  },
]