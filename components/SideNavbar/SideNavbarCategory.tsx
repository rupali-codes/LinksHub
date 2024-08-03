import { FC, useState, useEffect, MutableRefObject } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { SideNavbarElement } from './SideNavbarElement'

import useOnClickOutside from 'hooks/useOnClickOutside'
import type { ISidebar } from '../../types'

import { Icons } from 'components/icons'

const categoriesToUppercase = ['ai'];

const capitalizeCategory =(category: string) =>{
  return category
    .split('-')
    .map(word => categoriesToUppercase.includes(word.toLowerCase())
    ? word.toUpperCase()
    : word.charAt(0).toUpperCase() + word.slice(1)
  )
  .join(' ');

}

export const SideNavbarCategory: FC<{
  categoryData: ISidebar
  expand: boolean
  listRef: MutableRefObject<HTMLUListElement | null>
}> = ({ categoryData, expand, listRef }) => {
  const [isOpen, setIsOpen] = useState(expand)
  const router = useRouter()
  const { category, subcategory } = categoryData
  const sortedSubcategoryList = subcategory
    .sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
    .map((subcategoryData, i) => (
      <li className="-ml-0.5" key={i}>
        <SideNavbarElement category={category} subcat={subcategoryData} />
      </li>
    ))

  useEffect(() => {
    setIsOpen(expand)
  }, [expand])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = async () => {
    setIsOpen(false)
    router.replace('/')
  }
  useOnClickOutside(listRef, handleClickOutside)

  return (
    <li className="w-full transition-all ease-in-out text-primary dark:text-theme-primary dark:bg-opacity-5 hover:text-theme-secondary dark:hover:text-theme-primary rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-theme-primary">
      <Link
        className="flex w-full cursor-pointer justify-between py-2"
        onClick={handleToggle}
        aria-label={`toggle ${category.toLowerCase()} category`}
        href={`/${category}`}
      >
        <h1
          className={`text-slate-500 dark:text-slate-300 text-lg font-sans font-medium w-4/5 truncate ${
            category.length < 4 ? 'uppercase' : 'capitalize'
          }`}
        >
          {capitalizeCategory(category)}
        </h1>
        <Icons.angleDown
          className={`${
            isOpen && 'rotate-180'
          } h-5 w-5 text-slate-500 dark:text-slate-300 self-center transition duration-300 ease-in-out`}
        />
      </Link>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
          isOpen ? 'max-h-screen' : ''
        }`}
      >
        <ul className="">{sortedSubcategoryList}</ul>
      </div>
    </li>
  )
}
