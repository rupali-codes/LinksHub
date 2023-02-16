import { FC } from "react";
import type { ISidebar } from "../../types";
import { SideNavbarCategory } from "./SideNavbarCategory";

export const SideNavbarCategoryList: FC<{items: ISidebar[], openByDefault: string}> = (props) => {
  const { items, openByDefault } = props;

  return (
    <ul className="mt-2 flex flex-col justify-center gap-4 px-4 pb-24">
      {items.map((item, index) => {
        return (
          <SideNavbarCategory key={index} item={item} openByDefault={openByDefault} />
        );
      })}
    </ul>
  );
};