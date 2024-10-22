
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { DiGit } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiDocker } from "react-icons/di";
import { SiGithub } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAstro } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiAxios } from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "projects" },
  { label: "Bio", href: "bio" },
  { label: "Skills", href: "skills" },
  { label: "Work Experience", href: "work" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

export const HERO = {
  name: "BRUNO BLASCO",
  greet: "Hello there! 👋🏻. Welcome to my portfolio.",
  description:
    "Thank you for your interest, let me introduce myself so you can get to know me better.",
    
  };  

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Bruno Blasco - Full Stack Web Developer from Concordia, Entre Ríos (Born on May 24, 1999)",
  "I’m a web developer passionate about solving issues one line at a time and crafting user-friendly experiences. With a strong foundation in web technologies like HTML, CSS, JavaScript, React, and Node.js, I've spent the last two years sharpening my skills in responsive development, experimenting with tools such as Sass, Tailwind, Bootstrap, and back-end frameworks like Express and NestJS. My database experience includes working with MongoDB and PostgreSQL, allowing me to build full-stack applications that are both functional and aesthetically pleasing.",
  "I also bring a unique perspective to development through my graphic design skills using Photoshop and Illustrator, ensuring that my applications not only work well but also look great.",
  "My work experience includes time at Extraberries, where I provided support in the systems area and worked as an administrative assistant. This role taught me the value of teamwork, organization, and effective communication - skills that are equally important in development.",
  "Before diving into the tech world, I studied psychology for four years, which has shaped how I approach human-computer interaction and problem-solving. As a native Spanish speaker with a B1 level in English after three years of formal study, I'm always excited to collaborate with diverse teams and tackle new challenges.",
  "I'm not an expert, but I'm committed to lifelong learning. In this ever-evolving field, there’s always something new to discover, and I am thrilled to be a part of this journey. I'm looking forward to the future and the opportunities it holds!",
];

export const SKILLS = [
  {
    icon: <DiHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Html",
    experience: "2+ years",
  },
  {
    icon: <DiCss3 className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "CSS",
    experience: "2+ years",
  },
  {
    icon: <DiJsBadge className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <DiJqueryLogo className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Jquery",
    experience: "2+ years",
  },
  {
    icon: <SiAxios className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Axios",
    experience: "1+ years",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "Tailwind",
    experience: "2+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-100 lg:text-5xl" />,
    name: "Express",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1.5+ year",
  },
  {
    icon: <SiNestjs className="text-4xl text-rose-600 lg:text-5xl" />,
    name: "Nestjs",
    experience: "1+ year",
  },
  {
    icon: <SiAstro className="text-4xl text-gray-800 lg:text-5xl" />,
    name: "Astro",
    experience: "1+ year",
  },
  {
    icon: <DiGit className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Git",
    experience: "2+ years",
  },
  {
    icon: <SiGithub className="text-4xl text-white-500 lg:text-5xl" />,
    name: "GitHub",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "2+ years",
  },
  {
    icon: <GrMysql className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "Mysql",
    experience: "2+ years",
  },
  {
    icon: <SiFirebase className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Firebase",
    experience: "2+ years",
  },
  {
    icon: <DiDocker className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "Docker",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <DiPhotoshop className="text-4xl text-sky-500 lg:text-5xl" />,
    name: "Photoshop",
    experience: "3+ years",
  },
  {
    icon: <DiIllustrator className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Illustrator",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "All Star Drugstore",
    company: "Freelance",
    duration: "October. 2023 - December. 2023",
    description:
      "I was in charge of developing a new look for a drugstore, which had a website already deployed and a repository previously created by a programmer. I used libraries such as FlowBite and Tailwind to create new components and give a new look to their ECommerce website.",
  },
  {
    title: "Systems / Administrative Assistant",
    company: "ExtraBerries",
    duration: "May. 2023 - January. 2024",
    description:
      "I worked in the administrative sector as an HR assistant in the systems area. I was in charge of carrying out general office tasks, managing telephone calls or personal messages, providing support to office or field staff, managing documents, files, orders, relationships with suppliers, billing control, pay slips, in charge of developing and updating spreadsheets, databases to track and analyze information, use of company systems, office package. ",
  },
  {
    title: "Chipa Bakeryx",
    company: "Freelance",
    duration: "Juanary. 2024 - February. 2024",
    description:
      "On this occasion I was in charge of developing an Ecommerce website for a well-known bakery in Buenos Aires, its popularity is due to the delicious chipa they make and they wanted their customers to be able to see their products and order them via WhatsApp or Email. I used the following technologies and libraries to do the job. Html, Css, Tailwind, React, Nodejs, Express, Tailwind-Gradient-Generator, EmailJs and Hipercolor.Dev",
  },
];

export const EDUCATION = [
  {
    degree: "Full Stack Developer",
    institution: "CoderHouse",
    duration: "February 2023 - April 2014",
    description:
      "Online school with +350,000 graduates, offers courses, degrees and diplomas in digital skills such as Artificial Intelligence, Digital Marketing, UX/UI Design, Data and more. Take responsive web development, javascript, react and backend courses.",
  },
  {
    degree: "University technician in web programming",
    institution: "UNER Faculty of management sciences",
    duration: "April 2024 - Actually",
    description:
      "I am currently studying web development in my hometown.",
  },
  {
    degree: "CIC",
    institution: "English culture Concord",
    duration: "April 2014 - May 2017",
    description:
      "English academy in the city of Concordia. AACI Certification Preparation Center English Culture Association of Buenos Aires",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/thesetofart/?locale=es_LA",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "Discordapp/users/465398056901148692",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/brunoblasco1/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/BelirB",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/brunoblasco1/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

