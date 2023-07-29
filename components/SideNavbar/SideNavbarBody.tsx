import { FC } from 'react'
import { Searchbar } from '../Searchbar'
import useSidebarSearch from 'hooks/useSidebarSearch'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { SideNavbarCategoryList } from './SideNavbarCategoryList'

export const SideNavbarBody: FC = () => {
  const { theme } = useTheme()

  const { setSearch, searchResults, debouncedSearch } = useSidebarSearch()

  return (
    <div
      className={classNames(
        `bg-[rgba(255,255,255,0.3)] h-full w-full overflow-x-hidden whitespace-nowrap transition-all ease-in dark:bg-dark dark:text-text-primary`,
        theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
      )}
    >
      <div className="search-sticky-top">
        <div className="bg-light-primary transiton-all w-full p-4 transition-none ease-in dark:bg-dark">
          <Searchbar setSearch={setSearch} />
        </div>
      </div>
      <SideNavbarCategoryList
        items={searchResults}
        isSearching={debouncedSearch.length > 0}
        openByDefault={''}
      />
    </div>
  )
}
