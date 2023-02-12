import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { SCROLL_LIMIT } from "app/constants";

export const BackToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);

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

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (scrollY > SCROLL_LIMIT) {
    return (
      <div className="group fixed bottom-12 right-12 z-20">
        <button
          className="focus:animate-button-press rounded-full border border-white bg-violet-600 p-4 text-white shadow-xl focus:ring group-hover:border-dashed group-hover:border-violet-400 group-hover:bg-white dark:drop-shadow-[5px_5px_8px_rgba(124,58,237,0.25)] dark:group-hover:bg-[#101623] md:border-violet-600"
          onClick={handleClick}
        >
          <FaArrowUp className="group-hover:text-violet-500" />
        </button>
        <span className="absolute left-1/2 top-1/2 -z-10 hidden -translate-x-1/2 -translate-y-1/2 rotate-0 text-2xl transition-all duration-100 ease-in-out group-hover:ml-8 group-hover:block group-hover:rotate-45">
          👾
        </span>
      </div>
    );
  }

  return null;
};
