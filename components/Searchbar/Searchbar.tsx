import React, { useState, useRef } from 'react'
import SearchIcon from 'assets/icons/SearchIcon'
import { useRouter } from 'next/router'
import { subcategoryArray } from '../../types'

interface SearchbarProps {
  setSearch: (search: string) => void
}

export const Searchbar: React.FC<SearchbarProps> = ({ setSearch }) => {
  const router = useRouter()
  const query = router.query.query
  const [searchQuery, setSearchQuery] = useState((query as string) ?? '')
  const [errorMessage, setErrorMessage] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const dropdownRef = useRef<HTMLUListElement>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    const trimmedValue = value.trim().toLowerCase()
    if (trimmedValue === '') {
      setErrorMessage('')
      setSuggestions([])
      setSearch('')
    } else {
      const filteredSuggestions = subcategoryArray.filter((option) =>
        option.toLowerCase().includes(trimmedValue)
      )
      setSuggestions(filteredSuggestions)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setSearch(suggestion)
    setSuggestions([])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim() === '') {
      setErrorMessage('Please enter a search query')
    } else {
      setErrorMessage('')
      setSearch(searchQuery)
    }
  }

  const handleClickOutsideDropdown = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setSuggestions([])
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideDropdown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="relative">
        <div className="flex items-center" aria-role="search">
          <label htmlFor="simple-search" className="sr-only">Quickly search any resources</label>
          <input
            type="text"
            id="simple-search"
            name="simple-search"
            className="block p-2.5 w-full bg-transparent text-sm text-dark dark:text-text-primary border border-dashed border-gray-text focus:border-theme-secondary dark:focus:border-theme-primary dark:focus:ring-theme-primary focus:ring-theme-secondary dark:placeholder-gray-text outline-none transition-all ease-in-out duration-300 rounded-lg capitalize"
            placeholder="Quick search..."
            value={searchQuery}
            onChange={handleSearchChange}
            autoComplete="off"
            required
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2.5 bg-theme-secondary text-light-primary rounded-md border border-dashed border-transparent hover:border-theme-primary hover:bg-transparent hover:text-theme-primary dark:hover:text-theme-primary transition-colors duration-300 ease-in-out"
          >
            <SearchIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul
            ref={dropdownRef}
            className="absolute z-10 text-light-primary bg-theme-secondary w-full mt-1 rounded-lg shadow-2xl"
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-4 py-2 cursor-pointer hover:bg-[rgba(0,0,0,0.2)] capitalize"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.split('-').join(' ')}
              </li>
            ))}
          </ul>
        )}
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  )
}
