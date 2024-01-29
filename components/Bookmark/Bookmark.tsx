import React, { useState, MouseEvent } from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { Tooltip } from 'react-tooltip'
import { SaveBtnTooltip } from 'components/Tooltip/SaveBtnTooltip'

interface BookmarkProps {
  initialBookmarkState?: boolean
}

const Bookmark: React.FC<BookmarkProps> = ({
  initialBookmarkState = false,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarkState)

  const handleBookmark = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsBookmarked((prev) => !prev)
  }

  return (
    <>
      <button
        className={`rounded-md p-[4px] cursor-not-allowed`}
        onClick={handleBookmark}
        disabled
        data-tooltip-id="save-btn"
      >
        {isBookmarked ? (
          <BsBookmarkFill color="#714EFF" size="1.2rem" />
        ) : (
          <BsBookmark size="1.2rem" />
        )}
      </button>
      <SaveBtnTooltip tooltipId='save-btn' />
    </>
  )
}

export default Bookmark
