import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useEffect, useState } from "react";
import projectsData from "@/public/data/Projects";
import { motion } from "framer-motion";

const Projects = () => {
  const cardItemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.4,
        type: "spring",
        // damping: 3,
        // stiffness: 25,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delayChildren: 0.7,
        staggerChildren: 0.5,
      },
    },
  };

  const [isLgScreen, setIsLgScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <motion.div className="p-5 sm:p-10 md:p-16 xl:p-0 mt-24 sm:mt-40 max-w-7xl">
        <div className="p-10 flex justify-center text-3xl md:text-5xl font-semibold">
          My Featured Projects
        </div>
        {projectsData.slice(0, 4).map((project, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2  lg:bg-inherit gap-5 bg-teal-200 bg-opacity-40 rounded-3xl sm:p-10 mt-20`}
            variants={cardItemVariants}
            initial="hidden"
            whileInView="show"
            item
            container
          >
            {index % 2 === 0 || isLgScreen === false ? (
              <>
                <div className=" m-auto">
                  <img
                    className="rounded-3xl shadow-2xl shadow-slate-700"
                    src={project.imageUrl}
                    alt=""
                  />
                </div>
                <div className="p-10 rounded-3xl">
                  <div className="text-start lg:text-end text-xl md:text-3xl font-bold mb-6">
                    {project.title}
                  </div>
                  <div className="text-start lg:text-end mb-12 text-xl text-gray-600">
                    {project.description}
                  </div>
                  <div className="text-start lg:text-end">
                    <code>{project.technologies}</code>
                  </div>
                  <div className="flex justify-end gap-3 mt-8">
                    <Link href={project.githubLink} target="_blank">
                      <BsGithub className="w-10 h-10 text-black hover:text-gray-500 hover:scale-105" />
                    </Link>
                    <Link href={project.externalLink} target="_blank">
                      <FiExternalLink className="w-10 h-10 text-blue-500 hover:text-blue-800 hover:scale-105" />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-10 rounded-3xl">
                  <div className="text-start lg:text-start text-xl md:text-3xl font-bold mb-6">
                    {project.title}
                  </div>
                  <div className="text-start lg:text-start mb-12 text-xl text-gray-600">
                    {project.description}
                  </div>
                  <div className="text-start lg:text-start">
                    <code>{project.technologies}</code>
                  </div>
                  <div className="flex justify-start gap-3 mt-8">
                    <Link href={project.githubLink} target="_blank">
                      <BsGithub className="w-10 h-10 text-black hover:text-gray-500 hover:scale-105" />
                    </Link>
                    <Link href={project.externalLink} target="_blank">
                      <FiExternalLink className="w-10 h-10 text-blue-500 hover:text-blue-800 hover:scale-105" />
                    </Link>
                  </div>
                </div>
                <div className="my-auto">
                  <img
                    className="rounded-3xl shadow-2xl shadow-slate-700"
                    src={project.imageUrl}
                    alt=""
                  />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Projects;
