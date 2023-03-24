import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { CopyToClipboard } from 'components/CopyToClipboard'

export const LinkContainer = (props) => {
  const { name, description, url, getCardId } = props

  return (
    <li
      onClick={() => getCardId(props)}
      className="z-10 h-64 w-[98%] cursor-pointer rounded-3xl border border-dashed border-violet-500 bg-gray-100 shadow-lg transition-all duration-100 ease-in hover:scale-[1.02] dark:bg-gray-900 dark:text-gray-300 dark:shadow-sm md:w-72"
    >
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2
            className="text-violet-500 text-xl cursor-default truncate ..."
            title={name}
          >
            {name}
          </h2>
          <CopyToClipboard url={url} />
        </div>
        <p className="w-full font-sans text-clip-30 h-24 w-full overflow-hidden">
          {description}
        </p>
        <div className="card-actions justify-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-6 py-2 text-white text-center bg-violet-600 rounded-2xl w-full hover:bg-transparent hover:text-violet-500 border border-dashed border-transparent duration-100 hover:border-violet-400  bottom-0 flex items-center justify-center"
          >
            Visit site
            <span className="ml-2">
              <BsBoxArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </li>
  )
}
