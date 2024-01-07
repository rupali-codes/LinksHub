import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

type PaginationProps = {
  totalPages: number[] | null
  currentPage: number
  handlePageChange: (page: number) => void
  styles?: string
}

export default function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
  styles,
}: PaginationProps) {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const changePage = (page: number) => {
    handlePageChange(page)
  }

  useEffect(() => {
    scrollToTop()
  }, [currentPage])

  return (
    <>
      {totalPages && totalPages.length > 1 && (
        <div className={styles}>
          <div className="flex items-center px-6 py-1 gap-4">
            <button
              className={clsx(
                'flex items-center justify-center text-[#8b5cf6]',
                isDarkMode ? 'hover:text-white' : 'hover:text-black',
                'disabled:text-gray-400'
              )}
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {totalPages &&
              totalPages.map((page, index) => (
                <button
                  key={index}
                  className={clsx(
                    'flex items-center justify-center rounded-md hover:bg-[#8b5cf6] hover:text-white px-2',
                    currentPage === page
                      ? 'bg-[#8b5cf6] text-white'
                      : isDarkMode
                      ? 'text-light'
                      : 'text-theme-secondary'
                  )}
                  onClick={() => changePage(page)}
                >
                  {page}
                </button>
              ))}
            <button
              className={clsx(
                'flex items-center justify-center text-[#8b5cf6]',
                isDarkMode ? 'hover:text-white' : 'hover:text-black',
                'disabled:text-gray-400'
              )}
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}
