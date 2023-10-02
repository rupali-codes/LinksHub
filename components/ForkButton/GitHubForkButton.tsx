import { FC } from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaCodeBranch } from 'react-icons/fa'

export const GitHubForkButton: FC<{ repo: string }> = ({ repo }) => {
  const [forkCount, setForkCount] = useState(0)

  useEffect(() => {
    const fetchForkCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`)
        const data = await response.json()
        setForkCount(data.forks)
      } catch (error) {
        console.error('Error fetching fork count:', error)
      }
    }

    fetchForkCount()
  }, [repo])

  return (
    <Link
      href={`https://github.com/${repo}/fork`}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Fork ${repo} on GitHub`}
    >
      <div className="inline-flex items-center py-1 text-sm font-semibold bg-transparent text-theme-secondary rounded-sm hover:text-text-secondary transition duration-300 ease-in-out dark:hover:text-text-primary dark:text-theme-primary">
        <FaCodeBranch className="mr-1" />
        <span className="font-semibold">Fork</span>
        <span className="ml-2">{forkCount}</span>
      </div>
    </Link>
  )
}
