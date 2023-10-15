import React, { FC, useEffect, useRef, useState } from 'react'
import type { SubCategories } from '../../types'
import { sidebarData } from 'database/data'
import { SideNavbarCategory } from './SideNavbarCategory'
import { useRouter } from 'next/router'

export const SideNavbarCategoryList: FC<{
  query: string
}> = ({ query }) => {
  const categoriesList = getFilteredCategoryList(query)
  const router = useRouter()
  const [category, setCategory] = useState<string | undefined>('')
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const cat: string | undefined = router.query.category as string | undefined

    if (cat !== undefined) {
      setCategory(cat)
    }
  }, [router.pathname, router.query])

  if (categoriesList.length === 0) {
    return (
      <div className="dark:text-gray-200 text-gray-500 text-lg text-center py-2">
        No Links Found
      </div>
    )
  }

  return (
    <ul data-custom='restrict-click-outside' ref={listRef}  className="mt-2 flex flex-col justify-center px-4 pb-24">
      <React.Fragment key={query}>
        {categoriesList.map((categoryData) => (
          <SideNavbarCategory
            listRef = {listRef}
            key={categoryData.category}
            categoryData={categoryData}
            expand={query.length > 0 || category === categoryData.category}
          />
        ))}
      </React.Fragment>
    </ul>
  )
}

const getFilteredCategoryList = (query: string) => {
  const filteredResults = sidebarData.filter((sidebarItem) =>
    sidebarItem.subcategory.some((subCategory) =>
      matchSearch(subCategory, query)
    )
  )
  const mappedResults = filteredResults.map((sidebarItem) => ({
    ...sidebarItem,
    subcategory: sidebarItem.subcategory.filter((subcategory) =>
      matchSearch(subcategory, query)
    ),
  }))

  return mappedResults
}

const matchSearch = (item: SubCategories, query: string) => {
  const itemName = item.name.toLowerCase()
  const matchingResources = item.resources.filter(
    (resource: { name: string }) =>
      resource.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    query === '' ||
    itemName.includes(query.toLowerCase()) ||
    matchingResources.length > 0
  )
}
