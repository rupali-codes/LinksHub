import { useRouter } from "next/router"

export interface SearchbarState {
  searchQuery: string
  categoryQuery: string
  searchQueryIsValid: boolean
  showSuggestions: boolean
}
export interface SearchbarAction extends Partial<SearchbarState> {
  type: string
}

export const initialState: SearchbarState = {
  searchQuery: '',
  categoryQuery: '',
  searchQueryIsValid: true,
  showSuggestions: false,
}

export const searchbarReducer: (
  state: SearchbarState,
  action: SearchbarAction
) => SearchbarState = (state, action) => {
  switch (action.type) {
    case 'search_query_change': {
      const query = action.searchQuery as string
      const normalisedQuery = query.trim()
      let categoryQuery = state.categoryQuery
      if (normalisedQuery === '') {
        categoryQuery = ''
      }

      return {
        searchQuery: query,
        categoryQuery,
        searchQueryIsValid: true,
        showSuggestions: true,
      }
    }
    case 'suggestion_click': {
      return {
        showSuggestions: false,
        categoryQuery: action.searchQuery as string,
        searchQuery: action.searchQuery as string,
        searchQueryIsValid: true,
      }
    }
    case 'submit': {
      const searchQueryIsValid = state.searchQuery.trim() !== ''
      return {
        searchQuery: state.searchQuery,
        categoryQuery: searchQueryIsValid
          ? state.searchQuery
          : state.categoryQuery,
        showSuggestions: false,
        searchQueryIsValid,
      }
    }
    case 'close_suggestions': {
      return {
        ...state,
        searchQuery : "",
        categoryQuery : "",
        showSuggestions: false,
      }
    }
    default: {
      return state
    }
  }
}
