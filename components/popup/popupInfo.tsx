import React from 'react'
import { IData } from 'types'
import { Backdrop } from 'components/Backdrop/Backdrop'
import { createPortal } from 'react-dom'
import useDelayUnmount from 'hooks/useDelayUnmount'
import { IoClose } from 'react-icons/io5'

export const PopupInfo: React.FC<{
  currentCard: IData | null
  onClose: () => void
}> = ({ currentCard, onClose }) => {
  const showElement = useDelayUnmount(currentCard, 300)

  if (!showElement) {
    return null
  }

  const overlayRoot = document.getElementById('overlay-root')

  if (!overlayRoot) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 h-full w-full cursor-pointer bg-black/80">
      <Backdrop onClick={onClose} />
      {createPortal(
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed left-1/2 top-1/2 z-[150] max-w-[500px] -translate-x-1/2 -translate-y-1/2 transition-all ${
            currentCard ? 'animate-scale-appearance' : 'animate-scale-hide'
          } flex h-fit w-[90%] flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-light-primary border-2 border-theme-secondary/50 px-5 py-10 dark:bg-slate-800 dark:border dark:border-theme-primary/8`}
          role="dialog"
          title={`${currentCard?.name ?? 'Card'} Popup`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="w-4/5 flex justify-between items-center">
                <h2 className="text-2xl dark:text-light-primary capitalize truncate ...">
                  {currentCard?.name}
                </h2>
              </div>
              {/* Close Text */}
              <div className="flex justify-center items-center">
                <p
                  onClick={onClose}
                  className="cursor-pointer text-2xl text-theme-quinary -mt-3 hover:text-theme-primary hover:underline"
                >
                  <IoClose />
                </p>
              </div>
            </div>
            <p className="">{currentCard?.description}</p>
          </div>
        </div>,
        overlayRoot
      )}
    </div>
  )
}
