import Link from 'next/link'
import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="z-10 flex w-full items-baseline justify-center rounded-lg text-center px-2 mb-24 md:mb-0">
      <div className="text-sm leading-7 md:tracking-wide text-center text-black dark:text-theme-secondary-light">
        <div>&copy; {new Date().getFullYear()} LinksHub | MIT License </div>
        <div className="lg:flex">
          <div className="mr-1 md:-mt-2 lg:mt-0"> Developed by </div>
          <div className="md:-mt-2 lg:mt-0"></div>
          <Link
            href="https://rupalihaldiya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile of Rupali Haldiya"
          >
            <span className="underline mr-1 duration-300 transition-all hover:text-theme-secondary">
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
            <span className="underline ml-1 duration-300 transition-all hover:text-theme-secondary">
              Open Source Community
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
