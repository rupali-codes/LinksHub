import useCopyToClipboard from 'hooks/useCopyToClipboard'
import React from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'

type CopyToClipboardProps = {
  url: string
  id: string
}

export const CopyToClipboard = ({
  url,
  id,
}: CopyToClipboardProps): JSX.Element => {
  const [copyToClipboard, { success }] = useCopyToClipboard()

  function handleCopy(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.stopPropagation()
    copyToClipboard(url)
  }

  return (
    <div className="dropdown dropdown-left dropdown-hover">
      <FaRegCopy
        size={'1.3rem'}
        data-tooltip-id={id}
        className="text-violet-500 cursor-pointer"
        title="Copy link"
        onClick={(e) => handleCopy(e)}
      />
      <Tooltip id={id} place="top" style={{background:'#8b5cf6'}}>
        {success ? 'Copied!' : 'Copy'}
      </Tooltip>
    </div>
  )
}

export default CopyToClipboard
