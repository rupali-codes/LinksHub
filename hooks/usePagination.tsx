import { useMemo, useState } from 'react'

export const usePagination = (cardsLength: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number[] | null>([1])
  const pageSize: number = 9

  useMemo(() => {
    const start = 1
    const stop = Math.ceil(cardsLength / pageSize)

    stop === 1
      ? setTotalPages([1])
      : setTotalPages(
          Array.from(
            { length: (stop - start) / 1 + 1 },
            (_, index) => start + index * 1
          )
        )
  }, [cardsLength])

  return {
    totalPages,
  }
}
