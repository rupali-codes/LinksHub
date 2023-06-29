import useSearch from './useSearch'
import { sidebarData } from '../database/data'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function useSidebarSearch() {
  const { setSearch, debouncedSearch } = useSearch()
  const [searchResults, setSearchResults] = useState(sidebarData)

  const router = useRouter()

  useEffect(() => {
    const results = sidebarData
      .filter(
        (sidebarData) =>
          sidebarData.subcategory.filter((sc) =>
            debouncedSearch.length < 1
              ? true
              : sc.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                sc.resources.filter((r) =>
                  r.name.toLowerCase().includes(debouncedSearch.toLowerCase())
                ).length > 0
          ).length > 0
      )
      .map((sidebarData) => {
        return {
          ...sidebarData,
          subcategory: sidebarData.subcategory.filter((sc) => {
            if (debouncedSearch.length < 1) return true
            else if (
              sc.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
              sc.resources.filter((r) =>
                r.name.toLowerCase().includes(debouncedSearch.toLowerCase())
              ).length > 0
            )
              return true
            else return false
          }),
        }
      })

    setSearchResults(results)
    if (debouncedSearch.length > 0)
      router.push({
        pathname: '/search',
        query: {
          query: debouncedSearch,
        },
      })
  }, [debouncedSearch])

  return { setSearch, searchResults, debouncedSearch }
}

export default useSidebarSearch
