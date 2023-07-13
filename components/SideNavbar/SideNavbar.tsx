import { FC } from 'react'
import { useContext } from 'react'
import { GlobalContext } from 'context/GlobalContext'
import { Backdrop } from 'components/Backdrop/Backdrop'
import { SideNavbarHeader } from './SideNavbarHeader'
import { SideNavbarBody } from './SideNavbarBody'
import { createPortal } from 'react-dom'
import { SocialMediaIconsList } from 'components/SocialMedia/SocialMediaIconsList'
import useDelayUnmount from 'hooks/useDelayUnmount'

export const SideNavbar: FC<{}> = () => {
  const { sidebar, closeNav } = useContext(GlobalContext)
  const showElement = useDelayUnmount(sidebar, 300)

  if (!showElement) {
    return null
  }

  return (
    <>
      <Backdrop onClick={closeNav} className="lg:hidden" />
      {createPortal(
        <div
          className={`fixed top-0 left-0 z-[100] h-full w-[310px] transition-all lg:hidden
          ${sidebar ? 'animate-slide-in' : 'animate-slide-out'}
          `}
        >
          <SideNavbarHeader />
          <SocialMediaIconsList
            className="bg-gray-100 px-6 py-2 dark:bg-gray-900"
            showGithubButtons={true} // to show the Star & Fork Button below social media icons
          />
          <SideNavbarBody />
        </div>,
        document.getElementById('overlay-root')!
      )}
    </>
  )
}
