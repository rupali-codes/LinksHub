import React, { useState, useRef } from 'react'
import SearchIcon from 'assets/icons/SearchIcon'
import { useRouter } from 'next/router'

interface SearchbarProps {
  setSearch: (search: string) => void
}

const searchOptions = [
  //frontend
  'accessibility',
  'animations',
  'colors',
  'design-inspiration',
  'fonts',
  'icons',
  'illustrations',
  'images',
  'online-code-editors',
  'react',
  'themes-templates',
  'ui-generators',
  'videos',
  //backend
  'architecture',
  'authentication',
  'caching',
  'database',
  'security',
  'system-design',
  'testing',
  'validation',
  // languages
  'c-programming',
  'csharp',
  'golang',
  'java',
  'javascript',
  'kotlin',
  'python',
  'ruby',
  'typescript',
  //artificial intelligence
  'artificial-intelligence',
  // machin learning
  'data-science',
  'deep-learning',
  'machine-learning',
  // Open-source
  'open-source-blogs',
  'open-source-projects',
  'open-source-tools',
  // resources
  'blogs',
  'e-book',
  'hosting',
  'officialdocs',
  'project-ideas',
  // youtube
  'android',
  'competitive-programming',
  'css',
  'data-structures',
  'fintech',
  'game-development',
  'machine-learning',
  'tensorflow',
  'testing',
  'web-development',
  'web3-metaverse',
  // other
  'communities',
  'devtools',
  'github',
  'other-resources',
  'podcasts',
]

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
      const filteredSuggestions = searchOptions.filter((option) =>
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
        {suggestions.length > 0 && (
          <ul
            ref={dropdownRef}
            className="absolute z-10 bg-white dark:bg-gray-800 w-full py-2 mt-1 rounded-lg shadow-lg"
          >
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
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  )
}

// import React, { useState, useRef } from 'react'
// import SearchIcon from 'assets/icons/SearchIcon'
// import { useRouter } from 'next/router'
// import type { ISidebar, SubCategories } from '../../types'

// interface SearchbarProps {
//   items: ISidebar[] // Add the 'items' prop
//   setSearch: (search: string) => void
// }

// export const Searchbar: React.FC<SearchbarProps> = ({ items, setSearch }) => {
//   const router = useRouter()
//   const query = router.query.query
//   const [searchQuery, setSearchQuery] = useState<string>(
//     (query as string) ?? ''
//   )
//   const [errorMessage, setErrorMessage] = useState<string>('')
//   const [suggestions, setSuggestions] = useState<string[]>([])
//   const dropdownRef = useRef<HTMLUListElement>(null)

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value
//     setSearchQuery(value)

//     const trimmedValue = value.trim().toLowerCase()
//     if (trimmedValue === '') {
//       setErrorMessage('')
//       setSuggestions([])
//       setSearch('')
//     } else {
//       const filteredSuggestions: string[] = []
//       items.forEach((item: ISidebar) => {
//         if (item.subcategory) {
//           item.subcategory.forEach((subcategory: SubCategories) => {
//             if (subcategory.resources) {
//               subcategory.resources.forEach((resource) => {
//                 if (
//                   resource &&
//                   resource.name &&
//                   resource.name.toLowerCase().includes(trimmedValue)
//                 ) {
//                   filteredSuggestions.push(resource.name)
//                 }
//               })
//             }
//           })
//         }
//       })
//       setSuggestions(filteredSuggestions)
//     }
//   }

//   const handleSuggestionClick = (suggestion: string) => {
//     setSearchQuery(suggestion)
//     setSearch(suggestion)
//     setSuggestions([])
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setErrorMessage('')
//     setSearch(searchQuery)
//   }

//   const handleClickOutsideDropdown = (e: MouseEvent) => {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(e.target as Node)
//     ) {
//       setSuggestions([])
//     }
//   }

//   React.useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutsideDropdown)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutsideDropdown)
//     }
//   }, [])

//   return (
//     <form onSubmit={handleSubmit} noValidate>
//       <div className="relative">
//         <div className="flex items-center">
//           <input
//             type="text"
//             id="simple-search"
//             className="block p-2.5 w-full bg-transparent text-sm text-gray-900 dark:text-gray-200 border border-dashed border-gray-400 dark:border-gray-500 focus:border-violet-500 dark:focus:border-violet-500 dark:focus:ring-violet-500 focus:ring-violet-500 dark:placeholder-gray-400 outline-none transition-all ease-in-out duration-300 rounded-lg"
//             placeholder="Start searching..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             required
//           />
//           <button
//             type="submit"
//             className="ml-2 px-4 py-2.5 bg-violet-500 text-white rounded-md border border-dashed border-transparent hover:border-violet-400 hover:bg-transparent hover:text-violet-400 dark:hover:text-violet-400"
//           >
//             <SearchIcon className="w-5 h-5" />
//           </button>
//         </div>
//         {suggestions.length > 0 && (
//           <ul
//             ref={dropdownRef}
//             className="absolute z-10 bg-white dark:bg-gray-800 w-full py-2 mt-1 rounded-lg shadow-lg"
//           >
//             {suggestions.map((suggestion) => (
//               <li
//                 key={suggestion}
//                 className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
//                 onClick={() => handleSuggestionClick(suggestion)}
//               >
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//     </form>
//   )
// }
