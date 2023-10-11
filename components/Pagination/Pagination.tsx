import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import clsx from 'clsx';

type PaginationProps = {
  totalPages: number[] | null;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  return (
    <>
      {totalPages && totalPages.length > 1 && (
        <div className="fixed top-1/2 right-0  z-20 transform -translate-y-1/2 flex flex-col items-center">
          <div className="border-[#8b5cf6] border-4 shadow-lg bg-white rounded-2xl px-2 py-2 gap-4">
            <div className="flex items-center justify-center">
              <button
                className="text-black hover:text-[#8b5cf6] disabled:text-gray-400"
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaChevronUp />
              </button>
            </div>
            {totalPages &&
              totalPages.map((page, index) => (
                <button
                  key={index}
                  className={clsx(
                    'flex items-center justify-center rounded-full hover:bg-[#8b5cf6] hover:text-white px-2',
                    currentPage === page
                      ? 'bg-[#8b5cf6] text-white'
                      : 'text-black'
                  )}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            <div className="flex items-center justify-center">
              <button
                className="text-black hover:text-[#8b5cf6] disabled:text-gray-400"
                onClick={() =>
                  currentPage < totalPages.length &&
                  handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages.length}
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
