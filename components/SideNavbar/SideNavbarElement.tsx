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
      onClick={closeNav}
      className={`${
        router.asPath === url
          ? 'border-l-4 border-theme-primary text-theme-secondary dark:text-theme-primary '
          : 'text-text-secondary dark:text-gray-text'
      } collapse w-full text-start pl-3 hover:text-theme-secondary dark:hover:text-violet-300 
      focus-visible:outline-none focus-visible:ring focus-visible:ring-theme-primary focus-visible:rounded-lg`}
    >
      <div className="ml-2 text-lg py-2 capitalize transition-all duration-300 hover:pl-2 dark:border-theme-secondary">
        {name}
      </div>
    </Link>
  )
}
