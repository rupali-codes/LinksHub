import { FC, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SideNavbarElement } from "./SideNavbarElement";
import type { ISidebar } from "../../types";

export const SideNavbarCategory: FC<{
  item: ISidebar;
  openByDefault: string;
}> = (props) => {
  const { item, openByDefault } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (openByDefault === item.category) {
      setIsOpen(true);
    }
  }, [item.category, openByDefault]);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  let subcategoryList = null;

  if (isOpen) {
    subcategoryList = (
      <ul className="relative ml-1 border-l-2 border-slate-300 dark:border-slate-700 -pl-0.5">
        {item.subcategory
          .sort((a, b) =>
            a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
          )
          .map((list, i) => {
            return (
              <li className="-ml-0.5" key={i}>
                <SideNavbarElement {...list} />
              </li>
            );
          })}
      </ul>
    );
  }

  return (
    <li className="mb-2">
      <button
        className="flex w-full cursor-pointer justify-between py-2 text-violet-600 dark:text-violet-400 dark:bg-opacity-5 hover:text-violet-500 dark:hover:text-violet-300 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400"
        onClick={handleToggle}
      >
        <h2 className="font-bold uppercase">{item.category}</h2>
        <FaAngleDown
          className={`${
            isOpen && "rotate-180"
          } self-center transition duration-300 ease-in-out`}
        />
      </button>
      {subcategoryList}
    </li>
  );
};
