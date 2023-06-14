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

  // Other Styles for Light Mode: [bg-violet-500 text-white] OR [text-black-500 border border-black]

  return (
    <Link
      href={`https://github.com/${repo}/fork`}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Fork ${repo} on GitHub`}
    >
      <div className="inline-flex items-center px-4 py-1 text-sm font-semibold bg-transparent text-violet-500 border border-violet-500 border-transparent rounded-sm transition-colors shadow-md">
        <FaCodeBranch className="mr-1" />
        <span className="font-semibold">Fork</span>
        <span className="ml-2">{forkCount}</span>
      </div>
    </Link>
  )
}
