import { FC } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GlobalContext } from 'context/GlobalContext'
import Logo from '../logo/logo'
import { IContext } from 'types'

export const SideNavbarHeader: FC = () => {
  const { toggleNav } = useContext<IContext>(GlobalContext)

  return (
    <header>
      <div className="flex items-center justify-between bg-secondary-10 p-4 dark:bg-secondary-200">
        <Link href={'/'} aria-label="Side Navbar Header Linking with Logo">
          <Logo className="text-3xl" />
        </Link>
        <button
          className="h-[24px] w-[24px] dark:text-secondary-40 lg:hidden"
          onClick={toggleNav}
          aria-label="Toggle sidebar navigation"
        >
          <AiOutlineClose size={24} id="hamburger" />
        </button>
      </div>
    </header>
  )
}
