import { FC } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { SideNavbarElement } from './SideNavbarElement'
import type { ISidebar, Category } from '../../types'

export const SideNavbarCategory: FC<{
  item: ISidebar
  handleToggle: (category: Category, isOpen: boolean) => void
  isOpen: boolean
}> = (props) => {
  const { item, isOpen } = props

  const handleToggle = () => {
    props.handleToggle(item.category, isOpen)
  }

  const subcategoryList = item.subcategory
    .sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
    .map((list, i) => (
      <li className="-ml-0.5" key={i}>
        <SideNavbarElement {...list} />
      </li>
    ))

  return (
    <li className="relative w-full transition-all ease-in-out text-[--primary-100] dark:text-[--primary-60] dark:bg-opacity-5 hover:text-[--primary-80] dark:hover:text-[--primary-40] rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-[--primary-60]">
      <button
        className="flex w-full cursor-pointer justify-between py-2"
        onClick={handleToggle}
      >
        <h1 className="font-bold uppercase">{item.category}</h1>
        <FaAngleDown
          className={`${
            isOpen && 'rotate-180'
          } self-center transition duration-300 ease-in-out`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
          isOpen ? 'max-h-screen' : ''
        }`}
      >
        <ul className="relative ml-1 border-l-2 border-[--tertiary-5] dark:border-[--tertiary-60] -pl-0.5">
          {subcategoryList}
        </ul>
      </div>
    </li>
  )
}
