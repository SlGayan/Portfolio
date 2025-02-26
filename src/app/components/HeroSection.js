"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section>

      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-center">
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '> Hello,I`m {""}
          </span>
          <br/>

            
          <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Web developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Ui/Ux ',
                1000,
                'engineer',
                1000,
                'html ',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />


          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg'>Lorem ipsum dolor sit, amet consectetur aiji</p>
          <div>
            <button className= 'px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white  '>Hire me</button>
            <button className=' px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Downloard CV</span>
              </button>
          </div>
        </div>
        <div className='col-span-5 mt-4 place-self-center '>
          <div className='rounded-full bg-[#181818] w-[250px] h-[260px] lg:w-[400px] lg:-[400px] relative'>
            <Image
            src={'/hero-image.png'}
            width={300}
            height={300}
            alt='hero image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
            />

          </div>
          
        </div>
      </div>

    </section>
  )
}

export default HeroSection