import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'
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

  const iconProps = {
    className: 'hover:text-theme-primary transition duration-300 ease-in-out',
    size: '1.5rem',
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
      >
        {resolvedTheme === 'dark' ? (
          <HiSun
          data-custom='restrict-click-outside'
            {...iconProps}
            className="text-light-primary hover:text-theme-primary transition duration-300 ease-in-out"
          />
        ) : (
          <HiMoon
          data-custom='restrict-click-outside'
            {...iconProps}
            className="text-text-secondary hover:text-theme-primary transition duration-300 ease-in-out"
          />
        )}
      </button>
    </HelmetProvider>
  )
}
