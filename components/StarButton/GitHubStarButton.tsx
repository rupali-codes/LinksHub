import { FC } from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'

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

  // Other Styles for Light Mode: [bg-yellow-400 text-black] OR [text-white border border-white]

  return (
    <Link
      href={`https://github.com/${repo}/stargazers`}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Star ${repo} on GitHub`}
    >
      <div className="inline-flex items-center px-4 py-1 text-sm font-semibold bg-transparent text-yellow-400 border border-yellow-400 border-transparent rounded-sm transition-colors shadow-md">
        <FaStar className="mr-1" />
        <span className="font-semibold">Star</span>
        <span className="ml-2">{starCount}</span>
      </div>
    </Link>
  )
}
