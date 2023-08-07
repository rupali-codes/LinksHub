import useCopyToClipboard from 'hooks/useCopyToClipboard'
import React from 'react'
import { FaRegCopy } from 'react-icons/fa'
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
    <div
      className="dropdown dropdown-left dropdown-hover">
      <div style={{ position: 'relative' }}>
      <button data-tooltip-id="copy-tooltip" data-tooltip-content={success ? 'Copied!' : 'Copy'} data-tooltip-place="top">
      <FaRegCopy
          size={'1.3rem'}
          className="text-theme-primary cursor-pointer"
          onClick={(e) => handleCopy(e)}
        />
        </button>
      <Tooltip id='copy-tooltip' style={{ backgroundColor: '#8b5cf6', fontSize: '13px', paddingLeft: '6px', paddingRight: '6px', paddingTop: '2px', paddingBottom: '2px' }} />
      </div>
    </div>
  )
}
