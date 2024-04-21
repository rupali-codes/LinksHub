import React, { FC, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { GlobalContext } from 'context/GlobalContext'
import { Icons } from 'components/icons'

const MobileBottomNav: FC = () => {
  const router = useRouter()
  const { toggleNav } = useContext(GlobalContext)

  const inActiveIconCls = 'stroke-gray-400'
  const activeIconCls = 'text-primary dark:text-white'

  const toggleSearch = () => {
    toggleNav?.()
  }

  const navLinks = [
    {
      inActiveIcon: <Icons.homeInactive className={inActiveIconCls} />,
      activeIcon: <Icons.homeActive className={activeIconCls} />,
      label: 'Home',
      href: '/',
      spaceActive: true,
    },
    {
      inActiveIcon: <Icons.saveInactive className={inActiveIconCls} />,
      activeIcon: <Icons.saveActive className={activeIconCls} />,
      label: 'Saved',
      href: '/saved',
    },
    {
      inActiveIcon: <Icons.searchInactive className={inActiveIconCls} />,
      activeIcon: <Icons.searchActive className={activeIconCls} />,
      label: 'Search',
      onClick: toggleSearch,
    },
    {
      inActiveIcon: <Icons.teamInactive className={inActiveIconCls} />,
      activeIcon: <Icons.teamActive className={activeIconCls} />,
      label: 'Team',
      href: '/contributors',
    },
  ]

  const renderLinks = () =>
    navLinks.map(({ inActiveIcon, activeIcon, label, href, onClick }, i) => {
      const checkRoute = (val: string) => router.asPath.startsWith(val)

      const isHomeActive = !checkRoute('/saved') && !checkRoute('/contributors')
      const isUrlMatched = href && checkRoute(href)
      const isActive = label === 'Home' ? isHomeActive : isUrlMatched

      const commonCls = `w-full flex items-center flex-col px-4 p-3 gap-2 font-medium  rounded-xl hover:bg-slate-100 hover:bg-opacity-50 dark:hover:bg-zinc-400 dark:hover:bg-opacity-10 ${
        isActive ? 'text-primary dark:text-white' : 'text-gray-400'
      }`

      return (
        <li key={i} className="list-none">
          {onClick ? (
            <button onClick={onClick} className={commonCls}>
              <span className="flex items-center justify-center">
                {inActiveIcon}
              </span>
              <span className="text-xs">{label}</span>
            </button>
          ) : (
            <Link href={href} className={commonCls}>
              <span className="flex items-center justify-center">
                {isActive ? activeIcon : inActiveIcon}
              </span>
              <span className="text-xs">{label}</span>
            </Link>
          )}
        </li>
      )
    })

  return (
    <div className="md:hidden -ml-4 fixed z-30 bottom-0 py-2 w-full flex gap-4 justify-evenly bg-white dark:bg-slate-800">
      {renderLinks()}
    </div>
  )
}

export default MobileBottomNav
