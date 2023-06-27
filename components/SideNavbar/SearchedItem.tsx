import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { SubCategories } from '../../types'

export default function SearchedItem({ name, url, categoryName }: { name:string , url:string, categoryName:string }) {
  const router = useRouter()
  const { closeNav } = useContext(GlobalContext)

  return (
    <Link
      href={url}
      target='_blank'
      onClick={closeNav}
      className={`${
        router.asPath === url
          ? 'border-l-4 border-violet-500 text-violet-700 dark:text-violet-400 '
          : 'text-slate-600 dark:text-slate-400'
      } collapse w-full text-start pl-3 hover:text-violet-500 dark:hover:text-violet-300 
      focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg hover:pl-2 transition-all`}
    >
      <div className="ml-2 text-lg pt-2 capitalize transition-all duration-300 dark:border-violet-500">
        {name}
      </div>
      <div className="ml-2 text-sm pb-1 transition-all duration-300 dark:border-violet-500">
        {categoryName}
      </div>
    </Link>
  )
}
