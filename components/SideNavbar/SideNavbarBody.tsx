import { FC, useState } from 'react'
import { Searchbar } from '../Searchbar'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { SideNavbarCategoryList } from './SideNavbarCategoryList'
import { useRouter } from 'next/router'

export const SideNavbarBody: FC = () => {
  const { theme } = useTheme()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(
    (router.query.query as string) ?? ''
  )
  const [categoryQuery, setCategoryQuery] = useState(searchQuery)

  const onQueryChange = (query: string) => {
    setSearchQuery(query)
  }

  const onCategoryChange = (query: string, updateRoute = true) => {
    setCategoryQuery(query)
    if (updateRoute) {
      router.push({
        pathname: '/search',
        query: {
          query,
        },
      })
    }
  }

  return (
    <div
      className={classNames(
        `bg-base-200 h-full w-full overflow-x-hidden whitespace-nowrap transition-all ease-in dark:bg-gray-900 dark:text-gray-300`,
        theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
      )}
    >
      <div className="bg-base-200 transiton-all w-full p-4 transition-none ease-in dark:bg-gray-900">
        <Searchbar
          searchQuery={searchQuery}
          onQueryChange={onQueryChange}
          onCategoryChange={onCategoryChange}
        />
      </div>
      <SideNavbarCategoryList query={categoryQuery} />
    </div>
  )
}
