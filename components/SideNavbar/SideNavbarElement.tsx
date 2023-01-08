import React from "react";
import { ISideNavbarElement } from "../../types";

export const SideNavbarElement = ({ title }: ISideNavbarElement) => {
  return (
    <div className="collapse border-b border-base-100">
      <div className="collapse-title text-md font-medium uppercase">
        {title}
      </div>
    </div>
  );
};
