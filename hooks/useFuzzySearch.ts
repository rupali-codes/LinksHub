import { useMemo } from 'react'
import Fuse from 'fuse.js'
import { SearchOption } from '../types'

interface FuseOptions {
  threshold?: number
  distance?: number
  maxPatternLength?: number
  isCaseSensitive?: boolean
  includeScore?: boolean
  shouldSort?: boolean
  includeMatches?: boolean
  findAllMatches?: boolean
  minMatchCharLength?: number
  location?: number
  keys?: string[]
}

interface UseFuzzySearchProps {
  data: SearchOption[]
  options?: FuseOptions
}

export const useFuzzySearch = ({ data, options }: UseFuzzySearchProps) => {
  // Create Fuse instance with memoization for performance
  const fuse = useMemo(() => {
    // Default configuration for LinksHub search
    const defaultConfig = {
      threshold: 0.5, // Even more strict matching
      location: 0,
      minMatchCharLength: 5, // Require at least 5 characters
      shouldSort: true,
      includeMatches: true,
      // includeScore: false,
      findAllMatches: false,
      keys: ["name"],
      ...options
    }

    return new Fuse(data, defaultConfig)
  }, [data, options])

  // Search function
  const search = (query: string): SearchOption[] => {
    if (!query || query.trim().length === 0) {
      return []
    }

    const results = fuse.search(query.trim())

    // Extract items from Fuse results and limit to reasonable number
    return results.slice(0, 10).map(result => result.item)
  }

  // Advanced search with score information
  const searchWithScore = (query: string) => {
    if (!query || query.trim().length === 0) {
      return []
    }

    return fuse.search(query.trim()).slice(0, 10)
  }

  return {
    search,
    searchWithScore,
    fuse
  }
}
