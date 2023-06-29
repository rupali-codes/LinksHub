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
    className: 'hover:text-violet-500 transition duration-300 ease-in-out',
    size: '1.5rem',
  }

  return (
    <button
      onClick={handleThemeToggle}
      title={`Toggle dark mode (current state: ${resolvedTheme})`}
    >
      {resolvedTheme === 'dark' ? (
        <HiSun {...iconProps} className="text-gray-200" />
      ) : (
        <HiMoon {...iconProps} />
      )}
    </button>
  )
}
