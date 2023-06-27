import { database } from 'database/data'
import { useRouter } from 'next/router'
import { IData, IUseFilterDBResponse } from 'types'

const useFilterDB = (): IUseFilterDBResponse => {
  const router = useRouter()
  const { subcategory } = router.query
  if (typeof subcategory !== 'string') {
    throw new Error(
      'UseFilterDB Error: Response of Router Query is not a string'
    )
  }
  // This filters trough the DB with the subcategory which results in an array of arrays
  const filterSubCat = database?.map((item) =>
    item?.filter((cat: IData) => cat.subcategory.includes(subcategory))
  )

  // This filters out an empty array from the filterSubCat
  const filterDB = filterSubCat?.filter((item) => item.length !== 0)

  return {
    filterSubCat,
    filterDB,
  }
}

export default useFilterDB
