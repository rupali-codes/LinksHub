import { FC, useContext } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from 'components/logo/logo'
import { GlobalContext } from 'context/GlobalContext'
import { ThemeToggler } from '../ThemeToggler/themeToggler'
import { TopBar } from '../TopBar/TopBar'
import { SocialMediaIconsList } from 'components/SocialMedia/SocialMediaIconsList'

export const Header: FC = () => {
  const { toggleNav } = useContext(GlobalContext)

  return (
    <header className="fixed top-0 left-0 z-30 row-start-1 row-end-2 flex h-[76px] w-screen items-center justify-between bg-light-primary dark:bg-dark border-b border-b-light-primary dark:border-b-dark-primary">
      <div className="bg-light-primary h-full w-fit flex-none px-6 py-4 dark:bg-dark lg:w-[290px]">
        <Link href="/" aria-label="LinksHub Logo">
          <Logo className="text-3xl" />
        </Link>
      </div>
      <div className="bg-light-primary relative h-full grow px-8 dark:bg-dark lg:dark:bg-dark-primary">
        <TopBar className="absolute left-8 hidden h-full md:flex" />
        <div
          data-custom="restrict-click-outside"
          className="absolute right-8 flex h-full gap-4"
        >
          <SocialMediaIconsList className="hidden lg:flex" />
          <ThemeToggler />
          <button
            className="dark:text-text-primary lg:hidden"
            onClick={toggleNav}
            aria-label="toggle button"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
