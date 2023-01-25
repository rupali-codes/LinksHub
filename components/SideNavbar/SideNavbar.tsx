import classNames from "classnames";
import React, { useContext } from "react";
import { sidebarData } from "../../database/data";
import { SideNavbarElement } from "./SideNavbarElement";
import Logo from "../logo";
import { GlobalContext } from "../../context/GlobalContext";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const SideNavbar = () => {
  const { toggleNav, sidebar } = useContext(GlobalContext);

  return (
    <div className={`lg:w-[290px] fixed top-0 left-0 w-full h-[87px] z-[10] lg:h-full`}>
      <div className="flex bg-white p-4 justify-between dark:bg-gray-900">
        <Link href={"/"}>
          <Logo className="text-3xl mb-4" />
        </Link>

        <button
          className="relative h-[24px] w-[24px] lg:hidden dark:text-gray-300"
          onClick={toggleNav && toggleNav}
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
        className={`scrollColor z-[10] bg-white dark:bg-gray-900 dark:text-gray-300 lg:translate-x-0 lg:w-full w-[75%] p-4 transition-all whitespace-nowrap ease-in duration-300 overflow-x-hidden h-screen
         ${sidebar ? "translate-x-[0%]" : "translate-x-[-100%]"}`}
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
