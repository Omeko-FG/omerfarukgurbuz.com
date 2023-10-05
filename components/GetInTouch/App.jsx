import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BiLogoUpwork } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div>
      <div className="bg-[#ecdbc1]">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="grid p-24 gap-5">
            <div className="text-center text-xl sm:text-2xl">What’s Next?</div>
            <div className="text-center text-2xl sm:text-3xl">Get In Touch</div>
            <div className="text-center text-base sm:text-lg text-gray-500">
              Have a startling idea, but don't know where to begin? Now is the
              time to put all those crazy ideas into action.
            </div>
            <div className="text-center text-2xl font-bold">
              Let's make it work
            </div>
            <div className="flex justify-center text-2xl">
              <Link href="mailto:gurbuzzomer@gmail.com">
                <button className="flex items-center p-2 bg-red-400 rounded-3xl text-white">
                  Say Hello
                  <iframe
                    className="w-10 h-10"
                    src="https://lottie.host/?file=7879de2c-897c-4dad-8f7b-32ac3bd4213e/LfdLnTffOg.json"
                  ></iframe>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <iframe
              className="w-full h-full"
              src="https://lottie.host/?file=6fb1edb4-b2d3-4cf9-bd5d-4ee88748d2ca/3xBWkxMlWo.json"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 p-10 mt-8">
          <Link href="https://github.com/Omeko-FG" target="_blank">
            <FiGithub className="w-5 h-5 sm:w-10 sm:h-10 text-gray-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/omer-faruk-gurbuz/"
            target="_blank"
          >
            <FaLinkedinIn className="w-5 h-5 sm:w-10 sm:h-10 text-gray-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link href="mailto:gurbuzzomer@gmail.com" target="_blank">
            <BiLogoGmail className="w-5 h-5 sm:w-10 sm:h-10 text-gray-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~0134cd50a514c98e1e"
            target="_blank"
          >
            <BiLogoUpwork className="w-5 h-5 sm:w-10 sm:h-10 text-gray-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=905443035254&text=Hello%20%C3%96mer%2C%20I%27ve%20checked%20out%20your%20website%20and%20would%20like%20to%20get%20in%20touch."
            target="_blank"
          >
            <BsWhatsapp className="w-5 h-5 sm:w-10 sm:h-10 text-gray-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/omer-faruk-gurbuz/"
            target="_blank"
          >
            <FiFacebook className="w-5 h-5 sm:w-10 sm:h-10 text-gray-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/omer-faruk-gurbuz/"
            target="_blank"
          >
            <BsInstagram className="w-5 h-5 sm:w-10 sm:h-10 text-gray-500 hover:text-red-500 hover:scale-105 hover:cursor-pointer" />
          </Link>
        </div>
        <div className="text-black text-base font-medium p-5">
          Handcrafted by me ©️omerfarukgurbuz
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
