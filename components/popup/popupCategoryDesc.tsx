import React from 'react'
import { Backdrop } from 'components/Backdrop/Backdrop'
import { createPortal } from 'react-dom'
import useDelayUnmount from 'hooks/useDelayUnmount'
import { ICategoryData } from 'types'
import { BsBoxArrowUpRight } from 'react-icons/bs'

const PopupDesc: React.FC<{
  currentCategory: ICategoryData | null
  onClose: () => void
}> = ({ currentCategory, onClose }) => {
  const showElement = useDelayUnmount(!!currentCategory, 300)

  if (!showElement || !currentCategory) {
    return null
  }

  const { name, description } = currentCategory

  const overlayRoot = document.getElementById('overlay-root')

  if (!overlayRoot) {
    return null
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      {createPortal(
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed left-1/2 top-1/2 z-[150] max-w-[500px] -translate-x-1/2 -translate-y-1/2 transition-all ${
            currentCategory ? 'animate-scale-appearance' : 'animate-scale-hide'
          } flex h-fit w-[90%] flex-col justify-between gap-5 overflow-hidden rounded-2xl border border-dashed border-theme-secondary dark:border-theme-primary bg-light-primary px-5 py-10 dark:bg-dark`}
          role="dialog"
          title={`${name ?? 'Card'} Popup`}
        >
          {description.length ? (
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div className="w-full flex justify-between items-center">
                  <h2 className="max-w-[80%] text-2xl text-theme-primary capitalize">
                    {name}
                  </h2>
                </div>
              </div>
              <p className="">{description}</p>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2 items-center justify-center items-center min-h-[100px]">
              <p className='text-2xl'>Oops!</p>
              <h2 className="text-xl text-center">
                No description was provided for{' '}
                <span className="capitalize text-theme-primary">{name}</span>.
              </h2>
              <p className='text-sm flex gap-1'>Be the first to add by creating a<a href="https://github.com/rupali-codes/LinksHub/issues/new?assignees=&labels=chore%2Cgoal%3A+description%2Cpriority%3A+low&projects=&template=category_description.yml&title=%5BDescription%5D+%3Cwrite+which+description+you+want+to+add+or+update%3E" target='_blank' className='underline flex items-center gap-2'>GitHub Issue <BsBoxArrowUpRight /></a>.</p>
            </div>
          )}
        </div>,
        overlayRoot
      )}
    </>
  )
}

export default PopupDesc
