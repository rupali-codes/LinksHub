import Link from 'next/link'
import type { FC } from 'react'
import { useTheme } from 'next-themes'

export const Footer: FC = () => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'

  const nameStyles = `underline ${
    isDarkMode ? 'text-gray-200' : 'text-violet-700'
  } `

  return (
    <footer className="z-10 mb-4 flex w-full items-baseline justify-center rounded-lg py-2 backdrop-blur-md sm:py-3">
      <p className="leading-7 tracking-wide text-center text-black dark:text-violet-400">
        <span>&copy; {new Date().getFullYear()} LinksHub | </span>
        Developed by{' '}
        <Link
          href="https://linkfree.io/rupali-codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={nameStyles}>Rupali Haldiya</span>
        </Link>{' '}
        and{' '}
        <Link href="/contributors" rel="noopener noreferrer">
          <span className={nameStyles}>Open Source Community</span>
        </Link>
      </p>
    </footer>
  )
}
