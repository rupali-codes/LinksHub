import { useEffect, useMemo, useState } from 'react'

export const usePagination = (totalNumberOfCards?: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number[] | null>(null)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(
    totalNumberOfCards && totalNumberOfCards - 1
  )
  const pageSize: number = 9

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setStartIndex((page - 1) * pageSize)
    setEndIndex(page * pageSize)
  }

  useEffect(() => {
    handlePageChange(1)
  }, [totalNumberOfCards])

  useMemo(() => {
    const start = 1
    const stop = totalNumberOfCards && Math.ceil(totalNumberOfCards / pageSize)

    if (totalNumberOfCards === 0) {
      setTotalPages(null)
      setStartIndex(0)
      setEndIndex(0)
    }

    if (stop === 1 && totalNumberOfCards) {
      setTotalPages([1])
      setStartIndex(0)
      setEndIndex(totalNumberOfCards - 1)
    } else {
      stop &&
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
    startIndex,
    endIndex,
    handlePageChange,
    setCurrentPage,
    setStartIndex,
  }
}
