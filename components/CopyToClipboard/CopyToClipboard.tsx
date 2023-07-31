import useCopyToClipboard from 'hooks/useCopyToClipboard'
import React, { useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'

type CopyToClipboardProps = {
  url: string
}

export const CopyToClipboard = ({ url }: CopyToClipboardProps): JSX.Element => {
  const [copyToClipboard, { success }] = useCopyToClipboard()
  const [isHovering, setIsHovering] = useState(false)

  function handleCopy(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.stopPropagation()
    copyToClipboard(url)
  }

  return (
    <div
      className="dropdown dropdown-left dropdown-hover"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div style={{ position: 'relative' }}>
        <FaRegCopy
          size={'1.3rem'}
          className="text-theme-primary cursor-pointer"
          title="Copy link"
          onClick={(e) => handleCopy(e)}
        />
        {isHovering && (
          <p
            className="bg-theme-secondary text-white text-sm rounded-lg px-3 py-1 cursor-default"
            style={{
              position: 'absolute',
              top: '-2rem', // Adjust this value to position the text above the icon
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          >
            {success ? 'Copied!' : 'Copy'}
          </p>
        )}
      </div>
    </div>
  )
}

export default CopyToClipboard
