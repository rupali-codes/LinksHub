import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

type PaginationProps = {
  toporbottom: boolean
  totalPages: number[] | null
  currentPage: number
  handlePageChange: (page: number) => void
  numberOfCards: number
}

export default function Pagination({
  toporbottom,
  totalPages,
  currentPage,
  handlePageChange,
  numberOfCards,
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

  const remainderOfCards = numberOfCards % 9
  
  return (
    <>
      {totalPages && totalPages.length > 1 && (
        <div>
          <div
          className={(            
            currentPage == totalPages.length && remainderOfCards <= 3
              ? 'p-20'
              : 'w-full z-20 flex lg:w-full items-center justify-center absolute bottom-2 right-0'
          )}
          />
          <div
            className={clsx(            
              toporbottom == true
                ? 'w-full z-20 flex lg:w-full items-center justify-center absolute bottom-2 right-0'
                : 'z-20 flex w-full lg:w-full items-center justify-end absolute top-0 right-0'
            )}
          >
            <div
              className={clsx(
                'flex items-center',
                toporbottom == true ? 'px-6 py-1 gap-4' : 'gap-2'
              )}
            >
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
        </div>
      )}
    </>
  )
}
