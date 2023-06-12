import { FC, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { SideNavbarElement } from './SideNavbarElement';
import type { ISidebar, Category } from '../../types';

export const SideNavbarCategory: FC<{
  item: ISidebar;
  handleToggle: (category: Category, isOpen: boolean) => void;
  isOpen: boolean;
}> = (props) => {
  const { item, isOpen } = props;
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    props.handleToggle(item.category, isOpen);
    setExpanded(!isExpanded);
  };

  const subcategoryList = item.subcategory
    .sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)
    .map((list, i) => (
      <li className="-ml-0.5" key={i}>
        <SideNavbarElement {...list} />
      </li>
    ));

  return (
    <li className="relative w-full transition-all ease-in-out text-violet-600 dark:text-violet-400 dark:bg-opacity-5 hover:text-violet-500 dark:hover:text-violet-300 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400">
      <button
        className="flex w-full cursor-pointer justify-between py-2"
        onClick={handleToggle}
      >
        <h1 className="font-bold uppercase">{item.category}</h1>
        <FaAngleDown
          className={`${
            isExpanded && 'rotate-180'
          } self-center transition duration-300 ease-in-out`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
          isExpanded ? 'max-h-screen' : ''
        }`}
      >
        <ul className="relative ml-1 border-l-2 border-slate-300 dark:border-slate-700 -pl-0.5">
          {subcategoryList}
        </ul>
      </div>
    </li>
  );
};
