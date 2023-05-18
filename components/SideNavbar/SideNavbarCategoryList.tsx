import { FC, useState } from 'react'
import type { ISidebar,Category } from '../../types'
import { SideNavbarCategory } from './SideNavbarCategory'

export const SideNavbarCategoryList: FC<{
  items: ISidebar[]
  openByDefault: string
}> = (props) => {
  const { items, openByDefault } = props

  const [isItemsOpen, setIsItemsOpen] = useState(items.map((item) => openByDefault === item.category))

  /**
   * @param category the category to toggle
   * @param isOpen the current open state of the category
   * @returns void
   * @description toggle the open state of the category and closes all other categories
   */
  const handleToggle = (category:Category, isOpen:boolean) => {
    if(isOpen){
      setIsItemsOpen([...items].map(()=>false))
    } else {
      setIsItemsOpen([...items].map(item=>item.category===category?!isOpen:isOpen))
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
              openByDefault={openByDefault}
              handleToggle={handleToggle}
              isOpen={isItemsOpen[index]}
            />
          )
        })
      ) : (
        <div className="dark:text-gray-200 text-gray-500 text-lg text-center py-2">No Links Found</div>
      )}
    </ul>
  )
}
