"use client"
// import React, { useEffect, useState } from 'react'
// const Navbar = () => {
//   const [navState, setNavState] = useState(false);

//   const list = [
//     "Home",
//     "About",
//     "Projects",
//     "Technic",
//     "Contact",
//   ]

//   const onNavScroll = () => {
//     if (window.scrollY > 30) {
//       setNavState(true);
//     } else {
//       setNavState(false);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", onNavScroll);

//     return () => {
//       window.removeEventListener("scroll", onNavScroll);
//     };
//   }, []);

//   return (
//       <div className='flex justify-center items-center p-10'>
//         <div className='flex gap-12'>
//           {list.map((item)=>(
//           <div className={`${!navState ? 'flex justify-center items-center text-white p-2 rounded-full hover:cursor-pointer hover:shadow-2xl text-xl font-semibold hover:bg-gray-500 hover:transition-all hover:duration-1000 active:bg-gray-400'
//           :
//           'flex justify-center items-center text-white p-2 rounded-full hover:cursor-pointer hover:shadow-2xl text-lg font-semibold hover:bg-gray-400 hover:transition-all hover:duration-1000 active:bg-gray-400' }`}>
//             {item}
//             </div>))}
//         </div>
//       </div>
//   )
// }

// export default Navbar


import "../../app/globals.css";
import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./Toggle";
import { Navigation } from "./Nav";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Navbar = () =>{
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom="100%"
      >
        <motion.div className="navbar" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
}
export default Navbar