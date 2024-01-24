import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { SubCategories } from '../../types'
import { usePagination } from '../../hooks/usePagination'

export const SideNavbarElement: FC<{
  category: string
  subcat: SubCategories
}> = ({ category, subcat }) => {
  const router = useRouter()
  const { name, url } = subcat
  const { closeNav } = useContext(GlobalContext)
  const { handlePageChange } = usePagination()
  const path = `/${category}${url}`

  return (
    <Link
      href={path}
      aria-label="Side Navbar Elements"
      onClick={() => {
        handlePageChange(1)
      }}
      className={`${
        router.asPath === path
          ? 'border-l-4 border-theme-primary text-theme-secondary dark:text-theme-primary'
          : 'text-gray-400'
      } collapse w-full text-start pl-3 hover:text-theme-secondary dark:hover:text-violet-300 
      focus-visible:outline-none focus-visible:ring focus-visible:ring-theme-primary focus-visible:rounded-lg`}
    >
      <div
        className="ml-2 py-2 text-base font-medium font-sans capitalize transition-all duration-300 hover:pl-2 dark:border-theme-secondary"
        onClick={closeNav}
      >
        {name}
      </div>
    </Link>
  )
}
