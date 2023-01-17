import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ISideNavbarElement, SubCategories } from "../../types";

export const SideNavbarElement = ({ name, url }: SubCategories) => {
  const { closeNav } = useContext(GlobalContext);
  const router = useRouter();
  const handleNavigation = () => {
    router.push(url);
    closeNav&&closeNav();
  };
  return (
    <button
      onClick={handleNavigation}
      className="collapse py-3 w-full text-start border-b border-base-100"
    >
      <div className="  text-md font-medium uppercase">{name}</div>
    </button>
  );
};
