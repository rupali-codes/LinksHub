import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { SubCategories } from '../../types'

export const SideNavbarElement = ({ name, url }: SubCategories) => {
  const router = useRouter()
  const { closeNav } = useContext(GlobalContext)

  return (
    <Link
      href={url}
      aria-label="Side Navbar Elements"
      onClick={closeNav}
      className={`${
        router.asPath === url
          ? 'border-l-4 border-primary-60 text-primary-80 dark:text-primary-60 '
          : 'text-secondary-100 dark:textsecondary-60'
      } collapse w-full text-start pl-3 hover:text-primary-80 dark:hover:text-primary-40 
      focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-60 focus-visible:rounded-lg`}
    >
      <div className="ml-2 text-lg py-2 capitalize transition-all duration-300 hover:pl-2 dark:border-primary-80">
        {name}
      </div>
    </Link>
  )
}
