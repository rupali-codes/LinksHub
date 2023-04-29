import Link from 'next/link'
import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="z-10 mb-4 flex w-full items-baseline justify-center rounded-lg py-2 backdrop-blur-md sm:py-3">
      <p className="leading-7 tracking-wide text-center text-black dark:text-violet-500">
        <span>&copy; {new Date().getFullYear()} LinksHub | </span>
        Developed by{' '}
        <Link href="https://linkfree.io/rupali-codes" target="_blank">
          <span className="dark:text-gray-200 underline">Rupali Haldiya</span>
        </Link>{' '}
        and{' '}
        <Link
          href="https://github.com/rupali-codes/LinksHub/graphs/contributors"
          target="_blank"
        >
          <span className="dark:text-gray-200 underline">
           Open Source Community
          </span>
        </Link>
      </p>
    </footer>
  )
}
