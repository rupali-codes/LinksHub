import useSearch from './useSearch'
import { sidebarData } from '../database/data'
import { useEffect, useState } from 'react'

function useSidebarSearch() {
  const { setSearch, debouncedSearch } = useSearch()
  const [searchResults, setSearchResults] = useState(sidebarData)

  useEffect(() => {
    const results = sidebarData
      .filter(
        (sidebarData) =>
          sidebarData.subcategory.filter((sc) =>
            debouncedSearch.length < 1
              ? true
              : sc.name.toLowerCase().includes(debouncedSearch.toLowerCase())
          ).length > 0
      )
      .map((sidebarData) => {
        return {
          ...sidebarData,
          subcategory: sidebarData.subcategory.filter((sc) =>
            debouncedSearch.length < 1
              ? true
              : sc.name.toLowerCase().includes(debouncedSearch.toLowerCase())
          ),
        }
      })
    setSearchResults(results)
  }, [debouncedSearch])

  return { setSearch, searchResults, debouncedSearch }
}

export default useSidebarSearch
