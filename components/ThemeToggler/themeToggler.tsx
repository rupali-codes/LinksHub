import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import SunIcon from 'assets/icons/svg/sun.svg'
import MoonIcon from 'assets/icons/svg/moon.svg'

import { Helmet, HelmetProvider } from 'react-helmet-async'

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const themeColor = resolvedTheme === 'dark' ? '#0F172A' : '#F5F3FF'

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="theme-color" content={themeColor} />
        <meta name="msapplication-navbutton-color" content={themeColor} />
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={themeColor}
        />
      </Helmet>
      <button
        onClick={handleThemeToggle}
        title={`Theme ${resolvedTheme}`}
        className="group w-[32px] h-[32px] flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-white dark:hover:bg-opacity-20 transition-colors"
      >
        {resolvedTheme === 'dark' ? (
          <SunIcon
            data-custom="restrict-click-outside"
            className="fill-zinc-600 group-hover:fill-primary dark:fill-zinc-400 dark:group-hover:fill-slate-300"
          />
        ) : (
          <MoonIcon
            data-custom="restrict-click-outside"
            className="fill-zinc-600 group-hover:fill-primary dark:fill-zinc-400 dark:group-hover:fill-slate-300"
          />
        )}
      </button>
    </HelmetProvider>
  )
}
