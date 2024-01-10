import { memo, useRef, FC } from 'react'

import { Searchbar } from 'components/Searchbar/Searchbar'
import { SideNavbarCategoryList } from 'components/SideNavbar/SideNavbarCategoryList'
const MemoizedSideNavbarCategoryList = memo(SideNavbarCategoryList)

import { useSearchReducer } from 'hooks/useSearchReducer'
import useSearchShortcut from 'hooks/useSearchShortcut'

const SideNavbarBody: FC = () => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)
  useSearchShortcut({ inputRef })

  const [searchState, dispatchSearch] = useSearchReducer()

  return (
    <div className="fixed top-0 left-0 w-full h-[calc(100vh-80px)] flex flex-col items-start px-6 py-4  gap-4 tall:gap-10 bg-white dark:bg-[#161E2C] shadow-sidebar dark:shadow-none">
      <div className="w-full flex flex-col gap-4 tall:gap-6">
        <Searchbar
          inputRef={inputRef}
          {...searchState}
          dispatchSearch={dispatchSearch}
        />
      </div>

      <div className="w-full max-h-[calc(100vh-190px)] h-full flex flex-col items-between gap-2 tall:gap-5">
        <MemoizedSideNavbarCategoryList query={searchState.categoryQuery} />
      </div>
    </div>
  )
}

export default SideNavbarBody
