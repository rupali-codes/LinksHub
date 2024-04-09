import { memo, useRef, FC } from 'react'
import { Searchbar } from 'components/Searchbar/Searchbar'
import Button from 'components/Button'
import { SideNavbarCategoryList } from 'components/SideNavbar/SideNavbarCategoryList'
import { Icons } from 'components/icons'
import { useSearchReducer } from 'hooks/useSearchReducer'
import useSearchShortcut from 'hooks/useSearchShortcut'

const MemoizedSideNavbarCategoryList = memo(SideNavbarCategoryList)

const Sidebar: FC = () => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)
  useSearchShortcut({ inputRef })

  const [searchState, dispatchSearch] = useSearchReducer()

  return (
    <div className="fixed bottom-0 left-0 z-30 w-[306px] h-[calc(100vh-78px)] hidden md:flex flex-col items-start px-6 py-4 tall:py-7 gap-4 tall:gap-10 bg-white dark:bg-slate-800 shadow-sidebar dark:shadow-none">
      <div className="w-full flex flex-col gap-4 tall:gap-6">
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

export default Sidebar
