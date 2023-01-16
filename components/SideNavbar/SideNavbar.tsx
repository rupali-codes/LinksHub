import classNames from "classnames";
import React, { useState } from "react";
import { data, sidebarData } from "../../database/data";
import { SideNavbarElement } from "./SideNavbarElement";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import Logo from "../logo";

export const SideNavbar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prev) => !prev);
  };

  return (
    <div className={`lg:w-[290px] bg-transparent fixed top-0 left-0 w-full p-4 lg:h-full `}>
      <div className="flex justify-between">
        <Logo className="text-3xl mb-4" />
        <ul className="inline-flex space-x-2">
          <li>
            <a title="Link to Github project (External Link)" target="_blank" rel="noopener noreferrer" href="https://github.com/rupali-codes/LinksHub">
              <IconContext.Provider value={{ className: "shared-class", size: "28" }}>
                <FaGithub />
              </IconContext.Provider>
            </a>
          </li>
        </ul>

        <label className="btn btn-circle swap swap-rotate lg:hidden">
          <input
            type="checkbox"
            onClick={toggleSidebar}
            className="lg:hidden"
          />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div
        className={classNames(
          "lg:block transition-all ease-in duration-300 h-full overflow-scroll ",
          isSidebarActive ? "block" : "hidden"
        )}
      >
        <div className=" flex flex-col justify-center gap-8">
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
