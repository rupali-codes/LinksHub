import { FC } from 'react'
import { Searchbar } from '../Searchbar'
import useSidebarSearch from 'hooks/useSidebarSearch'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { SideNavbarCategoryList } from './SideNavbarCategoryList'

export const SideNavbarBody: FC<{}> = () => {
  const { theme } = useTheme()

  const { setSearch, searchResults, debouncedSearch } = useSidebarSearch()

  return (
    <div
      className={classNames(
        `bg-base-200 h-full w-full overflow-x-hidden whitespace-nowrap transition-all transition-none ease-in dark:bg-[--secondary-200] dark:text-[--secondary-40]`,
        theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
      )}
    >
      <div className="bg-base-200 transiton-all w-full p-4 transition-none ease-in dark:bg-[--secondary-200]">
        <Searchbar setSearch={setSearch} />
      </div>
      <SideNavbarCategoryList
        items={searchResults}
        isSearching={debouncedSearch.length > 0}
        openByDefault={''}
      />
    </div>
  )
}
