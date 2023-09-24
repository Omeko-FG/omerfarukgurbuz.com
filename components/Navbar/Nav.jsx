"use client"
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Items = [
  { id: "0", text: "Home"},
  { id: "1", text: "About"},
  { id: "2", text: "Projects" },
  { id: "3", text: "Techs" },
  { id: "4", text: "Contact" }
];

export const Navigation = () => (
  <motion.ul className="text-black" variants={variants}>
    {Items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} />
    ))}
  </motion.ul>
);
