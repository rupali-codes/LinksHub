import Link from 'next/link'
import type { FC } from 'react'
import { useTheme } from 'next-themes'

export const Footer: FC = () => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'

  return (
    <footer className="z-10 mb-4 flex w-full items-baseline justify-center rounded-lg py-2 backdrop-blur-md text-center px-2 py-2">
      <div className="text-[8px] md:text-[10px] lg:text-sm leading-7 md:tracking-wide text-center text-black dark:text-theme-primary ">
        <span>&copy; {new Date().getFullYear()} LinksHub </span>
        <div className="sm: -mt-4 md:-mt-2 lg:mt-0">
          Developed by{' '}
          <Link
            href="https://rupali-codes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile of Rupali Haldiya"
          >
            <span
              className={`underline ${
                isDarkMode ? 'text-light-primary' : 'text-theme-secondary'
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
              className={`underline ${
                isDarkMode ? 'text-light-primary' : 'text-theme-secondary'
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
