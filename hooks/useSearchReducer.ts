import { useReducer } from "react"
import { useRouter } from "next/router"

import { SearchbarState, searchbarReducer } from "components/Searchbar/SearchbarReducer"

export const useSearchReducer = () => {
  const router = useRouter()
  const initialQuery = (router.query.query as string) ?? ''

  const initialState: SearchbarState = {
    searchQuery: initialQuery,
    categoryQuery: initialQuery,
    searchQueryIsValid: true,
    showSuggestions: false,
  }

  return useReducer(
    searchbarReducer,
    initialState
  )
}