import { FC, useContext } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from 'components/logo'
import { GlobalContext } from 'context/GlobalContext'
import { ThemeToggler } from '../ThemeToggler/themeToggler'
import { TopBar } from '../TopBar/TopBar'
import { SocialMediaIconsList } from 'components/SocialMedia/SocialMediaIconsList'

export const Header: FC<{}> = () => {
  const { toggleNav } = useContext(GlobalContext)

  return (
    <header className="fixed top-0 left-0 z-30 row-start-1 row-end-2 flex h-[76px] w-screen items-center justify-between">
      <div className="bg-base-200 h-full w-fit flex-none px-6 py-4 dark:bg-gray-900 lg:w-[290px]">
        <Link href="/">
          <Logo className="text-3xl" />
        </Link>
      </div>
      <div className="bg-base-200 relative h-full grow px-8 dark:bg-gray-900 lg:bg-gray-100 lg:dark:bg-[#101623]">
        <TopBar className="absolute left-8 hidden h-full md:flex" />
        <div className="absolute right-8 flex h-full gap-4">
          <SocialMediaIconsList className="hidden lg:flex" />
          <ThemeToggler />
          <button className="dark:text-gray-300 lg:hidden" onClick={toggleNav}>
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
