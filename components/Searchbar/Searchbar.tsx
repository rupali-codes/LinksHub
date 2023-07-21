import { useState, useRef, useEffect } from 'react'
import SearchIcon from 'assets/icons/SearchIcon'
import { useRouter } from 'next/router'
// import type { ISidebar, SubCategories, subcategoryArray } from '../../types'
import { subcategoryArray } from '../../types'

interface SearchbarProps {
  setSearch: (search: string) => void
}

// const subcategory =subcategoryArray;

// const subcategoryList: SubCategory[] = Object.keys(SubCategory).filter(
//   (key) => isNaN(Number(key))
// ) as SubCategory[];

const searchOptions = subcategoryArray
const SEARCH_ERROR_MSG = 'Please enter a valid search query'

export const Searchbar: React.FC<SearchbarProps> = ({ setSearch }) => {
  const router = useRouter()
  const query = router.query.query

  const [searchQuery, setSearchQuery] = useState((query as string) ?? '')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [queryIsValid, setQueryIsValid] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)

  const suggestions = getFilteredSuggestions(searchQuery)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    const normalisedQuery = query.trim().toLowerCase()

    setQueryIsValid(true)
    setSearchQuery(query)
    setShowSuggestions(true)

    // empty searchQuery renders all the categories in the SideNavBar
    if (normalisedQuery === '') {
      setSearch('')
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setSearch(suggestion)
    setShowSuggestions(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setShowSuggestions(false)
    if (searchQuery.trim() === '') {
      setQueryIsValid(false)
    } else {
      setSearch(searchQuery)
    }
  }

  useEffect(() => {
    const handleClickOutsideDropdown = (e: MouseEvent) => {
      if ((formRef.current as HTMLFormElement).contains(e.target as Node))
        return
      setShowSuggestions(false)
    }

    document.addEventListener('mousedown', handleClickOutsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [])

  return (
    <form noValidate ref={formRef} onSubmit={handleSubmit}>
      <div className="relative">
        <div className="flex items-center">
          <input
            type="text"
            id="simple-search"
            className="block p-2.5 w-full bg-transparent text-sm text-gray-900 dark:text-gray-200 border border-dashed border-gray-400 dark:border-gray-500 focus:border-violet-500 dark:focus:border-violet-500 dark:focus:ring-violet-500 focus:ring-violet-500 dark:placeholder-gray-400 outline-none transition-all ease-in-out duration-300 rounded-lg"
            placeholder="Start searching..."
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2.5 bg-violet-500 text-white rounded-md border border-dashed border-transparent hover:border-violet-400 hover:bg-transparent hover:text-violet-400 dark:hover:text-violet-400"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && (
          <ul className="absolute z-10 bg-white dark:bg-gray-800 w-full py-2 mt-1 rounded-lg shadow-lg">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      {!queryIsValid && <p className="text-red-500 mt-2">{SEARCH_ERROR_MSG}</p>}
    </form>
  )
}

const getFilteredSuggestions = (query: string) => {
  const normalisedQuery = query.trim().toLowerCase()

  if (normalisedQuery.length === 0) {
    return []
  }

  const suggestions = new Set<string>([])
  searchOptions.forEach((option) => {
    const normalisedOption = option.toLowerCase()
    if (normalisedOption.includes(normalisedQuery)) {
      suggestions.add(normalisedOption)
    }
  })

  return Array.from(suggestions)
}
