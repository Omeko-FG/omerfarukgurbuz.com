import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const icons = [
  { name: "GrLinkedinOption", color: "blue" },
  { name: "BsGithub", color: "gray" },
  { name: "GrLinkedinOption", color: "" },
];

const App = () => {
  // ANİMASYONLAR
  const cardSectionTitleVariants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        delay: 0.2,
      },
    },
  };

  const cardItemVariantsRight = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
      },
    },
  };
  const cardItemVariantsLeft = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
      },
    },
  };

  return (
    <div className="grid p-2 sm:p-10 md:p-16 mt-8 sm:mt-32 gap-5 ">
      <motion.h1
        className=" font-sans grid justify-center items-center text-5xl sm:text-6xl md:text-7xl lg:text-9xl h-full"
        variants={cardSectionTitleVariants}
        initial="hidden"
        whileInView="show"
        item
      >
        <span className="block heading-line heading-line-first">
          {" "}
          Hi, I'm Omer.
        </span>
        <span className="block heading-line heading-line-second">
          A Developer
        </span>
      </motion.h1>
      <div className="relative">
        <div className="hidden md:grid my-64 left-0 absolute gap-3 z-40">
          <Link
            href="https://www.linkedin.com/in/omer-faruk-gurbuz/"
            target="_blank"
          >
            <FaLinkedinIn className="w-5 h-5 sm:w-10 sm:h-10 text-blue-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link href="https://github.com/Omeko-FG" target="_blank">
            <FiGithub className="w-5 h-5 sm:w-10 sm:h-10 text-black hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link href="mailto:gurbuzzomer@gmail.com" target="_blank">
            <BiLogoGmail className="w-5 h-5 sm:w-10 sm:h-10  hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center my-20 gap-10 lg:gap-0 relative">
          <motion.div
            className="flex justify-center"
            variants={cardItemVariantsRight}
            initial="hidden"
            whileInView="show"
            item
          >
            <Image
              className="w-1/2 sm:w-1/3 md:w-3/5 rounded-full"
              src="/images/IMG_20231001_095605.jpg"
              alt="me"
              width="1000"
              height="200"
            />
          </motion.div>
          <motion.div
            className=" flex-col justify-start"
            variants={cardItemVariantsLeft}
            initial="hidden"
            whileInView="show"
            item
          >
            <div className=" p-10 flex text-start text-3xl md:text-5xl font-semibold ">
              I'm a Full Stack Developer based on React.js and Django.
            </div>
            <div className="p-10 flex text-left justify-center mb-12 text-xl sm:text-2xl text-gray-600">
              Since beginning my journey, I've worked in software development,
              including web development, mobil development, full-stack
              development, app UI/UX, SDLC. And I'm happy with this.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
