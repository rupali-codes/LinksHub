import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticProps } from 'next'

interface Contributor {
  id: number
  avatar_url: string
  name: string
  login: string
  contributions: number
}

export const getStaticProps: GetStaticProps<{
  contributors: Contributor[]
}> = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/rupali-codes/LinksHub/contributors'
    )
    if (response.ok) {
      const contributors: Contributor[] = await response.json()

      // Fetch contributor names
      const updatedContributors: Contributor[] = []
      for (const contributor of contributors) {
        try {
          const response = await fetch(
            `https://api.github.com/users/${contributor.login}`
          )
          if (response.ok) {
            const data = await response.json()
            const updatedContributor: Contributor = {
              ...contributor,
              name: data.name || contributor.login,
            }
            updatedContributors.push(updatedContributor)
          } else {
            console.error('Failed to fetch contributor name:', response.status)
          }
        } catch (error) {
          console.error(
            'Failed to fetch contributor name from GitHub API:',
            error
          )
        }
      }

      return { props: { contributors: updatedContributors } }
    } else {
      console.error('Failed to fetch contributors data:', response.status)
    }
  } catch (error) {
    console.error('Failed to fetch contributors data from GitHub API:', error)
  }

  return { props: { contributors: [] } }
}

const ContributorsPage: FC<{ contributors: Contributor[] }> = ({
  contributors,
}) => {
  const filteredContributors = contributors.filter(
    (contributor) => contributor.contributions >= 6
  )

  const sortedContributors = filteredContributors.sort(
    (a, b) => b.contributions - a.contributions
  )

  const buttonStyles =
    'bg-violet-600 hover:bg-transparent text-white px-4 py-2 md:px-3 text-sm tracking-[.6px] rounded-md border border-dashed border-transparent duration-100 hover:border-violet-400 hover:text-violet-500 dark:hover:text-violet-400'

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    className: buttonStyles,
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedContributors.map((contributor) => (
          <div
            key={contributor.id}
            className="bg-gray-100 rounded-3xl py-5 px-2 border border-dashed border-violet-500 dark:border-violet-400 shadow-lg dark:bg-gray-900 dark:text-gray-300 dark:shadow-sm flex flex-col"
          >
            <div className="flex justify-center">
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
                width={80}
                height={80}
                className=" rounded-full mb-4"
              />
            </div>
            <div className="text-center">
              <div className="text-xl text-violet-600 dark:text-violet-400">
                {contributor.name}
              </div>
              <div className="text-gray-400 mb-2 pb-4 pt-1">
                {contributor.contributions} Contributions
              </div>
            </div>
            <div className="flex justify-evenly mt-auto">
              <Link
                href={`https://github.com/${contributor.login}`}
                {...linkProps}
              >
                GitHub
              </Link>
              <Link
                href={`https://github.com/rupali-codes/LinksHub/commits?author=${contributor.login}`}
                {...linkProps}
              >
                Contributions
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContributorsPage
