import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

type PaginationProps = {
  totalPages: number[] | null;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

export default function SidePagination({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changePage = (page: number) => {
    handlePageChange(page);
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <>
      {totalPages && totalPages.length > 1 && (
        <div
          className={clsx(
            ' z-20 flex w-full lg:w-full items-end justify-end ',
            'absolute top-2 right-0 '
          )}
        >
          <div className="flex flex-col items-center  gap-4">
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
                      : isDarkMode ? 'text-light' : 'text-theme-secondary'
                  )}
                  onClick={() => changePage(page)}
                >
                  {page}
                </button>
              ))}
            <button
              className={clsx(
                'flex flex-col items-center justify-center text-[#8b5cf6]',
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
  );
}
