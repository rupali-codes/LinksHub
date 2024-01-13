import { FC, useState, useRef, useEffect } from 'react'
import { BsYoutube, BsPen } from 'react-icons/bs'
import { AiOutlineRead } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { CopyToClipboard } from 'components/CopyToClipboard/CopyToClipboard'
import type { IData } from 'types'
import Bookmark from 'components/Bookmark/Bookmark'

interface CardProps {
  data: IData
}

export const Card: FC<CardProps> = ({ data }) => {
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
    <article className="z-10 h-full w-full rounded-3xl  shadow-lg dark:bg-slate-800 dark:text-text-primary dark:shadow-sm">
      <div className="card-body">
        <header className="flex justify-between items-center gap-2">
          <h2
            className="cursor-default md:truncate ... text-xl text-theme-secondary dark:text-light-primary"
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
            <p className="text-sm underline text-theme-secondary dark:text-theme-primary text-right hover:text-theme-primary dark:hover:text-text-primary">
              Read More
            </p>
          )}
        </div>
        <footer className="grid grid-cols-2 gap-x-4">
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'mt-2 flex w-full items-center justify-center gap-2 rounded-lg  bg-theme-secondary px-3 py-2 text-center text-light-primary duration-100 '
            }
          >
            Visit site
            {youtubeRegex.test(url) ? (
              <BsYoutube size="1.3em" />
            ) : subcategory === 'e-book' ? (
              <AiOutlineRead size="1.3em" />
            ) : subcategory === 'technical-writing-tools' ? (
              <BsPen size="1.2em" />
            ) : (
              <HiOutlineExternalLink size="1.3em" />
            )}
          </a>
          <CopyToClipboard url={url} />
        </footer>
      </div>
    </article>
  )
}
