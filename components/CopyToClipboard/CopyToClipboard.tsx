import React from 'react'
import { BiCopy } from 'react-icons/bi'
import useCopyToClipboard from 'hooks/useCopyToClipboard'
import { FaCheckSquare } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'

type CopyToClipboardProps = {
  url: string
}

export const CopyToClipboard = ({ url }: CopyToClipboardProps): JSX.Element => {
  const [copyToClipboard, { success }] = useCopyToClipboard()

  function handleCopy(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
    copyToClipboard(url)
  }
  return (
    <div
      className="flex items-center justify-center text-center text-theme-secondary dark:text-white gap-x-2 bg-[#EBE5FF] dark:bg-light-primary dark:bg-opacity-10 dark:hover:bg-opacity-20 rounded-lg mt-2 cursor-pointer relative"
      data-tooltip-id="copy-tooltip"
      data-tooltip-content={success ? 'Copied!' : 'Copy'}
      data-tooltip-place="top"
      onClick={(e) => handleCopy(e)}
    >
      Copy Link{' '}
      {success ? ( // Render the FaCheckSquare icon if success is true
        <FaCheckSquare
          size={'1.3rem'}
          aria-label="Link copied" // Add aria-label for accessibility
        />
      ) : (
        <BiCopy // Otherwise, render the default FaRegCopy icon
          size={'1.3rem'}
          aria-label="Copy link to clipboard" // Add aria-label for accessibility
        />
      )}
      <Tooltip
        id="copy-tooltip"
        style={{
          backgroundColor: '#8b5cf6',
          fontSize: '13px',
          paddingLeft: '6px',
          paddingRight: '6px',
          paddingTop: '2px',
          paddingBottom: '2px',
        }}
      />
    </div>
  )
}
