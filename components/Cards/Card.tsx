import { FC, useState, useRef, useEffect } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CopyToClipboard } from 'components/CopyToClipboard'
import type { IData } from 'types'

interface CardProps {
  data: IData
}

const Card: FC<CardProps> = ({ data }) => {
  const { name, description, url } = data
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [isOverflow, setIsOverflow] = useState(false)

  useEffect(() => {
    if (descriptionRef.current) {
      setIsOverflow(
        descriptionRef.current.scrollHeight >
          descriptionRef.current.offsetHeight
      )
    }
  }, [])

  return (
    <article className="z-10 h-full w-full rounded-3xl border border-dashed border-violet-500 dark:border-violet-400 bg-gray-100 shadow-lg dark:bg-gray-900 dark:text-gray-300 dark:shadow-sm">
      <div className="card-body">
        <header className="flex justify-between items-center">
          <h2
            className="cursor-default md:truncate ... text-xl text-violet-600 dark:text-violet-400"
            title={name}
          >
            {name}
          </h2>
          <CopyToClipboard url={url} />
        </header>
        <div className="h-[7rem]">
          <div
            ref={descriptionRef}
            className="h-24 w-full overflow-hidden font-sans text-ellipsis line-clamp-4"
          >
            {description}
          </div>
          {isOverflow && (
            <p className="text-sm underline text-violet-600 dark:text-violet-400 text-right hover:text-violet-400 dark:hover:text-violet-300">
              Read More
            </p>
          )}
        </div>
        <footer className="card-actions justify-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              'mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-transparent bg-violet-600 px-6 py-2 text-center text-white duration-100 hover:border-violet-400 hover:bg-transparent hover:text-violet-500 dark:hover:text-violet-400'
            }
          >
            Visit site
            <BsBoxArrowUpRight />
          </a>
        </footer>
      </div>
    </article>
  )
}

export default Card
