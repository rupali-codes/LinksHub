import useCopyToClipboard from 'hooks/useCopyToClipboard'
import React from 'react'
import { FaRegCopy, FaCheckSquare } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'

type CopyToClipboardProps = {
  url: string
}

export const CopyToClipboard = ({ url }: CopyToClipboardProps): JSX.Element => {
  const [copyToClipboard, { success }] = useCopyToClipboard()

  function handleCopy(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.stopPropagation()
    copyToClipboard(url)
  }

  return (
    <div className="dropdown dropdown-left dropdown-hover">
      <div style={{ position: 'relative' }}>
        <button
          data-tooltip-id="copy-tooltip"
          data-tooltip-content={success ? 'Copied!' : 'Copy'}
          data-tooltip-place="top"
        >
          {success ? ( // Render the FaCheckSquare icon if success is true
            <FaCheckSquare
              size={'1.3rem'}
              className="text-theme-primary cursor-pointer"
              onClick={(e) => handleCopy(e)}
              aria-label="Link copied" // Add aria-label for accessibility
            />
          ) : (
            <FaRegCopy // Otherwise, render the default FaRegCopy icon
              size={'1.3rem'}
              className="text-theme-primary cursor-pointer"
              onClick={(e) => handleCopy(e)}
              aria-label="Copy link to clipboard" // Add aria-label for accessibility
            />
          )}
        </button>
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
    </div>
  )
}