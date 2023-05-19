import useCopyToClipboard from 'hooks/useCopyToClipboard'
import React from 'react'
import { FaRegCopy } from 'react-icons/fa'

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
      <FaRegCopy
        size={'1.3rem'}
        className="text-violet-500 cursor-pointer"
        title="Copy link"
        onClick={(e) => handleCopy(e)}
      />
      <p className="dropdown-content bg-violet-500 text-white text-sm rounded-lg p-1.5 cursor-default">
        {success ? 'Copied!' : 'Copy'}
      </p>
    </div>
  )
}

export default CopyToClipboard
