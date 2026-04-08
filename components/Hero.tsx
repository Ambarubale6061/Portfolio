import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className=' -top-40 -left-10 md:-left-32 md:-top-10 h-screen fill= "white" ' />
        <Spotlight className=' top-10 left-full md:-top-10 h-[80vh] w-[50vh] fill="purple"' />
        <Spotlight className=' top-28 left-80 h-[80vh] w-[50vw] fill="blue" ' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.3]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10"> 
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          {/* Updated Heading */}
          <TextGenerateEffect 
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Building Scalable Web Applications & Real-Time User Experiences"
          />

          {/* Updated Intro */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I’m Ambar Ubale — a passionate Full Stack Developer building modern web apps.
          </p>

          {/* Extra line (impactful but UI same spacing) */}
          <p className="text-center md:tracking-wider mb-4 text-xs md:text-base lg:text-lg text-gray-400">
            I turn ideas into fast, scalable and production-ready digital products 🚀
          </p>

          <a href="#about">
            <MagicButton 
              title="Explore My Work 🚀"
              icon={<FaLocationArrow/>}
              position="right"
            />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;