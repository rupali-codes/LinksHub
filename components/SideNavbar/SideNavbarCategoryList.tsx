import { FC, useEffect, useState } from 'react'
import type { ISidebar, Category } from '../../types'
import { SideNavbarCategory } from './SideNavbarCategory'

export const SideNavbarCategoryList: FC<{
  items: ISidebar[]
  openByDefault: string
  isSearching: boolean
}> = (props) => {
  const { items, openByDefault, isSearching } = props

  const initialOpenState = items.reduce(
    (acc, item) => ({
      ...acc,
      [item.category]: openByDefault === item.category || false,
    }),
    {}
  )

  const [isItemsOpen, setIsItemsOpen] =
    useState<Record<any, boolean>>(initialOpenState)
  const [statePriorToSearch, setStatePriorToSearch] =
    useState<Record<string, boolean>>(initialOpenState)

  // console.log(isItemsOpen, openByDefault)

  useEffect(() => {
    setIsItemsOpen(
      !isSearching
        ? { ...statePriorToSearch }
        : items.reduce(
            (acc, item) => ({
              ...acc,
              [item.category]:
                isSearching || isItemsOpen[item.category] || false,
            }),
            {}
          )
    )
  }, [isSearching, items])

  /**
   * @param category the category to toggle
   * @param isOpen the current open state of the category
   * @returns void
   * @description toggle the open state of the category and closes all other categories
   */
  const handleToggle = (category: Category, isOpen: boolean) => {
    setIsItemsOpen((prev) => ({ ...prev, [category]: !isOpen }))
    console.log({ isItemsOpen })

    if (!isSearching) {
      /**
       * @description save the state of categories that are opened when not searching, to restore them when the search is closed
       */
      setStatePriorToSearch((prev) => ({ ...prev, [category]: !isOpen }))
    }
  }
  return (
    <ul className="mt-2 flex flex-col justify-center px-4 pb-24">
      {items.length !== 0 ? (
        items.map((item, index) => {
          return (
            <SideNavbarCategory
              key={index}
              item={item}
              handleToggle={handleToggle}
              isOpen={
                isSearching
                  ? isItemsOpen[item.category]
                  : statePriorToSearch[item.category] ||
                    isItemsOpen[item.category]
              }
            />
          )
        })
      ) : (
        <div className="dark:text-gray-200 text-gray-500 text-lg text-center py-2">
          No Links Found
        </div>
      )}
    </ul>
  )
}
