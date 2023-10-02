import { FC } from 'react'
import { SideNavbarBody } from 'components/SideNavbar/SideNavbarBody'

export const Aside: FC = () => {
  return (
    <aside className="fixed top-[76px] left-0 z-[20] hidden h-screen w-[290px] lg:block">
      <SideNavbarBody />
    </aside>
  )
}
