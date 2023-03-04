import Link from "next/link";
import { Searchbar } from "../Searchbar";
import useSidebarSearch from "hooks/useSidebarSearch";
import { createRef, useContext, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GlobalContext } from "context/GlobalContext";
import Logo from "../logo";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { SideNavbarCategoryList } from "./SideNavbarCategoryList";
import { Backdrop } from "components/Backdrop/Backdrop";

export const SideNavbar = () => {
  const { toggleNav, sidebar, openNav, closeNav } = useContext(GlobalContext);
  const { theme } = useTheme();
  const menuRef = createRef<HTMLDivElement>();
  const menuBtnRef = createRef<HTMLButtonElement>();

  // closing navbar on click
  useEffect(() => {
    const handler = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;

      if (
        sidebar &&
        !menuRef.current?.contains(target) &&
        !menuBtnRef.current?.contains(target)
      ) {
        closeNav && closeNav();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const { setSearch, searchResults } = useSidebarSearch();

  return (
    <>
      {sidebar && <Backdrop onClick={closeNav} />}
      <div
        className={`lg:w-[290px] fixed top-0 left-0 w-full h-[87px] z-[100] lg:h-full`}
      >
        <div className="flex bg-gray-100 p-4 pb-0 justify-between dark:bg-gray-900 transition-all ease-in duration-300">
          <Link href={"/"}>
            <Logo className="text-3xl mb-4" />
          </Link>

          <button
            ref={menuBtnRef}
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
              id="hamburger"
              className={`absolute left-0 top-[5%] transition-all duration-[1s] ${
                sidebar
                  ? "opacity-[1] z-[1]"
                  : "opacity-[0] rotate-[180deg] z-[-1]"
              }`}
            />
          </button>
        </div>
        <div
          ref={menuRef}
          className={classNames(
            `lg:translate-x-0 lg:w-full w-[75%] bg-base-200 transition-all whitespace-nowrap ease-in duration-300 overflow-x-hidden h-screen z-[10] dark:bg-gray-900 dark:text-gray-300`,
            sidebar ? "translate-x-[0%] " : "translate-x-[-100%]",
            theme === "light" ? "scrollColorLight" : "scrollColorDark"
          )}
        >
          <div className="sticky top-0 left-0 right-0 p-4 w-full z-10 bg-base-200 dark:bg-gray-900 transiton-all duration-300 ease-in">
            <Searchbar setSearch={setSearch} />
          </div>
          <SideNavbarCategoryList items={searchResults} openByDefault={'frontend'} />
        </div>
      </div>
    </>
  );
};
