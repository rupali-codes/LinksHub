import { FC, useContext } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "components/logo";
import { GlobalContext } from "context/GlobalContext";
import { ThemeToggler } from "../ThemeToggler/themeToggler";
import { TopBar } from "../TopBar/TopBar";
import { SocialMediaIconsList } from "components/SocialMedia/SocialMediaIconsList";

export const Header:FC<{}> = () => {
  const { toggleNav } = useContext(GlobalContext);

  return (
    <header className="md:shadow-black-500/50 fixed top-0 left-0 z-30 row-start-1 row-end-2 flex h-[76px] w-screen justify-between bg-gray-100 py-4 dark:bg-gray-900 md:shadow-xl">
      <div className="ml-6 flex md:gap-8 lg:gap-36">
        <Link href={"/"}>
          <Logo className="text-3xl" />
        </Link>
        <TopBar className="hidden md:flex md:items-center" />
      </div>
      <div className="flex items-center justify-end gap-4 pr-8">
        <SocialMediaIconsList className={"hidden lg:flex"} />
        <ThemeToggler />
        <button
          className="dark:text-gray-300 lg:hidden"
          onClick={toggleNav}
        >
          <AiOutlineMenu
            size={24}
          />
        </button>
      </div>
    </header>
  )
}
