import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `A dedicated full-stack web developer passionate about building real-world, user-focused applications. With hands-on experience in the MERN stack, TailwindCSS, and MySQL, I craft full-stack solutions that are clean, efficient, and performance-driven. Currently deepening my backend and frontend expertise through practical projects, I’m focused on contributing to impactful products and growing through real-world development challenges.`;

export const ABOUT_TEXT = `Hi, I'm Ayush Sharma — a self-motivated and growth-oriented full-stack web developer with a strong foundation in Java, HTML, CSS, and JavaScript. Currently focused on advancing my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js), I’m actively building real-world projects that go beyond learning — with the goal of solving problems, contributing to meaningful work, and laying the groundwork for scalable and impactful software products. I'm passionate about writing clean, maintainable code and continuously improving through hands-on development and collaboration..

I enjoy turning ideas into functional and responsive web applications, and I'm actively exploring backend development, clean UI design, and problem-solving through DSA. I'm seeking opportunities to apply my skills, learn from real-world challenges, and grow as a software developer.`;


export const EXPERIENCES = [
  {
    year: "Jan 2024 – Present",
    role: "Full Stack Developer (Project-Based)",
    company: "Independent",
    description: `Built full-stack applications including a weather app using Express and OpenWeatherMap API, and a file-based to-do list app using Node.js and EJS. Focused on clean code practices, modular structure, and RESTful design while handling frontend and backend independently.`,
    technologies: ["Node.js", "Express", "EJS", "Tailwind CSS"],
  },
  {
    year: "July 2025 - Aug 2025",
    role: "Frontend Developer (Portfolio Project)",
    company: "Self-Initiated",
    description: `Designed and developed a responsive personal portfolio website to showcase projects and skills. Integrated smooth animations and clean layout using Tailwind CSS and Framer Motion. Deployed the site using Vercel.`,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  }
];


export const PROJECTS = [
  {
    title: "NexCall",
    image: project3, // You can replace this with a NexCall-specific image
    description:
      "NexCall is a full-stack chat and video calling application built with React and Node.js. It allows users to connect via friend requests, real-time messaging, and secure video calls using the Stream SDK. Features include JWT-based authentication, MongoDB integration, and a responsive UI built with TailwindCSS.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    link: "https://nexcall-video-calling.onrender.com/",
    target: "_blank"
  },
  {
    title: "React Portfolio Website",
    image: project2,
    description:
      "My personal portfolio built with React, TailwindCSS, and Framer Motion, showcasing my projects, skills, and contact details. It features a responsive layout, smooth animations, custom cursor effects, and an integrated EmailJS-powered contact form. Designed with performance, interactivity, and clean UI in mind.",
    technologies: ["React", "Tailwind CSS", "HTML", "CSS"],
    link: "https://ayush-devfolio.vercel.app/",
    target: "_blank"
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "A real-time weather application that fetches and displays temperature, humidity, and conditions using OpenWeatherMap API. Deployed with Vercel and Render",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    link: "https://weather-app-eight-lovat.vercel.app/",
    target: "_blank"
  },
  {
    title: "To-Do List Web App",
    image: project1,
    description:
      "A full-stack to-do list application using Node.js and EJS with file-based task storage. Features include add, edit, delete, and view, with a clean TailwindCSS interface.",
    technologies: ["Node.js", "Express", "EJS", "Tailwind CSS"],
    link: "https://github.com/ayushsharma1603/To-Do-list",
    target: "_blank"
  },

  {
    title: "Tic-Tac-Toe Game",
    image: project4,
    description:
      "A minimalist two-player Tic-Tac-Toe game developed using vanilla JavaScript, featuring robust win and draw logic. Built as a frontend-focused hobby project to practice core JS concepts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayushsharma1603.github.io/Tic-Tac-Toe/",
    target: "_blank"
  }
];



export const CONTACT = {
  email: "ayushsharmapro18@gmail.com",
};

