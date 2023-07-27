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
        `bg-[rgba(255,255,255,0.3)] h-full w-full overflow-x-hidden whitespace-nowrap transition-all ease-in dark:bg-dark dark:text-text-primary`,
        theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
      )}
    >
      <div className="bg-primary-light transiton-all w-full p-4 transition-none ease-in dark:bg-dark">
        <Searchbar {...searchState} dispatchSearch={dispatchSearch} />
      </div>
      <MemoizedSideNavbarCategoryList query={searchState.categoryQuery} />
    </div>
  )
}
