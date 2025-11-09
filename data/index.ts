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
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an E-commerce platform with CMS",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
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
      title: "Blogger: Enhanced blog creation and management.",
      des: "Discover Blogger, your go-to web application for effortlessly creating and managing blog posts,Built with Next.js",
      img: "/blog.png",
      iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/fm.svg"],
      link: "https://bloggerv1.vercel.app/",
    },
    {
      id: 2,
      title: "Youtube2.0 : A Youtube Clone",
      des: "Experience seamless video streaming and sharing with Youtube2.0,for a captivating user experience.",
      img: "/ytube.png",
      iconLists: ["/next.svg", "/tail.svg", "/stream.svg"],
      link: "https://ytube2.vercel.app/",
    },
    {
      id: 3,
      title: "iNotebook: Effortless notes management.",
      des: "A cloud-based app for seamless note management, allowing you to create, organize, and access your notes anytime, anywhere.",
      img: "/inotebook.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://notebook-cloud.vercel.app/",
    },
    {
      id: 4,
      title: "Driving school app for fluid learning.",
      des: "This app also tracks and displays daily progress, offering a comprehensive view of monthly routines",
      img: "/driving.png",
      iconLists: ["/next.svg", "/tail.svg", "/re.svg"],
      link: "https://github.com/Dev-Tanu/DrivingApp",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Tanaya was a seamless and rewarding experience. Her in-depth knowledge of both front-end and back-end development, combined with a keen eye for detail, ensured our project met the highest standards.Her ability to integrate complex functionalities while maintaining a user-friendly interface was particularly impressive.",
      name: "Revati",
      title: "UI/UX Developer",
      img: "/revati2.jpg",
    },
    {
      quote:
        "Tanaya brought an exceptional level of expertise and creativity to our project. Her mastery of full stack development, along with her sharp focus on user experience, made a significant impact on the final product. Her collaborative spirit and commitment to excellence were evident throughout our collaboration",
      name: "Adinath Shelke",
      title: "Full Stack developer ",
      img: "/adi3.jpg",
    },
    {
      quote:
        "Collaborating with Tanaya was an absolute delight. Her proficiency in both front-end and back-end development, resulted in a project that exceeded our expectations.Tanaya has a remarkable talent for merging sophisticated functionalities with an intuitive user experience. Her proactive communication and dedication to the project were commendable.",
      name: "Kalyani Joshi",
      title: "Freelancer",
      img: "/kalyani.jpg",
    },
    
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
      title: "React developer Intern",
      desc: "Built seamless and functional web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Developer Intern",
      desc: "Designed and Developed company's website as web developer intern at inspirizon",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "collaborated for the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Dev-Tanu" ,
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/tanaya-morgaonkar-6a2a77218",
    },
  ];