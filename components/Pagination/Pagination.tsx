import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import clsx from 'clsx'

type PaginationProps = {
  totalPages: number[] | null
  currentPage: number
  handlePageChange: (page: number) => void
}

export default function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  return (
    <>
      {totalPages && totalPages.length > 1 && (
        <div className="w-full relative z-20 flex lg:w-full items-center justify-center mt-8">
          <div className="fixed bottom-[1rem] md:bottom-[5rem] border-[#8b5cf6] border-4 shadow-lg flex items-center bg-white rounded-full px-6 py-2 gap-4">
            <button
              className="flex items-center justify-center text-black hover:text-[#8b5cf6] disabled:text-gray-400"
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            {totalPages &&
              totalPages.map((page, index) => (
                <button
                  key={index}
                  className={clsx(
                    'flex items-center justify-center  rounded-full hover:bg-[#8b5cf6] hover:text-white px-2',
                    currentPage === page
                      ? 'bg-[#8b5cf6] text-white'
                      : 'text-black'
                  )}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            <button
              className="flex items-center justify-center text-black  hover:text-[#8b5cf6] disabled:text-gray-400"
              onClick={() =>
                currentPage < totalPages.length &&
                handlePageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages.length}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
