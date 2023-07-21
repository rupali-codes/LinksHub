import { FC } from 'react'
import Link from 'next/link'

const NewIssue: FC = () => {
  return (
    <p className="pt-6 md:p-0 coming-soon">
      <span className="text-2xl">
        Be the first to add by creating a GitHub issue
      </span>{' '}
      <span className="motion-safe:animate-pulse text-2xl text-purple-500">
        <Link
          href="https://github.com/rupali-codes/LinksHub/issues/new?assignees=&labels=add+link&template=add_link.yml&title=%5BAdd%5D+%3Cname%3E"
          target="_blank"
        >
          <u>here</u>
        </Link>
      </span>
    </p>
  )
}

export default NewIssue
