"use client"
import React from 'react'
import Image from 'next/image'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      {/* Contact Section */}
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw] text-center'>
          Ready to take <span className='text-purple'> your</span> digital presence to next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          I’d love to collaborate with you — contact me today!
        </p>
        <a href='mailto:ambarubale3333@gmail.com'>
          <MagicButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      {/* Contact Options & Form */}
      <div className='flex md:flex-row flex-col md:gap-10 gap-16 mt-16'>
        {/* Contact Options */}
        <div className='flex flex-col gap-5 md:w-1/3'>
  {/* Email */}
  <div className='contact__option p-5 bg-black-200 rounded-lg flex flex-col items-center text-center 
                  hover:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'>
    <i className='fas fa-envelope contact_icon mb-3 text-2xl text-purple-500'></i>
    <h4 className='text-white font-semibold'>Email</h4>
    <h5 className='text-white-300'>ambarubale3333@gmail.com</h5>
    <a 
      href='mailto:ambarubale3333@gmail.com' 
      target='_blank' 
      rel='noopener noreferrer' 
      className='mt-3 inline-block bg-purple-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-purple-600 hover:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'
    >
      Send a mail
    </a>
  </div>

  {/* Messenger */}
  <div className='contact__option p-5 bg-black-200 rounded-lg flex flex-col items-center text-center 
                  hover:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'>
    <i className='fab fa-facebook-messenger contact_icon mb-3 text-2xl text-purple-500'></i>
    <h4 className='text-white font-semibold'>Messenger</h4>
    <h5 className='text-white-300'>Ambar Ubale</h5>
    <a 
      href='https://m.me/ambarubale' 
      target='_blank' 
      rel='noopener noreferrer' 
      className='mt-3 inline-block bg-purple-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-purple-600 hover:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'
    >
      Send a message
    </a>
  </div>

  {/* Whatsapp */}
  <div className='contact__option p-5 bg-black-200 rounded-lg flex flex-col items-center text-center 
                  hover:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'>
    <i className='fab fa-whatsapp contact_icon mb-3 text-2xl text-green-400'></i>
    <h4 className='text-white font-semibold'>Whatsapp</h4>
    <h5 className='text-white-300'>+919579377966</h5>
    <a
      href='https://wa.me/919579377966?text=Hello%20Ambar'
      target='_blank'
      rel='noopener noreferrer'
      className='mt-3 inline-block  text-white font-semibold py-2 px-4 rounded-md shadow  hover:shadow-[0_0_15px_rgba(0,255,0,0.7)] transition-all duration-300'
    >
      Send a message
    </a>
  </div>
   </div>

        {/* Contact Form */}
       <form id='contact-form' className='flex flex-col gap-4 md:w-2/3'>
  <input
    type='text'
    name='name'
    placeholder='Your Full Name'
    required
    className='p-3 rounded-md bg-black-200 text-white border border-black-300 placeholder-white-400 
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 
               focus:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'
  />
  <input
    type='email'
    name='email'
    placeholder='Your Email'
    required
    className='p-3 rounded-md bg-black-200 text-white border border-black-300 placeholder-white-400 
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 
               focus:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'
  />
  <textarea
    name='message'
    rows={5}
    placeholder='Your Message'
    required
    className='p-3 rounded-md bg-black-200 text-white border border-black-300 placeholder-white-400 
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 
               focus:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'
  />
  <button
    type='submit'
    className='mt-4 px-6 py-3 bg-black-200 text-white font-semibold rounded-md 
               hover:bg-purple-600 hover:shadow-[0_0_15px_rgba(128,90,250,0.7)]
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 
               focus:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'
  >
    Send Message
  </button>
</form>


      </div>

      {/* Footer Bottom */}
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light text-center md:text-left
              text-white-300 hover:text-purple-500 transition-colors duration-300 cursor-default'>
              Copyright © 2025 Ambar
          </p>



        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg 
                         saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:shadow-[0_0_15px_rgba(128,90,250,0.7)] transition-all duration-300'
            >
              <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                <Image 
                  src={profile.img} 
                  alt='social-icon' 
                  width={20} 
                  height={20} 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer