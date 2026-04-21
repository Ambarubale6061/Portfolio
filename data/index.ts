// data/index.ts
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// ... baki sagle gridItems, projects tashech rahu de
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "I’m a tech enthusiast with a passion for building efficient and scalable web solutions.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
   {
  id: 5,
  title: "Building AgenticAI Studio — a multi-agent AI development environment that can plan, generate, debug, and execute code directly in the browser.",
  description: "Currently Building",
  className: "md:col-span-3 md:row-span-2",
  imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-90",
  titleClassName: "justify-center md:justify-start lg:justify-center",
  img: "/b5.svg",
  spareImg: "/grid.svg",
},
    {
      id: 6,
      title: "Let’s build the next big thing together.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
export const projects = [
    {
  id: 1,
  title: "AgenticAI Studio: Autonomous AI Coding Workspace",
  des: "A full-stack, browser-based AI coding workspace where a coordinated pipeline of agents collaborate to build, run, and debug code automatically.",
  img: "/IDE.png", 
  iconLists: ["/react.svg","/node.png","/ex.png","/mongo.png", "/ts.svg", "/tail.svg", "/supa.svg", "/vite.svg"],
  link: "https://agentic-ai-studio-chi.vercel.app/"
  },
    {
  id: 2,
  title: "Connectly: Instagram-Inspired Social Platform",
  des: "A full-stack, production-ready social media platform featuring posts, reels, stories, real-time messaging, and WebRTC calls powered by Supabase.",
  img: "/hom.png", 
  iconLists: ["/react.svg", "/ts.svg", "/supa.svg", "/tail.svg"],
  link: "https://connectly-tau.vercel.app/"
  },  
     {
  id: 3,
  title: "FutureCart: Modern eCommerce Platform",
  des: "A full-stack, real-time eCommerce solution featuring an advanced product engine, seller/admin dashboards, and seamless Supabase integration.",
  img: "/home.png", 
  iconLists: ["/react.svg", "/ts.svg", "/supa.svg", "/tail.svg", "/fram.svg"],
  link: "https://futurecart-e-commerce.vercel.app/"
  },
     {
  id: 4,
  title: "Task Manager App",
  des: "An efficient task manager to organize and track daily activities with ease.",
  img: "/taskapp.png",
  iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/node.png"],
  link: "https://task-app-nine-lovat.vercel.app/",
    },
    {
  id: 5,
  title: "QuickCart: Modern E-Commerce Web App",
  des: "A modern e-commerce platform built with Next.js and MongoDB.",
  img: "/quick.png",
  iconLists: ["/next.svg", "/node.png", "/tail.svg", "/mongo.png"],
  link: "https://quickcart-ten-opal.vercel.app/"
    },
    {
  id: 6,
  title: "Real-Time Chat App",
  des: "A real-time chat app built with React, Node.js, Socket.io, and MongoDB.",
  img: "/chatapp.png",
  iconLists: ["/socket.png", "/mongo.png", "/re.svg", "/node.png"],
  link: "https://chat-application-q7ig.onrender.com/",
    },
     {
    id: 7,
    title: "Weather App",
    des: "A real-time weather app showing temperature, humidity, and forecasts by city.",
    img: "/weather.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/vite.svg"],
    link: "https://weather-dashboard-six-steel.vercel.app/",
  },

  ];
  
  export const testimonials = [
    {
  quote:
    "Ambar is a highly dedicated full-stack developer. He has an amazing ability to turn complex problems into simple, functional solutions. Working with him is always a pleasure.",
  name: "Aniket Kolhe",
  title: "Frontend Developer",
  img: "/aniket.jpg",
    },
    {
      quote:
        "Ambar builds sleek, responsive web apps with MERN stack expertise. Always delivers clean code and smart solutions.",
      name: "Vidhan Barad",
      title: "Full Stack Developer",
      img: "/vidhan.jpg",
    },
    {
      quote:
        "Ambar is reliable, skilled, and always eager to learn new technologies. He’s the kind of developer who makes teamwork smooth and results outstanding.",
      name: "Suresh Kandelkar",
      title: "Android Developer",
      img: "/suresh.jpg",
    }
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
export const services = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: "I create clean, modern, and intuitive designs focused on delivering seamless user experiences across all platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development",
    desc: "I build fast, responsive, and visually appealing interfaces using React and Next.js, ensuring smooth and engaging user interaction.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Development",
    desc: "I develop secure, scalable, and efficient backends with Node.js, Express, and MongoDB, focusing on performance and reliability.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "API Integration & Deployment",
    desc: "I integrate RESTful APIs and deploy complete web applications on platforms like Vercel and Render, ensuring smooth functionality and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Ambarubale6061" ,
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/ambar-ubale-137214230",
    },
    {
      id: 3,
      img: "/insta.svg",
      link: "https://www.instagram.com/ambar_ubale/",
    },
    {
      id: 4,
      img: "/twit.svg",
      link: "https://x.com/UbaleAmbar?t=uCdNYaYwqr5HEIKyg9zZDw&s=09",
    },
];
  export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "JaruratCare Foundation",
    location: "Remote",
    dates: "Nov 2025 - Mar 2026",
    certificateUrl: "/Certi.pdf",
    descBullets: [
      "Built a full-stack Nurse Management System using MERN stack (React, Node.js, Express, MongoDB) and Firebase, enabling efficient staff management, data handling, and real-time updates.",
      "Developed and enhanced a WhatsApp bot system using Java and Spring Boot, implementing new features, optimizing workflows, and improving automated user interactions.",
      "Designed and contributed to multiple solo and team-based projects, collaborating with developers to deliver scalable and production-ready solutions.",
      "Developed and maintained the organization’s main website, improving UI/UX, performance, and overall user engagement.",
      "Gained hands-on experience in full-stack development, API integration, and real-world problem solving, delivering high-quality features in a collaborative environment."
    ],
    thumbnail: "/jaru.png", 
    techStack: [
      { id: 1, name: "React", img: "/re.svg" },
      { id: 2, name: "Node.js", img: "/node.png" },
      { id: 3, name: "MongoDB", img: "/mongo.png" },
      { id: 4, name: "Tailwind", img: "/tail.svg" },
      { id: 5, name: "Firebase", img: "/fir.svg" },  
      { id: 6, name: "Java", img: "/java.svg" },
      { id: 7, name: "Spring Boot", img: "/boot.png" },
      { id: 8, name: "Express", img: "/ex.png" },
      { id: 9, name: "JavaScript", img: "/js.svg" },
      { id: 10, name: "TypeScript", img: "/ts.svg" },
      { id: 11, name: "Git", img: "/git.svg" },
      { id: 14, name: "Supabase", img: "/supa.svg" },
      { id: 15, name: "Docker", img: "/dock.svg" },
      { id: 16, name: "Next.js", img: "/next.svg" },
      
    ],
  },
];