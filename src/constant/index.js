import { meta, shopify, starbucks, tesla, sk, bisag } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  swr,
  query,
  prj,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },

  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: swr,
    name: "SWR",
    type: "Frontend",
  },
  {
    imageUrl: query,
    name: "React Query",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Sketchis Designer LLP",
    icon: sk,
    iconBg: "#accbe1",
    date: "November 2021 - July 2022",
    points: [
      "Mainly Working on Developing new features for company's Projects.",
      "Using Type Script with React & Java Script with react to develop projects components.",
      "Making Reusable components so it can be reusable and speed up performance of App.",
      "By using Typescript in project it makes cleaner and easy to understand code.",
      "Have experience of working on e-commerce website and created dynamic & reusable components for it.",
      "Have experience of Dashboard and admin panel creation in React js with typescript & javascript.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "BISAG-N",
    icon: bisag,
    iconBg: "#fbc3bc",
    date: "August 2022 - present",
    points: [
      "Develop and maintain the project in ReactJs, with best practices and industrial standards",
      "Collaborated with cross-function teams, and backend-team to make the solutions to the client's requirements.",
      "Integrated Redux toolkit to make complex state management efficiently manageable in the application.",
      "Integrated ui framework like material ui, bootstrap for the component designing.",
      "Integrated Data fetching libraries for better handling of data, also integrated REST API in the application using Axios.",
      "Integrated form management libraries like React Hook Form to make form management easy.",
      "Helps team members to solve complex scenarios to complete the task on time.",
      "Actively helps in the code reviews, and feedback to enhance the code quality, helping in the code optimization of the application.",
      "Removed unused and unwanted code to increase the website performance and decrease the load time of the website.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/VishnuOjha",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vishnu-ojha/",
  },
];

export const projects = [
  {
    iconUrl: prj,
    theme: "btn-back-red",
    name: "Arrow",
    description:
      "Application is based on CRM, where you can add products in your inventory and sell the product to the client. It has designed for Heavy Machinery product renting and selling purpose.",
    // link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: prj,
    theme: "btn-back-green",
    name: "Arrow E-Commerce",
    description:
      "Contributed in this project which is E-Commerce site for selling the heavy machinery products to the client and client can see the product and choose according to their need.",
    // link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: prj,
    theme: "btn-back-orange",
    name: "Arrow Admin",
    description:
      "Developed the Admin Dashboard with react + typescript where admin can control all the user and other accounts in the dashboard.",
    // link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: prj,
    theme: "btn-back-blue",
    name: "NIS (NCC Integrated System)",
    description:
      "Contributed in this project to stand up from scratch, implemented lot's of new functionality and features, implement standard react practice with redux to manage the state in the whole application.",
    link: "https://nis.ncog.gov.in/",
  },
];
