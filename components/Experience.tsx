"use client";

import React from 'react'
import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'
import Image from 'next/image'
import { LucideExternalLink, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='py-20 w-full' id='experience'>
      <h1 className='heading'>
        My <span className='text-purple'>Experience</span>
      </h1>

      <div className='w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            style={{
              background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
            }}
            className='flex-1 text-white border-neutral-200 dark:border-white/[0.1] shadow-2xl'
          >
            <div className='flex flex-col p-6 md:p-10 gap-2 w-full relative overflow-hidden group'>
              
              {/* Decorative Background Glow */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-purple/10 blur-[120px] rounded-full group-hover:bg-purple/20 transition-colors duration-500" />

              {/* Header Section */}
              <div className='flex flex-col md:flex-row justify-between items-start gap-4 z-10'>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center gap-4'>
                    {/* Title size: text-3xl (fakt ek ne kami kela) */}
                    <h1 className='text-start text-2xl md:text-3xl font-bold tracking-tight'>
                      {card.title}
                    </h1>
                    <div className="w-10 h-10 bg-white rounded-full border border-white/10 overflow-hidden flex items-center justify-center">
    <Image 
      src={card.thumbnail} 
      alt="icon" 
      width={40} 
      height={40} 
      className="w-full h-full object-cover"
    />
</div>
                  </div>
                  
                  <div className='flex flex-wrap items-center gap-2 mt-3 text-sm md:text-md'>
                    <span className='px-4 py-1.5 bg-[#2D234C] text-[#CBACF9] rounded-full font-bold border border-purple/20 shadow-[0_0_15px_rgba(203,172,249,0.1)]'>
                      {card.company}
                    </span>
                    <span className='text-gray-400 font-medium ml-2'>
                      • &nbsp; {card.location} &nbsp; • &nbsp; {card.dates}
                    </span>
                  </div>
                </div>

                {/* Verify Button - Premium Look */}
                <motion.a 
                  href={card.certificateUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='relative flex items-center gap-2 px-5 py-2.5 border border-purple/30 rounded-2xl bg-[#0c0e23] overflow-hidden group/btn shadow-[0_0_20px_rgba(123,97,255,0.15)] transition-all'
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
                  <BadgeCheck className="text-[#CBACF9]" size={18} />
                  <span className='text-xs uppercase tracking-widest font-bold text-white'>Verify Experience</span>
                  <LucideExternalLink size={14} className="text-gray-500" />
                </motion.a>
              </div>

              {/* Description Bullets - text-md (balanced) */}
              <ul className='text-start text-gray-400 mt-8 space-y-4 list-none max-w-[95%] z-10'>
                {card.descBullets.map((bullet, index) => (
                  <li key={index} className='text-sm md:text-md leading-relaxed flex gap-4 group/item'>
                    <span className='text-[#CBACF9] group-hover/item:scale-125 group-hover/item:rotate-90 transition-transform duration-300'>✦</span>
                    <span className="text-white/70 group-hover:text-white transition-colors">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10 mb-8" />

              {/* Tech Stack - Circle with Individual Glow */}
              <div className='flex flex-wrap items-center gap-4 z-10'>
                {card.techStack.map((tech) => (
                  <div 
                    key={tech.id} 
                    className='relative w-12 h-12 rounded-full bg-[#10132E] border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-purple/50 group/tech'
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-purple/0 group-hover/tech:bg-purple/20 blur-md transition-all duration-300" />
                    
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className='object-contain z-10 transition-transform group-hover/tech:scale-110'
                    />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-10 scale-0 group-hover/tech:scale-100 transition-all bg-[#10132E] border border-white/10 text-[#CBACF9] text-[10px] px-2 py-1 rounded-md z-20">
                        {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

export default Experience