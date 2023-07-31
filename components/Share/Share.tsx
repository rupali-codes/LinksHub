import React, { useState } from 'react'
import { FaShareAlt } from 'react-icons/fa'

type ShareProps = {
  url: string
  title: string
}

export const Share: React.FC<ShareProps> = ({ url, title }) => {
  const [showShareOptions, setShowShareOptions] = useState(false)

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
        console.log('Share was successful.')
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      console.log('Web Share API not supported on this browser.')
      // Fallback behavior when Web Share API is not supported (e.g., open a new tab with the URL)
      window.open(url, '_blank')
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
      onMouseEnter={() => setShowShareOptions(true)}
      onMouseLeave={() => setShowShareOptions(false)}
    >
      <FaShareAlt
        size={'1.2rem'}
        className="text-theme-primary cursor-pointer"
        title="Share link"
        onClick={handleShare}
      />
      {showShareOptions && (
        <p
          className="bg-theme-secondary text-white text-sm rounded-lg px-3 py-1"
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            cursor: 'default',
          }}
        >
          Share
        </p>
      )}
    </div>
  )
}

export default Share
