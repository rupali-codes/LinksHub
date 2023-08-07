import React, { ReactNode } from 'react'
import { Footer } from 'components/Footer/Footer'
import { SideNavbar } from 'components/SideNavbar/SideNavbar'
import { Header } from 'components/Header/Header'
import { Aside } from 'components/Aside/Aside'
import { SkipLink } from 'components/SkipLink/SkipLink'

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SkipLink />
      <Header />
      <SideNavbar />
      <div className="row-start-2 row-end-3 min-h-[100vh-72px] w-full bg-gray-100 dark:bg-[#101623]">
        <nav>
          <Aside />
        </nav>
        <main
          className="h-full px-4 lg:ml-[290px] lg:w-[calc(100%-290px)]"
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
