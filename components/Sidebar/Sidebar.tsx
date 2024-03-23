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

      <div className="w-full max-h-[85%] 2xl:max-h-full flex flex-col items-between gap-2 pt-2 tall:gap-5">
        {/* <h4 className="text-gray-400 text-base font-semibold text-xl">RESOURCES</h4> */}
        <MemoizedSideNavbarCategoryList query={searchState.categoryQuery} />
      </div>

      <Button
        label="Report a bug"
        icon={
          <Icons.questionMark className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
        }
        variant="text"
        link="https://github.com/rupali-codes/LinksHub/issues/new/choose"
        className="group hover:text-red-500 dark:hover:text-red-500 mt-[-20px] bg-white dark:bg-slate-800 z-10"
      />
    </div>
  )
}

export default Sidebar
