import React from 'react'
import { Backdrop } from 'components/Backdrop/Backdrop'
import { createPortal } from 'react-dom'
import useDelayUnmount from 'hooks/useDelayUnmount'
import { ICategoryData } from 'types'

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
          } flex h-fit w-[90%] flex-col justify-between gap-5 overflow-hidden rounded-2xl border border-dashed border-violet-500 dark:border-violet-400 bg-gray-100 px-5 py-10 dark:bg-gray-900`}
          role="dialog"
          title={`${name ?? 'Card'} Popup`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <h2 className="max-w-[80%] text-2xl text-violet-400 capitalize">
                  {name}
                </h2>
              </div>
            </div>
            <p className="">{description}</p>
          </div>
        </div>,
        overlayRoot
      )}
    </>
  )
}

export default PopupDesc
