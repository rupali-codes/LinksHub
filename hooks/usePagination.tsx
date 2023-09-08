import { useMemo, useState } from 'react'

export const usePagination = (totalNumberOfCards: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number[] | null>([1])
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(totalNumberOfCards - 1)
  const pageSize: number = 9

  const handlePageChange = (page: number) => { 
    setCurrentPage(page)
    setStartIndex((page - 1) * pageSize)
    setEndIndex(page * pageSize)
  }

  useMemo(() => {
    const start = 1
    const stop = Math.ceil(totalNumberOfCards / pageSize)

    if (stop === 1) {
      setTotalPages([1])
      setStartIndex(0)
      setEndIndex(totalNumberOfCards - 1)
    } else {
      setTotalPages(
        Array.from(
          { length: (stop - start) / 1 + 1 },
          (_, index) => start + index * 1
        )
      )
      setEndIndex(currentPage * pageSize)
    }
  }, [totalNumberOfCards])

  return {
    totalPages,
    currentPage,
    setCurrentPage,
    startIndex,
    endIndex,
    handlePageChange
  }
}
