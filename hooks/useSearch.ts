import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

function useSearch() {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState(search)
  const firstRender = useRef(true)

  const router = useRouter()
  const query = router.query.query

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [search])

  useEffect(() => {
    if (query && firstRender.current) {
      setSearch(query as string)
    }
  }, [])

  return { search, setSearch, debouncedSearch }
}

export default useSearch
