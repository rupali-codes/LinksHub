import React, { useState } from 'react'
import SearchIcon from 'assets/icons/SearchIcon'
import { useRouter } from 'next/router'

interface SearchbarProps {
  setSearch: (search: string) => void
}

export const Searchbar: React.FC<SearchbarProps> = ({ setSearch }) => {
  const router = useRouter()
  const query = router.query.query
  const [searchQuery, setSearchQuery] = useState((query as string) ?? '')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    if (e.target.value.trim() === '') {
      setErrorMessage('')
      setSearch('')
    }
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

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex items-center">
        <div className="relative flex items-center">
          {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-5 h-5 text-[--primary-100] dark:text-[--primary-60]" />
          </div> */}
          <input
            type="text"
            id="simple-search"
            className="block p-2.5 w-full bg-transparent text-sm text-[--secondary-200] dark:text-[--secondary-20] border border-dashed border-[--secondary-60] dark:border-[--secondary-80] focus:border-[--primary-80] dark:focus:border-[--primary-80] dark:focus:ring-[--primary-80] focus:ring-[--primary-80] dark:placeholder-[--secondary-60] outline-none transition-all ease-in-out duration-300 rounded-lg"
            placeholder="Start searching..."
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
        </div>
        <button
          type="submit"
          className="ml-2 px-4 py-2.5 bg-[--primary-80] text-white rounded-md border border-dashed border-transparent hover:border-[--primary-60] hover:bg-transparent hover:text-[--primary-60] dark:hover:text-[--primary-60]"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  )
}
