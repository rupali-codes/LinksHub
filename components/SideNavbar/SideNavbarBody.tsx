import React, { FC } from 'react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'

import { Searchbar } from '../Searchbar'
import { SideNavbarCategoryList } from './SideNavbarCategoryList'

import { useSearchReducer } from 'hooks/useSearchReducer'

const MemoizedSideNavbarCategoryList = React.memo(SideNavbarCategoryList)

export const SideNavbarBody: FC = () => {
  const { theme } = useTheme()
  const [searchState, dispatchSearch] = useSearchReducer()

  return (
    <div
      className={classNames(
        `bg-base-200 h-full w-full overflow-x-hidden whitespace-nowrap transition-all ease-in dark:bg-gray-900 dark:text-gray-300`,
        theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
      )}
    >
      <div className="bg-base-200 transiton-all w-full p-4 transition-none ease-in dark:bg-gray-900">
        <Searchbar {...searchState} dispatchSearch={dispatchSearch} />
      </div>
      <MemoizedSideNavbarCategoryList query={searchState.categoryQuery} />
    </div>
  )
}
