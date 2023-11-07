import { FC, memo, useRef } from 'react'
import { Searchbar } from 'components/Searchbar/Searchbar'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { SideNavbarCategoryList } from './SideNavbarCategoryList'
import { useSearchReducer } from 'hooks/useSearchReducer'
import useSearchShortcut from 'hooks/useSearchShortcut'
const MemoizedSideNavbarCategoryList = memo(SideNavbarCategoryList)

export const SideNavbarBody: FC = () => {
  const { theme } = useTheme()
  const [searchState, dispatchSearch] = useSearchReducer()
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)
  useSearchShortcut({ inputRef })
  return (
    <div
      className={classNames(
        `bg-[rgba(243,244,246,1)] h-full w-full overflow-x-hidden whitespace-nowrap dark:bg-dark dark:text-text-primary`,
        theme === 'light' ? 'scrollColorLight' : 'scrollColorDark'
      )}
    >
      <div className="bg-primary-light transiton-all w-full p-4 transition-none ease-in dark:bg-dark">
        <Searchbar
          inputRef={inputRef}
          {...searchState}
          dispatchSearch={dispatchSearch}
        />
      </div>
      <MemoizedSideNavbarCategoryList query={searchState.categoryQuery} />
    </div>
  )
}
