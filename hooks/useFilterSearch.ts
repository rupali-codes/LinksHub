import { database } from 'database/data'

export default function useFilterSearch() {
  const filterSearch = (query: string) =>
    database
      .map((c) =>
        c.filter((r) => r.name.toLowerCase().includes(query?.toLowerCase()))
      )
      .flat()

  return { filterSearch }
}
