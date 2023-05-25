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
          ? 'border-l-4 border-violet-500 text-violet-700 dark:text-violet-400 '
          : 'text-slate-600 dark:text-slate-400'
      } collapse w-full text-start pl-3 hover:text-violet-500 dark:hover:text-violet-300 
      focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg`}
    >
      <div className="ml-2 text-lg py-2 capitalize transition-all duration-300 hover:pl-2 dark:border-violet-500">
        {name}
      </div>
    </Link>
  )
}
