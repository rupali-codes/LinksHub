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
  const listRef = useRef<HTMLUListElement | null>(null)

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
  // console.log('this is cat list', categoriesList)

  return (
    <ul
      data-custom="restrict-click-outside"
      ref={listRef}
      className="relative w-full flex flex-grow flex-col sc overflow-y-scroll scrollColorDarkMobile pr-4"
    >
      {categoriesList.map((categoryData) => (
        <SideNavbarCategory
          listRef={listRef}
          key={categoryData.category}
          categoryData={categoryData}
          expand={query.length > 0 || category === categoryData.category}
        />
      ))}
    </ul>
  )
}

const getFilteredCategoryList = (query: string) => {
  const normalizedQuery = query.toLowerCase().trim()

  if (!normalizedQuery) {
    return sidebarData
  }

  const filteredResults = sidebarData.filter((sidebarItem) => {
    const categoryNameMatches = sidebarItem.category
      .toLowerCase()
      .includes(normalizedQuery)

    const hasMatchingSubcategories = sidebarItem.subcategory.some(
      (subCategory) => matchSearch(subCategory, normalizedQuery)
    )

    return categoryNameMatches || hasMatchingSubcategories
  })

  // Map results to include all subcategories if the category matches
  const mappedResults = filteredResults.map((sidebarItem) => {
    const categoryNameMatches = sidebarItem.category
      .toLowerCase()
      .includes(normalizedQuery)

    return {
      ...sidebarItem,
      subcategory: categoryNameMatches
        ? sidebarItem.subcategory
        : sidebarItem.subcategory.filter((subCategory) =>
            matchSearch(subCategory, normalizedQuery)
          ),
    }
  })

  return mappedResults
}

// console.log('thsi is the filtered cat list', getFilteredCategoryList)

const matchSearch = (item: SubCategories, query: string) => {
  const itemName = item.name.toLowerCase()
  const matchingResources = item.resources.filter(
    (resource: { name: string }) => resource.name.toLowerCase().includes(query)
  )

  // Match if query matches the subcategory name or  resource
  return itemName.includes(query) || matchingResources.length > 0
}
