import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

interface Contributor {
  id: number
  avatar_url: string
  name: string // https://github.com/rupali-codes/LinksHub/commits?author=Anmol-Baranwal
  login: string
  contributions: number
}

const ContributorsPage: FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([])

  useEffect(() => {
    const fetchContributorsData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/rupali-codes/LinksHub/contributors'
        )
        if (response.ok) {
          const data = await response.json()
          setContributors(data)
        } else {
          console.error('Failed to fetch contributors data:', response.status)
        }
      } catch (error) {
        console.error(
          'Failed to fetch contributors data from GitHub API:',
          error
        )
      }
    }
    // console.log(contributors)

    fetchContributorsData()
  }, [])

  //   useEffect(() => {
  //     if (contributors.length > 0) {
  //       console.log('First Contributor Login:', contributors[0].login)
  //     }
  //   }, [contributors])

  const filteredContributors = contributors.filter(
    (contributor) => contributor.contributions >= 5
  )

  const sortedContributors = filteredContributors.sort(
    (a, b) => b.contributions - a.contributions
  )

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedContributors.map((contributor) => (
          <div
            key={contributor.id}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <Image
              src={contributor.avatar_url}
              alt={contributor.login}
              width="80"
              height="80"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">
              {contributor.login}
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Contributions: {contributor.contributions}
            </p>
            <div className="flex justify-center">
              <a
                href={`https://github.com/${contributor.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContributorsPage
