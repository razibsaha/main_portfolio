import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, Service, Skill, SocialMediaLink, ContactInformation, TypewriterOptions, ResumeData } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b>, <b>React.js</b>, <b>Next.js</b> and <b>Framer</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>Express</b> & <b>Node Js</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust REST API using <b>Node API</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "I have been into designing for last 10 years, I use <b>Adobe XD</b>,  <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: MdOutlineDesignServices,
    title: "Graphic Design",
    about:
      "I can design flyers to poster, business card to social media stuffs",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "TailWindCSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Photographer Service",
    description:
      "A single service selling website for photographers. Can be used for any service professional",
    image_path: "/images/photographer-services.png",
    deployed_url: "https://photography-service-2f5b8.web.app/",
    github_url: "https://github.com/razibsaha/photographer-service",
    category: ["React"],
    key_techs: ["React", "React Router v6", "TailwindCSS","Firebase"],
  },
  {
    name: "Red-Ventory",
    image_path: "/images/red-ventory.png",
    deployed_url: "https://red-ventory.web.app/",
    github_url: "https://github.com/razibsaha/redventory_warehouse_management_client",
    category: ["React"],
    description:
      "Inventory Management with Admin panel, user can add product and manage them",
    key_techs: ["React", "Firebase", "Tailwind"],
  },

  {
    name: "Doctors Portal",
    image_path: "/images/doctors_portal.png",
    deployed_url: "https://doctor-portal-mern.web.app/",
    github_url: "https://github.com/razibsaha/doctor-client",
    category: ["Node", "Firebase", "MongoDB", "React"],
    description:
      "A full Clinic Booking systems for doctors and patients with payment integration",
    key_techs: [
      "React",
      "Firebase",
      "Node",
      "Express",
      "MongoDB",
      "REST API",
      "Bootstrap",
      "DaisyUI"
    ],
  },

  {
    name: "Norwegian Wood",
    image_path: "/images/norwegian_wood.png",
    deployed_url: "https://norwegian-wood.netlify.app/",
    github_url: "https://github.com/razibsaha/book-review",
    category: ["Netlify", "React"],
    description:
      "A Review showcasing website for any products and individual",
    key_techs: ["React","Bootstrap"],
  },

  {
    name: "Grand Sultan",
    image_path: "/images/grand-sultan_convention.png",
    deployed_url: "https://grand-sultan-convention-center.netlify.app/",
    github_url: "https://github.com/razibsaha/grand-sultan",
    category: ["HTML", "CSS", "Bootstrap"],
    description:
      "Website for showing information about a convention hall, it can be other organizations too",
    key_techs: ["Bootstrap","HTML","CSS"],
  },
  {
    name: "Masonry",
    image_path: "/images/masonry.png",
    deployed_url: "https://masonry-commerce.firebaseapp.com/",
    github_url: "https://github.com/razibsaha/masonry_Mern_eCommerce_Clinet",
    category: ["React","Express","Node","Firebase","MongoDB"],
    description:
      'Full(almost) Functional M.E.R.N eCommerce',
    key_techs: [
      "React",
      "Firebase Auth",
      "TailwindCSS",
    ],
  },
];

export const typewriterOptions: TypewriterOptions = {
  strings: ["front-end", "back-end", "ui/ux"],
  autoStart: true,
  loop: true,
};

export const resume: ResumeData = {
  url: "https://drive.google.com/uc?export=download&id=1Gnp64PV9SACNAqnfSI_MSM1zf72d0Xb7",
  filename: "Razib_Saha_Resume.pdf",
};

export const socialMedia: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/razibsaha/",
    icon: "FaLinkedin",
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    name: "Github",
    url: "https://github.com/razibsaha",
    icon: "FaGithub",
    hoverColor: "hover:text-[#F1502F]",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/razibsaha",
    icon: "AiOutlineDribbble",
    hoverColor: "hover:text-[#E94C88]",
  },
];

export const contactInfo: ContactInformation = {
  location: "Feni, Bangladesh",
  email: "contact@razibsaha.com",
  phone: "+8801719-881180",
};