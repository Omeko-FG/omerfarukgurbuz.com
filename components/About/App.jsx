import React from 'react'
import Image from 'next/image'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const App = () => {
  return (  
    <div className='grid p-2 sm:p-10 md:p-16 mt-8 sm:mt-32 gap-5 '>
        <h1 className=' font-sans grid justify-center items-center text-5xl sm:text-6xl md:text-7xl lg:text-9xl h-full'>
          <span className='block heading-line heading-line-first'> Hi, I'm Omer.</span> 
          <span className='block heading-line heading-line-second'>A Developer</span>
        </h1>
        <div className='relative'>
        <div className='hidden md:grid my-64 left-0 absolute gap-3'>
          <GrLinkedinOption className="text-blue-700 w-12 h-12" />
          <BsGithub  className="text-gray-700 w-12 h-12"/>
          <MdEmail  className="text-red-600 w-12 h-12"/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2  justify-center items-center my-20 gap-10 lg:gap-0 relative'>
          <div className='flex justify-center'>
            <Image className='w-1/2 sm:w-1/3 md:w-3/5 rounded-full' src="/images/IMG_20231001_095605.jpg" alt="me" width="1000" height="200" />
          </div>
          <div className=' flex-col justify-start'>
            <div className=' p-10 flex text-start text-3xl md:text-5xl font-semibold '>
            I'm a Full Stack Developer based on React.js and Django.
            </div>
            <div className='p-10 flex text-left justify-center mb-12 text-xl sm:text-2xl text-gray-600'>
              Since beginning my journey, I've worked in software development, including web development, mobil development, full-stack development, app UI/UX, SDLC. And I'm happy with this.
            </div>

          </div>
        </div>
       </div>
    </div>

  )
}

export default App