import { FC } from "react";
import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";
import { Backdrop } from "components/Backdrop/Backdrop";
import { SideNavbarHeader } from "./SideNavbarHeader";
import { SideNavbarBody } from "./SideNavbarBody";
import { createPortal } from "react-dom";
import { SocialMediaIconsList } from "components/SocialMedia/SocialMediaIconsList";

export const SideNavbar:FC<{}> = () => {
  const { sidebar, closeNav } = useContext(GlobalContext);

  if (!sidebar) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={closeNav} className="lg:hidden" />
      {createPortal(
        <div
          className={`fixed top-0 left-0 z-[100] h-full w-[75%] lg:hidden`}
        >
          <SideNavbarHeader />
          <SocialMediaIconsList className="bg-gray-100 px-6 py-2 dark:bg-gray-900" />
          <SideNavbarBody />
        </div>, document.getElementById('overlay-root')!
      )}
    </>
  );
};
