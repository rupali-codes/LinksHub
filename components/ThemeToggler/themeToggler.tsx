import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Icons } from 'components/icons'

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
  const capitalizedTheme = resolvedTheme?.charAt(0).toUpperCase() + resolvedTheme.slice(1);

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
        title={`${capitalizedTheme} Theme`}
        className="group w-[32px] h-[32px] flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-white dark:hover:bg-opacity-20 transition-colors"
      >
        {resolvedTheme === 'dark' ? (
          <Icons.sun
            data-custom="restrict-click-outside"
            className="h-6 w-6 text-zinc-600 group-hover:text-primary dark:text-zinc-400 dark:group-hover:text-slate-300"
          />
        ) : (
          <Icons.moon
            data-custom="restrict-click-outside"
            className="h-6 w-6 text-zinc-600 group-hover:text-primary dark:text-zinc-400 dark:group-hover:text-slate-300"
          />
        )}
      </button>
    </HelmetProvider>
  )
}
