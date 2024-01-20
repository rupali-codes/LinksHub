import { memo, useRef, FC } from 'react'
import { useRouter } from 'next/router'
import { Searchbar } from 'components/Searchbar/Searchbar'
import Button from 'components/Button'
import { SideNavbarCategoryList } from 'components/SideNavbar/SideNavbarCategoryList'
const MemoizedSideNavbarCategoryList = memo(SideNavbarCategoryList)

import QuestionMarkIcon from 'assets/icons/svg/question-mark.svg'
import HomeInActiveIcon from 'assets/icons/svg/nav/home-inactive.svg'
import HomeActiveIcon from 'assets/icons/svg/nav/home-active.svg'
import SaveInActiveIcon from 'assets/icons/svg/nav/save-inactive.svg'
import SaveActiveIcon from 'assets/icons/svg/nav/save-active.svg'
import TeamInActiveIcon from 'assets/icons/svg/nav/team-inactive.svg'
import TeamActiveIcon from 'assets/icons/svg/nav/team-active.svg'

import { useSearchReducer } from 'hooks/useSearchReducer'
import useSearchShortcut from 'hooks/useSearchShortcut'

const Sidebar: FC = () => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null)
  useSearchShortcut({ inputRef })
  const router = useRouter()

  const [searchState, dispatchSearch] = useSearchReducer()

  const inActiveIconCls = 'stroke-gray-400'
  const activeIconCls = 'fill-primary dark:fill-white'

  const navLinks = [
    {
      inActiveIcon: <HomeInActiveIcon className={inActiveIconCls} />,
      activeIcon: <HomeActiveIcon className={activeIconCls} />,
      label: 'Home',
      href: '/',
      spaceActive: true,
    },
    {
      inActiveIcon: <SaveInActiveIcon className={inActiveIconCls} />,
      activeIcon: <SaveActiveIcon className={activeIconCls} />,
      label: 'Saved',
      href: '/saved',
    },
    {
      inActiveIcon: <TeamInActiveIcon className={inActiveIconCls} />,
      activeIcon: <TeamActiveIcon className={activeIconCls} />,
      label: 'Our Team',
      href: '/contributors',
    },
  ]

  const renderLinks = () =>
    navLinks.map(({ inActiveIcon, activeIcon, label, href }, i) => {
      const checkRoute = (val: string) => router.asPath.startsWith(val)

      const isHomeActive = !checkRoute('/saved') && !checkRoute('/contributors')
      const isUrlMatched = checkRoute(href)
      const isActive = label === 'Home' ? isHomeActive : isUrlMatched

      return (
        <li key={i}>
          <a
            href={href}
            className={`w-full flex items-center justify-start px-4 p-3 gap-4 text-lg font-medium leading-5 rounded-xl hover:bg-slate-100 hover:bg-opacity-50 dark:hover:bg-zinc-400 dark:hover:bg-opacity-10 ${
              isActive ? 'text-primary dark:text-white' : 'text-gray-400'
            }`}
          >
            <span className="flex items-center justify-center">
              {isActive ? activeIcon : inActiveIcon}
            </span>
            <span>{label}</span>
          </a>
        </li>
      )
    })

  return (
    <div className="fixed bottom-0 left-0 z-30 w-[306px] h-[calc(100vh-78px)] hidden sm:flex flex-col items-start justify-between px-6 py-4 tall:py-7 gap-4 tall:gap-10 bg-white dark:bg-slate-800 shadow-sidebar dark:shadow-none">
      <div className="w-full flex flex-col gap-4 tall:gap-6">
        <Searchbar
          inputRef={inputRef}
          {...searchState}
          dispatchSearch={dispatchSearch}
        />

        <nav className="w-full flex">
          <ul className="w-full flex flex-col gap-0.5 tall:gap-1">
            {renderLinks()}
          </ul>
        </nav>
      </div>

      <div className="w-full max-h-[calc(100vh-342px)] tall:max-h-[calc(100vh-484px)] flex flex-col items-between gap-2 tall:gap-5">
        <h4 className="text-gray-400 text-base font-semibold">RESOURCES</h4>
        <MemoizedSideNavbarCategoryList query={searchState.categoryQuery} />
      </div>

      <Button
        label="Report a bug"
        icon={
          <QuestionMarkIcon className="fill-gray-400 group-hover:fill-red-500 transition-colors" />
        }
        variant="text"
        link="https://github.com/rupali-codes/LinksHub/issues/new/choose"
        className="group hover:text-red-500 dark:hover:text-red-500 hidden tall:flex"
      />
    </div>
  )
}

export default Sidebar
