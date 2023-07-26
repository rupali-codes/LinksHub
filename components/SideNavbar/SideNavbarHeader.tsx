import { FC } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GlobalContext } from 'context/GlobalContext'
import Logo from '../logo'

export const SideNavbarHeader: FC<{}> = (props) => {
  const { toggleNav } = useContext(GlobalContext)

  return (
    <header>
      <div className="flex items-center justify-between bg-[--secondary-10] p-4 dark:bg-[--secondary-200]">
        <Link href={'/'}>
          <Logo className="text-3xl" />
        </Link>
        <button
          className="h-[24px] w-[24px] dark:text-[--secondary-40] lg:hidden"
          onClick={toggleNav}
        >
          <AiOutlineClose size={24} id="hamburger" />
        </button>
      </div>
    </header>
  )
}
