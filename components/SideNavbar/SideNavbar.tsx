import classNames from "classnames";
import React, { useContext, useState } from "react";
import { data, sidebarData } from "../../database/data";
import { SideNavbarElement } from "./SideNavbarElement";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import Logo from "../logo";
import { GlobalContext } from "../../context/GlobalContext";
import Link from "next/link";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
export const SideNavbar = () => {
  const {toggleNav,sidebar,openNav,closeNav} = useContext(GlobalContext);

  return (
    <div className={`lg:w-[290px] fixed top-0 left-0 w-full  lg:h-full `}>
      <div className="flex bg-base-300 p-4 justify-between">
        <Link href={'/'}>
        <Logo className="text-3xl mb-4" />
        </Link>
        <ul className="inline-flex space-x-2">
          <li>
            <a title="Link to Github project (External Link)" target="_blank" rel="noopener noreferrer" href="https://github.com/rupali-codes/LinksHub">
              <IconContext.Provider value={{ className: "shared-class", size: "28" }}>
                <FaGithub />
              </IconContext.Provider>
            </a>
          </li>
        </ul>

        <button
          className="relative h-[24px] w-[24px] lg:hidden"
          onClick={toggleNav&&toggleNav}
        >
          <AiOutlineMenu
            size={24}
            className={`transition-all left-0 top-[5%] duration-[.5s] absolute ${
              sidebar ? "z-[-1] opacity-[0]" : "opacity-[1] z-[1]"
            }`}
          />
          <AiOutlineClose
            size={24}
            className={`absolute left-0 top-[5%] transition-all duration-[1s] ${
              sidebar
                ? "opacity-[1] z-[1]"
                : "opacity-[0] rotate-[180deg] z-[-1]"
            }`}
          />
        </button>
      </div>
      <div
      
        className={
         `lg:translate-x-0 lg:w-full w-[75%] p-4 bg-base-300 transition-all whitespace-nowrap ease-in duration-300 overflow-x-hidden h-screen
         ${sidebar?"translate-x-[0%] ":"translate-x-[-100%]"}  scrollColor z-[10]`}
      >
        <div className=" flex flex-col justify-center gap-8 ">
          {sidebarData.map((item, index) => {
            return (
              <div key={index}>
                <h2 key={index} className="uppercase mb-3 font-bold text-xl">
                  {item.category}
                </h2>
                {item.subcategory.map((list, i) => {
                  return <SideNavbarElement key={i} {...list} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
