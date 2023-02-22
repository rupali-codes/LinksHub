import React, { useEffect, useState } from "react";
import { useTransition } from "react-transition-state";
import { FaArrowUp } from "react-icons/fa";
import { SCROLL_LIMIT } from "app/constants";

export const BackToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [{ isMounted, status }, toggle] = useTransition({
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    toggle(scrollY > SCROLL_LIMIT);
  }, [scrollY]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isMounted ? (
    <div
      className={`group fixed z-20 bottom-12 right-12 transform transition duration-300${
        status === "preEnter" || status === "exiting"
          ? " opacity-0 translate-y-3"
          : ""
      }`}
    >
      <button
        className="focus:animate-button-press rounded-full border border-white bg-violet-600 p-4 text-white shadow-xl duration-300 transition-colors focus:ring group-hover:border-dashed group-hover:border-violet-400 group-hover:bg-white dark:drop-shadow-[5px_5px_8px_rgba(124,58,237,0.25)] dark:group-hover:bg-[#101623] md:border-violet-600"
        onClick={handleClick}
      >
        <FaArrowUp className="group-hover:text-violet-500" />
      </button>
      <span className="absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 rotate-0 text-2xl transition-all duration-100 ease-in-out group-hover:ml-8 group-hover:block group-hover:rotate-45">
        👾
      </span>
    </div>
  ) : null;
};
