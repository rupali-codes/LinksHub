import { FC } from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'

export const GitHubStarButton: FC<{ repo: string }> = ({ repo }) => {
  const [starCount, setStarCount] = useState(0)

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`)
        const data = await response.json()
        setStarCount(data.stargazers_count)
      } catch (error) {
        console.error('Error fetching star count:', error)
      }
    }

    fetchStarCount()
  }, [repo])

  return (
    <Link
      href={`https://github.com/${repo}/stargazers`}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Star ${repo} on GitHub`}
    >
      <div className="inline-flex items-center py-1 text-sm font-semibold bg-transparent text-theme-secondary rounded-sm hover:text-text-secondary transition duration-300 ease-in-out dark:hover:text-text-primary dark:text-theme-primary">
        <FaRegStar className="mr-1" />
        <span>Star</span>
        <span className="ml-2">{starCount}</span>
      </div>
    </Link>
  )
}
