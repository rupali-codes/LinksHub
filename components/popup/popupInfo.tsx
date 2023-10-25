import React from 'react'
import { IData } from 'types'
import { BsGlobe } from 'react-icons/bs'
import { Backdrop } from 'components/Backdrop/Backdrop'
import { createPortal } from 'react-dom'
import useDelayUnmount from 'hooks/useDelayUnmount'
import { CopyToClipboard } from 'components/CopyToClipboard/CopyToClipboard'
import {BsYoutube,BsPen } from 'react-icons/bs'
import{MdArticle} from 'react-icons/md'
import {AiOutlineRead} from 'react-icons/ai'

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

  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/

  return (
    <>
      <Backdrop onClick={onClose} />
      {createPortal(
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed left-1/2 top-1/2 z-[150] max-w-[500px] -translate-x-1/2 -translate-y-1/2 transition-all ${
            currentCard ? 'animate-scale-appearance' : 'animate-scale-hide'
          } flex h-fit w-[90%] flex-col justify-between gap-5 overflow-hidden rounded-2xl border border-dashed border-theme-secondary dark:border-theme-primary bg-light-primary px-5 py-10 dark:bg-dark`}
          role="dialog"
          title={`${currentCard?.name ?? 'Card'} Popup`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <h2 className="text-2xl text-theme-primary capitalize">
                  {currentCard?.name}
                </h2>
              </div>
              <div className="max-w-[25]%] text-xsm text-theme-secondary capitalize flex items-center gap-2">
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
          <div className="card-actions justify-end mt-auto">
            <a
              onClick={(e) => e.stopPropagation()}
              href={currentCard?.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-6 py-2 text-white text-center bg-theme-secondary rounded-2xl w-full hover:bg-transparent hover:text-theme-secondary border border-dashed border-transparent duration-100 hover:border-theme-primary flex items-center justify-center bottom-0 relative gap-2"
            >
              Visit Site 
              {youtubeRegex.test(currentCard?.url||'') ? <BsYoutube size="1.3em"/> : currentCard?.subcategory==='e-book'?<AiOutlineRead size="1.3em"/>:currentCard?.subcategory==='technical-writing-tools'?<BsPen size="1.2em"/>:<MdArticle size="1.3em"/>}
            </a>
          </div>

          {/* Close Text */}
          <div className="flex justify-center items-center">
            <p
              onClick={onClose}
              className="cursor-pointer text-sm text-text-primary -mt-3 hover:text-theme-primary hover:underline"
            >
              Close
            </p>
          </div>
        </div>,
        overlayRoot
      )}
    </>
  )
}
