export interface StackItem {
  name: string;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: StackItem[];
  image: string;
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    num: '01.',
    category: 'Flexify Store',
    title: 'Flexify Shoes Store',
    description: 'The site will feature a dynamic product catalog, advanced search and filter options, a streamlined shopping cart, secure checkout, and user accounts for order tracking and preferences. This project aims to boost sales, enhance your brand’s online presence, and offer a seamless shopping experience.',
    stack: [{ name: 'React.Js' }, { name: 'JavaScript' }, { name: 'Node.Js' }, { name: 'Tailwind' }],
    image: '/',
    live: '',
    github: 'https://github.com/HENG148/Flexify-Shoes_Store',
  },
  {
    num: '02',
    category: 'E-Shop ( E-Commerce )',
    title: 'project 2',
    description: 'This projects is start your e-commerce project for selling phones, featuring a dynamic product catalog, secure checkout, user accounts, and an admin panel for easy management. Built with Next.js, TypeScript, and Tailwind CSS, it will be fast, responsive, and scalable',
    stack: [{ name: 'Next.Js' }, { name: 'TypeScript' }, { name: 'Node.Js' }, { name: 'Tailwind' }],
    image: '/',
    live: '',
    github: 'https://github.com/HENG148/Next-Ecommerce-',
  },
  {
    num: '03',
    category: 'Quiz App',
    title: 'project 3',
    description: 'This projects is design to offer an  engaging, interactive experience with dynamic question sets, customizable quizzes, user score tracking, and real-time feedback. Built with HTML, JavaScript, CSS 3, and Tailwind CSS, it will be responsive, fast, and scalable.',
    stack: [{ name: 'JavaScript' }, { name: 'CSS 3' }, { name: 'Tailwind' }],
    image: '/',
    live: '',
    github: 'https://github.com/HENG148/Quiz-App',
  },
  {
    num: '04',
    category: 'Portfolio With React.Js',
    title: 'project 1',
    description: 'This projects is designed to showcase my skills, projects, and professional journey in a clean, responsive, and engaging design. It will highlight my expertise in modern web development, providing a fast, scalable, and interactive user experience. This portfolio will serve as a dynamic representation of my work and passion for technology.',
    stack: [{ name: 'React.Js' }, { name: 'Node.Js' }, { name: 'Email.Js' }, { name: 'Tailwind' }],
    image: '/',
    live: '',
    github: 'https://github.com/HENG148/Next-Portfolio',
  },
]