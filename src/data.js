import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { PMU, codeview, moodexa, zerodh, zerodha } from "../src/assets/img";
import { SiTailwindcss, SiCloudinary } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const menu = [
  { name: "About" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "CodeView Code-Editor",
    image: codeview,
    category: "All",
    data: {
      description: `CodeView is a clean and modern developer portfolio built with React and Tailwind CSS. It serves as a personal showcase to highlight coding projects, GitHub links, and live demos in a visually organized way.`,
      demoLink: "https://code-view-theta.vercel.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
        iconColor: "green",
      },
    ],
  },
  {
    id: 2,
    title: "Zerodha share market - global",
    image: zerodha,
    category: "FullStack",
    data: {
      description: `Created a responsive stock trading web application that streamlined user experience by implementing live market data and portfolio management tools, achieving positive feedback from 95% of early users during beta testing with the help of this technology HTML, CSS, Bootstrap, React.js, Node.js, MongoDB`,
      demoLink: "https://github.com/ashishrajpoot004",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 3,
    title: "Tasty food-online food ordering app ",
    image: moodexa,
    category: "FullStack",
    data: {
      description: `Developed a full-stack food ordering web application User Features. Responsive UI, menu browsing, cart management and seamless checkout Integrated Stripe Payment Gateway for secure online transactions . Optimized backend for scalability and performance.`,
      demoLink: "https://github.com/ashishrajpoot004",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    id: 4,
    title: "Public Media Uploader",
    image: PMU,
    category: "FullStack",
    data: {
      description: `Developed a full-stack media uploader platform with React, Node.js, and Cloudinary integration. Users can upload, view, and download photos and videos seamlessly. Implemented drag & drop, progress bar, gallery view, and cloud-based storage. Fast, accessible, and open to public use.`,
      demoLink: "https://public-media-uploader.vercel.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        iconColor: "cyan",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary />,
        iconColor: "purple",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
];

export const experience = [
  {
    title: "Languages",
    data: [
      {
        skill: "Java",
        level: "Intermediate",
      },
      {
        skill: "C",
        level: "Intermediate",
      },
      {
        skill: "SQL",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "FullStack Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "Express JS",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Data Structure & Algorithm",
    data: [
      {
        skill: "Array",
        level: "Experienced",
      },
      {
        skill: "Linked List",
        level: "Experienced",
      },
      {
        skill: "ArrayList",
        level: "Intermediate",
      },
      {
        skill: "Stack & Queue",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Deployement & Extra Skills",
    data: [
      {
        skill: "Vercel",
        level: "Intermediate",
      },
      {
        skill: "AWS",
        level: "Intermediate",
      },
      {
        skill: "Docker",
        level: "Experienced",
      },
      {
        skill: "Git & Github",
        level: "Intermediate",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/ashishrajpoot004",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/asheesh-kumar-212478231/",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/the_ashishrajpoot_45/",
  },
];
