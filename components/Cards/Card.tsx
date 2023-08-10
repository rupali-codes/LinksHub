import { FC, useState, useRef, useEffect } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CopyToClipboard } from 'components/CopyToClipboard/CopyToClipboard'
import Share from 'components/Share/Share'
import type { IData } from 'types'

interface CardProps {
  data: IData
}

export const Card: FC<CardProps> = ({ data }) => {
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
    <article className="z-10 h-full w-full rounded-3xl border border-dashed border-primary-80 dark:border-primary-60 bg-[rgba(255,255,255,0.3)] shadow-md dark:bg-dark dark:text-secondary-40 dark:shadow-sm">
      <div className="card-body">
        <header className="flex justify-between items-center gap-2">
          <h2
            className="cursor-default md:truncate ... text-xl text-primary-80 dark:text-primary-60"
            title={name}
          >
            {name}
          </h2>
          <div className="flex items-center gap-1">
            <CopyToClipboard url={url} />
            <Share url={`${url}?ref=LinksHub`} title={name} />
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
            <p className="text-sm underline text-primary-80 dark:text-primary-60 text-right hover:text-primary-60 dark:hover:text-secondary-40">
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
              'mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-transparent bg-primary-80 px-6 py-2 text-center text-light-primary duration-100 hover:border-primary-60 hover:bg-transparent hover:text-primary-80 dark:hover:text-primary-60'
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

