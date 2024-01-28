import React, { useState, MouseEvent } from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

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

  const containerStyles = 'rounded-md p-[4px] cursor-pointer'
  const iconStyles = 'hover:bg-light-primary hover:bg-opacity-10'

  return (
    <button
      className={`${containerStyles} cursor-not-allowed`}
      onClick={handleBookmark}
      disabled
    >
      {isBookmarked ? (
        <BsBookmarkFill color="#714EFF" size="1.2rem" />
      ) : (
        <BsBookmark size="1.2rem" />
      )}
    </button>
  )
}

export default Bookmark
