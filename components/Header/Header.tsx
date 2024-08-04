import { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { ThemeToggler } from 'components/ThemeToggler/themeToggler'
import Button from 'components/Button'

import Logo from 'assets/logo.svg'
import { Icons } from 'components/icons'

export const Header: FC = () => {
  const router = useRouter()

  const iconClass =
    'text-zinc-600 group-hover:text-primary dark:text-zinc-400 dark:group-hover:text-slate-300 h-6 w-6'
  const socialIcons = [
    {
      icon: <Icons.X className={iconClass} />,
      title: 'X (Twitter)',
      href: 'https://twitter.com/linkshubdotdev',
      ariaLabel: 'Follow us on X(Twitter)',
    },
    {
      icon: <Icons.Linkedin className={iconClass} />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/linkshub-dev',
      ariaLabel: 'Follow us on LinkedIn',
    },
    {
      icon: <Icons.Discord className={iconClass} />,
      title: 'Discord',
      href: 'https://discord.com/invite/NvK67YnJX5',
      ariaLabel: 'Join the Community',
    },
    {
      icon: <Icons.GitHub className={iconClass} />,
      title: 'GitHub',
      href: 'https://github.com/rupali-codes/LinksHub',
      ariaLabel: 'Explore on GitHub',
      showOnMobile: true,
    },
  ]

  const inActiveIconCls = 'stroke-gray-400'
  const activeIconCls = 'text-primary dark:text-white'

  const navLinks = [
    {
      inActiveIcon: <Icons.saveInactive className={inActiveIconCls} />,
      activeIcon: <Icons.saveActive className={activeIconCls} />,
      label: 'Saved',
      href: '/saved',
      isDisabled: true,
    },
    {
      inActiveIcon: <Icons.teamInactive className={inActiveIconCls} />,
      activeIcon: <Icons.teamActive className={activeIconCls} />,
      label: 'Our Team',
      href: '/contributors',
      isDisabled: false,
    },
  ]

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
      </div>

      <div className="flex items-center justify-center gap-6">
        <nav className="w-full flex md:block hidden">
          <ul className="w-full flex gap-0.5 tall:gap-1">{renderLinks()}</ul>
        </nav>
        <div className="flex items-center justify-center gap-[14px]">
          {socialIcons.map(
            ({ icon, title, href, ariaLabel, showOnMobile }, i) => (
              <Link
                key={i}
                href={href}
                title={title}
                aria-label={ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  'group flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-white dark:hover:bg-opacity-20 transition-colors',
                  showOnMobile ? '' : 'hidden sm:flex'
                )}
              >
                {icon}
              </Link>
            )
          )}
          <ThemeToggler />
        </div>

        <Button
          label="Sponsor"
          icon={<Icons.heart className="h-5 w-5" />}
          variant="pale"
          link="https://github.com/sponsors/rupali-codes"
          className="hidden sm:flex"
        />
      </div>
    </header>
  )
}
