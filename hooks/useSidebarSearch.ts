import useSearch from './useSearch';
import { sidebarData } from '../database/data';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface SidebarItem {
  name: string;
  url?: string;
  resources: { name: string }[];
  subcategory: { name: string; resources: { name: string }[] }[];
}

function useSidebarSearch() {
  const { setSearch, debouncedSearch } = useSearch();
  const [searchResults, setSearchResults] = useState<SidebarItem[]>(sidebarData);
  const router = useRouter();

  useEffect(() => {
    const filteredResults = sidebarData.filter((sidebarItem) =>
      sidebarItem.subcategory.some((subcategory) => matchSearch(subcategory))
    );

    const mappedResults = filteredResults.map((sidebarItem) => ({
      ...sidebarItem,
      subcategory: sidebarItem.subcategory.filter((subcategory) =>
        matchSearch(subcategory)
      ),
    }));

    setSearchResults(mappedResults);

    if (debouncedSearch.length > 0) {
      router.push({
        pathname: '/search',
        query: {
          query: debouncedSearch,
        },
      });
    }
  }, [debouncedSearch]);

  function matchSearch(item: { name: string; resources: { name: string }[] }) {
    const itemName = item.name.toLowerCase();
    const matchingResources = item.resources.filter(
      (resource) => resource.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    return (
      debouncedSearch.length < 1 ||
      itemName.includes(debouncedSearch.toLowerCase()) ||
      matchingResources.length > 0
    );
  }

  return { setSearch, searchResults, debouncedSearch };
}

export default useSidebarSearch;
