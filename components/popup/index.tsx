import React from 'react'
import { IData } from 'types'
import { BsGlobe } from 'react-icons/bs'
import { Backdrop } from 'components/Backdrop/Backdrop'
import { createPortal } from 'react-dom'
import useDelayUnmount from 'hooks/useDelayUnmount'
import { CopyToClipboard } from 'components/CopyToClipboard'

const Popup: React.FC<{
  currentCard: IData | null;
  onClose: () => void;
}> = ({ currentCard, onClose }) => {
  const showElement = useDelayUnmount(currentCard, 300)

  if (!showElement) {
    return null
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      {createPortal(
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed left-1/2 top-1/2 z-[150] max-w-[500px] -translate-x-1/2 -translate-y-1/2 transition-all ${
            currentCard ? 'animate-scale-appearance' : 'animate-scale-hide'
          } flex h-fit w-[90%] flex-col justify-between gap-5 overflow-hidden rounded-2xl border border-dashed border-violet-500 dark:border-violet-400 bg-gray-100 px-5 py-10 dark:bg-gray-900`}
          role="dialog"
          title={`${currentCard?.name ?? "Card"} Popup`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <h2 className="max-w-[80%] text-2xl text-violet-400 capitalize">
                  {currentCard?.name}
                </h2>
              </div>
              <div className="max-w-[25]%] text-xsm text-violet-500 capitalize flex items-center gap-2">
                <CopyToClipboard url={currentCard?.url ?? ''} />
                {currentCard?.language ? (
                  <>
                    <BsGlobe />
                    {currentCard?.language}
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
            <p className="">{currentCard?.description}</p>
          </div>
          <div className="card-actions justify-end">
            <a
              onClick={(e) => e.stopPropagation()}
              href={currentCard?.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-6 py-2 text-white text-center bg-violet-600 rounded-2xl w-full hover:bg-transparent hover:text-violet-500 border border-dashed border-transparent duration-100 hover:border-violet-400  bottom-0 flex items-center justify-center bottom-0 relative"
            >
              Visit site
            </a>
          </div>
        </div>,
        document.getElementById('overlay-root')!
      )}
    </>
  )
}

export default Popup
