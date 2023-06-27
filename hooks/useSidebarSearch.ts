import useSearch from './useSearch'
import { sidebarData } from '../database/data'
import * as db from '../database/index';
import { useEffect, useState } from 'react'

function useSidebarSearch() {
  const { setSearch, debouncedSearch } = useSearch()
  const [searchResults , setSearchResults] = useState([])

  useEffect(() => {

    function getAllWebsites( db:object ):Array<object> {
      const categoryList = Object.keys(db);
      return categoryList.reduce(( acc:Array<object>, category) => {
        return [...acc, ...db[category]];
      }, [])
    }

    const results = getAllWebsites(db).filter( websiteObj => websiteObj.name.toLowerCase().includes(debouncedSearch.toLowerCase()));
    setSearchResults(results);
  }, [debouncedSearch]);

  return { setSearch, searchResults, debouncedSearch }
}

export default useSidebarSearch
