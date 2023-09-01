import Link from 'next/link'
import type { FC } from 'react'
import { useTheme } from 'next-themes'

export const Footer: FC = () => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'

  const nameStyles = `underline ${
    isDarkMode ? 'text-light-primary' : 'text-theme-secondary'
  } `

  return (
    <footer className="z-10 mb-4 flex w-full items-baseline justify-center rounded-lg py-2 backdrop-blur-md text-sm text-center px-2 py-2">
      <p className="leading-7 md:tracking-wide text-center text-black dark:text-theme-primary ">
        <span>&copy; {new Date().getFullYear()} LinksHub | </span>
        Developed by{' '}
        <Link
          href="https://rupali-codes.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile of Rupali Haldiya"
        >
          <span className={nameStyles}>Rupali Haldiya</span>
        </Link>{' '}
        and{' '}
        <Link
          href="/contributors"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="List of Contributors in LinksHub"
        >
          <span className={nameStyles + " flex justify-center"}>Open Source Community</span>
        </Link>
      </p>
    </footer>
  )
}
