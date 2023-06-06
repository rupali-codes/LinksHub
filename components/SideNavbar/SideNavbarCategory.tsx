import { FC } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { SideNavbarElement } from './SideNavbarElement'
import type { ISidebar, Category } from '../../types'
import { AnimatePresence, motion } from 'framer-motion'

export const SideNavbarCategory: FC<{
  item: ISidebar
  handleToggle: (category: Category, isOpen: boolean) => void
  isOpen: boolean
}> = (props) => {
  const { item, isOpen } = props

  const handleToggle = () => {
    props.handleToggle(item.category, isOpen)
  }

  let subcategoryList = null

  if (props.isOpen) {
    subcategoryList = (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        exit={{ height: 0 }}
        className="overflow-hidden"
      >
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
      </motion.div>
    )
  }

  return (
    <li className="mb-2">
      <button
        className="flex justify-between w-full py-2 rounded-md cursor-pointer text-violet-600 dark:text-violet-400 dark:bg-opacity-5 hover:text-violet-500 dark:hover:text-violet-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400"
        onClick={handleToggle}
      >
        <h2 className="font-bold uppercase">{item.category}</h2>
        <FaAngleDown
          className={`${
            isOpen && 'rotate-180'
          } self-center transition duration-300 ease-in-out`}
        />
      </button>
      <AnimatePresence initial={false}>{subcategoryList}</AnimatePresence>
    </li>
  )
}
