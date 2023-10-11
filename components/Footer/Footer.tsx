import Link from 'next/link'
import type { FC } from 'react'
import { useTheme } from 'next-themes'

export const Footer: FC = () => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'

  return (
    <footer className="z-10 mb-4 flex w-full items-baseline justify-center rounded-lg backdrop-blur-md text-center px-2">
      <div className="text-sm leading-7 md:tracking-wide text-center text-black dark:text-theme-primary ">
        <div>&copy; {new Date().getFullYear()} LinksHub | MIT License </div>
        <div className="lg:flex">
          <div className="sm: -mt-2 mr-1 md:-mt-2 lg:mt-0"> Developed by </div>
          <div className="sm: -mt-2 md:-mt-2 lg:mt-0"></div>
          <Link
            href="https://rupali-codes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile of Rupali Haldiya"
          >
            <span
              className={`underline mr-1 ${
                isDarkMode ? 'text-light' : 'text-theme-secondary'
              } `}
            >
              Rupali Haldiya
            </span>
          </Link>{' '}
          and{' '}
          <Link
            href="/contributors"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="List of Contributors in LinksHub"
          >
            <span
              className={`underline ml-1 ${
                isDarkMode ? 'text-light' : 'text-theme-secondary'
              } `}
            >
              Open Source Community
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
