import React, { ReactNode } from 'react'
import { SideNavbar } from '../components/SideNavbar'

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <SideNavbar />
      <div className='lg:pl-[290px]'>
        {children}
      </div>
    </section>
  )
}

export default GeneralLayout