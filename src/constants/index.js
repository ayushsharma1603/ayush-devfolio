import project1 from "/assets/projects/project-1.webp";
import project2 from "/assets/projects/project-2.webp";
import project3 from "/assets/projects/project-3.webp";
import project4 from "/assets/projects/project-4.webp";

// export const HERO_CONTENT = `A dedicated full-stack web developer passionate about building real-world, user-focused applications. With hands-on experience in the MERN stack, TailwindCSS, and MySQL, I craft full-stack solutions that are clean, efficient, and performance-driven. Currently deepening my backend and frontend expertise through practical projects, I’m focused on contributing to impactful products and growing through real-world development challenges.`;
export const HERO_CONTENT =`I create fast, modern, and high-converting digital experiences for brands, founders, and creators.  
From websites to full applications, I focus on clean design, smooth user journeys, and strong results — helping you build a digital presence that stands out and performs.
`

export const ABOUT_TEXT = `Hi, I'm Ayush Sharma — a self-motivated and growth-oriented full-stack web developer with a strong foundation in Java, HTML, CSS, and JavaScript. Currently focused on advancing my skills in the MERN stack (MongoDB, Express.js, React.js, Node.js), I’m actively building real-world projects that go beyond learning — with the goal of solving problems, contributing to meaningful work, and laying the groundwork for scalable and impactful software products. I'm passionate about writing clean, maintainable code and continuously improving through hands-on development and collaboration..

I enjoy turning ideas into functional and responsive web applications, and I'm actively exploring backend development, clean UI design, and problem-solving through DSA. I'm seeking opportunities to apply my skills, learn from real-world challenges, and grow as a software developer.`;


export const EXPERIENCES = [
  {
    year: "Jul 2025 – Present",
    role: "Full Stack Developer | Real-Time Systems",
    company: "Independent",
    description: `Built a production-ready MERN app for real-time chat and video calling using Stream SDK. Designed scalable friend system, integrated JWT auth, REST APIs, and deployed on Render. Emphasized real-time communication, auth flows, and SDK integration.`,
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stream SDK", "Vite"],
  },
  {
    year: "Jan 2024 – Jun 2025",
    role: "Full Stack Developer | API & Server-Side Rendering",
    company: "Independent",
    description: `Developed modular apps like a weather dashboard (OpenWeatherMap API) and a file-based to-do app using EJS templates. Focused on server-side rendering, RESTful APIs, and file handling without databases.`,
    technologies: ["Node.js", "Express", "EJS", "Tailwind CSS"],
  },
  {
    year: "Jul 2025 – Aug 2025",
    role: "Frontend Developer | UI/UX & Branding",
    company: "Self-Initiated",
    description: `Designed a personal portfolio with responsive layouts, Framer Motion animations, and SEO-friendly structure using Vite and Tailwind CSS. Focused on frontend performance and smooth user experience.`,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  },
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

