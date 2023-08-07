import { FC } from 'react'
import { Searchbar } from 'components/Searchbar/Searchbar'
import useSidebarSearch from 'hooks/useSidebarSearch'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { SideNavbarCategoryList } from './SideNavbarCategoryList'

export const SideNavbarBody: FC = () => {
  const { theme } = useTheme()
  const { setSearch, searchResults, debouncedSearch } = useSidebarSearch()

  return (
    <div className="bg-[rgba(255,255,255,0.3)] w-full overflow-x-hidden whitespace-nowrap transition-all ease-in dark:bg-dark dark:text-text-primary">
      <div className="bg-light-primary p-4 pt-0 transition-all ease-in dark:bg-dark">
        <Searchbar setSearch={setSearch} />
      </div>

      <div
        className={classNames(
          theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
        )}
        style={{ maxHeight: 'calc(100vh - 4rem)' }}
      >
        <SideNavbarCategoryList
          items={searchResults}
          isSearching={debouncedSearch.length > 0}
          openByDefault={''}
        />
      </div>
    </div>
  )
}
