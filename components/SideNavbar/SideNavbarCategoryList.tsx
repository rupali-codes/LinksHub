import { FC } from 'react'
import type { ISidebar } from '../../types'
import { SideNavbarCategory } from './SideNavbarCategory'

export const SideNavbarCategoryList: FC<{
  items: ISidebar[]
  openByDefault: string
}> = (props) => {
  const { items, openByDefault } = props
  console.log('items', items)
  return (
    <ul className="mt-2 flex flex-col justify-center px-4 pb-24">
      {items.length !== 0 ? (
        items.map((item, index) => {
          return (
            <SideNavbarCategory
              key={index}
              item={item}
              openByDefault={openByDefault}
            />
          )
        })
      ) : (
        <div className="text-slate-500 py-2">No Links Found</div>
      )}
    </ul>
  )
}
