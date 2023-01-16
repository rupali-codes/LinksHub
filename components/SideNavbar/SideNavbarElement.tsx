import { useRouter } from "next/router";
import React from "react";
import { ISideNavbarElement, SubCategories } from "../../types";

export const SideNavbarElement = ({ name,url }: SubCategories) => {
  const router=useRouter()
  return (
    <button onClick={()=>router.push(url)} className="collapse py-3 w-full text-start border-b border-base-100">
      <div className="  text-md font-medium uppercase">
        {name}
      </div>
    </button>
  );
};
