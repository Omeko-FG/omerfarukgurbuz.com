"use client"
import Navbar from "@/components/Navbar/App";
import About from "@/components/About/App";
import Technic from "@/components/Technic/App";
import SmoothScroll from "./SmoothScroll";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
  return(
    <div>
    <motion.div className="progress-bar" style={{ scaleX }} />
      <div><Navbar/></div>  
      <SmoothScroll>
        <About/>
        <Technic/>
      </SmoothScroll>
    </div>
  )
}