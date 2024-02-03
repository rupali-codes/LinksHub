import { FC, useEffect } from 'react'
import clsx from 'clsx'

const ShortcutKey: FC = () => {
  const isMac =
    typeof navigator !== 'undefined' &&
    navigator.platform.toUpperCase().indexOf('MAC') >= 0

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 75) {
        e.preventDefault()

        const searchInput = document.getElementById(
          'simple-search'
        ) as HTMLInputElement | null

        if (searchInput) searchInput.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <span
      className={clsx(
        'absolute top-[11px] right-4 hidden sm:flex items-center justifiy-center px-2.5 py-[3px] gap-2.5 bg-white dark:bg-gray-800 rounded-md border border-zinc-400 border-opacity-40 text-zinc-400 dark:text-neutral-200 text-sm font-medium peer-focus:hidden select-none',
        isMac ? 'tracking-[2.80px]' : 'text-[12px]'
      )}
    >
      {isMac ? '⌘K' : 'Ctrl + K'}
    </span>
  )
}

export default ShortcutKey
