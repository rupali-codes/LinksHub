import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md'

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
            className={
              currentPage == totalPages.length && remainderOfCards <= 3
                ? 'p-20'
                : 'w-full z-20 flex lg:w-full items-center justify-center absolute bottom-2 right-0'
            }
          >
            <div className="flex items-center px-6 py-1 gap-2">
              <button
                className={clsx(
                  'flex items-center justify-center text-primary-light',
                  isDarkMode ? 'hover:text-white' : 'hover:text-black',
                  'disabled:text-gray-400'
                )}
                title="Previous Page"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <MdArrowBackIos />
              </button>
              {totalPages &&
                totalPages.map((page, index) => (
                  <button
                    key={index}
                    className={clsx(
                      'flex items-center justify-center rounded-md px-2',
                      currentPage === page
                        ? 'dark:text-white light:border bg-[rgba(0,0,0,0.1)] dark:bg-slate-800'
                        : isDarkMode
                        ? 'text-light hover:bg-slate-800 hover:text-white'
                        : ''
                    )}
                    onClick={() => changePage(page)}
                  >
                    {page}
                  </button>
                ))}
              <button
                className={clsx(
                  'flex items-center justify-center text-primary-light',
                  isDarkMode ? 'hover:text-white' : 'hover:text-black',
                  'disabled:text-gray-400'
                )}
                title="Next Page"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages.length}
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
