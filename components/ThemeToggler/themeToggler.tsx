import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'

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
    className: 'hover:text-primary-60 transition duration-300 ease-in-out',
    size: '1.5rem',
  }

  return (
    <button
      onClick={handleThemeToggle}
      title={`Toggle dark mode (current state: ${resolvedTheme})`}
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === 'dark' ? (
        <HiSun
          {...iconProps}
          className="text-light-primary hover:text-primary-60 transition duration-300 ease-in-out"
        />
      ) : (
        <HiMoon
          {...iconProps}
          className="text-secondary-100 hover:text-primary-60 transition duration-300 ease-in-out"
        />
      )}
    </button>
  )
}
