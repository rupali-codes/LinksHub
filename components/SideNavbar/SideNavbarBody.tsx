import { FC } from 'react'
import { Searchbar } from '../Searchbar'
import useSidebarSearch from 'hooks/useSidebarSearch'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { SideNavbarCategoryList } from './SideNavbarCategoryList'
import { sidebarData } from '../../database/data'
import SearchedItem from './SearchedItem'

export const SideNavbarBody: FC<{}> = () => {
  const { theme } = useTheme()

  const { setSearch, searchResults, debouncedSearch } = useSidebarSearch()

  return (
    <div
      className={classNames(
        `bg-base-200 h-full w-full overflow-x-hidden whitespace-nowrap transition-all transition-none ease-in dark:bg-gray-900 dark:text-gray-300`,
        theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
      )}
    >
      <div className="bg-base-200 transiton-all w-full p-4 transition-none ease-in dark:bg-gray-900">
        <Searchbar setSearch={setSearch} />
      </div>
      { debouncedSearch.length === 0 ? 
      (
        <SideNavbarCategoryList
          items={sidebarData}
          isSearching={false}
          openByDefault={''}
        />
      ) : (
        <ul className="relative ml-1 border-l-2 border-slate-300 dark:border-slate-700 -pl-0.5">
          {searchResults.length > 0 ? searchResults.map( (result ,index) => (
            <SearchedItem
              key={index}
              name={result.name}
              url={result.url}
              categoryName={result.subcategory}
            />
          )) : (
            <div className="dark:text-gray-200 text-gray-500 text-lg text-center py-2">
              No Links Found
            </div>
          )}
        </ul>
      )}
    </div>
  )
}
