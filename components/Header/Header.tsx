import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ThemeToggler } from 'components/ThemeToggler/themeToggler'
import Button from 'components/Button'

import Logo from 'assets/logo.svg'
import { Icons } from 'components/icons'

export const Header: FC = () => {
  const router = useRouter()

  const inActiveIconCls = 'stroke-gray-400'
  const activeIconCls = 'text-primary dark:text-white'

  const navLinks = [
    {
      inActiveIcon: <Icons.teamInactive className={inActiveIconCls} />,
      activeIcon: <Icons.teamActive className={activeIconCls} />,
      label: 'Team',
      href: '/contributors',
      isDisabled: false,
    },
  ]

  const savedLink = {
    inActiveIcon: <Icons.saveInactive className={inActiveIconCls} />,
    activeIcon: <Icons.saveActive className={activeIconCls} />,
    label: 'Saved',
    href: '/saved',
    isDisabled: true,
    isActive: router.asPath.startsWith('/saved'),
  }

  const renderLinks = () =>
    navLinks.map(({ inActiveIcon, activeIcon, label, href }, i) => {
      const checkRoute = (val: string) => router.asPath.startsWith(val)

      const isHomeActive = !checkRoute('/saved') && !checkRoute('/contributors')
      const isUrlMatched = checkRoute(href)
      const isActive = label === 'Home' ? isHomeActive : isUrlMatched

      return (
        <>
          <li key={i}>
            <a
              href={href}
              className={`hover:bg-slate-100 hover:bg-opacity-50 dark:hover:bg-zinc-400 dark:hover:bg-opacity-10 flex items-center justify-start p-2 gap-2 text-base font-medium leading-5 rounded-xl ${
                isActive ? 'text-primary dark:text-white' : 'text-gray-text'
              }`}
            >
              <span className="flex items-center justify-center" title={label}>
                {isActive ? activeIcon : inActiveIcon}
              </span>
              <span>{label}</span>
            </a>
          </li>
        </>
      )
    })

  return (
    <header className="fixed top-0 left-0 z-30 row-start-1 row-end-2 h-[76px] w-screen flex items-center justify-between px-6 bg-white dark:bg-slate-800 shadow-header dark:shadow-none">
      <div className="flex gap-4 tall:gap-6">
        <Link href="/" aria-label="LinksHub Logo">
          <Logo />
        </Link>
          <Link
            href={savedLink.href}
            className={`hover:bg-slate-100 hover:bg-opacity-50 dark:hover:bg-zinc-400 dark:hover:bg-opacity-10 flex items-center justify-start p-2 gap-2 text-base font-medium leading-5 rounded-xl ${
              savedLink.isActive ? 'text-primary dark:text-white' : 'text-gray-text'
            }`}
          >
            <span className="flex items-center justify-center" title={savedLink.label}>
              {savedLink.isActive ? savedLink.activeIcon : savedLink.inActiveIcon}
            </span>
            <span>{savedLink.label}</span>
          </Link>
      </div>

      <div className="flex items-center justify-center gap-2">
        <nav className="w-full flex md:block hidden">
          <ul className="w-full flex gap-0.5 tall:gap-1">{renderLinks()}</ul>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  )
}
