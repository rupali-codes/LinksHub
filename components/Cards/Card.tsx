import { FC } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CopyToClipboard } from 'components/CopyToClipboard'
import type { IData } from 'types'

const Card: FC<{ data: IData }> = (props) => {
  const { data } = props
  const { name, description, url } = data

  return (
    <article className="z-10 h-full w-full rounded-3xl border border-dashed border-violet-500 bg-gray-100 shadow-lg dark:bg-gray-900 dark:text-gray-300 dark:shadow-sm">
      <div className="card-body">
        <header className="flex justify-between items-center">
          <h2
            className="cursor-default truncate ... text-xl text-violet-500"
            title={name}
          >
            {name}
          </h2>
          <CopyToClipboard url={url} />
        </header>
        <p className="h-24 w-full overflow-hidden font-sans">{description}</p>
        <footer className="card-actions justify-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={
              'mt-2 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-transparent bg-violet-600 px-6 py-2 text-center text-white duration-100 hover:border-violet-400 hover:bg-transparent hover:text-violet-500'
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
