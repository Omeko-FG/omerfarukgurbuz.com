"use client";
import "../../app/globals.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Menu } from "./Menu";
import Link from "next/link";
import list from "@/public/data/Navlink";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.7 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { duration: 0.5 },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <div className=" flex justify-center p-10">
        <div
          className={`${
            !navState
              ? "flex sm:gap-12 justify-center  p-10  bg-opacity-50 fixed z-50 top-0  w-full backdrop-blur-xl transition-all duration-1000 "
              : "flex sm:gap-12  justify-center p-5 bg-slate-300 bg-opacity-50 fixed z-50 w-full lg:w-6/12 rounded-none lg:rounded-full top-0 lg:top-3 backdrop-blur-3xl transition-all duration-700 "
          }`}
        >
          {list.map((item) => (
            <Link
              href={`/${item.section}`}
              className={`${
                !navState
                  ? "flex navlink justify-center items-center p-2  rounded-full hover:cursor-pointer hover:shadow-2xl text-sm sm:text-xl font-semibold transition-all duration-500 focus:bg-gray-400"
                  : "flex  justify-center items-center text-white transition-all duration-1000 p-2 rounded-full hover:cursor-pointer hover:shadow-2xl text-sm sm:text-xl font-semibold  "
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* //! Hamburger Icon şimdilik yapılmayacak 2 dosya daha ve css var */}
      {/* <div className="hidden">
        <Menu />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div> */}
    </div>
  );
}
