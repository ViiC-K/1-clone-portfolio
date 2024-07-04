"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs } from "@/components/ui/tabs";

const about = [
  {
    title: "About me",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit, iure perferendis dolores error iusto.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "IVIC",
      },
      {
        fieldName: "Phone",
        fieldValue: "086-3822853",
      },
      {
        fieldName: "Experience",
        fieldValue: "12+ Years",
      },
      {
        fieldName: "Skype",
        fieldValue: "IVIC1313",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Thai",
      },
      {
        fieldName: "Email",
        fieldValue: "viickub@gamil.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "English , Thai",
      },
    ],
  },
];
const expreience = {
  icon: "/assets/resume/dadge.svg",
  title: " My expreience ",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptas ad dolores optio ipsam labore?",
  items: [
    {
      compoany: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      compoany: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      compoany: "E-commerce Startup",
      position: "Freekance Web Developer",
      duration: "2020 - 2021",
    },
    {
      compoany: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      compoany: "Digital Agency",
      position: "UX/UI Designer",
      duration: "2018 - 2019",
    },
    {
      compoany: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: " My education ",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptas ad dolores optio ipsam labore?",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course ",
      degree: "Programing Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Deploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam eius, voluptates dignissimos consequatur dolor est.",
  skillLIst: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <div>
      Resume
      <Tabs />
      <FaHtml5 />
    </div>
  );
};

export default Resume;
