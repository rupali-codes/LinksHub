import { FC, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SideNavbarElement } from "./SideNavbarElement";
import type { ISidebar } from "../../types";

export const SideNavbarCategory: FC<{item: ISidebar, openByDefault: string}> = (props) => {
  const { item, openByDefault } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (openByDefault === item.category) {
      setIsOpen(true);
    }
  }, [item.category, openByDefault]);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  }

  let subcategoryList = null;

  if (isOpen) {
    subcategoryList = (
      <ul>
      {item.subcategory
        .sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
        )
        .map((list, i) => {
          return <li key={i}><SideNavbarElement {...list} /></li>;
        })}
      </ul>
    );
  }

  return (
    <li>
      <button 
        className="flex w-full cursor-pointer justify-between py-2 hover:text-violet-500 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-500" 
        onClick={handleToggle}
      >
        <h2 className="text-xl font-bold uppercase">
          {item.category}
        </h2>
        <FaAngleDown className={`${isOpen && 'rotate-180'} self-center transition duration-300 ease-in-out`}/>  
      </button>
      {subcategoryList}
    </li>
  );
}
