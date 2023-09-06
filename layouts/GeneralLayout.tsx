import React, { ReactNode } from 'react'
import { Footer } from 'components/Footer/Footer'
import { SideNavbar } from 'components/SideNavbar/SideNavbar'
import { Header } from 'components/Header/Header'
import { Aside } from 'components/Aside/Aside'
import { SkipLink } from 'components/SkipLink/SkipLink'

import { useContext } from 'react'
import { IContext } from 'types'
import { GlobalContext } from 'context/GlobalContext'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  const { sidebar } = useContext<IContext>(GlobalContext)
  const pathname = usePathname()

  return (
    <>
      <SkipLink />
      <Header />
      <SideNavbar />
      <div
        className={`row-start-2 row-end-3 min-h-[100vh-72px] w-full bg-gray-100 dark:bg-[#101623] ${
          sidebar ? 'max-[1024px]:overflow-hidden' : ''
        }`}
      >
        <nav>
          <Aside />
        </nav>
        <main
          className={clsx(
            'h-full px-4 lg:ml-[290px] lg:w-[calc(100%-290px)]',

            pathname != '/' &&
              'lg:border-t lg:border-t-theme-primary lg:dark:border-t-theme-secondary transition-color ease-in-out duration-200'
          )}
          id="main"
        >
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default GeneralLayout
