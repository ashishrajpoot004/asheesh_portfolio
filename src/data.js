import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFigma, SiMongodb, SiUpwork } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
]



export const projects = [
  {
    id: 1,
    title: 'CodeView Code Editor',
    image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
    category: "FullStack",
    data: {
      description: `Transforming education with AI, our School UI Design project revolutionizes the 
                       learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                       and intuitive navigation, our design empowers educators and students alike. Experience 
                       innovation at its finest as we pave the way for a smarter, more efficient educational 
                       journey.`,
      demoLink: "https://code-view-theta.vercel.app/",
      shareLink: "https://api.whatsapp.com/send?text=https://www.geeksforgeeks.org/user/riteshmauryabtec/",
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
    ]
  },
  {
    id: 2,
    title: 'Zerodha share market - global',
    image: '',
    category: "FullStack",
    data: {
      description: `Created a responsive stock trading web application that streamlined user experience by implementing live market data and portfolio management tools, achieving positive feedback from 95% of early users during beta testing with the help of this technology HTML, CSS, Bootstrap, React.js, Node.js, MongoDB`,
      demoLink: "https://google.com/",
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
    ]
  },
  {
    id: 3,
    title: 'Tasty food-online food ordering app ',
    image: '',
    category: "FullStack",
    data: {
      description: `Developed a full-stack food ordering web application User Features. Responsive UI, menu browsing, cart management and seamless checkout Integrated Stripe Payment Gateway for secure online transactions . Optimized backend for scalability and performance.`,
      demoLink: "https://google.com/",
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
    ]
  },
 
 
  
]



export const experience = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
      },
      // {
      //   skill: "Sketch",
      //   level: "Intermediate",
      // },
      // {
      //   skill: "XD",
      //   level: "Intermediate",
      // },
      {
        skill: "Canva",
        level: "Intermediate",
      },
    ]
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
    ]
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

    ]
  },
  {
    title: "Deployement & Extra Skills",
    data: [
      {
        skill: "Vercel",
        level: "Intermediate",
      },
      {
        skill: "FireBase",
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
    ]
  },
]


export const socialHandles = [
  {
    name: "Upwork",
    icon: <SiUpwork />,
    link: "",
  },
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