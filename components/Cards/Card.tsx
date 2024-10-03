
import { FC, useState, useRef, useEffect } from 'react'
import { BsYoutube, BsPen } from 'react-icons/bs'
import { AiOutlineRead } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { CopyToClipboard } from 'components/CopyToClipboard/CopyToClipboard'
import type { IData } from 'types'
import Bookmark from 'components/Bookmark/Bookmark'

interface CardProps {
  data: IData,
  onClick: () => void
}

export const Card: FC<CardProps> = ({ data, onClick }) => {
  const { name, description, url, subcategory } = data
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/

  useEffect(() => {
    if (descriptionRef.current) {
      setIsOverflow(
        descriptionRef.current.scrollHeight >
          descriptionRef.current.offsetHeight
      )
    }
  }, [])

  return (
    <article className="z-10 h-full border border-theme-secondary/25 dark:border dark:border-theme-primary dark:border-opacity-8 w-full rounded-3xl dark:bg-slate-800 dark:text-text-primary dark:shadow-sm bg-theme-primary-light">
      <div className="card-body">
        <header className="flex justify-between items-center gap-2">
          <h2
            className="cursor-default md:truncate ... text-lg md:text-xl dark:text-light-primary"
            title={name}
          >
            {name}
          </h2>
          <div className="flex items-center gap-1">
            <Bookmark />
          </div>
        </header>
        <div className="h-[7rem]">
          <div
            ref={descriptionRef}
            className="h-24 w-full overflow-hidden font-sans text-ellipsis line-clamp-4"
          >
            {description}
          </div>
          {isOverflow && (
            <span onClick={onClick} className="text-sm float-right hover:underline dark:hover:text-theme-primary text-right hover:text-theme-primary dark:text-text-primary">
              ...Read More
            </span>
          )}
        </div>
        <footer className="grid grid-cols-2 gap-x-4 md:grid-cols-1 lg:grid-cols-2">
        <CopyToClipboard url={url} />
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'mt-2 flex w-full items-center justify-center gap-2 rounded-lg  bg-theme-secondary px-3 py-2 text-center text-light-primary duration-100'
            }
          >
            <span className='truncate ...'>Visit site</span>
            {youtubeRegex.test(url) ? (
              <BsYoutube size="1.3em" />
            ) : subcategory === 'e_book' ? (
              <AiOutlineRead size="1.3em" />
            ) : subcategory === 'technical_writing_tools' ? (
              <BsPen size="1.2em" />
            ) : (
              <HiOutlineExternalLink size="1.3em" />
            )}
          </a>
        </footer>
      </div>
    </article>
  )
}
