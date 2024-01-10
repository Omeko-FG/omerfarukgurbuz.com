import projectsData from "@/public/data/Projects";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const OtherProjects = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center mt-24 px-3 sm:px-10">
      <div className="p-10 flex justify-center text-3xl md:text-5xl font-semibold mb-12">
        Some Of My Projects
      </div>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl">
        {projectsData.slice(4).map((project, index) => (
          <div
            key={index}
            className="article-wrapper w-full max-w-[300px] sm:max-w-[450px]"
          >
            <div className="rounded-lg container-project">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-info">
              <div className="flex-pr">
                <div className="project-title text-nowrap">{project.title}</div>
                <div className="project-hover">
                  <Link href={project.githubLink}>
                    <svg
                      className="text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      color="black"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <line y2="12" x2="19" y1="12" x1="5"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="types">
                <code className="text-indigo-500">{project.technologies}</code>
              </div>
            </div>
          </div>
        ))}
      </article>
      <div className="hidden sm:flex justify-center text-center my-12 text-sm sm:text-2xl text-gray-600 font-medium ">
        Heyy, just check my{" "}
        <BsGithub className="w-5 sm:w-8 h-5 sm:h-8 text-black hover:text-gray-500 hover:scale-105 mx-2" />{" "}
        profile for more projects 🙃.
      </div>
    </main>
  );
};

export default OtherProjects;
