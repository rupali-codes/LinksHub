import { FC, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { SideNavbarElement } from './SideNavbarElement'
import type { ISidebar } from '../../types'
import Link from 'next/link'

export const SideNavbarCategory: FC<{
  categoryData: ISidebar
  expand: boolean
}> = ({ categoryData, expand }) => {
  const [isOpen, setIsOpen] = useState(expand)

  const { category, subcategory } = categoryData
  const sortedSubcategoryList = subcategory
    .sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
    .map((subcategoryData, i) => (
      <li className="-ml-0.5" key={i}>
        <SideNavbarElement {...subcategoryData} />
      </li>
    ))

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  console.log(isOpen, category)
  return (
    <li className="relative w-full transition-all ease-in-out text-theme-secondary dark:text-theme-primary dark:bg-opacity-5 hover:text-theme-secondary dark:hover:text-theme-primary rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-theme-primary">
      <Link
        className="flex w-full cursor-pointer justify-between py-2"
        onClick={handleToggle}
        aria-label="toggle category"
        href={`/${category}`}
      >
        <h1 className="font-bold uppercase">{category}</h1>
        <FaAngleDown
          className={`${
            isOpen && 'rotate-180'
          } self-center transition duration-300 ease-in-out`}
        />
      </Link>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
          isOpen ? 'max-h-screen' : ''
        }`}
      >
        <ul className="relative ml-1 border-l-2 dark:border-zinc-500 border-zinc-300 -pl-0.5">
          {sortedSubcategoryList}
        </ul>
      </div>
    </li>
  )
}
