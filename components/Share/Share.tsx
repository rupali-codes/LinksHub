import React from 'react'
import { FiShare2 } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'

type ShareProps = {
  url: string
  title: string
}

export const Share: React.FC<ShareProps> = ({ url, title }) => {
  const showShareOptions = false
  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
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
    >
      <button
        data-tooltip-id="share-tooltip"
        data-tooltip-content="Share"
        data-tooltip-place="bottom"
        aria-label="Share this link"
        role="button"
      >
        <FiShare2
          size={'1.2rem'}
          className="text-theme-primary cursor-pointer"
          onClick={handleShare}
          aria-hidden="true"
        />
      </button>
      <Tooltip
        id="share-tooltip"
        style={{
          backgroundColor: '#8b5cf6',
          fontSize: '13px',
          paddingLeft: '6px',
          paddingRight: '6px',
          paddingTop: '2px',
          paddingBottom: '2px',
        }}
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
