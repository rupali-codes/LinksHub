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

  return (
    <button
      className={`rounded-md p-[4px] cursor-not-allowed`}
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
