import React from 'react'
import Link from "next/link"
import {BsGithub} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import { useEffect, useState } from 'react';
import projectsData from "@/public/data/Projects"

  
  const Projects = () => {
      const [isLgScreen, setIsLgScreen] = useState(false);
      useEffect(() => {
        const checkScreenSize = () => {
          setIsLgScreen(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
        return () => {
          window.removeEventListener('resize', checkScreenSize);
        };
      }, []);
    return (
      <div className='p-10 mt-24 sm:mt-40'>
        <div className='p-10 flex justify-center text-3xl md:text-5xl font-semibold mb-16'>
          Some Of My Projects
        </div>
        {projectsData.map((project, index) => (
          <div key={index} className={`grid grid-cols-1 lg:grid-cols-2  lg:bg-inherit gap-5 bg-teal-200 bg-opacity-40 rounded-3xl sm:p-10 mt-20`}>
            {index % 2 === 0 || isLgScreen===false ? (
              <>
                <div className=' my-auto'>
                  <img
                    className='rounded-3xl shadow-2xl shadow-slate-700'
                    src={project.imageUrl}
                    alt=''
                  />
                </div>
                <div className='p-10 rounded-3xl'>
                  <div className='text-start lg:text-end text-xl md:text-3xl font-bold mb-6'>
                    {project.title}
                  </div>
                  <div className='text-start lg:text-end mb-12 text-xl text-gray-600'>
                    {project.description}
                  </div>
                  <div className='text-start lg:text-end'>
                    <code>{project.technologies}</code>
                  </div>
                  <div className='flex justify-end gap-3 mt-8'>
                    <Link href={project.githubLink}>
                      <BsGithub target="_blank" className='w-10 h-10 text-black hover:text-gray-500 hover:scale-105' />
                    </Link>
                    <Link href={project.externalLink}>
                      <FiExternalLink  target="_blank" className='w-10 h-10 text-blue-500 hover:text-blue-800 hover:scale-105' />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='p-10 rounded-3xl'>
                  <div className='text-start lg:text-start text-xl md:text-3xl font-bold mb-6'>
                    {project.title}
                  </div>
                  <div className='text-start lg:text-start mb-12 text-xl text-gray-600'>
                    {project.description}
                  </div>
                  <div className='text-start lg:text-start'>
                    <code>{project.technologies}</code>
                  </div>
                  <div className='flex justify-start gap-3 mt-8'>
                    <Link href={project.githubLink} target="_blank" >
                      <BsGithub  className='w-10 h-10 text-black hover:text-gray-500 hover:scale-105' />
                    </Link>
                    <Link href={project.externalLink} target="_blank">
                      <FiExternalLink className='w-10 h-10 text-blue-500 hover:text-blue-800 hover:scale-105' />
                    </Link>
                  </div>
                </div>
                <div className='my-auto'>
                  <img
                    className='rounded-3xl shadow-2xl shadow-slate-700'
                    src={project.imageUrl}
                    alt=''
                  />
                </div>
              </>
            )}
          </div>
        ))}
        <div className='hidden sm:flex justify-center text-center my-12 text-sm sm:text-2xl text-gray-600 font-medium '>Heyy, just check my <BsGithub className='w-5 sm:w-8 h-5 sm:h-8 text-black hover:text-gray-500 hover:scale-105 mx-2' /> profile for more projects 🙃.</div>
      </div>
    );
  };
  
  export default Projects;
// const Projects = () => {
//   return (
//     <div className='p-10 mt-24 sm:mt-40'>
//         <div className='p-10 flex justify-center text-3xl md:text-5xl font-semibold mb-16'>Some Of My Projects</div>
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
//             <div className='flex justify-center'>
//                 <Link href="">
//                     <img className=' rounded-3xl shadow-2xl shadow-slate-700' src="https://user-images.githubusercontent.com/119002766/248279031-ca4c1360-ce18-4631-8628-775bc59470ef.gif" alt="" />
//                 </Link>
//             </div>
//             <div className='p-10 bg-gray-200 lg:bg-inherit rounded-e-3xl'>
//                 <div className='text-start lg:text-end text-xl md:text-3xl font-bold mb-6'>Amazon Celler Center</div>
//                 <div className='text-start lg:text-end  mb-12 text-xl text-gray-600'>Stock Apps are web applications that track financial data and manage buying and selling. They provide users with instant charts and prices.</div>
//                 <div className='text-start lg:text-end'><code>React js MUI Redux Django DRF PostgreSql</code></div>
//                 <div className='flex justify-end gap-3 mt-8'>
//                     <Link href=""><BsGithub className='w-10 h-10 text-black hover:text-gray-500 hover:scale-105'/></Link>
//                     <Link href=""><FiExternalLink className='w-10 h-10 text-blue-500 hover:text-blue-800 hover:scale-105'/></Link>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Projects