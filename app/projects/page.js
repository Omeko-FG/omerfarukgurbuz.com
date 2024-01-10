"use client";
import React from "react";
import Navbar from "@/components/Navbar/App";
import Projects from "@/components/Projects/App";
import OtherProjects from "@/components/OtherProjects/App";

const page = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <OtherProjects />
    </div>
  );
};

export default page;
