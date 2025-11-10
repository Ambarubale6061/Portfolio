import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
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
      title: "Currently Building a next-gen E-commerce platform redefining online shopping.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
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
  title: "QuickCart: Modern E-Commerce Web App",
  des: "A modern e-commerce platform built with Next.js and MongoDB.",
  img: "/quick.png",
  iconLists: ["/next.svg", "/node.png", "/tail.svg", "/mongo.png"],
  link: "https://quickcart-ten-opal.vercel.app/"
    },
    {
  id: 2,
  title: "Task Manager App",
  des: "An efficient task manager to organize and track daily activities with ease.",
  img: "/taskapp.png",
  iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/node.png"],
  link: "https://task-app-nine-lovat.vercel.app/",
    },
    {
  id: 3,
  title: "Real-Time Chat App",
  des: "A real-time chat app built with React, Node.js, Socket.io, and MongoDB.",
  img: "/chatapp.png",
  iconLists: ["/socket.png", "/mongo.png", "/re.svg", "/node.png"],
  link: "https://chat-application-q7ig.onrender.com/",
    },
     {
    id: 4,
    title: "Weather App",
    des: "A real-time weather app showing temperature, humidity, and forecasts by city.",
    img: "/weather.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/api.png"],
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
  
  export const workExperience = [
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
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Backend Development",
      desc: "I develop secure, scalable, and efficient backends with Node.js, Express, and MongoDB, focusing on performance and reliability.",
      className: "md:col-span-2", // change to md:col-span-2
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