import { useRef, useEffect, Ref } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const ShortcutKey = dynamic(() => import('./ShortcutKey'), { ssr: false })

import { SearchbarSuggestions } from './SearchbarSuggestions'
import { ErrorMessage } from 'components/ErrorMessage'

import SearchIcon from 'assets/icons/svg/search.svg'

import { SubCategories, subcategoryArray } from '../../types'
import { SearchbarAction } from './SearchbarReducer'
import { sidebarData } from 'database/data'

interface SearchbarProps {
  dispatchSearch: (action: SearchbarAction) => void
  searchQuery: string
  showSuggestions: boolean
  searchQueryIsValid: boolean
  inputRef: Ref<HTMLInputElement>
}

const searchOptions = subcategoryArray
const SEARCH_ERROR_MSG = 'Please enter a valid search query'

export const Searchbar: React.FC<SearchbarProps> = ({
  dispatchSearch,
  searchQuery,
  showSuggestions,
  searchQueryIsValid,
  inputRef,
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const suggestions = getFilteredSuggestions(searchQuery)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchSearch({
      type: 'search_query_change',
      searchQuery: e.target.value,
    })

    if (
      !e.target.value &&
      router.asPath != '/' &&
      router.asPath.substring(1, 7) == 'search'
    ) {
      searchQuery = ''

      router.push('/')
    }
  }

  const handleSuggestionClick = (searchQuery: SubCategories) => {
    dispatchSearch({ type: 'suggestion_click', searchQuery: searchQuery.name })
    const { category } = sidebarData.find((item) =>
      item.subcategory.some((subCat) => subCat.name === searchQuery.name)
    ) || { category: '' }

    router.push(`/${category}${searchQuery.url}`)
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
      if (
        e.target &&
        (e.target as HTMLElement).closest(
          "[data-custom='restrict-click-outside']"
        ) !== null
      ) {
        return
      }
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
    <form
      data-custom="restrict-click-outside"
      noValidate
      ref={formRef}
      onSubmit={handleSubmit}
      role="search"
    >
      <div className="relative">
        <div className="relative w-full h-12 flex items-center justify-between">
          <label htmlFor="simple-search" className="sr-only">
            Quick search
          </label>

          <input
            ref={inputRef}
            type="text"
            id="simple-search"
            name="simple-search"
            className="peer h-12 w-full flex items-center justify-start pl-[46px] pr-4 py-3 bg-slate-100 bg-opacity-50 dark:bg-zinc-400 dark:bg-opacity-20 rounded-[10px] outline-none hover:shadow-input-hover focus:shadow-input-focus dark:hover:shadow-input-hover-dark dark:focus:shadow-input-focus-dark"
            placeholder="Quick search..."
            value={searchQuery}
            onChange={handleSearchChange}
            autoComplete="off"
            required
          />

          <SearchIcon className="absolute top-[14px] left-4 fill-gray-400 peer-focus:fill-primary dark:peer-focus:fill-slate-100" />

          <ShortcutKey />
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
  const suggestions = searchOptions.filter((option) =>
    option.name.toLowerCase().includes(normalisedQuery)
  )

  return suggestions
}
