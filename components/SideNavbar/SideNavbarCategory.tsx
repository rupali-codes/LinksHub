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

  const subcategoryList = (
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
          )
        })}
    </ul>
  )

  return (
    <li className="relative w-full transition-all ease-in-out overflow-hidden text-violet-600 dark:text-violet-400 dark:bg-opacity-5 hover:text-violet-500 dark:hover:text-violet-300 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400">
      <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"/>
      <h1 className="font-bold uppercase h-12 flex items-center">{item.category}</h1>
      <FaAngleDown className="absolute top-3.5 right-0 transition-all duration-500 ease-in-out peer-checked:rotate-180" />
      <div className="transition-all duration-500 ease-in-out overflow-auto max-h-0 peer-checked:max-h-screen">
        {subcategoryList}
      </div>
    </li>
  )
}
