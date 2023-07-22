import { useRef, useEffect } from 'react'

import SearchIcon from 'assets/icons/SearchIcon'
import { SearchbarSuggestions } from './SearchbarSuggestions'
import { ErrorMessage } from 'components/ErrorMessage'

import { subcategoryArray } from '../../types'
import { SearchbarAction } from './SearchbarReducer'
import { useRouter } from 'next/router'

interface SearchbarProps {
  dispatchSearch: (action: SearchbarAction) => void
  searchQuery: string
  showSuggestions: boolean
  searchQueryIsValid: boolean
}

const searchOptions = subcategoryArray
const SEARCH_ERROR_MSG = 'Please enter a valid search query'

export const Searchbar: React.FC<SearchbarProps> = ({
  dispatchSearch,
  searchQuery,
  showSuggestions,
  searchQueryIsValid,
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const suggestions = getFilteredSuggestions(searchQuery)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchSearch({
      type: 'search_query_change',
      searchQuery: e.target.value,
    })
  }

  const handleSuggestionClick = (searchQuery: string) => {
    dispatchSearch({ type: 'suggestion_click', searchQuery })
    router.push({
      pathname: '/search',
      query: {
        query: searchQuery,
      },
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatchSearch({ type: 'submit' })
    if (searchQuery.trim() !== '') {
      router.push({
        pathname: '/search',
        query: {
          query: searchQuery,
        },
      })
    }
  }

  useEffect(() => {
    const handleClickOutsideDropdown = (e: MouseEvent) => {
      if ((formRef.current as HTMLFormElement).contains(e.target as Node))
        return
      dispatchSearch({ type: 'close_suggestions' })
    }

    document.addEventListener('mousedown', handleClickOutsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [dispatchSearch])

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
          <SearchbarSuggestions
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
      {!searchQueryIsValid && <ErrorMessage>{SEARCH_ERROR_MSG}</ErrorMessage>}
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
